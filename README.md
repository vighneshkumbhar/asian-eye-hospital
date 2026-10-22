# Asian Eye Hospital - Production Platform Rebuild

This is the Next.js 15 production platform rebuild for Asian Eye Hospital.

## Tech Stack
- **Frontend:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Shadcn UI, Framer Motion
- **Backend:** Next.js Server Actions, Node.js, Prisma ORM, PostgreSQL (Neon in production)
- **CMS:** Sanity CMS (Embedded Studio at `/studio`)
- **Email:** Resend

---

## Getting Started

### 1. Prerequisites
- Node.js v18.18.0 or higher
- PostgreSQL database (either running locally or on a cloud service like Neon)
- Optional: Docker (for local database container)

### 2. Environment Variables
Copy `.env` file or verify the connection string:
```bash
# Verify your database URL in the .env file:
DATABASE_URL="postgresql://postgres:localpassword123@localhost:5432/asian_eye_db?schema=public"
```

### 3. Database Migration and Seeding

#### Option A: Using Docker (Recommended for Local Dev)
1. Start the local database container:
   ```bash
   docker compose up -d
   ```
2. Run the database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
3. Seed the database with demo users, appointments, and leads:
   ```bash
   npx prisma db seed
   ```

#### Option B: Using an Existing PostgreSQL Service
1. Update the `DATABASE_URL` in your `.env` file to point to your local/cloud PostgreSQL service.
2. Run the migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
3. Seed the database:
   ```bash
   npx prisma db seed
   ```

---

## Project Structure and Architecture

- **`prisma/schema.prisma`**: Defines database models for `User`, `Appointment`, `Lead` (CRM), and `AuditLog`.
- **`actions/`**: Next.js Server Actions for handling forms and dashboard updates securely (fully validated using Zod and protected by rate limiting).
- **`lib/limiter.ts`**: In-memory rate limiting helper for protecting forms.
- **`lib/sanity.client.ts` & `lib/sanity.queries.ts`**: Query helpers for fetching CMS data from Sanity.
- **`lib/email.ts`**: Resend email client with built-in premium HTML templates.
- **`lib/analytics.ts`**: Aggregates appointment trends, lead conversion rates, and treatment popularity.
