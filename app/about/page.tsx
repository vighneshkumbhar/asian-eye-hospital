import React from "react";
import Image from "next/image";
import { getFAQs } from "@/lib/sanity.queries";
import { Shield, Award, Users, Heart } from "lucide-react";

export default async function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">About Us</span>
          <h1 className="text-4xl font-bold mt-2 leading-tight">Patient-Centric Eye Care Excellence Since 1998</h1>
          <p className="text-sm text-[#627D98] mt-4 leading-relaxed">
            Asian Eye Hospital &amp; Laser Institute is Pune's leading NABH-accredited super-specialty eye care destination.
          </p>
        </div>

        {/* Vision / Mission / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-[#E2ECF5] rounded-2xl p-8 shadow-xs text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F0F7FF] flex items-center justify-center text-[#0FA3B1]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A] font-head">Our Mission</h3>
            <p className="text-xs text-[#627D98] leading-relaxed">
              To provide international-standard eye care services with compassionate professionalism, leveraging state-of-the-art diagnostic and surgical technology.
            </p>
          </div>
          <div className="bg-white border border-[#E2ECF5] rounded-2xl p-8 shadow-xs text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F0F7FF] flex items-center justify-center text-[#0FA3B1]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A] font-head">Our Vision</h3>
            <p className="text-xs text-[#627D98] leading-relaxed">
              To be the most trusted and preferred digital-age eye care partner for patients in Pune and globally, continuously setting new benchmarks in clinical outcomes.
            </p>
          </div>
          <div className="bg-white border border-[#E2ECF5] rounded-2xl p-8 shadow-xs text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F0F7FF] flex items-center justify-center text-[#0FA3B1]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A] font-head">Our Values</h3>
            <p className="text-xs text-[#627D98] leading-relaxed">
              Patient safety, clinical integrity, technology leadership, and absolute transparency in pricing and treatment pathways.
            </p>
          </div>
        </div>

        {/* History */}
        <div className="bg-white border border-[#E2ECF5] rounded-3xl p-8 md:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">Our Legacy &amp; Heritage</h2>
            <p className="text-sm text-[#34495E] leading-relaxed">
              Founded in 1998 by the Kankariya family, Asian Eye Hospital has pioneered refractive surgery in Western India. Over the last two decades, we have evolved from a boutique laser center to a comprehensive super-specialty eye care institute.
            </p>
            <p className="text-sm text-[#34495E] leading-relaxed">
              Our medical board includes India's first dual-fellowship trained LASIK surgeons who have trained under Prof. Ioannis Pallikaris, the inventor of LASIK. We have successfully performed over 50,000 procedures, helping patients regain their natural vision.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <Image
              src="/images/Image_1.jpg"
              alt="Asian Eye Hospital Building"
              width={480}
              height={320}
              className="rounded-2xl shadow-md photo-graded"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
