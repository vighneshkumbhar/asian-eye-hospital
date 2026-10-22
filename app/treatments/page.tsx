import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTreatments } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { ArrowRight } from "lucide-react";

export default async function TreatmentsPage() {
  const treatments = await getTreatments().catch(() => []);

  return (
    <div className="py-16 md:py-24 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">Our Specialities</span>
          <h1 className="text-4xl font-bold mt-2">Advanced Eye Care Treatments</h1>
          <p className="text-sm text-[#627D98] mt-4 leading-relaxed">
            From blade-free vision correction to complex micro-surgical retinal procedures.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((tx: any) => (
            <article key={tx._id} className="bg-white border border-[#E2ECF5] rounded-3xl overflow-hidden hover:shadow-lg hover:border-[#0FA3B1] transition-all group flex flex-col justify-between">
              <div>
                <div className="h-52 relative overflow-hidden bg-[#F0F7FF]">
                  {tx.coverImage ? (
                    <Image
                      src={urlFor(tx.coverImage).url()}
                      alt={tx.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500 photo-graded"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#627D98]/50">No Photo</div>
                  )}
                  {tx.tagline && (
                    <span className="absolute top-4 left-4 bg-[#0B1F3A]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {tx.tagline}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-[#0B1F3A] font-head">{tx.title}</h3>
                  <p className="text-xs text-[#627D98] leading-relaxed">
                    {tx.overview || "Comprehensive diagnostic and surgical solutions for specialized eye care."}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link href={`/${tx.slug}`} className="block text-center bg-[#F0F7FF] hover:bg-[#0FA3B1] hover:text-white text-[#0FA3B1] text-xs font-semibold py-3 rounded-xl transition-all">
                  Learn More &amp; Pricing
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
