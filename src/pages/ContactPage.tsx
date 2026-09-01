import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Instagram, Send } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { companyInfo } from '@/data/siteData';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f2] pt-[74px]">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-28">
          <Reveal>
            <div className="mb-6 flex items-center gap-3 font-mono-ui text-[10px] font-medium uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2 w-2 rounded-full bg-[#ff6d53]" /> Get in Touch
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="max-w-[800px] font-display text-[clamp(2rem,7vw,6rem)] font-extrabold leading-[.9] tracking-[-.075em] text-[#182039] animate-ultra-fade-in-up">
              Let&apos;s start a <span className="text-[#ff6d53] animate-ultra-color-shift">conversation</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-[600px] text-xs leading-6 text-[#182039]/65 sm:mt-8 sm:text-lg sm:leading-7 animate-ultra-slide-left">
              Tell us what you&apos;re trying to make, fix, or understand. We&apos;ll meet you there.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 pb-24 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <Reveal>
            <div className="rounded-[26px] bg-[#182039] p-8 text-[#f4f1eb] sm:p-10 animate-ultra-bounce-in">
              <h2 className="font-display text-2xl font-extrabold tracking-[-.05em]">
                Contact Information
              </h2>
              <p className="mt-2 text-sm text-white/60">
                Reach out through any of these channels. We typically respond within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-4 transition-all duration-300 hover:text-[#d9f47b] hover:translate-x-2 hover:animate-ultra-bounce-x"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff6d53] transition-transform duration-300 hover:rotate-12">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[.15em] text-[#d9f47b]">Phone</span>
                    <p className="mt-1 text-lg font-bold">{companyInfo.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-4 transition-all duration-300 hover:text-[#d9f47b] hover:translate-x-2"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d9f47b] transition-transform duration-300 hover:rotate-12">
                    <Mail size={18} className="text-[#182039]" />
                  </div>
                  <div>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[.15em] text-[#d9f47b]">Email</span>
                    <p className="mt-1 text-lg font-bold">{companyInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-transform duration-300 hover:rotate-12">
                    <MapPin size={18} className="text-[#ff6d53]" />
                  </div>
                  <div>
                    <span className="font-mono-ui text-[10px] uppercase tracking-[.15em] text-[#d9f47b]">Location</span>
                    <p className="mt-1 text-lg font-bold">India</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-white/15 pt-8">
                <span className="font-mono-ui text-[10px] uppercase tracking-[.15em] text-[#d9f47b]">
                  Follow us
                </span>
                <div className="mt-4 flex gap-4">
                  <a
                    href={companyInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition-all duration-300 hover:border-[#d9f47b] hover:text-[#d9f47b] hover:scale-105 hover:-translate-y-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href={companyInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm transition-all duration-300 hover:border-[#d9f47b] hover:text-[#d9f47b] hover:scale-105 hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                    Instagram
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Quick Contact CTA */}
          <Reveal delay={1} direction="right">
            <div className="space-y-6">
              <div className="rounded-[26px] bg-white/70 p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_20px_40px_rgba(24,32,57,.1)] hover:-translate-y-1">
                <h3 className="font-display text-xl font-extrabold tracking-[-.04em] text-[#182039]">
                  Start a Project
                </h3>
                <p className="mt-2 text-sm text-[#182039]/60">
                  Have a project in mind? Send us an email and we&apos;ll get back to you within 24 hours.
                </p>
                <a
                  href={`mailto:${companyInfo.email}?subject=Project%20Enquiry`}
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#ff6d53] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[.14em] text-[#182039] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,109,83,.4)]"
                >
                  Send the Project <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="rounded-[26px] bg-white/70 p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_20px_40px_rgba(24,32,57,.1)] hover:-translate-y-1">
                <h3 className="font-display text-xl font-extrabold tracking-[-.04em] text-[#182039]">
                  Apply for Internship
                </h3>
                <p className="mt-2 text-sm text-[#182039]/60">
                  Ready to learn by doing? Apply for one of our internship programs.
                </p>
                <a
                  href="https://forms.gle/WMWeDqXKv1XoFEwQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#182039] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[.14em] text-[#f4f1eb] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(24,32,57,.4)]"
                >
                  Apply now <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="rounded-[26px] bg-[#d9f47b]/40 p-8 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(24,32,57,.1)] hover:-translate-y-1">
                <h3 className="font-display text-xl font-extrabold tracking-[-.04em] text-[#182039]">
                  Quick Response
                </h3>
                <p className="mt-2 text-sm text-[#182039]/60">
                  For urgent inquiries, reach us directly on WhatsApp or call us.
                </p>
                <a
                  href={companyInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[.14em] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(37,211,102,.4)]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg> WhatsApp us
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="mt-12 overflow-hidden rounded-[32px] bg-[#182039]/5 shadow-[0_20px_45px_rgba(24,32,57,.06)] border border-[#182039]/10 p-2">
            <div className="w-full rounded-[24px] overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=13.1066264,80.2782108&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
