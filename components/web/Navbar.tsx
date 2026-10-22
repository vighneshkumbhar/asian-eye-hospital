"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#0B1F3A] text-white/80 text-xs py-2 px-4 text-center flex items-center justify-center gap-2 flex-wrap z-999 relative">
        <span>🏆 <strong>Ranked Best LASIK Centre in Maharashtra</strong></span>
        <span className="opacity-30">|</span>
        <span>NABH Accredited · Est. 1998</span>
        <span className="opacity-30">|</span>
        <a href="tel:+918888942222" className="text-[#1CD4E6] font-semibold hover:underline">Free Consultation: +91 8888942222</a>
      </div>

      <header className="sticky top-0 z-50 bg-white/96 backdrop-blur-md border-bottom border-[#E2ECF5] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Asian Eye Hospital"
              width={180}
              height={46}
              priority
              className="h-11 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/treatments" className="text-[#34495E] hover:text-[#0FA3B1] font-medium text-sm transition-colors">Treatments</Link>
            <Link href="/doctors" className="text-[#34495E] hover:text-[#0FA3B1] font-medium text-sm transition-colors">Doctors</Link>
            <Link href="/technology" className="text-[#34495E] hover:text-[#0FA3B1] font-medium text-sm transition-colors">Technology</Link>
            <Link href="/testimonials" className="text-[#34495E] hover:text-[#0FA3B1] font-medium text-sm transition-colors">Reviews</Link>
            <Link href="/blog" className="text-[#34495E] hover:text-[#0FA3B1] font-medium text-sm transition-colors">Blog</Link>
            <Link href="/contact" className="text-[#34495E] hover:text-[#0FA3B1] font-medium text-sm transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+918888942222" className="flex items-center gap-2 text-sm font-semibold text-[#0B1F3A]">
              <Phone className="w-4 h-4 text-[#0FA3B1]" />
              +91 8888942222
            </a>
            <Link
              href="/book-appointment"
              className="bg-[#0FA3B1] hover:bg-[#0d8591] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Free Consult
            </Link>
          </div>

          <button onClick={() => setIsOpen(true)} className="md:hidden p-2 text-[#0B1F3A]" aria-label="Open Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0B1F3A] z-50 flex flex-col p-6 overflow-y-auto">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Image
              src="/images/logo.png"
              alt="Asian Eye Hospital"
              width={140}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <button onClick={() => setIsOpen(false)} className="text-white p-2" aria-label="Close Menu">
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mt-6">
            <Link href="/treatments" onClick={() => setIsOpen(false)} className="text-white/90 text-lg font-medium py-3 border-b border-white/5">Treatments</Link>
            <Link href="/doctors" onClick={() => setIsOpen(false)} className="text-white/90 text-lg font-medium py-3 border-b border-white/5">Doctors</Link>
            <Link href="/technology" onClick={() => setIsOpen(false)} className="text-white/90 text-lg font-medium py-3 border-b border-white/5">Technology</Link>
            <Link href="/testimonials" onClick={() => setIsOpen(false)} className="text-white/90 text-lg font-medium py-3 border-b border-white/5">Reviews</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="text-white/90 text-lg font-medium py-3 border-b border-white/5">Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white/90 text-lg font-medium py-3 border-b border-white/5">Contact</Link>
          </nav>

          <div className="flex flex-col gap-3 mt-8">
            <a href="tel:+918888942222" className="bg-[#0B1F3A] border border-white/25 text-white py-4 rounded-xl text-center font-semibold">📞 Call: +91 8888942222</a>
            <a href="https://wa.me/918888942222" target="_blank" rel="noopener" className="bg-[#25D366] text-white py-4 rounded-xl text-center font-semibold">💬 WhatsApp Us</a>
            <Link href="/book-appointment" onClick={() => setIsOpen(false)} className="bg-[#F7BA60] text-[#0B1F3A] py-4 rounded-xl text-center font-semibold">Book Free Consultation</Link>
          </div>
        </div>
      )}
    </>
  );
}
