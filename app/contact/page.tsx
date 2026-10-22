import React from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import LeadForm from "@/components/web/LeadForm";

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-[#FAFBFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0FA3B1]">Contact Us</span>
          <h1 className="text-4xl font-bold mt-2">Get In Touch</h1>
          <p className="text-sm text-[#627D98] mt-4 leading-relaxed">
            Have questions about our treatments, pricing, or insurance? Send us a message or call our helpline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-white border border-[#E2ECF5] rounded-3xl p-8 shadow-xs flex flex-col gap-6">
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F0F7FF] flex items-center justify-center text-[#0FA3B1] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Hospital Location</h4>
                  <p className="text-xs text-[#627D98] mt-1 leading-relaxed">
                    3rd Floor, Sakar 10, Above Fab India, Opp. Jehangir Hospital, Station Road, Pune 411001
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F0F7FF] flex items-center justify-center text-[#0FA3B1] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Phone Helpline</h4>
                  <p className="text-xs text-[#627D98] mt-1 leading-relaxed">
                    <a href="tel:+918888942222" className="hover:underline text-[#0B1F3A] font-semibold">+91 8888942222</a><br/>
                    <a href="tel:+919175896408" className="hover:underline text-[#0B1F3A] font-semibold">+91 9175896408</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F0F7FF] flex items-center justify-center text-[#0FA3B1] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Email Address</h4>
                  <p className="text-xs text-[#627D98] mt-1 leading-relaxed">
                    <a href="mailto:info@asianeyehospital.com" className="hover:underline text-[#0B1F3A] font-semibold">info@asianeyehospital.com</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#F0F7FF] flex items-center justify-center text-[#0FA3B1] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3A] text-sm">Working Hours</h4>
                  <p className="text-xs text-[#627D98] mt-1 leading-relaxed">
                    Monday – Saturday: 9:00 AM – 6:15 PM<br/>
                    Sunday: Closed (Emergencies Only)
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map */}
            <div className="rounded-3xl overflow-hidden border border-[#E2ECF5] h-64 relative shadow-xs">
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

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#E2ECF5] rounded-3xl p-8 md:p-10 shadow-xs text-center">
            <div className="mb-6 text-left">
              <h3 className="text-2xl font-bold text-[#0B1F3A] font-head">Send Us a Message</h3>
              <p className="text-xs text-[#627D98] mt-1">We typically reply within 2 hours during business hours.</p>
            </div>
            <LeadForm />
          </div>

        </div>

      </div>
    </div>
  );
}
