import { ArrowRight, ArrowUpRight, Sparkles, Play } from 'lucide-react';
import { Link } from 'wouter';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data/siteData';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <PackagesPreview />
      <WorkPreview />
      <InternshipsPreview />
      <ContactCTA />
    </>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-[68px]">
      <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 h-[300px] opacity-60 sm:h-[400px] lg:h-[500px]" />
      <div className="mx-auto grid min-h-[400px] max-w-[1240px] items-center gap-6 px-4 pb-8 pt-6 sm:px-6 sm:min-h-[480px] sm:gap-8 sm:pb-12 sm:pt-8 md:gap-10 lg:px-8 lg:min-h-[520px] lg:pb-16 lg:pt-12 xl:grid-cols-[1.02fr_.98fr] xl:gap-16">
        <div className="relative z-10">
          <Reveal>
            <div className="mb-3 flex items-center gap-2 font-mono-ui text-[8px] font-medium uppercase tracking-[.2em] text-[#ff6d53] sm:mb-4 sm:text-[9px] lg:mb-5 lg:text-[10px]">
              <span className="h-1 w-1.5 rounded-full bg-[#ff6d53] sm:h-1.5 sm:w-2 lg:h-2 lg:w-2" /> Independent software studio · Est. 2026
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="max-w-[400px] font-display text-[clamp(1.4rem,6vw,4.5rem)] font-extrabold leading-[.88] tracking-[-.075em] text-[#182039] sm:max-w-[500px] sm:text-[clamp(1.8rem,5.5vw,4.5rem)] lg:text-[clamp(2.2rem,5vw,4.5rem)] animate-ultra-fade-in-up">
              WHEN YOUR<br /><span className="text-[#ff6d53]">APPLICATION</span><br />MEETS OUR<br /><span className="relative inline-block">INNOVATION<Sparkles size={14} strokeWidth={2.3} className="absolute -right-4 -top-1 text-[#ff6d53] animate-pulse sm:-right-5 sm:-top-1 lg:-right-7 lg:-top-2" /></span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-3 flex max-w-[300px] items-start gap-2.5 sm:mt-4 sm:max-w-[380px] sm:gap-3 lg:mt-6 lg:max-w-[420px] animate-ultra-slide-left">
              <div className="mt-1.5 h-px w-6 shrink-0 bg-[#182039]/40 sm:mt-2 sm:w-8 lg:w-10 animate-ultra-gradient-flow" />
              <p className="text-[11px] leading-4 text-[#182039]/67 sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">High-performance, visually stunning, and affordable web solutions for businesses and students.</p>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-2.5 lg:mt-7 lg:gap-3">
              <Link href="/contact">
                <span className="group flex cursor-pointer items-center gap-2 rounded-full bg-[#ff6d53] px-3 py-2 text-[8px] font-extrabold uppercase tracking-[.13em] text-[#182039] transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0_#182039] hover:animate-ultra-pulse-glow sm:px-4 sm:py-2.5 sm:text-[9px] lg:px-5 lg:py-3 lg:text-[10px]" data-testid="link-hero-start">
                  Let&apos;s build <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1 sm:size-[]" />
                </span>
              </Link>
              <Link href="/work">
                <span className="flex cursor-pointer items-center gap-2 rounded-full border border-[#182039]/20 px-3 py-2 text-[8px] font-extrabold uppercase tracking-[.13em] text-[#182039] transition-all duration-300 hover:border-[#182039] hover:bg-[#182039]/5 hover:-translate-y-1 hover:animate-ultra-bounce-y sm:px-4 sm:py-2.5 sm:text-[9px] lg:px-5 lg:py-3 lg:text-[10px]" data-testid="link-hero-work">
                  See our work <Play size={8} fill="currentColor" className="sm:size-[] lg:size-[]" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

  <Reveal className="relative mx-auto w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] animate-ultra-scale-in" delay={2} direction="scale">
          <div className="relative aspect-square">
            <div className="hero-ring absolute left-[8%] top-[8%] h-[77%] w-[77%] rounded-[42%] border border-[#182039]/20 animate-ultra-swing" />
            <div className="hero-ring absolute left-[15%] top-[15%] h-[63%] w-[63%] rounded-[42%] border border-[#ff6d53]/30 [animation-delay:-3s] animate-ultra-rotate-in" />
            <div className="hero-orb animate-float-slow absolute left-[18%] top-[20%] grid h-[52%] w-[52%] place-items-center rounded-[38%] bg-[#d9f47b] shadow-[18px_22px_0_#ff6d53]">
              <div className="h-[48%] w-[48%] rounded-full border-[12px] border-[#20243f] bg-[#f4f1eb] shadow-[inset_11px_11px_0_#d9f47b] sm:border-[14px] lg:border-[20px]" />
            </div>
            <div className="absolute right-[2%] top-[8%] flex w-[90px] flex-col gap-1 rounded-[14px] border border-white/70 bg-white/55 p-2 shadow-[0_20px_45px_rgba(24,32,57,.12)] backdrop-blur-xl transition-transform duration-500 hover:scale-105 animate-ultra-bounce-in sm:w-[110px] sm:gap-1.5 sm:p-2.5 lg:w-[140px] lg:gap-2 lg:p-3">
              <div className="flex items-center justify-between"><span className="font-mono-ui text-[6px] uppercase tracking-[.13em] text-[#182039]/55 sm:text-[7px] lg:text-[8px]">signal / 01</span><span className="h-1 w-1.5 rounded-full bg-[#ff6d53] animate-pulse sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2" /></div>
              <div className="flex h-5 items-end gap-1 sm:h-6 lg:h-8">
                {[35, 55, 42, 73, 61, 88, 76].map((height, i) => <span key={i} className="w-full rounded-t bg-[#182039] transition-all duration-300 hover:opacity-100 animate-ultra-bounce-y" style={{ height: `${height}%`, opacity: .32 + i * .08, animationDelay: `${i * 100}ms` }} />)}
              </div>
              <span className="font-display text-[15px] font-extrabold tracking-[-.06em] sm:text-lg lg:text-xl">build / better</span>
            </div>
            <div className="absolute bottom-[6%] left-[2%] rounded-[14px] bg-[#20243f] px-2 py-1.5 text-[#f4f1eb] shadow-[8px_8px_0_#ff6d53] transition-transform duration-300 hover:scale-105 animate-ultra-flip-in sm:px-2.5 sm:py-1.5 lg:px-3 lg:py-2">
              <span className="block font-mono-ui text-[6px] uppercase tracking-[.18em] text-[#d9f47b] sm:text-[7px] lg:text-[8px]">innoapp technologies</span>
              <span className="mt-0.5 block font-display text-[13px] font-bold tracking-[-.05em] sm:text-base lg:text-lg">ideas → impact</span>
            </div>
            <span className="absolute bottom-[22%] right-[7%] grid h-7 w-7 place-items-center rounded-full border border-[#182039]/20 text-[#182039] transition-all duration-300 hover:scale-110 hover:border-[#ff6d53] hover:animate-ultra-rotate-in sm:h-8 sm:w-8 lg:h-10 lg:w-10"><ArrowUpRight size={12} className="sm:size-[] lg:size-[]" /></span>
          </div>
        </Reveal>
      </div>
      <div className="border-y border-[#182039]/10 bg-[#d9f47b]/35">
        <div className="marquee-track animate-ultra-gradient-flow flex w-max items-center gap-4 py-2 font-mono-ui text-[7px] font-medium uppercase tracking-[.18em] text-[#182039]/70 sm:gap-6 sm:py-2.5 sm:text-[8px] lg:gap-8 lg:py-3 lg:text-[9px]">
          {Array.from({ length: 2 }).flatMap((_, group) => ['Design with intent', 'Build for momentum', 'Ship what matters', 'Est. 2026'].map((item, i) => <span key={`${group}-${i}`} className="flex items-center gap-4 sm:gap-6 lg:gap-8">{item}<Sparkles size={6} className="text-[#ff6d53] sm:size-[] lg:size-[]" /></span>))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section id="services" className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <Reveal>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono-ui text-[8px] uppercase tracking-[.2em] text-[#ff6d53] sm:mb-3 sm:text-[9px] lg:mb-4 lg:text-[10px]"><span className="h-1 w-1.5 rounded-full bg-[#ff6d53] sm:h-1.5 sm:w-2 lg:h-2 lg:w-2" /> What we do</div>
            <h2 className="max-w-[350px] font-display text-[clamp(1.4rem,4vw,3.2rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#182039] sm:max-w-[400px] lg:text-[clamp(1.6rem,4vw,3.2rem)]">Software that<br /><span className="text-[#ff6d53]">pulls its weight.</span></h2>
          </div>
          <p className="max-w-[220px] text-[11px] leading-4 text-[#182039]/60 sm:max-w-[250px] sm:text-[11px] sm:leading-5 lg:text-xs lg:leading-6">From one brave idea to the system that runs your business.</p>
        </div>
      </Reveal>
        <div className="mt-6 overflow-x-auto scrollbar-hide sm:mt-8 cursor-grab active:cursor-grabbing">
          <div className="flex gap-2 pb-3 sm:gap-2.5 sm:pb-4 lg:gap-3" style={{ scrollSnapType: 'x mandatory' }}>
            {services.map((service, index) => (
            <Reveal key={service.id} delay={(index % 3) + 1}>
              <Link href={`/services/${service.id}`}>
                <article className={`soft-card soft-card-hover group relative flex aspect-[1.15/1] w-[260px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-[18px] p-3 sm:w-[290px] sm:p-4 md:w-[310px] lg:w-[340px] lg:p-5 ${index === 3 ? 'bg-[#d9f47b]/50' : ''}`} style={{ scrollSnapAlign: 'start', backgroundImage: `linear-gradient(180deg, rgba(24, 32, 57, 0.08), rgba(24, 32, 57, 0.68)), url('${service.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} data-testid={`card-service-${service.number}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_36%)]" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#182039] text-[#d9f47b] transition-transform group-hover:rotate-6 sm:h-9 sm:w-9 lg:h-10 lg:w-10 lg:rounded-xl">
                        <span className="font-mono-ui text-[8px] font-bold sm:text-[9px] lg:text-[9px]">{service.number}</span>
                      </div>
                      <span className="font-mono-ui text-[7px] text-white/80 sm:text-[8px] lg:text-[8px]">{service.number}</span>
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-end justify-between gap-2">
                        <h3 className="font-display text-[13px] font-extrabold tracking-[-.04em] text-white sm:text-sm lg:text-base">{service.title}</h3>
                        <ArrowUpRight size={12} className="shrink-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 sm:size-[] lg:size-[]" />
                      </div>
                      <p className="mt-1 text-[9px] leading-3.5 text-white/80 line-clamp-2 sm:mt-1.5 sm:text-[10px] sm:leading-4 lg:text-[11px] lg:leading-5">{service.copy}</p>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal delay={3}>
        <div className="mt-3 flex justify-center sm:mt-4 lg:mt-6">
          <Link href="/services">
            <span className="group flex cursor-pointer items-center gap-1.5 text-[10px] font-bold text-[#ff6d53] transition-colors hover:text-[#182039] sm:text-[11px] lg:text-xs">
              View all services <ArrowRight size={10} className="transition-transform group-hover:translate-x-1 sm:size-[] lg:size-[]" />
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export function WorkPreview() {
  return (
    <section id="work" className="mx-auto max-w-[1240px] px-4 pb-12 pt-2 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
      <Reveal>
        <div className="mb-4 flex items-end justify-between gap-3 sm:mb-6 sm:gap-4 lg:mb-8">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono-ui text-[8px] uppercase tracking-[.2em] text-[#ff6d53] sm:mb-3 sm:text-[9px] lg:mb-4 lg:text-[10px]"><span className="h-1 w-1.5 rounded-full bg-[#ff6d53] sm:h-1.5 sm:w-2 lg:h-2 lg:w-2" /> Selected work</div>
            <h2 className="font-display text-[clamp(1.4rem,4vw,3.2rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#182039] lg:text-[clamp(1.6rem,4vw,3.2rem)]">One project.<br /><span className="text-[#ff6d53]">Many dimensions.</span></h2>
          </div>
          <Link href="/work">
            <span className="hidden cursor-pointer font-mono-ui text-[8px] uppercase tracking-[.16em] text-[#182039]/45 transition-colors hover:text-[#ff6d53] sm:block sm:text-[9px] lg:text-[10px]">
              View details →
            </span>
          </Link>
        </div>
      </Reveal>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-3 sm:gap-2.5 sm:pb-4 lg:gap-3" style={{ scrollSnapType: 'x mandatory' }}>
          <Reveal delay={1}>
            <a
              href="https://www.vcan3d.com"
              target="_blank"
              rel="noopener noreferrer"
              className="vcan-stage glow-effect group relative block aspect-square w-[240px] shrink-0 overflow-hidden rounded-[18px] p-3 text-[#f4f1eb] transition-all duration-500 hover:scale-[1.03] sm:w-[260px] sm:p-4 lg:w-[280px] lg:p-5"
              data-testid="card-work-vcan"
            >
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="font-mono-ui text-[9px] uppercase tracking-[.2em] text-[#d9f47b] sm:text-[10px]">VCAN 3D</div>
                  <span className="grid h-8 w-8 cursor-pointer place-items-center rounded-full border border-white/25 transition-all duration-300 hover:bg-white/10 hover:rotate-45 sm:h-10 sm:w-10" aria-label="Visit VCAN 3D">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
                <div className="max-w-[280px] sm:max-w-[320px]">
                  <h3 className="font-display text-[clamp(1.4rem,4vw,2rem)] font-extrabold leading-[.82] tracking-[-.08em] sm:text-[clamp(1.6rem,3vw,2rem)]">A new<br /><span className="text-[#d9f47b]">dimension</span><br />of work.</h3>
                  <p className="mt-3 max-w-[240px] text-[10px] leading-5 text-white/62 sm:mt-4 sm:text-[11px] sm:leading-6">A 3D experience that turns complexity into something you can see, feel, and move through.</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 font-mono-ui text-[7px] uppercase tracking-[.13em] text-white/55 sm:gap-2 sm:text-[8px]">
                  <span className="rounded-full border border-white/15 px-2 py-1 transition-all duration-300 hover:bg-white/10">Web experience</span>
                  <span className="rounded-full border border-white/15 px-2 py-1 transition-all duration-300 hover:bg-white/10">3D interface</span>
                  <span className="rounded-full border border-white/15 px-2 py-1 transition-all duration-300 hover:bg-white/10">2026</span>
                </div>
              </div>
              <div className="absolute bottom-[7%] right-[3%] h-[60px] w-[60px] rounded-[32%] bg-[#d9f47b] p-1.5 vcan-cube transition-transform duration-500 group-hover:rotate-6 sm:bottom-[10%] sm:right-[8%] sm:h-[80px] sm:w-[80px] sm:p-2">
                <div className="h-full w-full rounded-[26%] border border-[#20243f]/30 bg-[#b7d65a]">
                  <div className="flex h-full items-center justify-center"><span className="font-display text-[1.5rem] font-extrabold tracking-[-.12em] text-[#20243f] sm:text-[2rem]">V</span></div>
                </div>
              </div>
              <span className="absolute right-[5%] top-[26%] hidden font-mono-ui text-[7px] uppercase tracking-[.16em] text-white/40 [writing-mode:vertical-rl] sm:block">move through the possible</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section id="studio" className="border-y border-[#182039]/10 bg-[#e8e4ef]/45">
      <div className="mx-auto grid max-w-[1240px] gap-6 px-4 py-12 sm:px-6 sm:py-12 sm:gap-8 lg:px-8 lg:py-16 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-20">
            <div className="mb-4 flex items-center gap-3">
              <img src="/assets/logo.png" alt="InnoApp Technologies" className="h-16 w-16 rounded-2xl object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24" />
            </div>
            <div className="mb-2 flex items-center gap-2 font-mono-ui text-[8px] uppercase tracking-[.2em] text-[#ff6d53] sm:mb-3 sm:text-[9px] lg:mb-4 lg:text-[10px]"><span className="h-1 w-1.5 rounded-full bg-[#ff6d53] sm:h-1.5 sm:w-2 lg:h-2 lg:w-2" /> The studio</div>
            <h2 className="font-display text-[clamp(1.4rem,4vw,3.2rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#182039] lg:text-[clamp(1.6rem,4vw,3.2rem)]">Small team.<br /><span className="text-[#ff6d53]">Big range.</span></h2>
            <p className="mt-3 max-w-[240px] text-[11px] leading-4 text-[#182039]/65 sm:mt-4 sm:max-w-[260px] sm:text-[11px] sm:leading-5 lg:mt-6 lg:text-xs lg:leading-6">InnoApp Technologies was founded in 2026 by two people who believe the best digital work sits where precision meets possibility.</p>
            <Link href="/about">
              <span className="mt-3 inline-flex cursor-pointer items-center gap-1.5 text-[10px] font-bold text-[#ff6d53] transition-all duration-300 hover:text-[#182039] hover:gap-2.5 sm:mt-4 sm:text-[11px] lg:mt-5 lg:text-xs">
                Learn more <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1 sm:size-[] lg:size-[]" />
              </span>
            </Link>
          </div>
        </Reveal>
        <div className="space-y-2 sm:space-y-2.5">
          <Reveal delay={1} direction="left">
            <div className="rounded-[18px] bg-[#182039] p-4 text-[#f4f1eb] transition-transform duration-300 hover:scale-[1.02] sm:p-5 lg:p-6">
              <div className="flex justify-between">
                <span className="font-mono-ui text-[8px] uppercase tracking-[.17em] text-[#d9f47b] sm:text-[9px] lg:text-[10px]">Our north star</span>
                <Sparkles size={12} className="text-[#ff6d53] animate-pulse sm:size-[] lg:size-[]" />
              </div>
              <p className="mt-8 max-w-[350px] font-display text-[clamp(1rem,3vw,2.2rem)] font-bold leading-[.98] tracking-[-.06em] sm:mt-10 sm:max-w-[400px] lg:mt-12">
                &ldquo;Make the complicated feel <span className="text-[#d9f47b]">obvious.</span>&rdquo;
              </p>
            </div>
          </Reveal>
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-2.5">
            <Reveal delay={2} direction="left">
              <div className="soft-card card-depth rounded-[18px] p-3 sm:p-4 lg:p-5">
                <span className="font-mono-ui text-[8px] uppercase tracking-[.17em] text-[#ff6d53] sm:text-[9px] lg:text-[10px]">Founder / CEO</span>
                <h3 className="mt-4 font-display text-[15px] font-extrabold tracking-[-.05em] text-[#182039] sm:mt-6 sm:text-base lg:text-lg">Syed Afrid M</h3>
                <p className="mt-1 text-[9px] leading-3.5 text-[#182039]/55 sm:mt-1.5 sm:text-[10px] sm:leading-4 lg:text-[11px] lg:leading-5">Vision, product, and the questions that make the work better.</p>
              </div>
            </Reveal>
            <Reveal delay={3} direction="left">
              <div className="soft-card card-depth rounded-[18px] bg-[#d9f47b]/60 p-3 sm:p-4 lg:p-5">
                <span className="font-mono-ui text-[8px] uppercase tracking-[.17em] text-[#ff6d53] sm:text-[9px] lg:text-[10px]">Founder / MD</span>
                <h3 className="mt-4 font-display text-[15px] font-extrabold tracking-[-.05em] text-[#182039] sm:mt-6 sm:text-base lg:text-lg">Aafrin Fathima S</h3>
                <p className="mt-1 text-[9px] leading-3.5 text-[#182039]/55 sm:mt-1.5 sm:text-[10px] sm:leading-4 lg:text-[11px] lg:leading-5">Operations, momentum, and making ambitious ideas real.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PackagesPreview() {
  const packages = [
    { name: 'Starter', detail: 'For a sharp first launch', price: 'A clear beginning', items: ['Responsive website', 'Core UI direction', 'Launch-ready handover'] },
    { name: 'Business', detail: 'For teams ready to move', price: 'Built around your workflow', items: ['Strategy + product design', 'Custom web application', 'Priority collaboration'], featured: true },
    { name: 'Premium', detail: 'For ambitious systems', price: 'A deeper technical partnership', items: ['End-to-end product build', 'Automation and integrations', 'Ongoing product thinking'] },
  ];

  return (
    <section id="packages" className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <Reveal>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono-ui text-[8px] uppercase tracking-[.2em] text-[#ff6d53] sm:mb-3 sm:text-[9px] lg:mb-4 lg:text-[10px]"><span className="h-1 w-1.5 rounded-full bg-[#ff6d53] sm:h-1.5 sm:w-2 lg:h-2 lg:w-2" /> A place to start</div>
            <h2 className="font-display text-[clamp(1.4rem,4vw,3.2rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#182039] lg:text-[clamp(1.6rem,4vw,3.2rem)]">Pick your<br /><span className="text-[#ff6d53]">starting point.</span></h2>
          </div>
          <p className="max-w-[220px] text-[11px] leading-4 text-[#182039]/60 sm:max-w-[250px] sm:text-[11px] sm:leading-5 lg:text-xs lg:leading-6">No mystery tiers. Choose the shape of support that fits where you are right now.</p>
        </div>
      </Reveal>
      <div className="mt-6 sm:mt-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
            {packages.map((pack, index) => (
              <Reveal key={pack.name} delay={index + 1} direction="scale">
                <article className={`group relative flex min-h-[250px] flex-col rounded-[18px] p-4 transition-all duration-500 hover:-translate-y-2 sm:min-h-[280px] sm:p-5 lg:min-h-[320px] lg:p-6 ${pack.featured ? 'price-featured' : 'soft-card card-depth'}`} data-testid={`card-package-${pack.name.toLowerCase()}`}>
                  {pack.featured && <span className="absolute right-3 top-3 rounded-full bg-[#d9f47b] px-1.5 py-0.5 font-mono-ui text-[6px] font-bold uppercase tracking-[.13em] text-[#182039] animate-pulse sm:right-4 sm:top-4 sm:px-2 sm:py-1 sm:text-[7px] lg:right-6 lg:top-6 lg:px-2.5 lg:py-1 lg:text-[8px]">Best value</span>}
                  <span className={`font-mono-ui text-[7px] uppercase tracking-[.17em] sm:text-[8px] lg:text-[9px] ${pack.featured ? 'text-[#d9f47b]' : 'text-[#ff6d53]'}`}>{pack.detail}</span>
                  <h3 className="mt-2 font-display text-[18px] font-extrabold tracking-[-.06em] sm:mt-3 sm:text-xl lg:mt-4 lg:text-2xl">{pack.name}</h3>
                  <p className={`mt-1 max-w-[160px] text-[10px] leading-4 sm:mt-1.5 sm:max-w-[180px] sm:text-[11px] sm:leading-5 lg:mt-2 lg:text-xs ${pack.featured ? 'price-muted' : 'text-[#182039]/55'}`}>{pack.price}</p>
                  <ul className={`mt-3 space-y-1 border-t pt-3 text-[9px] sm:mt-4 sm:space-y-1.5 sm:pt-4 sm:text-[10px] lg:mt-6 lg:space-y-2 lg:pt-4 lg:text-[11px] ${pack.featured ? 'border-white/15' : 'border-[#182039]/12'}`}>
                    {pack.items.map(item => <li key={item} className="flex items-center gap-2"><span className={`flex h-2.5 w-2.5 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 sm:h-3 sm:w-3 lg:h-3.5 lg:w-3.5 ${pack.featured ? 'bg-[#d9f47b]' : 'bg-[#ff6d53]'}`}><ArrowRight size={6} className={pack.featured ? 'text-[#182039]' : 'text-white'} /></span> <span className={pack.featured ? 'text-white/80' : ''}>{item}</span></li>)}
                  </ul>
                  <Link href="/packages" className="mt-auto">
                    <span className={`mt-3 flex w-full cursor-pointer items-center justify-between rounded-full px-2.5 py-2 text-[7px] font-extrabold uppercase tracking-[.14em] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:mt-4 sm:px-3 sm:py-2.5 sm:text-[8px] lg:mt-5 lg:px-4 lg:py-3 lg:text-[9px] ${pack.featured ? 'border border-white/25 text-[#f4f1eb] hover:bg-white/10' : 'border border-[#182039]/20 text-[#182039] hover:bg-[#182039]/5'}`}>
                      Choose {pack.name} <ArrowRight size={10} className="sm:size-[] lg:size-[]" />
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function InternshipsPreview() {
  const internships = [
    { name: 'AI / ML', category: 'AI' },
    { name: 'Generative AI', category: 'AI' },
    { name: 'MERN Stack', category: 'Web' },
    { name: 'Django', category: 'Web' },
    { name: 'Front-End', category: 'Web' },
    { name: 'Data Science', category: 'Data' },
    { name: 'Computer Vision', category: 'AI' },
    { name: 'Modern Web', category: 'Web' },
  ];

  return (
    <section id="internships" className="bg-[#ff6d53] text-[#182039]">
      <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <Reveal>
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2 font-mono-ui text-[8px] uppercase tracking-[.2em] text-[#182039]/80 sm:mb-3 sm:text-[9px] lg:mb-4 lg:text-[10px]"><span className="h-1 w-1.5 rounded-full bg-[#d9f47b] sm:h-1.5 sm:w-2 lg:h-2 lg:w-2" /> Learn by shipping</div>
              <h2 className="max-w-[400px] font-display text-[clamp(1.5rem,4.5vw,3.5rem)] font-extrabold leading-[.86] tracking-[-.08em] sm:max-w-[500px] lg:text-[clamp(1.8rem,4.5vw,3.5rem)]">A real brief beats<br /><span className="text-[#f4f1eb]">a fake exercise.</span></h2>
            </div>
            <p className="max-w-[200px] text-[11px] leading-4 text-[#182039]/70 sm:max-w-[220px] sm:text-[11px] sm:leading-5 lg:text-xs lg:leading-6">Our internship tracks are for curious builders who want to learn inside the work.</p>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 lg:grid-cols-4 lg:gap-4">
          {internships.map((item, index) => (
            <Reveal key={item.name} delay={(index % 3) + 1} direction="scale">
              <Link href="/internships">
                <div className="group relative flex aspect-[0.9/1] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[18px] border border-[#182039]/15 bg-[#f4f1eb]/10 p-3 text-[#182039] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_30px_rgba(24,32,57,0.12)] sm:aspect-[1.15/1] sm:p-4 lg:aspect-[1.15/1] lg:p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_38%)]" />
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="rounded bg-[#182039]/10 px-1.5 py-0.5 font-mono-ui text-[7px] font-bold uppercase tracking-[.12em] text-[#182039] sm:px-2 sm:text-[8px] lg:text-[9px]">{item.category}</span>
                    <ArrowUpRight size={12} className="text-[#182039] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110" />
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="font-display text-[1.05rem] font-extrabold leading-[.9] tracking-[-.06em] text-[#182039] sm:text-xl lg:text-[1.4rem]">{item.name}</h3>
                    <p className="mt-2 text-[10px] leading-4 text-[#182039]/70 sm:text-[11px] sm:leading-5">Hands-on learning with real projects and guided mentorship.</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5 lg:mt-6 lg:gap-3">
            <Link href="/internships">
              <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#182039] px-3 py-2 text-[8px] font-extrabold uppercase tracking-[.14em] text-[#f4f1eb] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(24,32,57,.4)] sm:px-4 sm:py-2.5 sm:text-[9px] lg:px-5 lg:py-3 lg:text-[10px]">
                View all internships <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1 sm:size-[] lg:size-[]" />
              </span>
            </Link>
            <a
              href="https://forms.gle/WMWeDqXKv1XoFEwQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#182039] px-3 py-2 text-[8px] font-extrabold uppercase tracking-[.14em] transition-all duration-300 hover:-translate-y-1 hover:bg-[#182039] hover:text-[#f4f1eb] sm:px-4 sm:py-2.5 sm:text-[9px] lg:px-5 lg:py-3 lg:text-[10px]"
            >
              Apply now <ArrowUpRight size={10} className="sm:size-[] lg:size-[]" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section id="contact" className="bg-[#182039] text-[#f4f1eb]">
      <div className="mx-auto max-w-[1240px] px-4 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-8">
            <div>
              <div className="mb-3 flex items-center gap-2 font-mono-ui text-[8px] uppercase tracking-[.2em] text-[#d9f47b] sm:mb-4 sm:text-[9px] lg:mb-5 lg:text-[10px]"><span className="h-1 w-1.5 rounded-full bg-[#ff6d53] sm:h-1.5 sm:w-2 lg:h-2 lg:w-2" /> Your next move</div>
              <h2 className="max-w-[400px] font-display text-[clamp(1.6rem,5vw,4rem)] font-extrabold leading-[.82] tracking-[-.09em] sm:max-w-[450px] lg:text-[clamp(2rem,5vw,4rem)]">Let&apos;s make<br /><span className="text-[#d9f47b]">something</span><br />useful.</h2>
            </div>
            <div>
              <p className="max-w-[220px] text-[11px] leading-4 text-white/60 sm:max-w-[240px] sm:text-[11px] sm:leading-5 lg:text-xs lg:leading-6">Tell us what you&apos;re trying to make, fix, or understand. We&apos;ll meet you there.</p>
              <div className="mt-3 sm:mt-4 lg:mt-6">
                <Link href="/contact">
                  <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#ff6d53] px-3 py-2 text-[8px] font-extrabold uppercase tracking-[.14em] text-[#182039] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(255,109,83,.5)] sm:px-4 sm:py-2.5 sm:text-[9px] lg:px-5 lg:py-3 lg:text-[10px]">
                    Get in touch <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1 sm:size-[] lg:size-[]" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
