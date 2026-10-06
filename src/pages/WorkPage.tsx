import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { useParams, Link } from 'wouter';
import { Reveal } from '@/components/Reveal';
import { projects, clients } from '@/data/siteData';

export function WorkPage() {
  const params = useParams();
  const activeProjectId = params?.projectId;

  if (activeProjectId) {
    const project = projects.find((p) => p.id === activeProjectId);
    if (!project) return <div className="pt-[68px] text-center py-20 font-display text-xl">Project not found</div>;

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
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#182039]/10 px-3 py-1 font-mono-ui text-[9px] font-bold uppercase tracking-[.15em] text-[#182039] hover:bg-[#182039] hover:text-[#d9f47b] transition-colors inline-flex items-center gap-1"
                >
                  {project.link.replace('https://', '')} <ExternalLink size={10} />
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#182039]">
                {project.name}
              </h1>
              {project.logo && (
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-white p-2.5 border border-[#182039]/10 shadow-md flex items-center justify-center shrink-0">
                  <img src={project.logo} alt={`${project.name} Logo`} className="max-h-full max-w-full object-contain" />
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={3} direction="left">
            <p className="mt-5 max-w-[650px] text-base leading-7 text-[#182039]/70 sm:text-lg">
              {project.description}
            </p>
          </Reveal>

          <Reveal delay={4} direction="scale">
            <div className="mt-8 relative aspect-video w-full overflow-hidden rounded-[24px] bg-gradient-to-br from-[#1c1815] via-[#20243f] to-[#182039] p-8 shadow-2xl flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="font-mono-ui text-[10px] uppercase tracking-[.2em] text-[#d9f47b]">
                  {project.category}
                </span>
                {project.logo && (
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl bg-white/90 p-2 shadow-lg flex items-center justify-center">
                    <img src={project.logo} alt={project.name} className="max-h-full max-w-full object-contain" />
                  </div>
                )}
              </div>
              <div className="my-auto text-center py-6">
                <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] font-extrabold text-white tracking-[-.06em]">
                  {project.name}
                </h2>
                {project.link && (
                  <p className="mt-2 font-mono-ui text-sm text-[#d9f47b]">
                    {project.link.replace('https://', '')}
                  </p>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={5}>
            <div className="mt-8 rounded-[22px] bg-white/80 p-6 backdrop-blur-sm sm:p-8 border border-[#182039]/10 shadow-sm">
              <h3 className="font-display text-lg font-extrabold tracking-[-.04em] text-[#182039] sm:text-xl">
                Technologies Used
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#182039]/5 border border-[#182039]/10 px-3.5 py-1.5 text-xs font-semibold text-[#182039]/80 sm:text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={6}>
            <div className="mt-8 flex flex-wrap gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff6d53] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[.14em] text-[#182039] transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  Visit Live Website ({project.link.replace('https://', '')}) <ExternalLink size={14} />
                </a>
              )}
              <a
                href="mailto:innoapptechnologies@gmail.com?subject=Project%20Enquiry"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#182039] px-6 py-3.5 text-xs font-extrabold uppercase tracking-[.14em] text-[#182039] transition-all hover:bg-[#182039] hover:text-[#f4f1eb] hover:-translate-y-1"
              >
                Start a similar project <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  // Work listing page
  return (
    <div className="min-h-screen bg-[#f7f8f2] pt-[68px]">
      {/* Header Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 py-8 sm:px-8 sm:py-12">
          <Reveal>
            <div className="flex items-center gap-4 sm:gap-6">
              <img src="/assets/logo.png" alt="InnoApp Technologies" className="h-20 w-20 rounded-3xl object-contain sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
              <div>
                <h1 className="font-display text-[clamp(1.5rem,4vw,2.8rem)] font-extrabold leading-tight tracking-[-.06em] text-[#182039]">
                  Our Work & Clients
                </h1>
                <p className="mt-2 text-[10px] font-medium text-[#ff6d53] uppercase tracking-[.15em] sm:text-[11px] lg:text-xs">Projects that define us</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Clients Logo Showcase Bar */}
      <section className="mx-auto max-w-[1240px] px-5 py-4 sm:px-8">
        <Reveal>
          <div className="rounded-[22px] bg-white/90 p-6 sm:p-8 shadow-sm border border-[#182039]/10">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono-ui text-[10px] uppercase tracking-[.18em] text-[#ff6d53]">Featured Clients</span>
              <span className="font-mono-ui text-[10px] text-[#182039]/50">Official Logos & Websites</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {clients.map((client) => (
                <a
                  key={client.id}
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-[#182039]/10 p-4 transition-all hover:bg-[#182039]/5 hover:border-[#ff6d53]/40"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-white p-1.5 border border-[#182039]/10 flex items-center justify-center shrink-0 shadow-sm">
                      <img src={client.logo} alt={`${client.name} logo`} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-[#182039]">{client.name}</h4>
                      <span className="text-[11px] text-[#182039]/60">{client.website.replace('https://', '')}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-[#ff6d53] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-[1240px] px-5 py-8 sm:px-8 sm:pb-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index + 1} direction="scale">
              <Link href={`/work/${project.id}`}>
                <article className="soft-card card-depth group flex flex-col justify-between overflow-hidden rounded-[22px] bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full border border-[#182039]/10 cursor-pointer">
                  <div>
                    <div className="flex items-start justify-between gap-4 border-b border-[#182039]/10 pb-4">
                      <div className="flex items-center gap-3">
                        {project.logo && (
                          <div className="h-12 w-12 rounded-xl bg-white p-2 border border-[#182039]/10 shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
                            <img src={project.logo} alt={`${project.name} Logo`} className="max-h-full max-w-full object-contain" />
                          </div>
                        )}
                        <div>
                          <h3 className="font-display text-lg font-extrabold tracking-[-.04em] text-[#182039]">
                            {project.name}
                          </h3>
                          <span className="font-mono-ui text-[9px] uppercase tracking-[.15em] text-[#ff6d53]">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-[#182039]/20 transition-all duration-300 group-hover:bg-[#ff6d53] group-hover:text-[#182039] group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm leading-6 text-[#182039]/70 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#182039]/10">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="rounded-full bg-[#182039]/5 px-2.5 py-1 text-[10px] text-[#182039]/70 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <div className="flex items-center justify-between font-mono-ui text-[10px] text-[#182039]/60">
                        <span className="flex items-center gap-1 hover:text-[#ff6d53] transition-colors">
                          {project.link.replace('https://', '')} <ExternalLink size={10} />
                        </span>
                        <span className="text-[#ff6d53] font-bold">View Details →</span>
                      </div>
                    )}
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
