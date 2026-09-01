import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { useParams, Link } from 'wouter';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data/siteData';

export function WorkPage() {
  const params = useParams();
  const activeProjectId = params?.projectId;

  if (activeProjectId) {
    const project = projects.find((p) => p.id === activeProjectId);
    if (!project) return <div className="pt-[68px]">Project not found</div>;

    return (
      <div className="min-h-screen bg-[#f7f8f2] pt-[68px]">
        <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 sm:py-14">
          <Reveal>
            <Link href="/work">
              <span className="mb-6 inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-[#182039]/60 transition-colors hover:text-[#ff6d53]">
                ← Back to Work
              </span>
            </Link>
          </Reveal>

          <Reveal delay={1}>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#ff6d53] px-3 py-1 font-mono-ui text-[9px] font-bold uppercase tracking-[.15em] text-[#182039] sm:text-[10px]">
                {project.category}
              </span>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#182039] animate-ultra-rotate-in">
              {project.name}
            </h1>
          </Reveal>

          <Reveal delay={3} direction="left">
            <p className="mt-5 max-w-[600px] text-base leading-7 text-[#182039]/65 sm:text-lg animate-ultra-slide-left">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={4} direction="scale">
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-[22px] bg-gradient-to-br from-[#20243f] to-[#182039] animate-ultra-scale-in">
              <div className="flex h-full items-center justify-center">
                <span className="font-display text-[clamp(3rem,12vw,8rem)] font-extrabold text-[#d9f47b]/30">
                  {project.name.split(' ')[0]}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={5}>
            <div className="mt-6 rounded-[22px] bg-white/70 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="font-display text-lg font-extrabold tracking-[-.04em] text-[#182039] sm:text-xl">
                Technologies Used
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#182039]/5 px-3 py-1.5 text-[11px] font-medium text-[#182039]/70 sm:text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={6}>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:innoapptechnologies@gmail.com?subject=Project%20Enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff6d53] px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em] text-[#182039] transition-transform hover:-translate-y-1"
              >
                Start a similar project <ArrowRight size={14} />
              </a>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#182039]/20 px-5 py-3 text-xs font-extrabold uppercase tracking-[.14em] text-[#182039] transition-transform hover:-translate-y-1"
                >
                  View live <ExternalLink size={14} />
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  // Work listing - only VCAN 3D
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
                  Work
                </h1>
                <p className="mt-2 text-[10px] font-medium text-[#ff6d53] uppercase tracking-[.15em] sm:text-[11px] lg:text-xs">Projects that define us</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-24">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 font-mono-ui text-[10px] font-medium uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2 w-2 rounded-full bg-[#ff6d53]" /> Our Work
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="max-w-[600px] font-display text-[clamp(1.8rem,6vw,4.5rem)] font-extrabold leading-[.9] tracking-[-.075em] text-[#182039]">
              Projects that <span className="text-[#ff6d53]">define us</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-[500px] text-xs leading-6 text-[#182039]/65 sm:mt-6 sm:text-base sm:leading-7">
              A selection of work that represents our commitment to quality, innovation, and impact.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-2.5 pb-4 sm:gap-3" style={{ scrollSnapType: 'x mandatory' }}>
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index + 1} direction="scale">
                <Link href={`/work/${project.id}`}>
                  <article className="soft-card card-depth group flex w-[260px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-[18px] sm:w-[280px]" style={{ scrollSnapAlign: 'start' }}>
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#20243f] to-[#182039]">
                      <div className="flex h-full items-center justify-center transition-transform duration-700 group-hover:scale-110">
                        <span className="font-display text-[clamp(2rem,8vw,4rem)] font-extrabold text-[#d9f47b]/30">
                          {project.name.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono-ui text-[9px] uppercase tracking-[.15em] text-[#ff6d53] sm:text-[10px]">
                          {project.category}
                        </span>
                        <ArrowUpRight size={14} className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                      </div>
                      <h3 className="mt-2 font-display text-sm font-extrabold tracking-[-.04em] text-[#182039] sm:text-base">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-[10px] leading-5 text-[#182039]/58 line-clamp-2 sm:text-[11px]">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="rounded-full bg-[#182039]/5 px-2 py-1 text-[9px] text-[#182039]/60 transition-all duration-300 group-hover:bg-[#d9f47b]/30 sm:text-[10px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
