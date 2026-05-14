/**
 * Dark Pricing Tiers
 * Premium dark-mode pricing with glass cards and gradients
 * Built with Tailwind CSS v4
 */
export function DarkPricingTiers() {
  return (
    <>
      <section style={{ fontFamily: "'Inter',system-ui,sans-serif" }} className="bg-[#050509] py-24 px-6 relative overflow-hidden min-h-screen">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse,#7c3aed,transparent 70%)' }}></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-bold uppercase tracking-widest mb-4">Pricing</p>
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">Invest in your workflow</h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto">Start free. Scale when ready. Cancel anytime.</p>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Free */}
            <div className="rounded-3xl border border-white/10 p-8" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <p className="text-white/50 font-semibold mb-2">Free</p>
              <p className="text-5xl font-black text-white mb-1">$0</p>
              <p className="text-white/30 text-sm mb-8">Forever free</p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-white/60 text-sm"><span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/40">✓</span> 10 templates</li>
                <li className="flex items-center gap-3 text-white/60 text-sm"><span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/40">✓</span> HTML export only</li>
                <li className="flex items-center gap-3 text-white/60 text-sm"><span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/40">✓</span> Community support</li>
              </ul>
              <button className="w-full border border-white/10 text-white/60 font-bold py-3.5 rounded-2xl hover:bg-white/5 transition-all">Get started</button>
            </div>
      
            {/* Pro (featured) */}
            <div className="rounded-3xl p-8 relative overflow-hidden scale-105" style={{ background: 'linear-gradient(145deg,#2e1065,#4c1d95,#5b21b6)' }}>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-pink-500/20 blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-violet-300/10 blur-2xl"></div>
              <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 backdrop-blur-sm border border-white/20">Most popular</div>
              <p className="text-violet-200 font-semibold mb-2">Pro</p>
              <p className="text-5xl font-black text-white mb-1">$29</p>
              <p className="text-violet-300/60 text-sm mb-8">per month</p>
              <ul className="space-y-3 mb-10 relative z-10">
                <li className="flex items-center gap-3 text-white text-sm"><span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span> Unlimited templates</li>
                <li className="flex items-center gap-3 text-white text-sm"><span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span> React & WordPress export</li>
                <li className="flex items-center gap-3 text-white text-sm"><span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span> Monaco code editor</li>
                <li className="flex items-center gap-3 text-white text-sm"><span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span> Priority support</li>
              </ul>
              <button className="relative z-10 w-full bg-white text-violet-700 font-black py-3.5 rounded-2xl hover:bg-violet-50 transition-all shadow-xl">Start free trial →</button>
            </div>
      
            {/* Enterprise */}
            <div className="rounded-3xl border border-white/10 p-8" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <p className="text-white/50 font-semibold mb-2">Enterprise</p>
              <p className="text-5xl font-black text-white mb-1">$99</p>
              <p className="text-white/30 text-sm mb-8">per month</p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-white/60 text-sm"><span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/40">✓</span> Everything in Pro</li>
                <li className="flex items-center gap-3 text-white/60 text-sm"><span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/40">✓</span> Team collaboration</li>
                <li className="flex items-center gap-3 text-white/60 text-sm"><span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/40">✓</span> Custom branding</li>
                <li className="flex items-center gap-3 text-white/60 text-sm"><span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/40">✓</span> Dedicated account manager</li>
              </ul>
              <button className="w-full border border-white/10 text-white/60 font-bold py-3.5 rounded-2xl hover:bg-white/5 transition-all">Contact sales</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DarkPricingTiers;
