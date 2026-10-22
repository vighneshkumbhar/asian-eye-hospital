import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, ThumbsUp, CalendarRange } from "lucide-react";
import AppointmentForm from "@/components/web/AppointmentForm";

export default function BookAppointmentPage() {
  return (
    <div className="py-16 md:py-24 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Trust signals */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 border border-[#0FA3B1]/35 bg-[#0FA3B1]/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0FA3B1] w-fit">
              <CalendarRange className="w-4 h-4" />
              Direct Booking Portal
            </div>
            <h1 className="text-4xl font-bold leading-tight text-[#0B1F3A] font-head">
              Schedule Your Free <br/>
              <em className="text-[#0FA3B1] not-italic">Eye Care Consultation</em>
            </h1>
            <p className="text-base text-[#627D98] leading-relaxed max-w-md">
              Take the first step towards perfect vision. Book a free, no-obligation evaluation with Pune's leading specialists.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="w-5 h-5 text-[#0FA3B1] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">NABH Accredited Safety</h4>
                  <p className="text-xs text-[#627D98] mt-0.5">Strict clinical protocols ensuring international-standard safety standards.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Award className="w-5 h-5 text-[#0FA3B1] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Mentored by the Inventor of LASIK</h4>
                  <p className="text-xs text-[#627D98] mt-0.5">Surgical expertise honed under Prof. Dr. Ioannis Pallikaris.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <ThumbsUp className="w-5 h-5 text-[#0FA3B1] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">0% EMI Options Available</h4>
                  <p className="text-xs text-[#627D98] mt-0.5">Flexible payment plans and corporate insurance support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form Card */}
          <div className="lg:col-span-6 bg-[#0B1F3A] text-white rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white font-head">Book Free Consultation</h3>
              <p className="text-xs text-white/50 mt-1">Fill out the form below. Callback within 30 minutes.</p>
            </div>
            <AppointmentForm />
          </div>

        </div>

      </div>
    </div>
  );
}
