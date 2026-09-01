import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { packages } from '@/data/siteData';

const allPackages = [
  {
    service: 'Website Development',
    serviceId: 'website-development',
    tiers: packages['website-development'] || packages.default,
  },
  {
    service: 'Web Applications',
    serviceId: 'web-applications',
    tiers: packages['web-applications'] || packages.default,
  },
  {
    service: 'SaaS / ERP Systems',
    serviceId: 'saas-erp',
    tiers: packages['saas-erp'] || packages.default,
  },
  {
    service: 'AI Automation',
    serviceId: 'ai-automation',
    tiers: packages['ai-automation'] || packages.default,
  },
  {
    service: 'Mobile Applications',
    serviceId: 'mobile-applications',
    tiers: packages['mobile-applications'] || packages.default,
  },
  {
    service: 'Custom Software',
    serviceId: 'custom-software',
    tiers: packages['custom-software'] || packages.default,
  },
];

export function PackagesPage() {
  const [expandedService, setExpandedService] = useState<string | null>('website-development');

  return (
    <div className="min-h-screen bg-[#f7f8f2] pt-[68px]">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-24">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 font-mono-ui text-[10px] font-medium uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2 w-2 rounded-full bg-[#ff6d53]" /> Our Packages
            </div>
          </Reveal>
                    <Reveal delay={1}>
                      <h1 className="max-w-[700px] font-display text-[clamp(1.8rem,6vw,4.5rem)] font-extrabold leading-[.9] tracking-[-.075em] text-[#182039] animate-ultra-fade-in-up">
                        Transparent Pricing<br /><span className="text-[#ff6d53]">for Every Stage</span>
                      </h1>
                    </Reveal>
          <Reveal delay={1}>
            <h1 className="max-w-[600px] font-display text-[clamp(1.8rem,6vw,4.5rem)] font-extrabold leading-[.9] tracking-[-.075em] text-[#182039]">
              Our <span className="text-[#ff6d53]">packages</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-[500px] text-xs leading-6 text-[#182039]/65 sm:mt-6 sm:text-base sm:leading-7">
              No mystery tiers. Choose the shape of support that fits where you are right now. Every package is tailored to your needs.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="space-y-6">
          {allPackages.map((pkg, pkgIndex) => (
            <Reveal key={pkg.service} delay={(pkgIndex % 3) + 1}>
              <div className="rounded-[22px] bg-white/70 p-5 backdrop-blur-sm sm:p-6">
                <button
                  onClick={() => setExpandedService(expandedService === pkg.serviceId ? null : pkg.serviceId)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <div>
                    <h2 className="font-display text-xl font-extrabold tracking-[-.05em] text-[#182039] sm:text-2xl">
                      {pkg.service}
                    </h2>
                    <p className="mt-1 text-xs text-[#182039]/55 sm:text-sm">
                      {pkg.tiers.length} packages available
                    </p>
                  </div>
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#182039]/20 transition-transform sm:h-10 sm:w-10 ${expandedService === pkg.serviceId ? 'rotate-180' : ''}`}>
                    <ArrowRight size={14} className="rotate-90 sm:size-[]" />
                  </div>
                </button>

                {expandedService === pkg.serviceId && (
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {pkg.tiers.map((tier, index) => (
                      <Reveal key={tier.name} delay={index + 1} direction="scale">
                        <article
                          className={`relative flex min-h-[260px] flex-col rounded-[20px] p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:min-h-[280px] sm:p-6 ${
                            index === 1 ? 'price-featured' : 'soft-card card-depth'
                          }`}
                        >
                          {index === 1 && (
                            <span className="absolute right-5 top-5 rounded-full bg-[#d9f47b] px-2.5 py-1 font-mono-ui text-[8px] font-bold uppercase tracking-[.13em] text-[#182039] animate-pulse sm:px-3 sm:py-1.5 sm:text-[9px]">
                              Recommended
                            </span>
                          )}
                          <span className={`font-mono-ui text-[9px] uppercase tracking-[.17em] sm:text-[10px] ${
                            index === 1 ? 'text-[#d9f47b]' : 'text-[#ff6d53]'
                          }`}>
                            {tier.technologyStack}
                          </span>
                          <h3 className="mt-3 font-display text-xl font-extrabold tracking-[-.05em] sm:text-2xl">{tier.name}</h3>
                          <p className={`mt-2 text-xs leading-5 ${index === 1 ? 'price-muted' : 'text-[#182039]/55'}`}>
                            {tier.description}
                          </p>
                          <div className={`mt-3 rounded-lg px-2.5 py-1.5 text-[11px] transition-all duration-300 ${
                            index === 1 ? 'bg-white/10 text-white/70' : 'bg-[#d9f47b]/30 text-[#182039]/70'
                          }`}>
                            <span className="font-bold">Scope:</span> {tier.scope}
                          </div>
                          <ul className={`mt-3 space-y-1.5 border-t pt-3 text-[11px] ${
                            index === 1 ? 'border-white/15' : 'border-[#182039]/12'
                          }`}>
                            {tier.features.map((item) => (
                              <li key={item} className="flex items-center gap-2">
                                <Check size={10} className={index === 1 ? 'text-[#d9f47b]' : 'text-[#ff6d53]'} />
                                <span className={index === 1 ? 'text-white/80' : 'text-[#182039]/65'}>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-auto pt-4">
                            <a
                              href={`mailto:innoapptechnologies@gmail.com?subject=${encodeURIComponent(`${pkg.service} - ${tier.name} Package`)}`}
                              className={`flex w-full items-center justify-between rounded-full px-3 py-2.5 text-[9px] font-extrabold uppercase tracking-[.12em] transition-all duration-300 hover:-translate-y-1 sm:px-4 sm:py-3 sm:text-[10px] ${
                                index === 1
                                  ? 'bg-[#ff6d53] text-[#182039] hover:shadow-[0_8px_20px_rgba(255,109,83,.4)]'
                                  : 'border border-[#182039]/20 text-[#182039] hover:bg-[#182039]/5'
                              }`}
                            >
                              Get Started <ArrowUpRight size={12} />
                            </a>
                          </div>
                        </article>
                      </Reveal>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={4}>
          <div className="mt-10 rounded-[22px] bg-[#182039] p-6 text-center text-[#f4f1eb] sm:p-8">
            <h3 className="font-display text-xl font-extrabold tracking-[-.05em] sm:text-2xl">
              Need something custom?
            </h3>
            <p className="mx-auto mt-3 max-w-[350px] text-xs text-white/60 sm:text-sm">
              Every business is unique. Let&apos;s discuss your specific requirements and create a package that fits perfectly.
            </p>
            <a
              href="mailto:innoapptechnologies@gmail.com?subject=Custom%20Package%20Enquiry"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#ff6d53] px-6 py-3 text-xs font-extrabold uppercase tracking-[.14em] text-[#182039] transition-transform hover:-translate-y-1"
            >
              Get a custom quote <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
