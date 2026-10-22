"use server";

import { db } from "@/lib/db";
import { getClientIp, rateLimit } from "@/lib/limiter";
import { AppointmentStatus } from "@prisma/client";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const AppointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  treatment: z.string().min(1, "Please select a treatment"),
  preferredDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  preferredTime: z.string().min(1, "Please select a preferred time slot"),
  notes: z.string().optional(),
});

export async function createAppointment(formData: any) {
  const ip = await getClientIp();
  // Rate limit: 3 requests per 10 minutes per IP
  const limiter = rateLimit(ip, { limit: 3, windowMs: 10 * 60 * 1000 });
  if (!limiter.success) {
    return { success: false, error: "Too many requests. Please try again in a few minutes." };
  }

  const validatedFields = AppointmentSchema.safeParse(formData);
  if (!validatedFields.success) {
    return { success: false, error: validatedFields.error.issues[0].message };
  }

  const data = validatedFields.data;

  try {
    const appointment = await db.appointment.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        treatment: data.treatment,
        preferredDate: new Date(data.preferredDate),
        preferredTime: data.preferredTime,
        notes: data.notes || null,
        status: AppointmentStatus.PENDING,
      },
    });

    // Also insert into Leads pipeline automatically (CRO Integration)
    await db.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        treatment: data.treatment,
        source: "APPOINTMENT_FORM",
        notes: `Created via appointment form. Preferred slot: ${data.preferredTime}.`,
      },
    });

    revalidatePath("/dashboard");
    return { success: true, data: appointment };
  } catch (error: any) {
    return { success: false, error: "Database error. Please try again." };
  }
}

export async function updateAppointmentStatus(id: string, status: AppointmentStatus, userId: string) {
  try {
    const appointment = await db.appointment.update({
      where: { id },
      data: { status },
    });

    await db.auditLog.create({
      data: {
        userId,
        action: "APPOINTMENT_STATUS_UPDATED",
        details: `Appointment ID ${id} status updated to ${status}.`,
      },
    });

    revalidatePath("/dashboard");
    return { success: true, data: appointment };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function getAppointments(status?: AppointmentStatus) {
  try {
    const where = status ? { status } : {};
    return await db.appointment.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function deleteAppointment(id: string, userId: string) {
  try {
    await db.appointment.delete({ where: { id } });
    await db.auditLog.create({
      data: {
        userId,
        action: "APPOINTMENT_DELETED",
        details: `Deleted appointment ID ${id}.`,
      },
    });
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
