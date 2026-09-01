import { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Packages', href: '/packages' },
  { label: 'Internships', href: '/internships' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#f4f1eb]/95 shadow-[0_4px_30px_rgba(24,32,57,.08)] backdrop-blur-xl' : 'bg-transparent'} lg:bg-transparent`}>
      <div className="mx-auto flex h-[60px] max-w-[1240px] items-center justify-between px-3 sm:px-4 sm:h-[64px] md:px-6 lg:px-8 lg:h-[68px] xl:px-8 lg:bg-transparent">
        {/* Logo */}
        <Link href="/">
          <span className="group flex cursor-pointer items-center gap-1.5 sm:gap-2" data-testid="link-logo">
            <div className="relative">
              <img
                src="/assets/logo.png"
                alt="InnoApp Technologies"
                className="h-7 w-7 rounded-xl object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-8 sm:w-8 md:h-9 md:w-9"
              />
              <div className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[#d9f47b] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:h-2 sm:w-2" />
            </div>
            <span className="font-display text-[14px] font-extrabold tracking-[-.03em] text-[#182039] leading-tight sm:text-[15px] md:text-base md:text-[17px] group-hover:animate-ultra-glow-pulse">
              <div className="transition-colors duration-300 group-hover:text-[#ff6d53]">InnoApp</div>
              <div className="text-[9px] text-[#ff6d53] transition-colors duration-300 group-hover:text-[#182039] sm:text-[10px] md:text-[11px] md:text-[13px]">Technologies</div>
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 lg:gap-2 xl:gap-3" aria-label="Primary navigation">
          {navItems.map(({ label, href }, index) => (
            <Link key={href} href={href}>
              <span
                className={`nav-link relative cursor-pointer rounded-lg px-2 py-2 text-[10px] font-bold uppercase tracking-[.12em] transition-all duration-300 sm:px-3 sm:text-[11px] xl:px-3 xl:text-[11px] ${
                  location === href
                    ? 'bg-[#ff6d53]/10 text-[#ff6d53] animate-ultra-pulse-glow'
                    : 'text-[#182039]/70 hover:bg-[#182039]/5 hover:text-[#182039] hover:animate-ultra-bounce-in'
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
                data-testid={`link-nav-${label.toLowerCase()}`}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="mailto:innoapptechnologies@gmail.com?subject=Project%20Enquiry"
          className="group hidden items-center gap-2 rounded-full bg-[#ff6d53] px-3 py-2 text-[9px] font-extrabold uppercase tracking-[.12em] text-[#182039] shadow-[0_4px_15px_rgba(255,109,83,.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,109,83,.4)] lg:flex lg:px-4 lg:py-2.5 lg:text-[10px] xl:px-5 xl:py-3 xl:text-[11px]"
          data-testid="link-header-contact"
          style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}
        >
          <Sparkles size={10} className="transition-transform duration-300 group-hover:rotate-12 lg:size-[]" />
          <span className="hidden lg:inline xl:inline">Start the Project</span>
          <span className="lg:hidden xl:hidden">Start</span>
          <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 lg:size-[]" />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative grid h-9 w-9 place-items-center rounded-xl border border-[#d9f47b]/40 bg-[#182039] shadow-[0_10px_24px_rgba(24,32,57,0.18)] backdrop-blur-sm transition-all duration-300 hover:border-[#d9f47b]/70 hover:animate-ultra-bounce-in active:scale-95 lg:hidden sm:h-10 sm:w-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          data-testid="button-mobile-menu"
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <span className={`block h-0.5 w-3.5 rounded-full bg-[#d9f47b] transition-all duration-300 ${menuOpen ? 'translate-y-1.5 rotate-45' : ''} sm:w-4`} />
            <span className={`block h-0.5 w-3.5 rounded-full bg-[#d9f47b] transition-all duration-300 ${menuOpen ? 'scale-0 opacity-0' : ''} sm:w-4`} />
            <span className={`block h-0.5 w-3.5 rounded-full bg-[#d9f47b] transition-all duration-300 ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''} sm:w-4`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-[#182039]/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden sm:top-[64px] md:top-[68px] ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed right-0 top-[60px] z-50 h-[calc(100dvh-60px)] w-full max-w-xs transform bg-[#182039] shadow-[-10px_0_40px_rgba(24,32,57,.15)] transition-transform duration-500 ease-out lg:hidden sm:top-[64px] sm:h-[calc(100dvh-64px)] md:top-[68px] md:h-[calc(100dvh-68px)] ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6">
          {/* Mobile Nav Items */}
          <nav className="flex-1 space-y-1" aria-label="Mobile navigation">
            {navItems.map(({ label, href }, index) => (
              <Link key={href} href={href}>
                <span
                  onClick={() => setMenuOpen(false)}
                  className={`mobile-nav-item group flex items-center justify-between rounded-xl border px-3 py-2.5 text-sm font-bold transition-all duration-300 sm:px-4 sm:py-3 md:px-4 md:py-3.5 ${
                    location === href
                      ? 'border-[#d9f47b]/40 bg-[#d9f47b]/10 text-[#d9f47b]'
                      : 'border-transparent bg-white/[0.02] text-[#f4f1eb]/90 hover:border-[#d9f47b]/20 hover:bg-[#d9f47b]/5 hover:text-[#d9f47b] hover:animate-ultra-slide-right'
                  }`}
                  style={{ transitionDelay: menuOpen ? `${index * 70}ms` : '0ms', transform: menuOpen ? 'translateX(0)' : 'translateX(20px)', opacity: menuOpen ? 1 : 0, animation: menuOpen ? `slideInRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 70}ms forwards` : 'none' }}
                  data-testid={`link-mobile-${label.toLowerCase()}`}
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    <span className={`flex h-5 w-5 items-center justify-center rounded-lg text-[9px] font-bold transition-all duration-300 sm:h-6 sm:w-6 sm:text-[10px] md:h-6 md:w-6 md:text-[10px] ${
                      location === href ? 'bg-[#d9f47b] text-[#182039]' : 'bg-[#f4f1eb]/10 text-[#d9f47b] group-hover:bg-[#d9f47b]/15'
                    }`} style={{ animation: `bounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 90}ms` }}>
                      {index + 1}
                    </span>
                    <span className="text-[13px] sm:text-sm">{label}</span>
                  </span>
                  <ArrowUpRight size={14} className={`transition-all duration-300 group-hover:animate-ultra-bounce-x ${location === href ? 'text-[#d9f47b]' : 'text-[#f4f1eb]/40 group-hover:text-[#d9f47b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5'} sm:size-[]`} />
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-8 space-y-2 border-t border-[#d9f47b]/15 pt-6 sm:mt-10 sm:space-y-2.5 sm:pt-6 md:mt-12 md:space-y-3 md:pt-7">
            <a
              href="mailto:innoapptechnologies@gmail.com?subject=Project%20Enquiry"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#d9f47b] px-3 py-2.5 text-[9px] font-extrabold uppercase tracking-[.12em] text-[#182039] shadow-[0_10px_25px_rgba(217,244,123,.22)] transition-all duration-300 hover:brightness-105 hover:animate-ultra-scale-in active:scale-[0.98] sm:px-4 sm:py-3 sm:text-[10px] md:px-6 md:py-3.5 md:text-xs"
              data-testid="link-mobile-contact"
            >
              <Sparkles size={10} className="text-[#182039] sm:size-[] md:size-[]" />
              <span className="hidden sm:inline md:inline">Start the Project</span>
              <span className="sm:hidden md:hidden">Start Project</span>
              <ArrowUpRight size={10} className="sm:size-[] md:size-[]" />
            </a>
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#d9f47b]/25 px-3 py-2.5 text-[9px] font-extrabold uppercase tracking-[.12em] text-[#d9f47b] transition-all duration-300 hover:border-[#d9f47b] hover:bg-[#d9f47b]/5 active:scale-[0.98] sm:px-4 sm:py-3 sm:text-[10px] md:px-6 md:py-3.5 md:text-xs"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Footer */}
          <div className="mt-4 flex items-center justify-center gap-2.5 text-[8px] text-[#d9f47b]/60 sm:mt-5 sm:gap-3 sm:text-[9px] md:mt-6 md:gap-4 md:text-[10px]">
            <span>Est. 2026</span>
            <span className="h-2 w-px bg-[#d9f47b]/20 sm:h-2.5 sm:w-px md:h-3 md:w-px" />
            <span>India</span>
          </div>
        </div>
      </div>
    </header>
  );
}
