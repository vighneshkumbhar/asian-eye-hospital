"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createAppointment } from "@/actions/appointments";
import { Check, Loader2 } from "lucide-react";

const AppointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  treatment: z.string().min(1, "Please select a treatment"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time slot"),
  notes: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof AppointmentSchema>;

export default function AppointmentForm() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(AppointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      treatment: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsPending(true);
    setError(null);
    try {
      const result = await createAppointment(data);
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch (e) {
      setError("An unexpected error occurred.");
    } finally {
      setIsPending(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center">
          <Check className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-emerald-950 font-head">Booking Request Sent</h3>
        <p className="text-sm text-emerald-800 leading-relaxed max-w-sm">
          Thank you! We have received your request. A patient coordinator will call you within 30 minutes to confirm your appointment slot.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl font-semibold">
          ⚠️ {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-xs font-bold text-white/50 uppercase tracking-wide mb-1.5">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          {...register("name")}
          className="w-full px-4 py-3 bg-white/7 border border-white/12 rounded-xl text-white placeholder-white/30 text-sm outline-none focus:border-[#0FA3B1] focus:bg-[#0FA3B1]/9 focus:ring-2 focus:ring-[#0FA3B1]/12 transition-all"
        />
        {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-xs font-bold text-white/50 uppercase tracking-wide mb-1.5">Mobile Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="+91 98765 43210"
          {...register("phone")}
          className="w-full px-4 py-3 bg-white/7 border border-white/12 rounded-xl text-white placeholder-white/30 text-sm outline-none focus:border-[#0FA3B1] focus:bg-[#0FA3B1]/9 focus:ring-2 focus:ring-[#0FA3B1]/12 transition-all"
        />
        {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-bold text-white/50 uppercase tracking-wide mb-1.5">Email (optional)</label>
        <input
          id="email"
          type="email"
          placeholder="you@email.com"
          {...register("email")}
          className="w-full px-4 py-3 bg-white/7 border border-white/12 rounded-xl text-white placeholder-white/30 text-sm outline-none focus:border-[#0FA3B1] focus:bg-[#0FA3B1]/9 focus:ring-2 focus:ring-[#0FA3B1]/12 transition-all"
        />
        {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="treatment" className="block text-xs font-bold text-white/50 uppercase tracking-wide mb-1.5">Treatment Interest</label>
        <select
          id="treatment"
          {...register("treatment")}
          className="w-full px-4 py-3 bg-white/7 border border-white/12 rounded-xl text-white/60 placeholder-white/30 text-sm outline-none focus:border-[#0FA3B1] focus:bg-[#0FA3B1]/9 focus:ring-2 focus:ring-[#0FA3B1]/12 transition-all"
        >
          <option value="" className="bg-[#0B1F3A] text-white/55">Select treatment…</option>
          <option value="LASIK Eye Surgery" className="bg-[#0B1F3A] text-white">LASIK Eye Surgery</option>
          <option value="Contoura Vision" className="bg-[#0B1F3A] text-white">Contoura Vision</option>
          <option value="ReLEx SMILE" className="bg-[#0B1F3A] text-white">ReLEx SMILE</option>
          <option value="Cataract Surgery" className="bg-[#0B1F3A] text-white">Cataract Surgery</option>
          <option value="Retina Treatment" className="bg-[#0B1F3A] text-white">Retina Treatment</option>
          <option value="Glaucoma" className="bg-[#0B1F3A] text-white">Glaucoma</option>
          <option value="Pediatric Eye Care" className="bg-[#0B1F3A] text-white">Pediatric Eye Care</option>
          <option value="Cornea Services" className="bg-[#0B1F3A] text-white">Cornea Services</option>
        </select>
        {errors.treatment && <p className="text-rose-400 text-xs mt-1">{errors.treatment.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="preferredDate" className="block text-xs font-bold text-white/50 uppercase tracking-wide mb-1.5">Preferred Date</label>
          <input
            id="preferredDate"
            type="date"
            {...register("preferredDate")}
            className="w-full px-4 py-3 bg-white/7 border border-white/12 rounded-xl text-white/60 placeholder-white/30 text-sm outline-none focus:border-[#0FA3B1] focus:bg-[#0FA3B1]/9 focus:ring-2 focus:ring-[#0FA3B1]/12 transition-all"
          />
          {errors.preferredDate && <p className="text-rose-400 text-xs mt-1">{errors.preferredDate.message}</p>}
        </div>
        <div>
          <label htmlFor="preferredTime" className="block text-xs font-bold text-white/50 uppercase tracking-wide mb-1.5">Preferred Time</label>
          <select
            id="preferredTime"
            {...register("preferredTime")}
            className="w-full px-4 py-3 bg-white/7 border border-white/12 rounded-xl text-white/60 placeholder-white/30 text-sm outline-none focus:border-[#0FA3B1] focus:bg-[#0FA3B1]/9 focus:ring-2 focus:ring-[#0FA3B1]/12 transition-all"
          >
            <option value="" className="bg-[#0B1F3A] text-white/55">Select slot…</option>
            <option value="09:00 AM - 10:00 AM" className="bg-[#0B1F3A] text-white">09:00 AM - 10:00 AM</option>
            <option value="10:00 AM - 11:00 AM" className="bg-[#0B1F3A] text-white">10:00 AM - 11:00 AM</option>
            <option value="11:00 AM - 12:00 PM" className="bg-[#0B1F3A] text-white">11:00 AM - 12:00 PM</option>
            <option value="12:00 PM - 01:00 PM" className="bg-[#0B1F3A] text-white">12:00 PM - 01:00 PM</option>
            <option value="02:00 PM - 03:00 PM" className="bg-[#0B1F3A] text-white">02:00 PM - 03:00 PM</option>
            <option value="03:00 PM - 04:00 PM" className="bg-[#0B1F3A] text-white">03:00 PM - 04:00 PM</option>
            <option value="04:00 PM - 05:00 PM" className="bg-[#0B1F3A] text-white">04:00 PM - 05:00 PM</option>
          </select>
          {errors.preferredTime && <p className="text-rose-400 text-xs mt-1">{errors.preferredTime.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-xs font-bold text-white/50 uppercase tracking-wide mb-1.5">Additional Notes (optional)</label>
        <textarea
          id="notes"
          rows={3}
          placeholder="Any details we should know"
          {...register("notes")}
          className="w-full px-4 py-3 bg-white/7 border border-white/12 rounded-xl text-white placeholder-white/30 text-sm outline-none focus:border-[#0FA3B1] focus:bg-[#0FA3B1]/9 focus:ring-2 focus:ring-[#0FA3B1]/12 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#0FA3B1] hover:bg-[#0d8591] text-white py-3.5 px-4 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Submitting Request...
          </>
        ) : (
          "Request Free Consultation"
        )}
      </button>
      <p className="text-center text-[11px] text-white/30 leading-relaxed">
        <strong>✓ Free Consultation &nbsp; ✓ No Spam &nbsp; ✓ 30-Min Callback</strong>
      </p>
    </form>
  );
}
