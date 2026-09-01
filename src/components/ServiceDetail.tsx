import { ArrowRight, ArrowUpRight, Check, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { services, packages } from '@/data/siteData';
import { Reveal } from './Reveal';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
}

export function ServiceDetail({ serviceId, onBack }: ServiceDetailProps) {
  const service = services.find((s) => s.id === serviceId);
  const [selectedStack, setSelectedStack] = useState(0);
  const servicePackages = packages[serviceId] || packages.default;

  if (!service) return null;

  return (
    <div className="min-h-screen bg-[#f7f8f2] pt-[74px]">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-16">
        <Reveal>
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-sm font-bold text-[#182039]/60 transition-colors hover:text-[#ff6d53]"
          >
            <ChevronLeft size={18} />
            Back to Services
          </button>
        </Reveal>

        <Reveal delay={1}>
          <div className="mb-8 flex items-center gap-3 font-mono-ui text-[10px] font-medium uppercase tracking-[.2em] text-[#ff6d53]">
            <span className="h-2 w-2 rounded-full bg-[#ff6d53]" />
            {service.number} — Service Details
          </div>
        </Reveal>

        <Reveal delay={2}>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#182039]">
            {service.title}
          </h1>
        </Reveal>

        <Reveal delay={3}>
          <p className="mt-6 max-w-[700px] text-lg leading-7 text-[#182039]/65">
            {service.description}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal delay={4}>
            <div className="rounded-[26px] bg-white/70 p-8 backdrop-blur-sm">
              <h3 className="font-display text-xl font-extrabold tracking-[-.04em] text-[#182039]">
                Key Features
              </h3>
              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d9f47b]">
                      <Check size={12} className="text-[#182039]" />
                    </span>
                    <span className="text-sm text-[#182039]/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={5}>
            <div className="rounded-[26px] bg-white/70 p-8 backdrop-blur-sm">
              <h3 className="font-display text-xl font-extrabold tracking-[-.04em] text-[#182039]">
                Benefits
              </h3>
              <ul className="mt-6 space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff6d53]">
                      <ArrowRight size={12} className="text-white" />
                    </span>
                    <span className="text-sm text-[#182039]/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={6}>
          <div className="mt-8 rounded-[26px] bg-[#182039] p-8 text-[#f4f1eb]">
            <h3 className="font-display text-xl font-extrabold tracking-[-.04em]">
              Technology Stack
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Select your preferred technology stack to see tailored packages.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.stacks.map((stack, index) => (
                <button
                  key={stack.name}
                  onClick={() => setSelectedStack(index)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[.1em] transition-all ${
                    selectedStack === index
                      ? 'bg-[#ff6d53] text-[#182039]'
                      : 'border border-white/20 text-white/70 hover:border-white/40'
                  }`}
                >
                  {stack.name}
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.stacks[selectedStack].techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[.1em]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12">
          <Reveal delay={7}>
            <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-[-.06em] text-[#182039]">
              Packages for {service.stacks[selectedStack].name}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {servicePackages.map((pkg, index) => (
              <Reveal key={pkg.name} delay={8 + index}>
                <article className={`relative flex min-h-[320px] flex-col rounded-[26px] p-7 ${
                  index === 1 ? 'price-featured' : 'soft-card'
                }`}>
                  {index === 1 && (
                    <span className="absolute right-7 top-7 rounded-full bg-[#d9f47b] px-3 py-1.5 font-mono-ui text-[9px] font-bold uppercase tracking-[.13em] text-[#182039]">
                      Recommended
                    </span>
                  )}
                  <span className={`font-mono-ui text-[10px] uppercase tracking-[.17em] ${
                    index === 1 ? 'text-[#d9f47b]' : 'text-[#ff6d53]'
                  }`}>
                    {pkg.technologyStack}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-extrabold tracking-[-.05em]">
                    {pkg.name}
                  </h3>
                  <p className={`mt-2 text-sm leading-5 ${
                    index === 1 ? 'price-muted' : 'text-[#182039]/55'
                  }`}>
                    {pkg.description}
                  </p>
                  <div className={`mt-4 rounded-lg px-3 py-2 text-xs ${
                    index === 1 ? 'bg-white/10 text-white/70' : 'bg-[#d9f47b]/30 text-[#182039]/70'
                  }`}>
                    <span className="font-bold">Scope:</span> {pkg.scope}
                  </div>
                  <ul className={`mt-4 space-y-2 border-t pt-4 text-xs ${
                    index === 1 ? 'border-white/15' : 'border-[#182039]/12'
                  }`}>
                    {pkg.features.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check size={12} className={index === 1 ? 'text-[#d9f47b]' : 'text-[#ff6d53]'} />
                        <span className={index === 1 ? 'text-white/80' : 'text-[#182039]/65'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <a
                      href={`mailto:innoapptechnologies@gmail.com?subject=${encodeURIComponent(`${service.title} - ${pkg.name} Package`)}`}
                      className={`flex w-full items-center justify-between rounded-full px-4 py-3 text-[10px] font-extrabold uppercase tracking-[.12em] transition-transform hover:-translate-y-0.5 ${
                        index === 1
                          ? 'bg-[#ff6d53] text-[#182039]'
                          : 'border border-[#182039]/20 text-[#182039] hover:bg-[#182039]/5'
                      }`}
                    >
                      Get Started <ArrowUpRight size={14} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
