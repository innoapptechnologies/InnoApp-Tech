import { ArrowRight, Check, Sparkles, Target, Eye, Heart, Lightbulb } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { FounderCards } from '@/components/FounderCards';
import { companyInfo } from '@/data/siteData';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f8f2] pt-[68px]">
      {/* Logo Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-4 py-6 sm:px-6 sm:py-8">
          <Reveal>
            <div className="flex items-center gap-4 sm:gap-6">
              <img src="/assets/logo.png" alt="InnoApp Technologies" className="h-[70px] w-[70px] rounded-2xl object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
              <div>
                <h1 className="font-display text-[clamp(1.5rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-.06em] text-[#182039]">
                  InnoApp Technologies
                </h1>
                <p className="mt-1.5 text-xs font-semibold text-[#ff6d53] uppercase tracking-[.15em] sm:text-sm">Independent Studio · India</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Founders Section */}
      <section className="border-y border-[#182039]/10 bg-[#e8e4ef]/45">
        <div className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <Reveal>
            <div className="mb-2 flex items-center gap-2 font-mono-ui text-[10px] font-semibold uppercase tracking-[.2em] text-[#ff6d53] sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#ff6d53]" /> The Founders
            </div>
            <h2 className="font-display text-[clamp(1.6rem,4vw,3rem)] font-extrabold tracking-[-.06em] text-[#182039]">
              Meet the <span className="text-[#ff6d53]">leadership.</span>
            </h2>
            <p className="mt-2 max-w-[480px] text-xs leading-5 text-[#182039]/80 sm:text-sm sm:leading-6">
              Two founders, one shared vision — building technology that makes a difference.
            </p>
          </Reveal>
          <div className="mt-8">
            <FounderCards />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="rounded-[22px] bg-[#182039] p-6 text-[#f4f1eb] transition-all duration-500 hover:scale-[1.01] hover:shadow-xl sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d9f47b]">
                  <Eye size={18} className="text-[#182039]" />
                </div>
                <span className="font-mono-ui text-xs font-semibold uppercase tracking-[.17em] text-[#d9f47b]">Our Vision</span>
              </div>
              <p className="mt-5 font-display text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold leading-[1.15] tracking-[-.04em]">
                {companyInfo.vision}
              </p>
            </div>
          </Reveal>
          <Reveal delay={1} direction="right">
            <div className="rounded-[22px] bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:scale-[1.01] hover:shadow-xl sm:p-8 border border-[#182039]/10">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ff6d53]">
                  <Target size={18} className="text-white" />
                </div>
                <span className="font-mono-ui text-xs font-semibold uppercase tracking-[.17em] text-[#ff6d53]">Our Mission</span>
              </div>
              <p className="mt-5 font-display text-[clamp(1.2rem,2.5vw,1.8rem)] font-bold leading-[1.15] tracking-[-.04em] text-[#182039]">
                {companyInfo.mission}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-[#182039]/10 bg-[#182039] text-[#f4f1eb]">
        <div className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <Reveal>
            <div className="mb-2 flex items-center gap-2 font-mono-ui text-[10px] font-semibold uppercase tracking-[.2em] text-[#d9f47b] sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#d9f47b]" /> What Drives Us
            </div>
            <h2 className="font-display text-[clamp(1.6rem,4vw,3rem)] font-extrabold tracking-[-.06em]">
              Our core <span className="text-[#d9f47b]">values.</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {companyInfo.values.map((value, index) => (
              <Reveal key={value.title} delay={index + 1} direction="scale">
                <div className="rounded-[20px] bg-white/5 p-5 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#d9f47b]">
                    {index === 0 && <Lightbulb size={18} className="text-[#182039]" />}
                    {index === 1 && <Sparkles size={18} className="text-[#182039]" />}
                    {index === 2 && <Heart size={18} className="text-[#182039]" />}
                    {index === 3 && <Target size={18} className="text-[#182039]" />}
                  </div>
                  <h3 className="mt-4 font-display text-base font-extrabold tracking-[-.04em] text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-white/80">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Reveal>
          <div className="mb-2 flex items-center gap-2 font-mono-ui text-[10px] font-semibold uppercase tracking-[.2em] text-[#ff6d53] sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#ff6d53]" /> Why InnoApp
          </div>
          <h2 className="font-display text-[clamp(1.6rem,4vw,3rem)] font-extrabold tracking-[-.06em] text-[#182039]">
            Why choose <span className="text-[#ff6d53]">us.</span>
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {companyInfo.whyChoose.map((reason, index) => (
            <Reveal key={reason} delay={(index % 3) + 1} direction="scale">
              <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4.5 border border-[#182039]/10 shadow-sm transition-all duration-300 hover:bg-white hover:translate-x-1">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6d53]">
                  <Check size={12} className="text-white" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#182039]/80">{reason}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#182039]/10 bg-[#ff6d53]">
        <div className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 sm:py-12">
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="font-display text-[clamp(1.6rem,4vw,3rem)] font-extrabold tracking-[-.06em] text-[#182039]">
                Ready to work together?
              </h2>
              <a
                href="mailto:innoapptechnologies@gmail.com?subject=Project%20Enquiry"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#182039] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[.14em] text-[#f4f1eb] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Start a conversation <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
