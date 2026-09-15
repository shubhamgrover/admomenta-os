import React from 'react';

export function SalesSurge() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500/10 via-slate-900 to-slate-900 border border-purple-500/30 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-purple-500 text-slate-950">In-Market Triggers</span>
          <span className="text-xs text-slate-400 font-mono">Real-time intent signals</span>
        </div>
        <h2 className="text-lg font-bold text-white tracking-tight">Sales Surge (19 Alerts)</h2>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl">
          Companies that have shown massive spikes in engagement with your ads over the last 7 days but have not yet submitted a form. Hand these to SDRs immediately.
        </p>
      </div>

      <div className="bg-slate-900/90 border border-slate-800 rounded-xl shadow-xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950">
            <tr className="text-slate-400 border-b border-slate-800">
              <th className="p-4 font-semibold">Target Account</th>
              <th className="p-4 font-semibold">Intent Signal (Last 7 Days)</th>
              <th className="p-4 font-semibold">Engaged Persona</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            <tr className="hover:bg-slate-800/20 transition-colors">
              <td className="p-4">
                <div className="font-bold text-white">HDFC Bank</div>
                <div className="text-xs text-slate-500">BFSI Sector</div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                  <span className="text-purple-400 font-medium text-xs border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 rounded">High Intent</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Read 100% of 'Case Study' Doc Ad</div>
              </td>
              <td className="p-4 text-slate-300 text-xs">
                VP of Technology
              </td>
            </tr>
            
            <tr className="hover:bg-slate-800/20 transition-colors">
              <td className="p-4">
                <div className="font-bold text-white">Wipro</div>
                <div className="text-xs text-slate-500">Technology</div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span className="text-amber-400 font-medium text-xs border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 rounded">Medium Intent</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Watched 75% of Demo Video</div>
              </td>
              <td className="p-4 text-slate-300 text-xs">
                Director of Operations
              </td>
            </tr>
            
            <tr className="hover:bg-slate-800/20 transition-colors">
              <td className="p-4">
                <div className="font-bold text-white">Larsen & Toubro</div>
                <div className="text-xs text-slate-500">Manufacturing</div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                  <span className="text-purple-400 font-medium text-xs border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 rounded">High Intent</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">Clicked Ad & Opened Pricing Form</div>
              </td>
              <td className="p-4 text-slate-300 text-xs">
                Chief Procurement Officer
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
