/**
 * Dark Gradient Hero
 * Cinematic dark hero with glowing blobs and gradient text
 * Built with Tailwind CSS v4
 */
export function DarkGradientHero() {
  return (
    <section
      style={{ fontFamily: "'Inter',system-ui,sans-serif" }}
      className="relative min-h-screen bg-[#030712] flex items-center justify-center overflow-hidden px-6"
    >
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/30 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-20 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-20 w-[400px] h-[400px] rounded-full bg-pink-500/20 blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-sm text-white/60 font-medium">Now in public beta</span>
        </div>

        {/* Headline */}
        <h1 className="text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
          Design systems
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg,#a855f7,#ec4899,#f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            at warp speed
          </span>
        </h1>
        <p className="text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed">
          Build production-ready UIs in minutes with Tailwind CSS v4. Export to React, WordPress, or HTML — your stack, your rules.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a
            href="#"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#db2777)' }}
            className="text-white font-bold px-8 py-4 rounded-2xl hover:opacity-90 transition-all shadow-2xl shadow-violet-500/30 text-base"
          >
            Start building free →
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-6 text-white/30 text-sm">
          <span className="flex items-center gap-1.5">
            <span className="text-amber-400">★★★★★</span> 4.9/5
          </span>
          <span className="w-px h-4 bg-white/10"></span>
          <span>12,000+ developers</span>
          <span className="w-px h-4 bg-white/10"></span>
          <span>No credit card required</span>
        </div>
      </div>
    </section>
  );
}

export default DarkGradientHero;
