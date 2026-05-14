/**
 * Premium Dark Footer
 * Elegant dark footer with gradient brand and social links
 * Built with Tailwind CSS v4
 */
import { useState } from 'react';

const FOOTER_LINKS = [
  {
    heading: 'Product',
    links: [
      { label: 'Templates', href: '#' },
      { label: 'UI Kits', href: '#' },
      { label: 'Icons', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.255 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function PremiumDarkFooter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <footer style={{ fontFamily: "'Inter',system-ui,sans-serif" }} className="bg-[#080810] text-white pt-20 pb-10 px-6 relative overflow-hidden">
      {/* Glow orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse,#7c3aed,transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">

          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-white text-sm" style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)' }}>H</div>
              <span className="font-extrabold text-xl tracking-tight">HoltzDigitalUI</span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-6">
              The most complete Tailwind CSS v4 component builder. Design, preview, export.
            </p>

            {/* Social icons with glow hover */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white/90 transition-all duration-300"
                  style={{ ['--tw-shadow' as string]: '0 0 12px rgba(124,58,237,0.5)' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 14px rgba(124,58,237,0.45)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Data-driven link columns */}
          {FOOTER_LINKS.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-white/80 font-bold text-sm mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-white/30 hover:text-white text-sm transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter with submitted state */}
          <div>
            <h4 className="text-white/80 font-bold text-sm mb-5">Newsletter</h4>
            <p className="text-white/30 text-sm mb-4 leading-relaxed">Get weekly design tips and new templates.</p>
            {submitted ? (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-violet-500/30 text-sm text-violet-300" style={{ background: 'rgba(124,58,237,0.1)' }}>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                You're on the list!
              </div>
            ) : (
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 text-white placeholder:text-white/20 rounded-l-xl px-4 py-2.5 text-sm outline-none focus:border-violet-500 transition-colors"
                />
                <button
                  onClick={handleSubscribe}
                  className="text-white text-sm font-bold px-4 py-2.5 rounded-r-xl transition-all whitespace-nowrap hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg,#7c3aed,#ec4899)' }}
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Gradient divider */}
        <div className="h-px mb-8" style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)' }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/20 text-xs">
          <p>© {new Date().getFullYear()} HoltzDigitalUI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/50 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default PremiumDarkFooter;
