import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080f1c] text-white/60 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
        
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Asian Eye Hospital"
              width={160}
              height={42}
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-sm leading-relaxed text-white/40">
            Pune's NABH-accredited super-specialty eye care centre. 25 years of transforming lives through exceptional vision care. A part of Sai Surya Eye Care.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="https://www.facebook.com/pages/Asian-Eye-Hospital-and-LASER-Institute/1540845429524412" target="_blank" rel="noopener" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0FA3B1] hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/asianeyehospital/" target="_blank" rel="noopener" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0FA3B1] hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UChlN4lBoAHwYnbPO5MPWFzw" target="_blank" rel="noopener" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0FA3B1] hover:text-white transition-colors" aria-label="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://twitter.com/asianeye_pune" target="_blank" rel="noopener" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0FA3B1] hover:text-white transition-colors" aria-label="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <Image
              src="/images/NABH.png"
              alt="NABH Accreditation"
              width={40}
              height={26}
              className="opacity-40"
            />
            <span className="text-xs uppercase tracking-wider text-white/30">NABH Accredited</span>
          </div>
        </div>

        {/* Treatments */}
        <div className="flex flex-col gap-4">
          <h5 className="text-xs uppercase tracking-widest text-white/30 font-bold">Treatments</h5>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/lasik-pune" className="hover:text-[#0FA3B1] transition-colors">LASIK Eye Surgery</Link></li>
            <li><Link href="/contoura-vision-pune" className="hover:text-[#0FA3B1] transition-colors">Contoura Vision</Link></li>
            <li><Link href="/relex-smile-pune" className="hover:text-[#0FA3B1] transition-colors">ReLEx SMILE</Link></li>
            <li><Link href="/cataract-surgery-pune" className="hover:text-[#0FA3B1] transition-colors">Cataract Surgery</Link></li>
            <li><Link href="/retina-specialist-pune" className="hover:text-[#0FA3B1] transition-colors">Retina Treatment</Link></li>
            <li><Link href="/glaucoma-treatment-pune" className="hover:text-[#0FA3B1] transition-colors">Glaucoma</Link></li>
            <li><Link href="/cornea-services-pune" className="hover:text-[#0FA3B1] transition-colors">Cornea &amp; Keratoconus</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h5 className="text-xs uppercase tracking-widest text-white/30 font-bold">Quick Links</h5>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/doctors" className="hover:text-[#0FA3B1] transition-colors">Our Specialists</Link></li>
            <li><Link href="/about" className="hover:text-[#0FA3B1] transition-colors">About Us</Link></li>
            <li><Link href="/testimonials" className="hover:text-[#0FA3B1] transition-colors">Testimonials</Link></li>
            <li><Link href="/blog" className="hover:text-[#0FA3B1] transition-colors">Blog &amp; Articles</Link></li>
            <li><Link href="/contact" className="hover:text-[#0FA3B1] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info & Map */}
        <div className="flex flex-col gap-4">
          <h5 className="text-xs uppercase tracking-widest text-white/30 font-bold">Visit &amp; Contact</h5>
          <div className="flex gap-3 text-sm leading-relaxed text-white/50">
            <MapPin className="w-4 h-4 text-[#0FA3B1] flex-shrink-0 mt-1" />
            <span>3rd Floor, Sakar 10, Above Fab India, Opp. Jehangir Hospital, Station Road, Pune 411001</span>
          </div>
          <div className="flex gap-3 text-sm text-white/50">
            <Phone className="w-4 h-4 text-[#0FA3B1] flex-shrink-0 mt-1" />
            <a href="tel:+918888942222" className="hover:text-white transition-colors">+91 8888942222</a>
          </div>
          <div className="flex gap-3 text-sm text-white/50">
            <Clock className="w-4 h-4 text-[#0FA3B1] flex-shrink-0 mt-1" />
            <span>Mon–Sat: 9:00 AM – 6:15 PM</span>
          </div>
          
          {/* Map */}
          <div className="mt-2 rounded-xl overflow-hidden border border-white/5 h-36 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15131.769501469984!2d73.875734!3d18.531506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e34eb78a46dce59!2sAsian+Eye+Hospital+and+Lasik+laser+institute!5e0!3m2!1sen!2sin!4v1441199739730"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Asian Eye Hospital Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20">
        <span>© {new Date().getFullYear()} Asian Eye Hospital &amp; Laser Institute (A Part of Sai Surya Eye Care). All rights reserved.</span>
        <span>NABH Accredited · Station Road, Pune 411001</span>
      </div>
    </footer>
  );
}
