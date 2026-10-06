import { Instagram } from 'lucide-react';
import { companyInfo } from '@/data/siteData';

export function FloatingSocial() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6 sm:gap-3.5">
      <a
        href={companyInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,.6)] sm:h-14 sm:w-14"
        aria-label="Contact us on WhatsApp"
        data-testid="floating-whatsapp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 sm:w-7 sm:h-7"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-[#182039] px-3 py-2 text-xs font-bold text-white shadow-xl transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1 sm:block opacity-0">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href={companyInfo.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_30px_rgba(253,29,29,.6)] sm:h-14 sm:w-14"
        aria-label="Follow us on Instagram"
        data-testid="floating-instagram"
      >
        <Instagram className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 sm:w-7 sm:h-7" />
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-xl bg-[#182039] px-3 py-2 text-xs font-bold text-white shadow-xl transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1 sm:block opacity-0">
          Follow on Instagram
        </span>
      </a>
    </div>
  );
}