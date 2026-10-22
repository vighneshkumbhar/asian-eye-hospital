import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTreatmentBySlug } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import { CheckCircle2, ChevronRight, Sparkles, BookOpen, Clock, Calendar } from "lucide-react";
import AppointmentForm from "@/components/web/AppointmentForm";

interface TreatmentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TreatmentDetailPage({ params }: TreatmentPageProps) {
  const { slug } = await params;
  
  // Resolve treatment by slug (try exact slug first, then strip "-pune" as fallback)
  let treatment = await getTreatmentBySlug(slug).catch(() => null);
  if (!treatment && slug.endsWith("-pune")) {
    const baseSlug = slug.replace("-pune", "");
    treatment = await getTreatmentBySlug(baseSlug).catch(() => null);
  }

  if (!treatment) {
    notFound();
  }

  return (
    <div className="py-12 md:py-20 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#627D98] mb-8 font-semibold">
          <Link href="/treatments" className="hover:text-[#0FA3B1]">Treatments</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0B1F3A]">{treatment.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Header / Overview */}
            <div className="bg-white border border-[#E2ECF5] rounded-3xl p-8 md:p-10 shadow-xs flex flex-col gap-6">
              <div>
                {treatment.tagline && (
                  <span className="bg-[#F0F7FF] text-[#0FA3B1] text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                    {treatment.tagline}
                  </span>
                )}
                <h1 className="text-3xl sm:text-4xl font-bold text-[#0B1F3A] font-head mt-4">{treatment.title}</h1>
              </div>
              
              {treatment.coverImage && (
                <div className="h-80 relative rounded-2xl overflow-hidden bg-[#F0F7FF]">
                  <Image
                    src={urlFor(treatment.coverImage).url()}
                    alt={treatment.title}
                    fill
                    className="object-cover photo-graded"
                  />
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-[#0B1F3A] font-head mb-3">Overview</h3>
                <p className="text-sm text-[#34495E] leading-relaxed">
                  {treatment.overview || "Advanced clinical treatment option offered by our super-specialty board."}
                </p>
              </div>
            </div>

            {/* Benefits */}
            {treatment.benefits && treatment.benefits.length > 0 && (
              <div className="bg-white border border-[#E2ECF5] rounded-3xl p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#0B1F3A] font-head mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#0FA3B1]" />
                  Key Benefits
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#34495E]">
                  {treatment.benefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 bg-[#FAFBFD] p-4 rounded-xl border border-[#E2ECF5]">
                      <CheckCircle2 className="w-5 h-5 text-[#0FA3B1] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recovery */}
            {treatment.recovery && (
              <div className="bg-white border border-[#E2ECF5] rounded-3xl p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#0B1F3A] font-head mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#0FA3B1]" />
                  Recovery &amp; Post-Op Care
                </h3>
                <p className="text-sm text-[#34495E] leading-relaxed whitespace-pre-line">
                  {treatment.recovery}
                </p>
              </div>
            )}

            {/* FAQs */}
            {treatment.faq && treatment.faq.length > 0 && (
              <div className="bg-white border border-[#E2ECF5] rounded-3xl p-8 shadow-xs">
                <h3 className="text-xl font-bold text-[#0B1F3A] font-head mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#0FA3B1]" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {treatment.faq.map((item: any, idx: number) => (
                    <details key={idx} className="group border border-[#E2ECF5] rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex items-center justify-between gap-4 p-4 text-[#0B1F3A] font-semibold cursor-pointer select-none">
                        <span className="text-sm">{item.question}</span>
                        <span className="transition-transform group-open:rotate-180 text-lg font-light text-[#0FA3B1]">+</span>
                      </summary>
                      <div className="p-4 border-t border-[#E2ECF5] bg-[#FAFBFD] text-xs leading-relaxed text-[#627D98]">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Appointment Form & Specialists */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Appointment Form */}
            <div className="bg-[#0B1F3A] text-white rounded-3xl p-6 shadow-md sticky top-24">
              <h3 className="text-lg font-bold font-head mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#0FA3B1]" />
                Book Free Consult
              </h3>
              <p className="text-xs text-white/50 mb-4">Request a callback for {treatment.title}.</p>
              <AppointmentForm />
            </div>

            {/* Specialist Doctors */}
            {treatment.doctors && treatment.doctors.length > 0 && (
              <div className="bg-white border border-[#E2ECF5] rounded-3xl p-6 shadow-xs">
                <h3 className="text-base font-bold text-[#0B1F3A] font-head mb-4">Treatment Specialists</h3>
                <div className="flex flex-col gap-4">
                  {treatment.doctors.map((doc: any) => (
                    <Link href={`/doctors/${doc.slug}`} key={doc.slug} className="flex items-center gap-3 p-2 hover:bg-[#F0F7FF] rounded-xl transition-all group">
                      {doc.image && (
                        <Image
                          src={urlFor(doc.image).url()}
                          alt={doc.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover h-12 w-12 border border-[#E2ECF5] photo-graded"
                        />
                      )}
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1F3A] group-hover:text-[#0FA3B1] transition-colors">{doc.name}</h4>
                        <p className="text-[10px] text-[#627D98] mt-0.5">{doc.role}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
