"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createLead } from "@/actions/leads";
import { Check, Loader2 } from "lucide-react";

const LeadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  notes: z.string().optional(),
});

type LeadFormValues = z.infer<typeof LeadSchema>;

export default function LeadForm() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(LeadSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      notes: "",
    },
  });

  const onSubmit = async (data: LeadFormValues) => {
    setIsPending(true);
    setError(null);
    try {
      const result = await createLead({ ...data, source: "CONTACT_FORM" });
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
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
          <Check className="w-5 h-5" />
        </div>
        <h4 className="font-bold text-emerald-950 font-head">Message Sent Successfully</h4>
        <p className="text-xs text-emerald-800 leading-relaxed">
          Thank you! We have received your message. Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
      {error && (
        <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl font-semibold">
          ⚠️ {error}
        </div>
      )}

      <div>
        <label htmlFor="lead-name" className="block text-xs font-bold text-[#34495E] uppercase tracking-wide mb-1">Full Name</label>
        <input
          id="lead-name"
          type="text"
          placeholder="Your name"
          {...register("name")}
          className="w-full px-4 py-2.5 bg-white border border-[#E2ECF5] rounded-xl text-[#0B132B] placeholder-[#627D98]/50 text-sm outline-none focus:border-[#0FA3B1] focus:ring-2 focus:ring-[#0FA3B1]/12 transition-all"
        />
        {errors.name && <p className="text-rose-600 text-xs mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="lead-phone" className="block text-xs font-bold text-[#34495E] uppercase tracking-wide mb-1">Mobile Number</label>
        <input
          id="lead-phone"
          type="tel"
          placeholder="+91 98765 43210"
          {...register("phone")}
          className="w-full px-4 py-2.5 bg-white border border-[#E2ECF5] rounded-xl text-[#0B132B] placeholder-[#627D98]/50 text-sm outline-none focus:border-[#0FA3B1] focus:ring-2 focus:ring-[#0FA3B1]/12 transition-all"
        />
        {errors.phone && <p className="text-rose-600 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="lead-email" className="block text-xs font-bold text-[#34495E] uppercase tracking-wide mb-1">Email (optional)</label>
        <input
          id="lead-email"
          type="email"
          placeholder="you@email.com"
          {...register("email")}
          className="w-full px-4 py-2.5 bg-white border border-[#E2ECF5] rounded-xl text-[#0B132B] placeholder-[#627D98]/50 text-sm outline-none focus:border-[#0FA3B1] focus:ring-2 focus:ring-[#0FA3B1]/12 transition-all"
        />
        {errors.email && <p className="text-rose-600 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="lead-notes" className="block text-xs font-bold text-[#34495E] uppercase tracking-wide mb-1">Message (optional)</label>
        <textarea
          id="lead-notes"
          rows={3}
          placeholder="How can we help you?"
          {...register("notes")}
          className="w-full px-4 py-2.5 bg-white border border-[#E2ECF5] rounded-xl text-[#0B132B] placeholder-[#627D98]/50 text-sm outline-none focus:border-[#0FA3B1] focus:ring-2 focus:ring-[#0FA3B1]/12 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-[#0B1F3A] hover:bg-[#172A45] text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isPending ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending Message...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
