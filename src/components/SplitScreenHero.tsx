/**
 * Split-Screen Hero
 * Editorial split layout with image panel and bold type
 * Built with Tailwind CSS v4
 */
export function SplitScreenHero() {
  return (
    <>
      <section style={{ fontFamily: "'Inter',system-ui,sans-serif" }} className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left: content */}
        <div className="flex flex-col justify-center items-center px-12 py-20 bg-white">
          <div className="text-center max-w-lg">
            <span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">Crafted for the web</span>
            <h1 className="text-6xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
              The UI kit<br/>you'll actually<br/>
              <em className="not-italic" style={{ color: '#7c3aed' }}>keep using.</em>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              Hundreds of hand-crafted components. Dark mode ready. Export to any stack from one click.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="bg-slate-900 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-slate-700 transition-all">Get the kit</a>
              <a href="#" className="text-slate-600 font-semibold flex items-center gap-2 hover:text-violet-600 transition-colors">
                See preview
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
            <div className="mt-12 pt-8 border-t text-center border-slate-100 grid grid-cols-3 gap-6">
              <div><p className="text-3xl font-black text-slate-900">500+</p><p className="text-sm text-slate-400 mt-1">Components</p></div>
              <div><p className="text-3xl font-black text-center text-slate-900">3</p><p className="text-sm text-slate-400 mt-1">Export formats</p></div>
              <div><p className="text-3xl font-black text-slate-900">v4</p><p className="text-sm text-slate-400 mt-1">Tailwind CSS</p></div>
            </div>
          </div>
        </div>
      
        {/* Right: visual panel */}
        <div style={{ background: 'linear-gradient(135deg,#1e1b4b 0%,#4c1d95 50%,#7c3aed 100%)' }} className="relative flex items-center justify-center p-12 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px,rgba(255,255,255,0.3) 1px,transparent 0)', backgroundSize: '32px 32px' }}></div>
          {/* Mock UI card */}
          <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-full max-w-sm shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-400 to-violet-500"></div>
              <div>
                <p className="text-white font-bold text-sm">Tailwind Studio</p>
                <p className="text-white/40 text-xs">Component Dashboard</p>
              </div>
              <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full"></div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="h-2.5 bg-white/20 rounded-full w-full"></div>
              <div className="h-2.5 bg-white/20 rounded-full w-5/6"></div>
              <div className="h-2.5 bg-white/20 rounded-full w-4/6"></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 rounded-2xl p-4"><p className="text-white/40 text-xs">Exports</p><p className="text-white text-2xl font-black mt-1">248</p></div>
              <div className="bg-violet-500/40 rounded-2xl p-4"><p className="text-violet-200 text-xs">Templates</p><p className="text-white text-2xl font-black mt-1">64</p></div>
            </div>
          </div>
          {/* Floating orbs */}
          <div className="absolute top-12 right-12 w-32 h-32 rounded-full bg-pink-500/30 blur-2xl"></div>
          <div className="absolute bottom-12 left-12 w-24 h-24 rounded-full bg-cyan-400/30 blur-2xl"></div>
        </div>
      </section>
    </>
  );
}

export default SplitScreenHero;
