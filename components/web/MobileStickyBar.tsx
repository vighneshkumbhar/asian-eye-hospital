"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <>
      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2ECF5] shadow-lg px-4 py-3 flex items-center gap-3">
        <a
          href="tel:+918888942222"
          className="flex-1 bg-[#0B1F3A] hover:bg-[#172A45] text-white py-3.5 px-2 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
        <a
          href="https://wa.me/918888942222"
          target="_blank"
          rel="noopener"
          className="flex-1 bg-[#25D366] hover:bg-[#1ebe5b] text-white py-3.5 px-2 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <Link
          href="/book-appointment"
          className="flex-1.5 bg-[#0FA3B1] hover:bg-[#0d8591] text-white py-3.5 px-2 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 text-center"
        >
          <Calendar className="w-4 h-4" />
          Book Free
        </Link>
      </div>

      {/* Floating Desktop WhatsApp Button */}
      <a
        href="https://wa.me/918888942222"
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Asian Eye Hospital"
        className="hidden md:flex fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-full items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </>
  );
}
