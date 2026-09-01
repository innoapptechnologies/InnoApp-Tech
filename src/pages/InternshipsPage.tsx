import { ArrowRight, Clock, Award, BookOpen, Send } from 'lucide-react';
import { useParams, Link } from 'wouter';
import { Reveal } from '@/components/Reveal';
import { internships } from '@/data/siteData';

export function InternshipsPage() {
  const params = useParams();
  const activeInternshipId = params?.internshipId;

  if (activeInternshipId) {
    const internship = internships.find((i) => i.id === activeInternshipId);
    if (!internship) return <div className="pt-[68px]">Internship not found</div>;

    return (
      <div className="min-h-screen bg-[#f7f8f2] pt-[68px]">
        <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 sm:py-14">
          <Reveal>
            <Link href="/internships">
              <span className="mb-6 inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-[#182039]/60 transition-colors hover:text-[#ff6d53]">
                ← Back to Internships
              </span>
            </Link>
          </Reveal>

          <Reveal delay={1}>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#ff6d53] px-3 py-1 font-mono-ui text-[9px] font-bold uppercase tracking-[.15em] text-[#182039] sm:text-[10px]">
                {internship.category}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-[#182039]/50 sm:text-xs">
                <Clock size={12} />
                {internship.duration}
              </span>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <h1 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#182039] animate-ultra-flip-in">
              {internship.title}
            </h1>
          </Reveal>

          <Reveal delay={3} direction="blur">
            <p className="mt-5 max-w-[600px] text-base leading-7 text-[#182039]/65 animate-ultra-blur-in">
              {internship.description}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <Reveal delay={4}>
              <div className="rounded-[20px] bg-white/70 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d9f47b]">
                    <BookOpen size={16} className="text-[#182039]" />
                  </div>
                  <h3 className="font-display text-base font-extrabold tracking-[-.04em] text-[#182039]">
                    Skills You&apos;ll Learn
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {internship.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#182039]/5 px-3 py-1.5 text-xs font-medium text-[#182039]/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={5}>
              <div className="rounded-[20px] bg-white/70 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ff6d53]">
                    <Clock size={16} className="text-white" />
                  </div>
                  <h3 className="font-display text-base font-extrabold tracking-[-.04em] text-[#182039]">
                    Program Structure
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {internship.programStructure.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-[#182039]/65 sm:text-xs">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6d53]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={6}>
              <div className="rounded-[20px] bg-white/70 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#182039]">
                    <Award size={16} className="text-[#d9f47b]" />
                  </div>
                  <h3 className="font-display text-base font-extrabold tracking-[-.04em] text-[#182039]">
                    Certification
                  </h3>
                </div>
                <p className="mt-3 text-[11px] leading-5 text-[#182039]/65 sm:text-xs">
                  {internship.certificateInfo}
                </p>
                <p className="mt-2 text-[11px] leading-5 text-[#182039]/65 sm:text-xs">
                  {internship.bonafideInfo}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={7}>
            <div className="mt-6 rounded-[20px] bg-[#182039] p-5 text-[#f4f1eb] sm:p-6">
              <h3 className="font-display text-base font-extrabold tracking-[-.04em] sm:text-lg">
                Weekly Tasks
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {internship.weeklyTasks.map((task) => (
                  <div key={task.week} className="rounded-xl bg-white/10 p-3 sm:p-4">
                    <span className="font-mono-ui text-[9px] uppercase tracking-[.15em] text-[#d9f47b] sm:text-[10px]">
                      Week {task.week}
                    </span>
                    <p className="mt-1.5 text-xs text-white/80 sm:text-sm">{task.task}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={8}>
            <div className="mt-6 rounded-[20px] bg-white/70 p-5 backdrop-blur-sm sm:p-6">
              <h3 className="font-display text-base font-extrabold tracking-[-.04em] text-[#182039] sm:text-lg">
                Submission Process
              </h3>
              <p className="mt-3 text-xs leading-6 text-[#182039]/65 sm:text-sm">
                {internship.submissionProcess}
              </p>
            </div>
          </Reveal>

          <Reveal delay={9}>
            <div className="mt-6 rounded-[20px] border border-[#ff6d53]/30 bg-[#ff6d53]/10 p-5 sm:p-6">
              <h3 className="font-display text-base font-extrabold tracking-[-.04em] text-[#182039] sm:text-lg">
                Terms & Conditions
              </h3>
              <ul className="mt-3 space-y-1.5">
                {internship.termsAndConditions.map((term) => (
                  <li key={term} className="flex items-start gap-2 text-xs text-[#182039]/70 sm:text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6d53]" />
                    {term}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={10}>
            <div className="mt-8 flex flex-col items-center gap-3 text-center">
              <a
                href="https://forms.gle/WMWeDqXKv1XoFEwQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full bg-[#ff6d53] px-6 py-3 text-xs font-extrabold uppercase tracking-[.14em] text-[#182039] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_#182039] sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
                data-testid="button-join-internship"
              >
                Join the Internship
                <Send size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-[11px] text-[#182039]/50 sm:text-xs">
                Clicking will open the registration form
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  // Internships listing
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
                  Internships
                </h1>
                <p className="mt-2 text-[10px] font-medium text-[#ff6d53] uppercase tracking-[.15em] sm:text-[11px] lg:text-xs">Learn by shipping</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-24">
          <Reveal>
            <div className="mb-5 flex items-center gap-3 font-mono-ui text-[10px] font-medium uppercase tracking-[.2em] text-[#ff6d53]">
              <span className="h-2 w-2 rounded-full bg-[#ff6d53]" /> Internships
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="max-w-[600px] font-display text-[clamp(1.8rem,6vw,4.5rem)] font-extrabold leading-[.9] tracking-[-.075em] text-[#182039]">
              Learn by <span className="text-[#ff6d53]">shipping</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 max-w-[500px] text-xs leading-6 text-[#182039]/65 sm:mt-6 sm:text-base sm:leading-7">
              Our internship tracks are for curious builders who want to learn inside the work — not around it. A real brief beats a fake exercise.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {internships.map((internship, index) => (
            <Reveal key={internship.id} delay={(index % 4) + 1} direction="scale">
              <Link href={`/internships/${internship.id}`}>
                <article className="soft-card card-depth group flex min-h-[200px] cursor-pointer flex-col rounded-[20px] p-5 sm:min-h-[220px]">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#ff6d53] px-2 py-1 font-mono-ui text-[8px] font-bold uppercase tracking-[.12em] text-[#182039] transition-all duration-300 group-hover:scale-110 sm:px-2.5 sm:text-[9px]">
                      {internship.category}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-[#182039]/50">
                      <Clock size={11} />
                      {internship.duration}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-extrabold tracking-[-.04em] text-[#182039] sm:text-lg">
                    {internship.title}
                  </h3>
                  <p className="mt-2 text-[11px] leading-5 text-[#182039]/58 line-clamp-3 sm:text-xs">
                    {internship.shortDescription}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {internship.highlights.slice(0, 2).map((h) => (
                      <span key={h} className="rounded-full bg-[#d9f47b]/40 px-2 py-0.5 text-[9px] text-[#182039]/70 transition-all duration-300 group-hover:bg-[#d9f47b]/70 sm:px-2.5 sm:py-1 sm:text-[10px]">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-3">
                    <span className="flex items-center gap-2 text-[11px] font-bold text-[#ff6d53] transition-all duration-300 group-hover:gap-3 sm:text-xs">
                      View details <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={5}>
          <div className="mt-10 rounded-[22px] bg-[#ff6d53] p-6 text-center text-[#182039] sm:p-8">
            <h3 className="font-display text-xl font-extrabold tracking-[-.05em] sm:text-2xl">
              Ready to start your journey?
            </h3>
            <p className="mx-auto mt-3 max-w-[350px] text-xs text-[#182039]/70 sm:text-sm">
              Join our internship program and gain real-world experience building production-ready projects.
            </p>
            <a
              href="https://forms.gle/WMWeDqXKv1XoFEwQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#182039] px-6 py-3 text-xs font-extrabold uppercase tracking-[.14em] text-[#f4f1eb] transition-transform hover:-translate-y-1 sm:gap-3 sm:px-8 sm:py-4 sm:text-sm"
            >
              Apply now <Send size={14} />
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
