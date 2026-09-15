import React from 'react';

export function MacroInsights() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-cyan-500/10 via-slate-900 to-slate-900 border border-cyan-500/30 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-cyan-500 text-slate-950">Cross-Tabulation</span>
          <span className="text-xs text-slate-400 font-mono">Macro Trends across all Campaigns</span>
        </div>
        <h2 className="text-lg font-bold text-white tracking-tight">The Golden Triangle: Industry × Format × Persona</h2>
        <p className="text-xs text-slate-300 mt-1 max-w-2xl">
          Aggregating all historical spend to find the macro combinations that yield the cheapest decision-maker acquisition cost.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-xl">
          <h3 className="text-sm font-extrabold text-white mb-4 border-b border-slate-800 pb-2">Top 3 Most Efficient Macro Combinations</h3>
          <div className="space-y-3">
            <div className="p-3 bg-slate-950 rounded border border-emerald-500/20">
              <div className="text-xs text-slate-400 mb-1">Rank #1 (Highest ROI)</div>
              <div className="font-mono text-sm text-emerald-400 font-bold">[BFSI] + [Document Ad] + [VP/Director]</div>
              <div className="text-xs text-slate-500 mt-2 flex justify-between">
                <span>Avg Dwell: 14.2s</span>
                <span>CPL: ₹2,100</span>
              </div>
            </div>
            
            <div className="p-3 bg-slate-950 rounded border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">Rank #2</div>
              <div className="font-mono text-sm text-amber-400 font-bold">[Technology] + [Video Ad] + [CXO]</div>
              <div className="text-xs text-slate-500 mt-2 flex justify-between">
                <span>Avg Dwell: 8.5s</span>
                <span>CPL: ₹3,400</span>
              </div>
            </div>
            
            <div className="p-3 bg-slate-950 rounded border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">Rank #3</div>
              <div className="font-mono text-sm text-cyan-400 font-bold">[Manufacturing] + [Single Image] + [Manager]</div>
              <div className="text-xs text-slate-500 mt-2 flex justify-between">
                <span>Avg CTR: 0.8%</span>
                <span>CPL: ₹1,800</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-extrabold text-white mb-4 border-b border-slate-800 pb-2">"The Whale" Account Concentration</h3>
            <p className="text-xs text-slate-400 mb-4">
              A disproportionate amount of your ad budget is being consumed by a few massive companies without generating leads.
            </p>
            
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-500 border-b border-slate-800">
                  <th className="pb-2 font-medium">Company Name</th>
                  <th className="pb-2 font-medium text-right">Spend %</th>
                  <th className="pb-2 font-medium text-right">Leads</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                <tr>
                  <td className="py-2 text-rose-400 font-bold">Tata Consultancy Services</td>
                  <td className="py-2 text-right font-mono">14.2%</td>
                  <td className="py-2 text-right text-slate-500">0</td>
                </tr>
                <tr>
                  <td className="py-2 text-rose-400 font-bold">Cognizant</td>
                  <td className="py-2 text-right font-mono">8.5%</td>
                  <td className="py-2 text-right text-slate-500">1</td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-300">Infosys</td>
                  <td className="py-2 text-right font-mono">6.1%</td>
                  <td className="py-2 text-right text-slate-500">0</td>
                </tr>
                <tr>
                  <td className="py-2 text-slate-300">Reliance Industries</td>
                  <td className="py-2 text-right font-mono">4.3%</td>
                  <td className="py-2 text-right text-slate-500">2</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 p-3 bg-rose-500/10 border border-rose-500/20 rounded text-xs text-rose-300">
            <strong>Prescription:</strong> Exclude TCS and Cognizant immediately. They are consuming 22.7% of budget with near-zero conversion rate.
          </div>
        </div>

      </div>
    </div>
  );
}
