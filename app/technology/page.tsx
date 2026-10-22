import React from "react";
import Image from "next/image";
import { getTechnology } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { ShieldCheck, Cpu } from "lucide-react";

export default async function TechnologyPage() {
  const technology = await getTechnology().catch(() => []);

  return (
    <div className="py-16 md:py-24 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">Our Technology</span>
          <h1 className="text-4xl font-bold mt-2">World-Class Ophthalmic Technology</h1>
          <p className="text-sm text-[#627D98] mt-4 leading-relaxed">
            We invest in FDA-approved diagnostic and surgical platforms to ensure maximum safety, precision, and predictable outcomes.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technology.map((tech: any) => (
            <div key={tech._id} className="bg-white border border-[#E2ECF5] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="h-60 relative overflow-hidden bg-[#F0F7FF] flex items-center justify-center">
                  {tech.image ? (
                    <Image
                      src={urlFor(tech.image).url()}
                      alt={tech.name}
                      fill
                      className="object-cover photo-graded"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 p-6 text-center text-[#627D98]/40">
                      <Cpu className="w-12 h-12 stroke-[1.5]" />
                      <span className="text-xs font-bold uppercase tracking-wider">{tech.name}<br/>Professional Photo Recommended</span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  {tech.tag && (
                    <span className="bg-[#EAF5FF] text-[#0FA3B1] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {tech.tag}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-[#0B1F3A] font-head mt-4 mb-3">{tech.name}</h3>
                  <p className="text-sm text-[#627D98] leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0 flex items-center gap-2 text-xs text-[#0FA3B1] font-bold">
                <ShieldCheck className="w-4 h-4" /> FDA Approved Technology
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
