import { PrismaClient, Role, AppointmentStatus, LeadStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Cleaning database...");
  await prisma.auditLog.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.user.deleteMany();

  console.log("Seeding users...");
  const adminPassword = await bcrypt.hash("admin123", 10);
  const editorPassword = await bcrypt.hash("editor123", 10);

  const admin = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@asianeyehospital.com",
      password: adminPassword,
      role: Role.ADMIN,
    },
  });

  const editor = await prisma.user.create({
    data: {
      name: "Editor User",
      email: "editor@asianeyehospital.com",
      password: editorPassword,
      role: Role.EDITOR,
    },
  });

  console.log("Seeding leads...");
  const leadsData = [
    { name: "Amit Sharma", phone: "+919876543210", email: "amit.sharma@example.com", source: "GOOGLE_ADS", status: LeadStatus.NEW, treatment: "LASIK Eye Surgery", notes: "Interested in blade-free option." },
    { name: "Priya Patel", phone: "+919123456789", email: "priya.patel@example.com", source: "SEO", status: LeadStatus.CONTACTED, treatment: "Contoura Vision", notes: "Called and sent pricing details." },
    { name: "Rajesh Kumar", phone: "+919988776655", email: "rajesh.k@example.com", source: "WHATSAPP", status: LeadStatus.SCHEDULED, treatment: "Cataract Surgery", notes: "Consultation scheduled for next Thursday." },
    { name: "Sneha Reddy", phone: "+919848022338", email: "sneha.r@example.com", source: "DIRECT", status: LeadStatus.CONVERTED, treatment: "ReLEx SMILE", notes: "Successfully underwent procedure." },
    { name: "Vikram Singh", phone: "+919765432109", email: "vikram.s@example.com", source: "GOOGLE_ADS", status: LeadStatus.LOST, treatment: "LASIK Eye Surgery", notes: "Budget constraints." },
    { name: "Neha Gupta", phone: "+919012345678", email: "neha.g@example.com", source: "SEO", status: LeadStatus.NEW, treatment: "Glaucoma", notes: "Requested call back." },
    { name: "Rahul Deshmukh", phone: "+918888999900", email: "rahul.d@example.com", source: "WHATSAPP", status: LeadStatus.CONTACTED, treatment: "Retina Treatment", notes: "Left voicemail." },
    { name: "Ananya Joshi", phone: "+917777888899", email: "ananya.j@example.com", source: "DIRECT", status: LeadStatus.SCHEDULED, treatment: "Pediatric Eye Care", notes: "Consultation for child squint." },
    { name: "Manoj Joshi", phone: "+916666777788", email: "manoj.j@example.com", source: "SEO", status: LeadStatus.CONVERTED, treatment: "Cataract Surgery", notes: "Completed surgery with premium IOL." },
    { name: "Deepika Padukone", phone: "+915555666677", email: "deepika@example.com", source: "DIRECT", status: LeadStatus.NEW, treatment: "Contoura Vision", notes: "Celebrity consultation request." },
  ];

  for (const lead of leadsData) {
    await prisma.lead.create({ data: lead });
  }

  console.log("Seeding appointments...");
  const appointmentsData = [
    { name: "Amit Sharma", phone: "+919876543210", email: "amit.sharma@example.com", treatment: "LASIK Eye Surgery", preferredDate: new Date("2026-07-05T10:00:00Z"), preferredTime: "10:00 AM - 11:00 AM", status: AppointmentStatus.PENDING, notes: "Needs morning slot." },
    { name: "Priya Patel", phone: "+919123456789", email: "priya.patel@example.com", treatment: "Contoura Vision", preferredDate: new Date("2026-07-06T11:30:00Z"), preferredTime: "11:00 AM - 12:00 PM", status: AppointmentStatus.CONFIRMED },
    { name: "Rajesh Kumar", phone: "+919988776655", email: "rajesh.k@example.com", treatment: "Cataract Surgery", preferredDate: new Date("2026-07-08T14:30:00Z"), preferredTime: "02:00 PM - 03:00 PM", status: AppointmentStatus.CONFIRMED },
    { name: "Sneha Reddy", phone: "+919848022338", email: "sneha.r@example.com", treatment: "ReLEx SMILE", preferredDate: new Date("2026-06-25T09:00:00Z"), preferredTime: "09:00 AM - 10:00 AM", status: AppointmentStatus.COMPLETED },
    { name: "Vikram Singh", phone: "+919765432109", email: "vikram.s@example.com", treatment: "LASIK Eye Surgery", preferredDate: new Date("2026-06-26T15:00:00Z"), preferredTime: "03:00 PM - 04:00 PM", status: AppointmentStatus.CANCELLED, notes: "Patient cancelled." },
    { name: "Neha Gupta", phone: "+919012345678", email: "neha.g@example.com", treatment: "Glaucoma", preferredDate: new Date("2026-07-10T10:00:00Z"), preferredTime: "10:00 AM - 11:00 AM", status: AppointmentStatus.PENDING },
    { name: "Rahul Deshmukh", phone: "+918888999900", email: "rahul.d@example.com", treatment: "Retina Treatment", preferredDate: new Date("2026-07-11T16:00:00Z"), preferredTime: "04:00 PM - 05:00 PM", status: AppointmentStatus.PENDING },
    { name: "Ananya Joshi", phone: "+917777888899", email: "ananya.j@example.com", treatment: "Pediatric Eye Care", preferredDate: new Date("2026-07-12T12:00:00Z"), preferredTime: "12:00 PM - 01:00 PM", status: AppointmentStatus.CONFIRMED },
    { name: "Manoj Joshi", phone: "+916666777788", email: "manoj.j@example.com", treatment: "Cataract Surgery", preferredDate: new Date("2026-06-20T10:30:00Z"), preferredTime: "10:00 AM - 11:00 AM", status: AppointmentStatus.COMPLETED },
    { name: "Karan Johar", phone: "+914444555566", email: "karan@example.com", treatment: "General Eye Check-up", preferredDate: new Date("2026-07-15T15:00:00Z"), preferredTime: "03:00 PM - 04:00 PM", status: AppointmentStatus.PENDING },
  ];

  for (const appointment of appointmentsData) {
    await prisma.appointment.create({ data: appointment });
  }

  console.log("Seeding audit logs...");
  await prisma.auditLog.create({
    data: {
      userId: admin.id,
      action: "DATABASE_INITIALIZED",
      details: "Initial database seed executed successfully.",
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
