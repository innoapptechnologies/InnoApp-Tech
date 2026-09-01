import { ArrowRight, Check, Sparkles, Target, Eye, Heart, Lightbulb } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { FounderCards } from '@/components/FounderCards';
import { companyInfo } from '@/data/siteData';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f2] pt-[68px]">
      {/* Logo Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 py-8 sm:px-8 sm:py-12">
          <Reveal>
            <div className="flex items-center gap-4 sm:gap-6">
              <img src="/assets/logo.png" alt="InnoApp Technologies" className="h-20 w-20 rounded-3xl object-contain sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <div>
                <h1 className="font-display text-[clamp(1.2rem,4vw,2.5rem)] font-extrabold leading-tight tracking-[-.06em] text-[#182039]">
                  InnoApp<br />Technologies
                </h1>
                <p className="mt-2 text-[10px] font-medium text-[#ff6d53] uppercase tracking-[.15em] sm:text-[11px] lg:text-xs animate-ultra-glow-pulse">Est. 2026 · India</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-24">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 font-mono-ui text-[10px] font-medium uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2 w-2 rounded-full bg-[#ff6d53]" /> About Us
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="max-w-[700px] font-display text-[clamp(1.8rem,6vw,4.5rem)] font-extrabold leading-[.9] tracking-[-.075em] text-[#182039] animate-ultra-fade-in-up">
              Building the future,<br /><span className="text-[#ff6d53] animate-ultra-color-shift">one line at a time.</span>
            </h1>
          </Reveal>
          <Reveal delay={2} direction="blur">
            <p className="mt-4 max-w-[550px] text-xs leading-6 text-[#182039]/65 sm:mt-6 sm:text-base sm:leading-7 animate-ultra-blur-in">
              {companyInfo.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founders - Now comes first */}
      <section className="border-y border-[#182039]/10 bg-[#e8e4ef]/45">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2 w-2 rounded-full bg-[#ff6d53]" /> The founders
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-[-.06em] text-[#182039]">
              Meet the team
            </h2>
            <p className="mt-3 max-w-[450px] text-sm leading-6 text-[#182039]/60">
              Two founders, one shared vision — building technology that makes a difference.
            </p>
          </Reveal>
          <div className="mt-10">
            <FounderCards />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="rounded-[22px] bg-[#182039] p-6 text-[#f4f1eb] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(24,32,57,.3)] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d9f47b] transition-transform duration-300 hover:rotate-12">
                  <Eye size={18} className="text-[#182039]" />
                </div>
                <span className="font-mono-ui text-[10px] uppercase tracking-[.17em] text-[#d9f47b]">Our Vision</span>
              </div>
              <p className="mt-5 font-display text-[clamp(1.3rem,2.5vw,2rem)] font-bold leading-[1.1] tracking-[-.04em]">
                {companyInfo.vision}
              </p>
            </div>
          </Reveal>
          <Reveal delay={1} direction="right">
            <div className="rounded-[22px] bg-white/70 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(24,32,57,.15)] sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff6d53] transition-transform duration-300 hover:rotate-12">
                  <Target size={18} className="text-white" />
                </div>
                <span className="font-mono-ui text-[10px] uppercase tracking-[.17em] text-[#ff6d53]">Our Mission</span>
              </div>
              <p className="mt-5 font-display text-[clamp(1.3rem,2.5vw,2rem)] font-bold leading-[1.1] tracking-[-.04em] text-[#182039]">
                {companyInfo.mission}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-[#182039]/10 bg-[#182039] text-[#f4f1eb]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[.2em] text-[#d9f47b]">
              <span className="h-2 w-2 rounded-full bg-[#d9f47b]" /> What drives us
            </div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-[-.06em]">
              Our values
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {companyInfo.values.map((value, index) => (
              <Reveal key={value.title} delay={index + 1} direction="scale">
                <div className="rounded-[18px] bg-white/5 p-5 transition-all duration-500 hover:bg-white/10 hover:scale-[1.05] hover:-translate-y-1">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d9f47b] transition-transform duration-300 hover:rotate-12">
                    {index === 0 && <Lightbulb size={16} className="text-[#182039]" />}
                    {index === 1 && <Sparkles size={16} className="text-[#182039]" />}
                    {index === 2 && <Heart size={16} className="text-[#182039]" />}
                    {index === 3 && <Target size={16} className="text-[#182039]" />}
                  </div>
                  <h3 className="mt-3 font-display text-base font-extrabold tracking-[-.04em]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-white/60">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 font-mono-ui text-[10px] uppercase tracking-[.2em] text-[#ff6d53]">
            <span className="h-2 w-2 rounded-full bg-[#ff6d53]" /> Why InnoApp
          </div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-[-.06em] text-[#182039]">
            Why choose us
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {companyInfo.whyChoose.map((reason, index) => (
            <Reveal key={reason} delay={(index % 3) + 1} direction="scale">
              <div className="flex items-start gap-3 rounded-xl bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/90 hover:translate-x-1">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6d53] transition-transform duration-300 hover:scale-110">
                  <Check size={10} className="text-white" />
                </span>
                <span className="text-sm text-[#182039]/70">{reason}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#182039]/10 bg-[#ff6d53]">
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8">
          <Reveal>
            <div className="flex flex-col items-center gap-5 text-center">
              <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-[-.06em] text-[#182039]">
                Ready to work together?
              </h2>
              <a
                href="mailto:innoapptechnologies@gmail.com?subject=Project%20Enquiry"
                className="inline-flex items-center gap-3 rounded-full bg-[#182039] px-6 py-3 text-xs font-extrabold uppercase tracking-[.14em] text-[#f4f1eb] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(24,32,57,.4)]"
              >
                Start a conversation <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
