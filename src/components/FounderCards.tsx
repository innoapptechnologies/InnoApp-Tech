import { Linkedin, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { founders } from '@/data/siteData';

export function FounderCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
      {founders.map((founder, index) => (
        <Reveal key={founder.name} delay={index + 1} direction="scale">
          <article className="soft-card card-depth group overflow-hidden rounded-[22px] p-0">
            <div className="p-4 pb-0 sm:p-5 sm:pb-0">
              <div className="aspect-[3/4] w-full max-w-[180px] mx-auto overflow-hidden rounded-[16px] bg-[#e8e4ef]">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="p-4 pt-3 sm:p-5 sm:pt-4">
              <span className="font-mono-ui text-[9px] uppercase tracking-[.17em] text-[#ff6d53] sm:text-[10px]">
                {founder.designation}
              </span>
              <h3 className="mt-1.5 font-display text-lg font-extrabold tracking-[-.05em] text-[#182039] sm:text-xl">
                {founder.name}
              </h3>
              <p className="mt-2 text-[11px] leading-5 text-[#182039]/55 sm:text-xs">
                {founder.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-[#0077B5] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.1em] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,119,181,.4)] sm:text-[10px]"
                  aria-label={`${founder.name} LinkedIn`}
                >
                  <Linkedin size={11} className="transition-transform duration-300 group-hover:rotate-12" />
                  LinkedIn
                </a>
                <a
                  href={founder.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-[#182039]/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.1em] text-[#182039] transition-all duration-300 hover:-translate-y-1 hover:bg-[#182039]/5 hover:border-[#ff6d53] sm:text-[10px]"
                  aria-label={`${founder.name} Portfolio`}
                >
                  Portfolio
                  <ArrowUpRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
