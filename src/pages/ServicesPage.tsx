import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { useState } from 'react';
import { useParams, Link } from 'wouter';
import { Reveal } from '@/components/Reveal';
import { services, packages } from '@/data/siteData';

export function ServicesPage() {
  const params = useParams();
  const [selectedStack, setSelectedStack] = useState<Record<string, number>>({});

  const activeServiceId = params?.serviceId;

  if (activeServiceId) {
    const service = services.find((s) => s.id === activeServiceId);
    if (!service) return <div className="pt-[68px]">Service not found</div>;

    const currentStack = selectedStack[activeServiceId] || 0;
    const servicePackages = packages[activeServiceId] || packages.default;

    return (
      <div className="min-h-screen bg-[#f7f8f2] pt-[68px]">
        <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 sm:py-14">
          <Reveal>
            <Link href="/services">
              <span className="mb-6 inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-[#182039]/60 transition-colors hover:text-[#ff6d53]">
                ← Back to Services
              </span>
            </Link>
          </Reveal>

          <Reveal delay={1}>
            <div className="mb-5 flex items-center gap-3 font-mono-ui text-[10px] font-medium uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2 w-2 rounded-full bg-[#ff6d53]" />
              {service.number} — Service Details
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:gap-6">
            <Reveal delay={2}>
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[18px] border border-[#182039]/10 bg-white/60 shadow-[0_16px_30px_rgba(24,32,57,0.08)] sm:h-24 sm:w-24 lg:h-28 lg:w-28">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            <div className="flex-1">
              <Reveal delay={2}>
                <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#182039] animate-ultra-fade-in-up">
                  {service.title}
                </h1>
              </Reveal>

              <Reveal delay={3} direction="blur">
                <p className="mt-5 max-w-[600px] text-base leading-7 text-[#182039]/65 animate-ultra-blur-in">
                  {service.description}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Reveal delay={4}>
              <div className="rounded-[20px] bg-white/70 p-5 backdrop-blur-sm sm:p-6">
                <h3 className="font-display text-base font-extrabold tracking-[-.04em] text-[#182039] sm:text-lg">Key Features</h3>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#d9f47b]">
                        <Check size={10} className="text-[#182039]" />
                      </span>
                      <span className="text-xs text-[#182039]/70 sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={5}>
              <div className="rounded-[20px] bg-white/70 p-5 backdrop-blur-sm sm:p-6">
                <h3 className="font-display text-base font-extrabold tracking-[-.04em] text-[#182039] sm:text-lg">Benefits</h3>
                <ul className="mt-4 space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ff6d53]">
                        <ArrowRight size={10} className="text-white" />
                      </span>
                      <span className="text-xs text-[#182039]/70 sm:text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={6}>
            <div className="mt-6 rounded-[20px] bg-[#182039] p-5 text-[#f4f1eb] sm:p-6">
              <h3 className="font-display text-base font-extrabold tracking-[-.04em] sm:text-lg">Technology Stack</h3>
              <p className="mt-2 text-xs text-white/60 sm:text-sm">Select your preferred technology stack to see tailored packages.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.stacks.map((stack, index) => (
                  <button
                    key={stack.name}
                    onClick={() => setSelectedStack((prev) => ({ ...prev, [activeServiceId]: index }))}
                    className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[.1em] transition-all ${
                      currentStack === index
                        ? 'bg-[#ff6d53] text-[#182039]'
                        : 'border border-white/20 text-white/70 hover:border-white/40'
                    }`}
                  >
                    {stack.name}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.stacks[currentStack].techs.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[.1em]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-10">
            <Reveal delay={7}>
              <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold tracking-[-.06em] text-[#182039]">
                Packages for {service.stacks[currentStack].name}
              </h2>
            </Reveal>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {servicePackages.map((pkg, index) => (
                <Reveal key={pkg.name} delay={8 + index}>
                  <article className={`relative flex min-h-[260px] flex-col rounded-[20px] p-5 sm:min-h-[280px] sm:p-6 ${
                    index === 1 ? 'price-featured' : 'soft-card'
                  }`}>
                    {index === 1 && (
                      <span className="absolute right-5 top-5 rounded-full bg-[#d9f47b] px-2.5 py-1 font-mono-ui text-[8px] font-bold uppercase tracking-[.13em] text-[#182039] sm:px-3 sm:py-1.5 sm:text-[9px]">
                        Recommended
                      </span>
                    )}
                    <span className={`font-mono-ui text-[9px] uppercase tracking-[.17em] sm:text-[10px] ${
                      index === 1 ? 'text-[#d9f47b]' : 'text-[#ff6d53]'
                    }`}>
                      {pkg.technologyStack}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-extrabold tracking-[-.05em] sm:text-2xl">{pkg.name}</h3>
                    <p className={`mt-2 text-xs leading-5 ${index === 1 ? 'price-muted' : 'text-[#182039]/55'}`}>
                      {pkg.description}
                    </p>
                    <div className={`mt-3 rounded-lg px-2.5 py-1.5 text-[11px] ${
                      index === 1 ? 'bg-white/10 text-white/70' : 'bg-[#d9f47b]/30 text-[#182039]/70'
                    }`}>
                      <span className="font-bold">Scope:</span> {pkg.scope}
                    </div>
                    <ul className={`mt-3 space-y-1.5 border-t pt-3 text-[11px] ${
                      index === 1 ? 'border-white/15' : 'border-[#182039]/12'
                    }`}>
                      {pkg.features.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check size={10} className={index === 1 ? 'text-[#d9f47b]' : 'text-[#ff6d53]'} />
                          <span className={index === 1 ? 'text-white/80' : 'text-[#182039]/65'}>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4">
                      <a
                        href={`mailto:innoapptechnologies@gmail.com?subject=${encodeURIComponent(`${service.title} - ${pkg.name} Package`)}`}
                        className={`flex w-full items-center justify-between rounded-full px-3 py-2.5 text-[9px] font-extrabold uppercase tracking-[.12em] transition-transform hover:-translate-y-0.5 sm:px-4 sm:py-3 sm:text-[10px] ${
                          index === 1
                            ? 'bg-[#ff6d53] text-[#182039]'
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
          </div>
        </div>
      </div>
    );
  }

  // Services listing
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
                  Services
                </h1>
                <p className="mt-2 text-[10px] font-medium text-[#ff6d53] uppercase tracking-[.15em] sm:text-[11px] lg:text-xs">What we build for you</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-24">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 font-mono-ui text-[10px] font-medium uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2 w-2 rounded-full bg-[#ff6d53]" /> Our Services
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="max-w-[600px] font-display text-[clamp(1.8rem,6vw,4.5rem)] font-extrabold leading-[.9] tracking-[-.075em] text-[#182039]">
              What we <span className="text-[#ff6d53]">build</span> for you
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-[500px] text-xs leading-6 text-[#182039]/65 sm:mt-6 sm:text-base sm:leading-7">
              From one brave idea to the system that runs your business, we bring design and engineering to the same table.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 pb-16 sm:px-8 sm:pb-24">
        {/* Work Process */}
        <Reveal>
          <div className="mb-10 sm:mb-14">
            <div className="mb-3 flex items-center gap-2 font-mono-ui text-[9px] uppercase tracking-[.2em] text-[#ff6d53] sm:mb-4 sm:text-[10px]"><span className="h-1.5 w-1.5 rounded-full bg-[#ff6d53] sm:h-2 sm:w-2" /> Our Process</div>
            <h2 className="max-w-[400px] font-display text-[clamp(1.4rem,3.5vw,2.8rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#182039]">How we bring your ideas to life</h2>
          </div>
        </Reveal>
        <div className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-3">
          {[
            { step: '01', title: 'Discovery & Research', desc: 'Understanding your vision, gathering requirements, and analyzing the market landscape' },
            { step: '02', title: 'Strategic Planning', desc: 'Crafting a roadmap with clear milestones, timelines, and resource allocation' },
            { step: '03', title: 'Creative Design', desc: 'Designing intuitive interfaces and experiences that captivate and engage users' },
            { step: '04', title: 'Development', desc: 'Building robust solutions with clean code and cutting-edge technologies' },
            { step: '05', title: 'Quality Testing', desc: 'Rigorous testing to ensure performance, security, and seamless functionality' },
            { step: '06', title: 'Launch & Beyond', desc: 'Deploying to production with ongoing support and continuous optimization' },
          ].map((process, index) => (
            <Reveal key={process.step} delay={(index % 3) + 1}>
              <div className="soft-card rounded-[16px] p-4 sm:p-5">
                <span className="font-mono-ui text-[10px] font-bold text-[#ff6d53] sm:text-[11px]">{process.step}</span>
                <h3 className="mt-2 font-display text-sm font-extrabold tracking-[-.04em] text-[#182039] sm:text-base">{process.title}</h3>
                <p className="mt-1.5 text-[10px] leading-4 text-[#182039]/55 sm:text-[11px] sm:leading-5">{process.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={(index % 4) + 1} direction="scale">
              <Link href={`/services/${service.id}`}>
                <article className="card-depth group relative flex min-h-[180px] cursor-pointer flex-col overflow-hidden rounded-[20px] p-5 transition-all duration-500 sm:min-h-[200px] sm:p-6" style={{ backgroundImage: `linear-gradient(180deg, rgba(24, 32, 57, 0.1), rgba(24, 32, 57, 0.72)), url('${service.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_32%)]" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#182039] text-[#d9f47b] transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                        <span className="font-mono-ui text-[10px] font-bold">{service.number}</span>
                      </div>
                      <span className="font-mono-ui text-[9px] text-white/80">{service.number}</span>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-end justify-between gap-2">
                        <h3 className="font-display text-base font-extrabold tracking-[-.04em] text-white sm:text-lg">{service.title}</h3>
                        <ArrowUpRight size={16} className="shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </div>
                      <p className="mt-2 text-[11px] leading-5 text-white/85 line-clamp-2 sm:text-xs">{service.copy}</p>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
