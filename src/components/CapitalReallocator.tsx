import React from 'react';

export function CapitalReallocator() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-500/10 via-slate-900 to-slate-900 border border-emerald-500/30 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-500 text-slate-950">Shift Budgets</span>
          <span className="text-xs text-slate-400 font-mono">Immediate ROI Optimization</span>
        </div>
        <h2 className="text-lg font-bold text-white tracking-tight">Capital Reallocator</h2>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl">
          Identify campaigns burning cash with zero returns and shift that exact budget to high-performing campaigns to increase pipeline without spending an extra dollar.
        </p>
      </div>

      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
          
          {/* Loser Campaign */}
          <div className="flex-1 w-full space-y-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider text-center">Defund This</h3>
            <div className="p-5 bg-rose-500/5 border border-rose-500/20 rounded-xl text-center space-y-2">
              <div className="text-lg font-bold text-white">HT City Unwind Post 2</div>
              <div className="text-rose-400 font-mono text-xl font-bold">₹120,500 / mo</div>
              <div className="text-xs text-slate-400">Zero qualified leads in 14 days</div>
              <div className="text-[10px] uppercase text-rose-500 font-bold tracking-wide mt-2">Fatigued Creative</div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex flex-col items-center justify-center shrink-0">
            <div className="text-emerald-400 font-bold text-sm mb-1">REALLOCATE</div>
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H38M38 12L28 2M38 12L28 22" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Winner Campaign */}
          <div className="flex-1 w-full space-y-4">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider text-center">Fund This</h3>
            <div className="p-5 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-center space-y-2">
              <div className="text-lg font-bold text-white">Mint Money Festival - VP Tier</div>
              <div className="text-emerald-400 font-mono text-xl font-bold">+ ₹120,500 / mo</div>
              <div className="text-xs text-slate-400">Currently capping out at 2PM daily</div>
              <div className="text-[10px] uppercase text-emerald-500 font-bold tracking-wide mt-2">Budget Constrained</div>
            </div>
          </div>

        </div>

        <div className="mt-8 border-t border-slate-800 pt-6">
          <div className="flex justify-between items-center bg-slate-950 p-4 rounded-lg border border-slate-800">
            <div>
              <div className="text-xs text-slate-400 mb-1">Projected Impact of Reallocation</div>
              <div className="text-sm font-bold text-white">+8 to +12 High-Intent Leads per month</div>
            </div>
            <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded transition shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              Approve Shift
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
