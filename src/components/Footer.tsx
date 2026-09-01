import { ArrowUpRight, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { companyInfo } from '@/data/siteData';
import { Reveal } from '@/components/Reveal';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Packages', href: '/packages' },
  { label: 'Internships', href: '/internships' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Website Development', href: '/services' },
  { label: 'Web Applications', href: '/services' },
  { label: 'SaaS / ERP Systems', href: '/services' },
  { label: 'AI Automation', href: '/services' },
  { label: 'Mobile Applications', href: '/services' },
  { label: 'Custom Software', href: '/services' },
];

export function Footer() {
  const [location] = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#182039] text-[#f4f1eb]">
      <div className="mx-auto max-w-[1240px] px-3 py-8 sm:px-4 sm:py-10 md:px-6 md:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-[1.2fr_.8fr_1fr]">
          {/* Company Info */}
          <Reveal>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <img
                src="/assets/logo.png"
                alt="InnoApp Technologies"
                className="h-7 w-7 rounded-[12px] object-contain transition-transform duration-500 hover:rotate-12 sm:h-8 sm:w-8 md:h-9 md:w-9"
              />
              <span className="font-display text-[14px] font-extrabold tracking-[-.03em] text-[#f4f1eb] leading-tight sm:text-[15px] md:text-base md:text-[17px]">
                <div>InnoApp</div>
                <div className="text-[9px] text-[#d9f47b] sm:text-[10px] md:text-[11px] md:text-[13px]">Technologies</div>
              </span>
            </div>
            <p className="mt-2 max-w-[260px] text-[12px] leading-4 text-white/60 sm:mt-3 sm:max-w-[280px] sm:text-[13px] sm:leading-5 md:mt-4 md:max-w-[300px] md:text-sm md:leading-6">
              {companyInfo.description}
            </p>
            <div className="mt-3 flex items-center gap-2.5 sm:mt-4 sm:gap-3 md:mt-6 md:gap-4">
              {[companyInfo.linkedin, companyInfo.instagram, `mailto:${companyInfo.email}`].map((href, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-[#d9f47b] hover:text-[#d9f47b] hover:scale-110 hover:-translate-y-1 sm:h-8 sm:w-8 md:h-9 md:w-9"
                  aria-label={['LinkedIn', 'Instagram', 'Email'][i]}
                >
                  {[<Linkedin key="l" size={12} className="sm:size-[] md:size-[]" />, <Instagram key="i" size={12} className="sm:size-[] md:size-[]" />, <Mail key="m" size={12} className="sm:size-[] md:size-[]" />][i]}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Quick Links */}
          <Reveal delay={1}>
            <h4 className="font-display text-[12px] font-bold uppercase tracking-[.15em] text-[#d9f47b] sm:text-[13px] md:text-sm">
              Quick Links
            </h4>
            <ul className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5 md:mt-4 md:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.href} className="slide-in-left" style={{ animationDelay: `${index * 50}ms` }}>
                  <Link href={link.href}>
                    <span className={`flex items-center gap-2 text-[12px] text-white/70 transition-all duration-300 hover:text-[#d9f47b] hover:translate-x-1 sm:text-[13px] md:text-sm ${
                      location === link.href ? 'text-[#d9f47b]' : ''
                    }`}>
                      {link.label}
                      {location === link.href && <span className="h-1.5 w-1.5 rounded-full bg-[#ff6d53]" />}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Services */}
          <Reveal delay={2}>
            <h4 className="font-display text-[13px] font-bold uppercase tracking-[.15em] text-[#d9f47b] sm:text-sm">
              Services
            </h4>
            <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={link.label} className="slide-in-left" style={{ animationDelay: `${index * 50}ms` }}>
                  <Link href={link.href}>
                    <span className="flex items-center gap-2 text-[13px] text-white/70 transition-all duration-300 hover:text-[#d9f47b] hover:translate-x-1 sm:text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Contact Info */}
        <Reveal delay={1}>
          <div className="mt-8 border-t border-white/15 pt-6 sm:mt-12 sm:pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-[13px] text-white/70 transition-all duration-300 hover:text-[#d9f47b] hover:-translate-y-0.5 sm:text-sm"
                >
                  <Phone size={12} className="text-[#ff6d53] sm:size-[]" />
                  <span className="hidden sm:inline">{companyInfo.phone}</span>
                  <span className="sm:hidden">+91 7200661807</span>
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-[13px] text-white/70 transition-all duration-300 hover:text-[#d9f47b] hover:-translate-y-0.5 sm:text-sm"
                >
                  <Mail size={12} className="text-[#ff6d53] sm:size-[]" />
                  <span className="hidden sm:inline">{companyInfo.email}</span>
                  <span className="sm:hidden">Email Us</span>
                </a>
                <span className="flex items-center gap-2 text-[13px] text-white/70 sm:text-sm">
                  <MapPin size={12} className="text-[#ff6d53] sm:size-[]" />
                  India
                </span>
              </div>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-[13px] font-bold text-white/70 transition-all duration-300 hover:text-[#d9f47b] hover:-translate-y-1 sm:text-sm"
                aria-label="Back to top"
              >
                <span className="hidden sm:inline">Back to top</span>
                <span className="sm:hidden">Top</span>
                <ArrowUpRight size={12} className="-rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 sm:size-[]" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Copyright */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-4 sm:mt-8 sm:gap-4 sm:pt-6">
          <span className="font-mono-ui text-[9px] uppercase tracking-[.15em] text-white/40 sm:text-[10px]">
            © 2026 InnoApp Technologies. All rights reserved.
          </span>
          <span className="font-mono-ui text-[9px] uppercase tracking-[.15em] text-white/40 sm:text-[10px] flex items-center gap-1.5">
            Build with <span className="text-red-500 text-xs">❤️</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
