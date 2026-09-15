import React from 'react';

export function WasteAuditor() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-rose-500/10 via-slate-900 to-slate-900 border border-rose-500/30 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-rose-500 text-slate-950">Leak Detection</span>
          <span className="text-xs text-slate-400 font-mono">Algorithmic Bias & Waste</span>
        </div>
        <h2 className="text-lg font-bold text-white tracking-tight">The Waste Auditor</h2>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl">
          LinkedIn's algorithm optimizes for cheap clicks, often serving ads to non-decision makers or on days when buyers aren't active. Identify and plug these leaks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-xl">
          <h3 className="text-sm font-extrabold text-white mb-4 border-b border-slate-800 pb-2">Seniority Bias Leak</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">CXO / VP (Target)</span>
                <span className="text-emerald-400 font-mono">18% of Spend</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Director / Manager</span>
                <span className="text-amber-400 font-mono">24% of Spend</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '24%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Entry / Unpaid (Waste)</span>
                <span className="text-rose-400 font-mono font-bold">58% of Spend</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-2 border border-rose-500/30">
                <div className="bg-rose-500 h-2 rounded-full" style={{ width: '58%' }}></div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-slate-950 border border-slate-800 rounded text-xs text-slate-300">
              <strong className="text-rose-400">Diagnosis:</strong> The algorithm is feeding ads to interns and entry-level staff because they click more frequently, artificially inflating CTR while killing pipeline.
            </div>
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-xl">
          <h3 className="text-sm font-extrabold text-white mb-4 border-b border-slate-800 pb-2">Schedule Arbitrage (Day of Week)</h3>
          <div className="h-48 flex items-end justify-between gap-2 mt-4 px-2">
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-full bg-slate-800 rounded-t h-[80%] relative group">
                <div className="absolute inset-0 bg-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-[10px] text-slate-500">Mon</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-full bg-slate-800 rounded-t h-[90%] relative group"></div>
              <span className="text-[10px] text-slate-500">Tue</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-full bg-emerald-500 rounded-t h-[100%] shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
              <span className="text-[10px] text-emerald-400 font-bold">Wed</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-full bg-slate-800 rounded-t h-[75%] relative group"></div>
              <span className="text-[10px] text-slate-500">Thu</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-full bg-slate-800 rounded-t h-[50%] relative group"></div>
              <span className="text-[10px] text-slate-500">Fri</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-full bg-rose-500/50 border border-rose-500 rounded-t h-[30%]"></div>
              <span className="text-[10px] text-rose-400 font-bold">Sat</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="w-full bg-rose-500/50 border border-rose-500 rounded-t h-[25%]"></div>
              <span className="text-[10px] text-rose-400 font-bold">Sun</span>
            </div>
          </div>
          
          <div className="mt-6 p-3 bg-rose-500/10 border border-rose-500/20 rounded text-xs text-rose-300">
            <strong>Diagnosis:</strong> You are burning 28% of your weekly budget on Saturday & Sunday when B2B buyers are not engaged. CPL is 4x higher on weekends.
          </div>
        </div>

      </div>
    </div>
  );
}
