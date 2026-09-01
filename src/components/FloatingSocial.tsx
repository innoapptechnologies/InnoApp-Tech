import { MessageCircle, Instagram } from 'lucide-react';
import { companyInfo } from '@/data/siteData';

export function FloatingSocial() {
  return (
    <div className="fixed bottom-3 right-3 z-50 flex flex-col gap-2 sm:bottom-4 sm:right-4 sm:gap-3 lg:bottom-6 lg:right-6">
      <a
        href={companyInfo.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_25px_rgba(37,211,102,.5)] sm:h-12 sm:w-12 lg:h-14 lg:w-14"
        aria-label="Contact us on WhatsApp"
        data-testid="floating-whatsapp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        <span className="absolute right-full mr-2 hidden whitespace-nowrap rounded-lg bg-[#182039] px-2 py-1.5 text-[10px] font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1 sm:mr-3 sm:px-3 sm:py-2 sm:text-xs lg:block">
          Chat on WhatsApp
        </span>
      </a>
      <a
        href={companyInfo.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_25px_rgba(253,29,29,.5)] sm:h-12 sm:w-12 lg:h-14 lg:w-14"
        aria-label="Follow us on Instagram"
        data-testid="floating-instagram"
      >
        <Instagram className="w-[18px] h-[18px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 sm:w-[22px] sm:h-[22px] lg:w-[24px] lg:h-[24px]" />
        <span className="absolute right-full mr-2 hidden whitespace-nowrap rounded-lg bg-[#182039] px-2 py-1.5 text-[10px] font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1 sm:mr-3 sm:px-3 sm:py-2 sm:text-xs lg:block">
          Follow on Instagram
        </span>
      </a>
    </div>
  );
}