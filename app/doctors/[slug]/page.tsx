import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDoctorBySlug } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { CheckCircle2, ChevronLeft, Award, Calendar, ShieldCheck } from "lucide-react";
import AppointmentForm from "@/components/web/AppointmentForm";

interface DoctorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DoctorDetailPage({ params }: DoctorPageProps) {
  const { slug } = await params;
  const doc = await getDoctorBySlug(slug).catch(() => null);

  if (!doc) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link href="/doctors" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0FA3B1] hover:text-[#0d8591] mb-8">
          <ChevronLeft className="w-4 h-4" /> Back to Specialists
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Photo & Brief Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white border border-[#E2ECF5] rounded-3xl overflow-hidden shadow-xs">
              <div className="h-80 relative overflow-hidden bg-[#E2ECF5]">
                {doc.image ? (
                  <Image
                    src={urlFor(doc.image).url()}
                    alt={doc.name}
                    fill
                    className="object-cover object-top photo-graded"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[#627D98]/50">No Photo</div>
                )}
              </div>
              <div className="p-6 text-center">
                <span className="bg-[#EAF5FF] text-[#0FA3B1] text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  {doc.specialization || "Ophthalmologist"}
                </span>
                <h1 className="text-2xl font-bold text-[#0B1F3A] font-head mt-4">{doc.name}</h1>
                <p className="text-xs text-[#627D98] mt-1 font-semibold uppercase tracking-wider">{doc.role}</p>
                {doc.experienceYears && (
                  <div className="mt-4 pt-4 border-t border-[#E2ECF5] text-xs text-[#0FA3B1] font-bold">
                    🛡️ {doc.experienceYears}+ Years Clinical Experience
                  </div>
                )}
              </div>
            </div>

            {/* Sticky/Quick Booking Card */}
            <div className="bg-[#0B1F3A] text-white rounded-3xl p-6 shadow-md">
              <h3 className="text-lg font-bold font-head mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#0FA3B1]" />
                Book Consultation
              </h3>
              <p className="text-xs text-white/50 mb-4">Request an appointment with {doc.name}.</p>
              <AppointmentForm />
            </div>
          </div>

          {/* Right Column: Bio, Credentials, Qualifications */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="bg-white border border-[#E2ECF5] rounded-3xl p-8 shadow-xs flex flex-col gap-6">
              
              {/* Bio */}
              <div>
                <h2 className="text-xl font-bold text-[#0B1F3A] border-b border-[#E2ECF5] pb-3 mb-4">Biography</h2>
                <p className="text-sm text-[#34495E] leading-relaxed whitespace-pre-line">
                  {doc.bio || `${doc.name} is a senior consultant ophthalmologist at Asian Eye Hospital, dedicated to providing advanced eye care services.`}
                </p>
              </div>

              {/* Qualifications */}
              {doc.qualifications && doc.qualifications.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-[#0B1F3A] border-b border-[#E2ECF5] pb-3 mb-4">Qualifications &amp; Education</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#34495E]">
                    {doc.qualifications.map((q: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0FA3B1] flex-shrink-0 mt-0.5" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Highlights & Achievements */}
              {doc.highlights && doc.highlights.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-[#0B1F3A] border-b border-[#E2ECF5] pb-3 mb-4">Fellowships &amp; Achievements</h2>
                  <ul className="space-y-3 text-sm text-[#34495E]">
                    {doc.highlights.map((h: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Award className="w-4 h-4 text-[#0FA3B1] flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
