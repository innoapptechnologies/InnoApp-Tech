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

      <section className="mx-auto max-w-[1240px] px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="space-y-4">
          {allPackages.map((pkg, pkgIndex) => (
            <Reveal key={pkg.service} delay={(pkgIndex % 3) + 1}>
              <div className="rounded-[22px] bg-white/80 p-5 backdrop-blur-sm sm:p-6 border border-[#182039]/10 shadow-sm">
                <button
                  onClick={() => setExpandedService(expandedService === pkg.serviceId ? null : pkg.serviceId)}
                  className="flex w-full items-center justify-between text-left cursor-pointer group"
                >
                  <div>
                    <h2 className="font-display text-xl font-extrabold tracking-[-.04em] text-[#182039] group-hover:text-[#ff6d53] transition-colors sm:text-2xl">
                      {pkg.service}
                    </h2>
                    <p className="mt-1 text-xs text-[#182039]/65">
                      {pkg.tiers.length} packages available
                    </p>
                  </div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#182039]/20 transition-transform ${expandedService === pkg.serviceId ? 'rotate-180 bg-[#182039] text-[#d9f47b]' : 'group-hover:bg-[#182039]/5'}`}>
                    <ArrowRight size={14} className="rotate-90" />
                  </div>
                </button>

                {expandedService === pkg.serviceId && (
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {pkg.tiers.map((tier, index) => (
                      <Reveal key={tier.name} delay={index + 1} direction="scale">
                        <article
                          className={`relative flex min-h-[260px] flex-col justify-between rounded-[20px] p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${
                            index === 1 ? 'price-featured' : 'soft-card card-depth'
                          }`}
                        >
                          <div>
                            {index === 1 && (
                              <span className="absolute right-4 top-4 rounded-full bg-[#d9f47b] px-2.5 py-1 font-mono-ui text-[9px] font-bold uppercase tracking-[.13em] text-[#182039]">
                                Recommended
                              </span>
                            )}
                            <span className={`font-mono-ui text-[10px] font-bold uppercase tracking-[.17em] ${
                              index === 1 ? 'text-[#d9f47b]' : 'text-[#ff6d53]'
                            }`}>
                              {tier.technologyStack}
                            </span>
                            <h3 className="mt-2.5 font-display text-xl font-extrabold tracking-[-.05em] sm:text-2xl">{tier.name}</h3>
                            <p className={`mt-1.5 text-xs leading-5 ${index === 1 ? 'price-muted' : 'text-[#182039]/70'}`}>
                              {tier.description}
                            </p>
                            <div className={`mt-3 rounded-lg px-2.5 py-1.5 text-xs transition-all duration-300 ${
                              index === 1 ? 'bg-white/10 text-white/90' : 'bg-[#d9f47b]/30 text-[#182039]/80 font-medium'
                            }`}>
                              <span className="font-bold">Scope:</span> {tier.scope}
                            </div>
                            <ul className={`mt-4 space-y-2 border-t pt-3.5 text-xs ${
                              index === 1 ? 'border-white/15' : 'border-[#182039]/12'
                            }`}>
                              {tier.features.map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                  <Check size={12} className={index === 1 ? 'text-[#d9f47b]' : 'text-[#ff6d53]'} />
                                  <span className={index === 1 ? 'text-white/90' : 'text-[#182039]/80'}>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 pt-3">
                            <a
                              href={`mailto:innoapptechnologies@gmail.com?subject=${encodeURIComponent(`${pkg.service} - ${tier.name} Package`)}`}
                              className={`flex w-full items-center justify-between rounded-full px-4 py-3 text-xs font-extrabold uppercase tracking-[.12em] transition-all duration-300 hover:-translate-y-1 ${
                                index === 1
                                  ? 'bg-[#ff6d53] text-[#182039] hover:shadow-lg'
                                  : 'border border-[#182039]/25 text-[#182039] hover:bg-[#182039]/5'
                              }`}
                            >
                              Get Started <ArrowUpRight size={14} />
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
          <div className="mt-8 rounded-[22px] bg-[#182039] p-6 text-center text-[#f4f1eb] sm:p-8">
            <h3 className="font-display text-xl font-extrabold tracking-[-.05em] sm:text-2xl">
              Need something custom?
            </h3>
            <p className="mx-auto mt-2 max-w-[420px] text-xs leading-5 text-white/80 sm:text-sm">
              Every business is unique. Let&apos;s discuss your specific requirements and create a package tailored to your goals.
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
