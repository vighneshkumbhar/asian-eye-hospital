import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getDoctors } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { CheckCircle2, Award } from "lucide-react";

export default async function DoctorsPage() {
  const doctors = await getDoctors().catch(() => []);

  return (
    <div className="py-16 md:py-24 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">Medical Board</span>
          <h1 className="text-4xl font-bold mt-2">Meet Our Specialist Eye Surgeons</h1>
          <p className="text-sm text-[#627D98] mt-4 leading-relaxed">
            Fellowship-trained experts committed to delivering international-standard ophthalmic care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc: any) => (
            <div key={doc._id} className="bg-white border border-[#E2ECF5] rounded-3xl overflow-hidden hover:shadow-lg transition-all group flex flex-col">
              <div className="h-72 relative overflow-hidden bg-[#E2ECF5]">
                {doc.image ? (
                  <Image
                    src={urlFor(doc.image).url()}
                    alt={doc.name}
                    fill
                    className="object-cover object-top group-hover:scale-103 transition-transform duration-500 photo-graded"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[#627D98]/50">No Photo</div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 bg-[#0FA3B1] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {doc.specialization || "Ophthalmologist"}
                </span>
              </div>
              <div className="p-6 flex flex-col gap-4 flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] font-head">{doc.name}</h3>
                  <p className="text-xs text-[#0FA3B1] font-semibold mt-1 uppercase tracking-wider">{doc.role}</p>
                  <p className="text-xs text-[#627D98] mt-3 leading-relaxed line-clamp-3">
                    {doc.bio || "Experienced ophthalmic consultant specializing in advanced eye surgeries."}
                  </p>
                </div>
                <div className="space-y-3 pt-3 border-t border-[#E2ECF5]">
                  <ul className="space-y-1.5 text-xs text-[#627D98]">
                    {doc.qualifications?.slice(0, 2).map((q: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0FA3B1] flex-shrink-0" />
                        {q}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/doctors/${doc.slug}`} className="block w-full border border-[#0FA3B1] text-[#0FA3B1] hover:bg-[#0FA3B1] hover:text-white text-center py-2.5 rounded-full text-xs font-semibold transition-all">
                    View Full Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
