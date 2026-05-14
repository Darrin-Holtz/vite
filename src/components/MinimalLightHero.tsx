/**
 * Minimal Light Hero
 * Clean gradient hero with badge, CTA buttons, and social proof
 * Built with Tailwind CSS v4
 */
export function MinimalLightHero() {
  return (
    <section
      style={{ fontFamily: "'Inter',system-ui,sans-serif" }}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg,#4f46e5,#7c3aed,#db2777,#f97316)',
          backgroundSize: '300% 300%',
          animation: 'gradientShift 10s ease infinite',
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle,#818cf8,transparent 70%)' }} />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle,#f472b6,transparent 70%)' }} />

      {/* Noise texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none -z-10" xmlns="http://www.w3.org/2000/svg">
        <filter id="mnoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#mnoise)" />
      </svg>

      <div className="max-w-4xl mx-auto text-center text-white relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-white/80 mb-8 backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.1)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse inline-block" />
          Now built with Tailwind CSS v4
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          Build Beautiful UIs<br />with Tailwind v4
        </h1>

        <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
          Create stunning templates, export to React, WordPress, or plain HTML. Your design system, your way.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <a
            href="#"
            className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-2xl hover:bg-indigo-50 hover:scale-105 transition-all shadow-xl"
          >
            Get Started
          </a>
          <a
            href="#"
            className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
          >
            Learn More
          </a>
        </div>

        {/* Social proof */}
        <p className="text-sm text-white/45">
          Trusted by <span className="text-white/75 font-semibold">5,000+</span> designers & developers worldwide
        </p>
      </div>

      <style>{`
        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}

export default MinimalLightHero;