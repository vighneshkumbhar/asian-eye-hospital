import { db } from "./db";
import { AppointmentStatus, LeadStatus } from "@prisma/client";

export async function getAppointmentAnalytics() {
  const total = await db.appointment.count();
  const pending = await db.appointment.count({ where: { status: AppointmentStatus.PENDING } });
  const confirmed = await db.appointment.count({ where: { status: AppointmentStatus.CONFIRMED } });
  const completed = await db.appointment.count({ where: { status: AppointmentStatus.COMPLETED } });
  const cancelled = await db.appointment.count({ where: { status: AppointmentStatus.CANCELLED } });

  return {
    total,
    pending,
    confirmed,
    completed,
    cancelled,
  };
}

export async function getLeadAnalytics() {
  const total = await db.lead.count();
  const newLeads = await db.lead.count({ where: { status: LeadStatus.NEW } });
  const contacted = await db.lead.count({ where: { status: LeadStatus.CONTACTED } });
  const scheduled = await db.lead.count({ where: { status: LeadStatus.SCHEDULED } });
  const converted = await db.lead.count({ where: { status: LeadStatus.CONVERTED } });
  const lost = await db.lead.count({ where: { status: LeadStatus.LOST } });

  // Calculate Conversion Rate
  const conversionRate = total > 0 ? (converted / total) * 100 : 0;

  // Aggregate Lead Sources
  const sources = await db.lead.groupBy({
    by: ["source"],
    _count: {
      source: true,
    },
  });

  const sourceBreakdown = sources.map((item) => ({
    source: item.source,
    count: item._count.source,
  }));

  return {
    total,
    newLeads,
    contacted,
    scheduled,
    converted,
    lost,
    conversionRate: Math.round(conversionRate * 10) / 10,
    sourceBreakdown,
  };
}

export async function getTopTreatments() {
  // Aggregate treatments from appointments
  const appointmentTreatments = await db.appointment.groupBy({
    by: ["treatment"],
    _count: {
      treatment: true,
    },
    orderBy: {
      _count: {
        treatment: "desc",
      },
    },
    take: 5,
  });

  return appointmentTreatments.map((item) => ({
    treatment: item.treatment,
    count: item._count.treatment,
  }));
}

export async function getAppointmentTrends() {
  // Group appointments by date (last 7 days)
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const appointments = await db.appointment.findMany({
    where: {
      createdAt: {
        gte: sevenDaysAgo,
      },
    },
    select: {
      createdAt: true,
    },
  });

  const trends: { [key: string]: number } = {};

  // Initialize last 7 days with 0
  for (let i = 0; i < 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateString = d.toISOString().split("T")[0];
    trends[dateString] = 0;
  }

  // Populate counts
  appointments.forEach((appt) => {
    const dateString = appt.createdAt.toISOString().split("T")[0];
    if (trends[dateString] !== undefined) {
      trends[dateString] += 1;
    }
  });

  return Object.keys(trends)
    .map((date) => ({
      date,
      count: trends[date],
    }))
    .reverse(); // Chronological order
}

export async function getDashboardStats() {
  const [appointments, leads, topTreatments, trends] = await Promise.all([
    getAppointmentAnalytics(),
    getLeadAnalytics(),
    getTopTreatments(),
    getAppointmentTrends(),
  ]);

  return {
    appointments,
    leads,
    topTreatments,
    trends,
  };
}
