import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Shield, Award, Users, ArrowRight, Heart, Zap, CheckCircle2 } from "lucide-react";
import { getHomepage, getTreatments, getDoctors, getTestimonials, getFAQs } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image";
import AppointmentForm from "@/components/web/AppointmentForm";

export default async function HomePage() {
  const [homepage, treatments, doctors, testimonials, faqs] = await Promise.all([
    getHomepage().catch(() => null),
    getTreatments().catch(() => []),
    getDoctors().catch(() => []),
    getTestimonials().catch(() => []),
    getFAQs().catch(() => []),
  ]);

  // Fallback Hero Content
  const heroTitle = homepage?.heroTitle || "Pune's Most Trusted Eye Care Centre";
  const heroSubtitle = homepage?.heroSubtitle || "India's first dual-fellowship trained refractive specialists. Mentored by the inventor of LASIK. Over 50,000 lives transformed.";

  return (
    <div className="flex flex-col">
      
      {/* Hero Section */}
      <section className="relative bg-[#0B1F3A] text-white overflow-hidden min-h-[85vh] flex items-center py-16 md:py-24">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/85 to-transparent z-10" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#0FA3B1]/10 blur-3xl pointer-events-none" />
        
        {/* Banner Image Placeholder/Renderer */}
        {homepage?.heroBanners && homepage.heroBanners.length > 0 ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={urlFor(homepage.heroBanners[0]).url()}
              alt="Asian Eye Hospital Banner"
              fill
              className="object-cover opacity-25 object-top"
              priority
            />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-[url('/images/banner/best-eye-hospital.jpg')] bg-cover bg-top opacity-20" />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <div className="inline-flex items-center gap-2 border border-[#0FA3B1]/35 bg-[#0FA3B1]/10 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1CD4E6] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0FA3B1] animate-ping" />
              NABH Accredited · Est. 1998
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              {heroTitle}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl leading-relaxed">
              {heroSubtitle}
            </p>
            <div className="flex flex-row gap-2 w-full max-w-sm mt-2">
              <Link href="#book-consultation" className="flex-1 bg-[#0FA3B1] hover:bg-[#0d8591] text-white text-center px-3 py-3 rounded-full font-bold text-[11px] sm:text-xs shadow-lg transition-transform hover:-translate-y-0.5 whitespace-nowrap">
                Book Consult
              </Link>
              <a href="tel:+918888942222" className="flex-1 bg-white/5 border border-white/20 backdrop-blur-md hover:bg-white/10 text-white text-center px-3 py-3 rounded-full font-bold text-[11px] sm:text-xs transition-transform hover:-translate-y-0.5 whitespace-nowrap">
                Call +91 8888942222
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 pt-6 border-t border-white/10 w-full">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                <Image
                  src="/images/NABH.png"
                  alt="NABH"
                  width={48}
                  height={32}
                  className="brightness-0 invert"
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-white leading-tight">NABH<br/>Accredited</span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-white/15" />
              <div>
                <div className="text-lg sm:text-xl font-bold font-head text-white">25+ Years</div>
                <div className="text-[10px] uppercase tracking-wider text-white">Clinical Trust</div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-white/15" />
              <div>
                <div className="text-lg sm:text-xl font-bold font-head text-white">50,000+</div>
                <div className="text-[10px] uppercase tracking-wider text-white">Happy Eyes</div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-white/15" />
              <div>
                <div className="text-lg sm:text-xl font-bold font-head text-white">4.9 ★</div>
                <div className="text-[10px] uppercase tracking-wider text-white">Google Rating</div>
              </div>
            </div>
          </div>

          {/* Appointment Form Card - Visible only on PC/large screens */}
          <div className="hidden lg:block lg:col-span-5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white font-head">Book Free Consult</h3>
              <p className="text-xs text-white/50 mt-1">Get a 30-minute callback from our coordinators.</p>
            </div>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Awards / Recognition Strip */}
      <section className="bg-white border-b border-[#E2ECF5] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600 text-center md:text-left">
              Recognised &amp; Awarded
            </span>
            <div className="hidden md:block h-6 w-px bg-[#E2ECF5]" />
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 w-full sm:w-auto">
              <div className="relative w-48 h-12 flex items-center justify-center">
                <Image
                  src="/images/banner/Best-Lasik-center-maharashtra.jpg"
                  alt="Best LASIK Centre"
                  fill
                  className="object-contain photo-graded"
                />
              </div>
              <div className="relative w-40 h-12 flex items-center justify-center">
                <Image
                  src="/images/banner/Top-50-Reseracher.png"
                  alt="Top 50 Researcher"
                  fill
                  className="object-contain photo-graded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <Image
              src="/images/Image_1.jpg"
              alt="Why Choose Us"
              width={540}
              height={400}
              className="rounded-3xl shadow-xl photo-graded"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#0B1F3A] text-white p-6 rounded-2xl shadow-lg text-center hidden sm:block">
              <div className="text-3xl font-extrabold text-[#F7BA60]">25+</div>
              <div className="text-[10px] uppercase tracking-wider text-white/50 mt-1">Years of Legacy</div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">Our Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              A Different Level of <em className="text-[#0FA3B1] not-italic">Eye Care Excellence</em>
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We combine international surgical expertise, cutting-edge diagnostic technology, and a compassionate patient-first approach.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F0F7FF] flex items-center justify-center text-[#0FA3B1] flex-shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Expert Surgeons</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">India's first dual-fellowship trained doctors, mentored by the inventor of LASIK.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F0F7FF] flex items-center justify-center text-[#0FA3B1] flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Advanced Technology</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Femto LASIK, Contoura Vision, and ReLEx SMILE suites under one roof.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F0F7FF] flex items-center justify-center text-[#0FA3B1] flex-shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Personalised Care</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Customised vision treatment plans mapped to your unique corneal anatomy.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F0F7FF] flex items-center justify-center text-[#0FA3B1] flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Proven Outcomes</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">Over 99% patient satisfaction rate. Trusted by national leaders and celebrities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-[#F5FAFE] border-t border-b border-[#E2ECF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">Our Specialities</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Advanced Eye Care Treatments</h2>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">Get the highest standard of ophthalmic treatments delivered by leading consultants.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((tx: any) => (
              <article key={tx._id} className="bg-white border border-[#E2ECF5] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#0FA3B1] transition-all group flex flex-col">
                <div className="h-48 relative overflow-hidden bg-[#F0F7FF]">
                  {tx.coverImage ? (
                    <Image
                      src={urlFor(tx.coverImage).url()}
                      alt={tx.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 photo-graded"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-bold text-xs uppercase tracking-widest">
                      {tx.title}
                    </div>
                  )}
                  {tx.tagline && (
                    <span className="absolute top-4 left-4 bg-[#0B1F3A]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      {tx.tagline}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <h3 className="text-lg font-bold text-[#0B1F3A] font-head">{tx.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                    {tx.overview || "Advanced diagnostic and surgical care for vision correction."}
                  </p>
                  {/* Location-based treatment slug linking */}
                  <Link href={`/${tx.slug}`} className="text-[#0FA3B1] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-2">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">Medical Board</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">World-Class Eye Surgeons</h2>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">Trained at international institutions and dedicated to clinical excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.slice(0, 3).map((doc: any) => (
              <div key={doc._id} className="bg-[#FAFBFD] border border-[#E2ECF5] rounded-3xl overflow-hidden hover:shadow-lg transition-all group">
                <div className="h-72 relative overflow-hidden bg-[#E2ECF5]">
                  {doc.image ? (
                    <Image
                      src={urlFor(doc.image).url()}
                      alt={doc.name}
                      fill
                      className="object-cover object-top group-hover:scale-103 transition-transform duration-500 photo-graded"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-slate-600/50">No Photo</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 bg-[#0FA3B1] text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {doc.specialization || "Ophthalmologist"}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] font-head">{doc.name}</h3>
                    <p className="text-xs text-[#0FA3B1] font-semibold mt-1 uppercase tracking-wider">{doc.role}</p>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {doc.qualifications?.slice(0, 2).map((q: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0FA3B1] flex-shrink-0" />
                        {q}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/doctors/${doc.slug}`} className="border border-[#0FA3B1] text-[#0FA3B1] hover:bg-[#0FA3B1] hover:text-white text-center py-2.5 rounded-full text-xs font-semibold transition-all">
                    View Full Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-[#F5FAFE] border-t border-b border-[#E2ECF5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">Patient Voices</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">Testimonials of Trust</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((item: any) => (
                <div key={item._id} className={`bg-white p-8 rounded-2xl border ${item.isHighlighted ? "border-[#E0A143] bg-[#FFF8EC]" : "border-[#E2ECF5]"} shadow-xs relative flex flex-col justify-between`}>
                  {item.badgeText && (
                    <span className="absolute top-4 right-4 bg-[#E0A143] text-[#0B1F3A] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {item.badgeText}
                    </span>
                  )}
                  <p className="text-sm text-[#34495E] italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    {item.avatar && (
                      <Image
                        src={urlFor(item.avatar).url()}
                        alt={item.author}
                        width={44}
                        height={44}
                        className="rounded-full object-cover border-2 border-[#E2ECF5]"
                      />
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1F3A]">{item.author}</h4>
                      <p className="text-[11px] text-slate-600">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">FAQ</span>
              <h2 className="text-3xl font-bold mt-2">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.slice(0, 5).map((faq: any, idx: number) => (
                <details key={faq._id} className="group border border-[#E2ECF5] rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 text-[#0B1F3A] font-semibold cursor-pointer select-none">
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <span className="transition-transform group-open:rotate-180 text-xl font-light text-[#0FA3B1]">+</span>
                  </summary>
                  <div className="p-5 border-t border-[#E2ECF5] bg-[#FAFBFD] text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dedicated Booking Section (High CRO Mobile Fallback) */}
      <section id="book-consultation" className="py-16 md:py-24 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#112240] to-[#0FA3B1]/20" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1CD4E6]">Get Started</span>
          <h2 className="text-2xl sm:text-4xl font-bold mt-3 mb-4 font-head">Book Your Free Consultation</h2>
          <p className="text-xs sm:text-sm text-white/70 mb-8 max-w-md mx-auto leading-relaxed">
            Schedule a diagnostic check and consulting session with our experts. Get a 30-minute callback to confirm your slot.
          </p>
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl text-left max-w-md mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>

    </div>
  );
}
