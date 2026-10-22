import React from "react";
import Image from "next/image";
import { getTestimonials } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { Quote } from "lucide-react";

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials().catch(() => []);

  return (
    <div className="py-16 md:py-24 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">Testimonials</span>
          <h1 className="text-4xl font-bold mt-2">What Our Patients Say</h1>
          <p className="text-sm text-[#627D98] mt-4 leading-relaxed">
            Over 50,000 successful surgeries. Read reviews from former presidents, artists, and patients from all walks of life.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item: any) => (
            <div
              key={item._id}
              className={`bg-white p-8 rounded-3xl border ${
                item.isHighlighted ? "border-[#E0A143] bg-[#FFF8EC] shadow-sm" : "border-[#E2ECF5]"
              } relative flex flex-col justify-between`}
            >
              {item.badgeText && (
                <span className="absolute top-4 right-4 bg-[#E0A143] text-[#0B1F3A] text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {item.badgeText}
                </span>
              )}
              
              <div className="flex flex-col gap-4">
                <Quote className="w-8 h-8 text-[#0FA3B1]/20" />
                <p className="text-sm text-[#34495E] italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#E2ECF5]">
                {item.avatar && (
                  <Image
                    src={urlFor(item.avatar).url()}
                    alt={item.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover h-12 w-12 border border-[#E2ECF5] photo-graded"
                  />
                )}
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F3A]">{item.author}</h4>
                  <p className="text-[11px] text-[#627D98] mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
