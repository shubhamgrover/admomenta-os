import React from 'react';

interface DecisionCardProps {
  title: string;
  ruleNumber: string;
  confidence: string;
  colorTheme: 'emerald' | 'amber' | 'rose' | 'cyan' | 'purple';
  signalPattern: string;
  dataEvidence: string | React.ReactNode;
  prescribedAction: string;
  projectedOutcome: string;
}

export function DecisionCard({
  title,
  ruleNumber,
  confidence,
  colorTheme,
  signalPattern,
  dataEvidence,
  prescribedAction,
  projectedOutcome
}: DecisionCardProps) {
  
  const colors = {
    emerald: { bg: 'bg-emerald-400', text: 'text-emerald-400', light: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
    amber: { bg: 'bg-amber-400', text: 'text-amber-400', light: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
    rose: { bg: 'bg-rose-500', text: 'text-rose-400', light: 'bg-rose-500/10 text-rose-300 border-rose-500/20' },
    cyan: { bg: 'bg-cyan-400', text: 'text-cyan-400', light: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
    purple: { bg: 'bg-purple-400', text: 'text-purple-400', light: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
  };

  const theme = colors[colorTheme];

  return (
    <div className={`bg-slate-900/90 border border-slate-800 hover:border-${colorTheme}-500/50 rounded-xl p-5 space-y-4 shadow-xl relative overflow-hidden transition-all`}>
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${theme.bg}`}></span>
          <h3 className={`text-xs font-extrabold uppercase tracking-wider ${theme.text}`}>Rule {ruleNumber}: {title}</h3>
        </div>
        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${colors.emerald.light}`}>
          🟢 {confidence} Confidence
        </span>
      </div>

      <div className="space-y-2.5 text-xs">
        <div className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 font-mono text-[11px] text-amber-300">
          <strong>Pattern:</strong> {signalPattern}
        </div>
        <p className="text-slate-300 leading-relaxed">
          <strong>Evidence:</strong> {dataEvidence}
        </p>
        <div className={`p-3 rounded-lg border space-y-1 ${theme.light}`}>
          <div className="font-bold uppercase tracking-wider text-[10px]">👉 Prescribed Action:</div>
          <p>{prescribedAction}</p>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-xs">
        <span className="text-slate-400">Projected Outcome:</span>
        <span className="font-bold text-emerald-400 font-mono">{projectedOutcome}</span>
      </div>
    </div>
  );
}
