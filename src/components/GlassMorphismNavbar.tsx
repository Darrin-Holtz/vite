/**
 * Glassmorphism Navbar + Hero
 * Frosted glass navbar over a full-viewport hero section
 * Built with Tailwind CSS v4
 */
import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'Templates', href: '#' },
  { label: 'UI Kit', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Docs', href: '#' },
];

// SVG noise filter for hero texture
const NoiseSVG = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <filter id="noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

// Shimmer CTA button
function ShimmerButton({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className="relative rounded-2xl p-px overflow-hidden" style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)' }}>
      {/* animated shimmer ring */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: 'conic-gradient(from var(--shimmer-angle,0deg),transparent 70%,rgba(255,255,255,0.4) 80%,transparent 90%)',
          animation: 'shimmer-spin 3s linear infinite',
        }}
      />
      <button
        className={className}
        style={{ ...style, position: 'relative' }}
      >
        {children}
      </button>
      <style>{`
        @property --shimmer-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @keyframes shimmer-spin { to { --shimmer-angle: 360deg; } }
      `}</style>
    </div>
  );
}

export function GlassmorphismNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Templates');
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(72);

  // Measure real navbar height for dropdown positioning
  useEffect(() => {
    if (!navRef.current) return;
    const observer = new ResizeObserver(() => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    });
    observer.observe(navRef.current);
    setNavHeight(navRef.current.offsetHeight);
    return () => observer.disconnect();
  }, []);

  // Scroll-aware navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        navRef.current && !navRef.current.contains(e.target as Node) &&
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [menuOpen]);

  return (
    <div
      style={{ fontFamily: "'Inter',system-ui,sans-serif", background: 'linear-gradient(135deg,#0f0c29 0%,#302b63 50%,#1a0533 100%)' }}
      className="relative h-screen overflow-hidden flex flex-col"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ background: 'radial-gradient(circle,rgba(124,58,237,0.45) 0%,transparent 70%)' }} className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" />
        <div style={{ background: 'radial-gradient(circle,rgba(236,72,153,0.3) 0%,transparent 70%)' }} className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full blur-3xl" />
        <div style={{ background: 'radial-gradient(circle,rgba(99,102,241,0.25) 0%,transparent 70%)' }} className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl animate-pulse" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '48px 48px' }}
        />
        {/* Noise texture */}
        <NoiseSVG />
      </div>

      {/* Navbar — scroll-aware: deeper blur + border brightens on scroll */}
      <nav
        ref={navRef}
        className={`relative z-20 mx-4 mt-4 rounded-2xl border backdrop-blur-xl px-6 py-3 transition-all duration-500 ${
          scrolled
            ? 'border-white/20 shadow-lg shadow-black/40'
            : 'border-white/10'
        }`}
        style={{ background: scrolled ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.05)' }}
      >
        {/* Top row */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 mr-auto">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)' }}>
              <span className="text-white font-black text-xs">H</span>
            </div>
            <span className="text-white font-extrabold text-sm tracking-tight">HoltzDigitalUI</span>
          </div>

          {/* Desktop links with active indicator */}
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setActiveLink(label)}
              className={`relative text-sm font-medium transition-colors hidden md:block ${
                activeLink === label ? 'text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              {label}
              {activeLink === label && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg,#7c3aed,#ec4899)' }}
                />
              )}
            </a>
          ))}

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 ml-2">
            <button className="text-white/50 text-sm font-medium px-4 py-1.5 rounded-xl hover:bg-white/5 transition-all">Log in</button>
            <ShimmerButton
              className="font-bold text-sm px-4 py-1.5 rounded-[14px] text-white transition-all hover:scale-105 w-full"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)' }}
            >
              Sign up
            </ShimmerButton>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 rounded-lg hover:bg-white/5 transition-all"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white/70 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — offset by real measured navbar height */}
      <div
        ref={dropdownRef}
        className={`md:hidden absolute left-4 right-4 z-30 overflow-hidden rounded-2xl border border-white/10 backdrop-blur-xl transition-all duration-300 ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(15,12,41,0.85)', top: `${navHeight + 16}px` }}
      >
        <div className="flex flex-col gap-1 p-3">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => { setActiveLink(label); setMenuOpen(false); }}
              className={`flex items-center gap-2 text-sm font-medium px-3 py-2.5 rounded-xl transition-all ${
                activeLink === label ? 'text-white bg-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              {activeLink === label && (
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)' }} />
              )}
              {label}
            </a>
          ))}
          <div className="flex gap-2 mt-1 pt-2 border-t border-white/10">
            <button className="flex-1 text-white/50 text-sm font-medium px-4 py-2 rounded-xl hover:bg-white/5 border border-white/10 transition-all">Log in</button>
            <ShimmerButton
              className="font-bold text-sm px-4 py-2 rounded-[14px] text-white transition-all w-full"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)' }}
            >
              Sign up
            </ShimmerButton>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center gap-8 pb-32">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold text-white/70 backdrop-blur-sm"
          style={{ background: 'rgba(124,58,237,0.15)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse inline-block" />
          Now in public beta — free to get started
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
            Build stunning UIs{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg,#a78bfa,#ec4899,#f97316)' }}
            >
              in minutes
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/45 max-w-2xl mx-auto leading-relaxed mt-2">
            A modern component library crafted for founders and designers who refuse to ship boring products.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <ShimmerButton
            className="px-7 py-3.5 rounded-[14px] text-white font-bold text-sm transition-all hover:scale-105 w-full"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)', boxShadow: '0 0 32px rgba(124,58,237,0.35)' }}
          >
            Start building free →
          </ShimmerButton>
          <button
            className="px-7 py-3.5 rounded-2xl font-bold text-sm text-white/70 hover:text-white border border-white/10 backdrop-blur-sm transition-all hover:bg-white/5"
          >
            View component library
          </button>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-6 mt-4">
          <div className="flex -space-x-2">
            {['#7c3aed','#ec4899','#6366f1','#f97316'].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-[#0f0c29] flex items-center justify-center text-white text-xs font-bold"
                style={{ background: color }}
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <p className="text-sm text-white/40">
            Trusted by <span className="text-white/70 font-semibold">12,000+</span> designers & developers
          </p>
        </div>

        {/* Floating stat cards */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 pointer-events-none select-none hidden md:flex">
          {[
            { label: 'Components', value: '200+' },
            { label: 'GitHub Stars', value: '8.4k' },
            { label: 'Weekly Downloads', value: '94k' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="px-5 py-3 rounded-2xl border border-white/10 backdrop-blur-xl text-center"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <p className="text-white font-black text-lg leading-none">{stat.value}</p>
              <p className="text-white/35 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GlassmorphismNavbar;
