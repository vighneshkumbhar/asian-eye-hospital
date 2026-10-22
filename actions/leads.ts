"use server";

import { db } from "@/lib/db";
import { getClientIp, rateLimit } from "@/lib/limiter";
import { LeadStatus } from "@prisma/client";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const LeadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  source: z.string().default("DIRECT"),
  treatment: z.string().optional(),
  notes: z.string().optional(),
});

export async function createLead(formData: any) {
  const ip = await getClientIp();
  // Rate limit: 5 requests per 10 minutes per IP for contact/lead forms
  const limiter = rateLimit(ip, { limit: 5, windowMs: 10 * 60 * 1000 });
  if (!limiter.success) {
    return { success: false, error: "Too many requests. Please try again in a few minutes." };
  }

  const validatedFields = LeadSchema.safeParse(formData);
  if (!validatedFields.success) {
    return { success: false, error: validatedFields.error.issues[0].message };
  }

  const data = validatedFields.data;

  try {
    const lead = await db.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        source: data.source,
        treatment: data.treatment || null,
        notes: data.notes || null,
        status: LeadStatus.NEW,
      },
    });

    revalidatePath("/dashboard");
    return { success: true, data: lead };
  } catch (error: any) {
    return { success: false, error: "Database error. Please try again." };
  }
}

export async function updateLeadStatus(id: string, status: LeadStatus, userId: string) {
  try {
    const lead = await db.lead.update({
      where: { id },
      data: { status },
    });

    await db.auditLog.create({
      data: {
        userId,
        action: "LEAD_STATUS_UPDATED",
        details: `Lead ID ${id} status updated to ${status}.`,
      },
    });

    revalidatePath("/dashboard");
    return { success: true, data: lead };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getLeads(status?: LeadStatus) {
  try {
    const where = status ? { status } : {};
    return await db.lead.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}
