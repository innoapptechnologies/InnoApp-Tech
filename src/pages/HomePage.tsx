import { ArrowRight, ArrowUpRight, Sparkles, Play, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import { Reveal } from '@/components/Reveal';
import { services, clients } from '@/data/siteData';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ClientsSection />
      <PackagesPreview />
      <InternshipsPreview />
      <ContactCTA />
    </>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-[76px] lg:pt-[88px] pb-12 sm:pb-16 lg:pb-24">
      <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 h-[350px] opacity-60 sm:h-[450px] lg:h-[550px]" />
      <div className="mx-auto grid min-h-[460px] max-w-[1240px] items-center gap-8 px-4 pt-4 sm:px-6 lg:px-8 lg:min-h-[520px] xl:grid-cols-[1.05fr_.95fr] xl:gap-14">
        <div className="relative z-10 text-left">
          <Reveal>
            <div className="mb-4 flex items-center gap-2.5 font-mono-ui text-xs sm:text-sm font-semibold uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6d53]" /> Independent software studio
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="max-w-[480px] font-display text-[clamp(2rem,7vw,4.5rem)] font-extrabold leading-[.92] tracking-[-.06em] text-[#182039] sm:max-w-[560px] lg:text-[clamp(2.6rem,5vw,4.5rem)] animate-ultra-fade-in-up">
              WHEN YOUR<br /><span className="text-[#ff6d53]">APPLICATION</span><br />MEETS OUR<br />
              <span className="relative inline-block">
                INNOVATION
                <Sparkles size={20} strokeWidth={2.3} className="absolute -right-6 -top-1 text-[#ff6d53] animate-pulse sm:-right-7 sm:-top-1.5" />
              </span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-5 flex max-w-[360px] items-start gap-3 sm:mt-6 sm:max-w-[460px] lg:mt-7 lg:max-w-[520px]">
              <div className="mt-2.5 h-px w-8 shrink-0 bg-[#182039]/50 animate-ultra-gradient-flow" />
              <p className="text-sm leading-6 text-[#182039]/85 sm:text-base sm:leading-7 lg:text-lg lg:leading-8 font-medium">
                High-performance, visually stunning, and affordable web solutions for businesses and students.
              </p>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:mt-8">
              <Link href="/contact">
                <span className="group flex cursor-pointer items-center gap-3 rounded-full bg-[#ff6d53] px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-[.13em] text-[#182039] shadow-[0_4px_20px_rgba(255,109,83,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[5px_5px_0_#182039]" data-testid="link-hero-start">
                  Let&apos;s build <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              <Link href="/work">
                <span className="flex cursor-pointer items-center gap-3 rounded-full border border-[#182039]/30 px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-[.13em] text-[#182039] transition-all duration-300 hover:border-[#182039] hover:bg-[#182039]/5 hover:-translate-y-1" data-testid="link-hero-work">
                  See our work <Play size={12} fill="currentColor" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative mx-auto w-full max-w-[310px] sm:max-w-[380px] lg:max-w-[420px]" delay={2} direction="scale">
          <div className="relative aspect-square">
            <div className="hero-ring absolute left-[8%] top-[8%] h-[77%] w-[77%] rounded-[42%] border border-[#182039]/20 animate-ultra-swing" />
            <div className="hero-ring absolute left-[15%] top-[15%] h-[63%] w-[63%] rounded-[42%] border border-[#ff6d53]/30 [animation-delay:-3s] animate-ultra-rotate-in" />
            <div className="hero-orb animate-float-slow absolute left-[18%] top-[20%] grid h-[52%] w-[52%] place-items-center rounded-[38%] bg-[#d9f47b] shadow-[18px_22px_0_#ff6d53]">
              <div className="h-[48%] w-[48%] rounded-full border-[12px] border-[#20243f] bg-[#f4f1eb] shadow-[inset_11px_11px_0_#d9f47b] sm:border-[14px] lg:border-[18px]" />
            </div>
            
            {/* Animated Graph Box */}
            <div className="absolute right-[2%] top-[8%] flex w-[120px] flex-col gap-1.5 rounded-[18px] border border-white/80 bg-white/80 p-3.5 shadow-xl backdrop-blur-xl sm:w-[140px] lg:w-[150px]">
              <div className="flex items-center justify-between">
                <span className="font-mono-ui text-[9px] font-bold uppercase tracking-[.13em] text-[#182039]/80 sm:text-[10px]">signal / 01</span>
                <span className="h-2 w-2 rounded-full bg-[#ff6d53] animate-pulse" />
              </div>
              {/* Wave graph animation strictly on the bars */}
              <div className="flex h-7 items-end gap-1.5 sm:h-8 lg:h-9 overflow-hidden">
                {[40, 75, 48, 92, 65, 88, 70].map((height, i) => (
                  <span
                    key={i}
                    className="w-full rounded-t bg-[#182039] animate-wave-bar"
                    style={{
                      height: `${height}%`,
                      opacity: 0.6 + i * 0.06,
                      animationDelay: `${i * 90}ms`,
                      animationDuration: `${0.85 + (i % 3) * 0.15}s`,
                    }}
                  />
                ))}
              </div>
              <span className="font-display text-sm font-extrabold tracking-[-.05em] text-[#182039] sm:text-base">build / better</span>
            </div>

            <div className="absolute bottom-[6%] left-[2%] rounded-[18px] bg-[#20243f] px-3.5 py-2.5 text-[#f4f1eb] shadow-[8px_8px_0_#ff6d53]">
              <span className="block font-mono-ui text-[9px] font-bold uppercase tracking-[.18em] text-[#d9f47b]">innoapp technologies</span>
              <span className="mt-0.5 block font-display text-sm font-bold tracking-[-.05em] sm:text-base lg:text-lg">ideas → impact</span>
            </div>
          </div>
        </Reveal>
      </div>
      
      {/* Marquee Banner */}
      <div className="border-y border-[#182039]/10 bg-[#d9f47b]/35">
        <div className="marquee-track flex w-max items-center gap-8 py-3 font-mono-ui text-xs font-bold uppercase tracking-[.18em] text-[#182039]/90 sm:gap-10 sm:py-3.5 sm:text-sm">
          {Array.from({ length: 2 }).flatMap((_, group) => ['Design with intent', 'Build for momentum', 'Ship what matters', 'Future Ready'].map((item, i) => (
            <span key={`${group}-${i}`} className="flex items-center gap-8 sm:gap-10">{item}<Sparkles size={10} className="text-[#ff6d53]" /></span>
          )))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section id="services" className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <Reveal>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-6 mb-8 sm:mb-10">
          <div>
            <div className="mb-2.5 flex items-center gap-2 font-mono-ui text-xs sm:text-sm font-semibold uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6d53]" /> What we do
            </div>
            <h2 className="font-display text-[clamp(1.8rem,5vw,3.6rem)] font-extrabold leading-[.95] tracking-[-.06em] text-[#182039]">
              Software that<br /><span className="text-[#ff6d53]">pulls its weight.</span>
            </h2>
          </div>
          <p className="max-w-[320px] text-sm leading-6 text-[#182039]/80 sm:text-base sm:leading-7">
            From one brave idea to the system that runs your business.
          </p>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={(index % 4) + 1}>
            <Link href={`/services/${service.id}`}>
              <article
                className={`soft-card soft-card-hover group relative flex min-h-[220px] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[22px] p-5 sm:min-h-[240px] sm:p-6 ${index === 3 ? 'bg-[#d9f47b]/50' : ''}`}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(24, 32, 57, 0.15), rgba(24, 32, 57, 0.88)), url('${service.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                data-testid={`card-service-${service.number}`}
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#182039] text-[#d9f47b] sm:h-11 sm:w-11">
                      <span className="font-mono-ui text-xs sm:text-sm font-bold">{service.number}</span>
                    </div>
                    <span className="font-mono-ui text-xs sm:text-sm font-semibold text-white/90">{service.number}</span>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-end justify-between gap-2">
                      <h3 className="font-display text-lg font-extrabold tracking-[-.04em] text-white sm:text-xl">{service.title}</h3>
                      <ArrowUpRight size={18} className="shrink-0 text-white opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm leading-5 text-white/90 line-clamp-2">{service.copy}</p>
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={3}>
        <div className="mt-6 flex justify-center sm:mt-8">
          <Link href="/services">
            <span className="group flex cursor-pointer items-center gap-2.5 text-xs sm:text-sm font-bold text-[#ff6d53] hover:text-[#182039]">
              View all services <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export function ClientsSection() {
  return (
    <section id="clients" className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <Reveal>
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-6 sm:mb-10">
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono-ui text-xs sm:text-sm font-semibold uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6d53]" /> Our Clients & Portfolio
            </div>
            <h2 className="font-display text-[clamp(1.8rem,5vw,3.6rem)] font-extrabold leading-[.95] tracking-[-.06em] text-[#182039]">
              Trusted by <br /><span className="text-[#ff6d53]">growing brands.</span>
            </h2>
          </div>
          <p className="max-w-[340px] text-xs leading-5 text-[#182039]/80 sm:text-base sm:leading-7">
            We partner with innovative businesses to craft high-impact digital experiences and custom platforms.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
        {clients.map((client, index) => (
          <Reveal key={client.id} delay={index + 1} direction="scale">
            <Link href="/work">
              <div className="soft-card card-depth group relative flex items-center justify-between rounded-[20px] bg-white/90 p-3.5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer border border-[#182039]/10">
                <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                  <div className="h-11 w-11 sm:h-16 sm:w-16 shrink-0 rounded-xl sm:rounded-2xl border border-[#182039]/10 bg-white p-1.5 sm:p-2 shadow-sm flex items-center justify-center overflow-hidden">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-sm sm:text-xl lg:text-2xl font-extrabold tracking-[-.04em] text-[#182039] truncate">
                      {client.name}
                    </h3>
                    <span className="font-mono-ui text-[9px] sm:text-xs font-semibold uppercase tracking-[.12em] text-[#ff6d53] block truncate">
                      {client.category}
                    </span>
                  </div>
                </div>
                <div className="grid h-7 w-7 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-full border border-[#182039]/15 bg-[#182039] text-[#d9f47b] transition-all duration-300 group-hover:bg-[#ff6d53] group-hover:text-[#182039] group-hover:rotate-45 ml-2">
                  <ArrowUpRight size={14} className="sm:h-5 sm:w-5" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section id="studio" className="border-y border-[#182039]/10 bg-[#e8e4ef]/45">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
        <Reveal>
          <div className="lg:sticky lg:top-24">
            <div className="mb-4 flex items-center gap-3">
              <img src="/assets/logo.png" alt="InnoApp Technologies" className="h-[70px] w-[70px] rounded-2xl object-contain sm:h-20 sm:w-20 lg:h-22 lg:w-22" />
            </div>
            <div className="mb-2.5 flex items-center gap-2 font-mono-ui text-xs sm:text-sm font-semibold uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6d53]" /> The studio
            </div>
            <h2 className="font-display text-[clamp(1.8rem,5vw,3.6rem)] font-extrabold leading-[.95] tracking-[-.06em] text-[#182039]">
              About <span className="text-[#ff6d53]">Our Team.</span>
            </h2>
            <p className="mt-4 max-w-[340px] text-sm leading-6 text-[#182039]/85 sm:text-base sm:leading-7">
              InnoApp Technologies was founded by two people who believe the best digital work sits where precision meets possibility.
            </p>
            <Link href="/about">
              <span className="mt-4 inline-flex cursor-pointer items-center gap-2.5 text-xs sm:text-sm font-bold text-[#ff6d53] transition-all duration-300 hover:text-[#182039]">
                Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </Reveal>
        <div className="space-y-4">
          <Reveal delay={1} direction="left">
            <div className="rounded-[24px] bg-[#182039] p-6 text-[#f4f1eb] transition-transform duration-300 hover:scale-[1.01] sm:p-7">
              <div className="flex justify-between items-center">
                <span className="font-mono-ui text-xs sm:text-sm font-semibold uppercase tracking-[.17em] text-[#d9f47b]">Our north star</span>
                <Sparkles size={18} className="text-[#ff6d53] animate-pulse" />
              </div>
              <p className="mt-6 max-w-[460px] font-display text-[clamp(1.3rem,3.5vw,2.2rem)] font-bold leading-[1.05] tracking-[-.05em] sm:mt-8">
                &ldquo;Make the complicated feel <span className="text-[#d9f47b]">obvious.</span>&rdquo;
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={2} direction="left">
              <div className="soft-card card-depth rounded-[24px] p-6">
                <span className="font-mono-ui text-xs sm:text-sm font-semibold uppercase tracking-[.17em] text-[#ff6d53]">Founder / CEO</span>
                <h3 className="mt-3 font-display text-lg font-extrabold tracking-[-.04em] text-[#182039] sm:text-xl">Syed Afrid M</h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-[#182039]/80">Vision, product, and the questions that make the work better.</p>
              </div>
            </Reveal>
            <Reveal delay={3} direction="left">
              <div className="soft-card card-depth rounded-[24px] bg-[#d9f47b]/60 p-6">
                <span className="font-mono-ui text-xs sm:text-sm font-semibold uppercase tracking-[.17em] text-[#ff6d53]">Founder / MD</span>
                <h3 className="mt-3 font-display text-lg font-extrabold tracking-[-.04em] text-[#182039] sm:text-xl">Aafrin Fathima S</h3>
                <p className="mt-2 text-xs sm:text-sm leading-6 text-[#182039]/80">Operations, momentum, and making ambitious ideas real.</p>
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
    <section id="packages" className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
      <Reveal>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-6 mb-8 sm:mb-10">
          <div>
            <div className="mb-2.5 flex items-center gap-2 font-mono-ui text-xs sm:text-sm font-semibold uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6d53]" /> A place to start
            </div>
            <h2 className="font-display text-[clamp(1.8rem,5vw,3.6rem)] font-extrabold leading-[.95] tracking-[-.06em] text-[#182039]">
              Pick your<br /><span className="text-[#ff6d53]">starting point.</span>
            </h2>
          </div>
          <p className="max-w-[320px] text-sm leading-6 text-[#182039]/80 sm:text-base sm:leading-7">
            No mystery tiers. Choose the shape of support that fits where you are right now.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-3">
        {packages.map((pack, index) => (
          <Reveal key={pack.name} delay={index + 1} direction="scale">
            <article className={`group relative flex flex-col justify-between rounded-[24px] p-6 sm:p-7 transition-all duration-500 hover:-translate-y-2 ${pack.featured ? 'price-featured shadow-xl' : 'soft-card card-depth'}`} data-testid={`card-package-${pack.name.toLowerCase()}`}>
              <div>
                {pack.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#d9f47b] px-3 py-1 font-mono-ui text-xs font-bold uppercase tracking-[.13em] text-[#182039]">
                    Best value
                  </span>
                )}
                <span className={`font-mono-ui text-xs font-bold uppercase tracking-[.17em] ${pack.featured ? 'text-[#d9f47b]' : 'text-[#ff6d53]'}`}>
                  {pack.detail}
                </span>
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-[-.05em] sm:text-3xl">{pack.name}</h3>
                <p className={`mt-2 text-sm sm:text-base ${pack.featured ? 'price-muted' : 'text-[#182039]/80'}`}>{pack.price}</p>
                <ul className={`mt-6 space-y-2.5 border-t pt-4 text-xs sm:text-sm ${pack.featured ? 'border-white/20' : 'border-[#182039]/15'}`}>
                  {pack.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className={`flex h-4 w-4 items-center justify-center rounded-full ${pack.featured ? 'bg-[#d9f47b]' : 'bg-[#ff6d53]'}`}>
                        <ArrowRight size={10} className={pack.featured ? 'text-[#182039]' : 'text-white'} />
                      </span>
                      <span className={pack.featured ? 'text-white/90' : 'text-[#182039]/85'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/packages" className="mt-6">
                <span className={`flex w-full cursor-pointer items-center justify-between rounded-full px-5 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-[.14em] transition-all duration-300 hover:shadow-lg ${pack.featured ? 'border border-white/30 text-[#f4f1eb] hover:bg-white/10' : 'border border-[#182039]/25 text-[#182039] hover:bg-[#182039]/5'}`}>
                  Choose {pack.name} <ArrowRight size={14} />
                </span>
              </Link>
            </article>
          </Reveal>
        ))}
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
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end md:gap-6 mb-8 sm:mb-10">
            <div>
              <div className="mb-2.5 flex items-center gap-2 font-mono-ui text-xs sm:text-sm font-bold uppercase tracking-[.2em] text-[#182039]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9f47b]" /> Learn by shipping
              </div>
              <h2 className="max-w-[460px] font-display text-[clamp(1.8rem,5vw,3.6rem)] font-extrabold leading-[.92] tracking-[-.06em]">
                A real brief beats<br /><span className="text-[#f4f1eb]">a fake exercise.</span>
              </h2>
            </div>
            <p className="max-w-[320px] text-sm leading-6 text-[#182039]/85 sm:text-base sm:leading-7">
              Our internship tracks are for curious builders who want to learn inside the work.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {internships.map((item, index) => (
            <Reveal key={item.name} delay={(index % 3) + 1} direction="scale">
              <Link href="/internships">
                <div className="group relative flex aspect-[1.05/1] w-full cursor-pointer flex-col justify-between overflow-hidden rounded-[22px] border border-[#182039]/20 bg-[#f4f1eb]/15 p-5 text-[#182039] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="rounded-md bg-[#182039]/15 px-2.5 py-1 font-mono-ui text-xs font-bold uppercase tracking-[.12em] text-[#182039]">
                      {item.category}
                    </span>
                    <ArrowUpRight size={16} className="text-[#182039] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="font-display text-base font-extrabold leading-tight tracking-[-.04em] text-[#182039] sm:text-lg lg:text-xl">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-5 text-[#182039]/85 font-medium">
                      Real projects & mentorship.
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/internships">
              <span className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#182039] px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-[.14em] text-[#f4f1eb] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                View all internships <ArrowRight size={14} />
              </span>
            </Link>
            <a
              href="https://forms.gle/WMWeDqXKv1XoFEwQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#182039] px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-[.14em] transition-all duration-300 hover:-translate-y-1 hover:bg-[#182039] hover:text-[#f4f1eb]"
            >
              Apply now <ArrowUpRight size={14} />
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
      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <div className="mb-2.5 flex items-center gap-2 font-mono-ui text-xs sm:text-sm font-semibold uppercase tracking-[.2em] text-[#d9f47b]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6d53]" /> Your next move
              </div>
              <h2 className="max-w-[480px] font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[.9] tracking-[-.06em]">
                Let&apos;s make<br /><span className="text-[#d9f47b]">something</span><br />useful.
              </h2>
            </div>
            <div>
              <p className="max-w-[340px] text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
                Tell us what you&apos;re trying to make, fix, or understand. We&apos;ll meet you there.
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <span className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#ff6d53] px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-[.14em] text-[#182039] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(255,109,83,.5)]">
                    Get in touch <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
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
