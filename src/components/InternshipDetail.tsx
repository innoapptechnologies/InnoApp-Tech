import { Award, Calendar, ChevronLeft, Clock, GraduationCap, Send, CheckCircle, FileText, BookOpen } from 'lucide-react';
import { Reveal } from './Reveal';
import { internships } from '@/data/siteData';

interface InternshipDetailProps {
  internshipId: string;
  onBack: () => void;
}

export function InternshipDetail({ internshipId, onBack }: InternshipDetailProps) {
  const internship = internships.find((i) => i.id === internshipId);

  if (!internship) return null;

  return (
    <div className="min-h-screen bg-[#f7f8f2] pt-[74px]">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-8 sm:py-16">
        <Reveal>
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-sm font-bold text-[#182039]/60 transition-colors hover:text-[#ff6d53]"
          >
            <ChevronLeft size={18} />
            Back to Internships
          </button>
        </Reveal>

        <Reveal delay={1}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#ff6d53] px-3 py-1.5 font-mono-ui text-[10px] font-bold uppercase tracking-[.15em] text-[#182039]">
              {internship.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#182039]/50">
              <Clock size={14} />
              {internship.duration}
            </span>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[.9] tracking-[-.07em] text-[#182039]">
            {internship.title}
          </h1>
        </Reveal>

        <Reveal delay={3}>
          <p className="mt-6 max-w-[700px] text-lg leading-7 text-[#182039]/65">
            {internship.description}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Reveal delay={4}>
            <div className="rounded-[22px] bg-white/70 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d9f47b]">
                  <BookOpen size={18} className="text-[#182039]" />
                </div>
                <h3 className="font-display text-lg font-extrabold tracking-[-.04em] text-[#182039]">
                  Skills You'll Learn
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
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
            <div className="rounded-[22px] bg-white/70 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6d53]">
                  <Calendar size={18} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-extrabold tracking-[-.04em] text-[#182039]">
                  Program Structure
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {internship.programStructure.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#182039]/65">
                    <CheckCircle size={14} className="mt-0.5 shrink-0 text-[#ff6d53]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={6}>
            <div className="rounded-[22px] bg-white/70 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#182039]">
                  <Award size={18} className="text-[#d9f47b]" />
                </div>
                <h3 className="font-display text-lg font-extrabold tracking-[-.04em] text-[#182039]">
                  Certification
                </h3>
              </div>
              <p className="mt-4 text-xs leading-5 text-[#182039]/65">
                {internship.certificateInfo}
              </p>
              <p className="mt-3 text-xs leading-5 text-[#182039]/65">
                {internship.bonafideInfo}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={7}>
          <div className="mt-8 rounded-[26px] bg-[#182039] p-8 text-[#f4f1eb]">
            <h3 className="font-display text-xl font-extrabold tracking-[-.04em]">
              Weekly Tasks
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {internship.weeklyTasks.map((task) => (
                <div key={task.week} className="rounded-xl bg-white/10 p-4">
                  <span className="font-mono-ui text-[10px] uppercase tracking-[.15em] text-[#d9f47b]">
                    Week {task.week}
                  </span>
                  <p className="mt-2 text-sm text-white/80">{task.task}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={8}>
          <div className="mt-8 rounded-[26px] bg-white/70 p-8 backdrop-blur-sm">
            <h3 className="font-display text-xl font-extrabold tracking-[-.04em] text-[#182039]">
              Submission Process
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#182039]/65">
              {internship.submissionProcess}
            </p>
          </div>
        </Reveal>

        <Reveal delay={9}>
          <div className="mt-8 rounded-[26px] border border-[#ff6d53]/30 bg-[#ff6d53]/10 p-8">
            <div className="flex items-center gap-3">
              <FileText size={20} className="text-[#ff6d53]" />
              <h3 className="font-display text-xl font-extrabold tracking-[-.04em] text-[#182039]">
                Terms & Conditions
              </h3>
            </div>
            <ul className="mt-4 space-y-2">
              {internship.termsAndConditions.map((term) => (
                <li key={term} className="flex items-start gap-2 text-sm text-[#182039]/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6d53]" />
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={10}>
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <a
              href="https://forms.gle/WMWeDqXKv1XoFEwQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-[#ff6d53] px-8 py-4 text-sm font-extrabold uppercase tracking-[.14em] text-[#182039] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_#182039]"
              data-testid="button-join-internship"
            >
              Join the Internship
              <Send size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-xs text-[#182039]/50">
              Clicking will open the registration form
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
