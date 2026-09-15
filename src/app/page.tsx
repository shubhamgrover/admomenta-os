"use client";

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { CsvUploader } from '@/components/CsvUploader';
import { DecisionEngine } from '@/components/DecisionEngine';
import { MacroInsights } from '@/components/MacroInsights';
import { CapitalReallocator } from '@/components/CapitalReallocator';
import { SalesSurge } from '@/components/SalesSurge';
import { WasteAuditor } from '@/components/WasteAuditor';

export default function Home() {
  const [activeTab, setActiveTab] = useState('decision-engine');
  const [demoData, setDemoData] = useState<any[]>([]);
  const [perfData, setPerfData] = useState<any[]>([]);

  const handleDataParsed = (type: 'demographics' | 'performance', data: any[]) => {
    if (type === 'demographics') setDemoData(prev => [...prev, ...data]);
    if (type === 'performance') setPerfData(prev => [...prev, ...data]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full space-y-6">
        {/* KPI Bar */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-1">
              <span>ACTIVE CORRELATION SIGNALS</span>
              <span className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-[10px] font-mono">6 Detected</span>
            </div>
            <div className="text-2xl font-black text-white tracking-tight">4 High Priority</div>
            <p className="text-[11px] text-slate-400 mt-1">Multi-metric patterns requiring immediate capital or copy action</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-1">
              <span>PROJECTED EFFICIENCY GAIN</span>
              <span className="text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded text-[10px] font-mono">Zero Extra Spend</span>
            </div>
            <div className="text-2xl font-black text-emerald-400 tracking-tight">+23 Qualified Leads</div>
            <p className="text-[11px] text-slate-400 mt-1">By applying prescribed capital reallocations & form fixes</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-1">
              <span>FORM FRICTION LOSS</span>
              <span className="text-rose-400 bg-rose-400/10 px-1.5 py-0.5 rounded text-[10px] font-mono">Leaked Pipeline</span>
            </div>
            <div className="text-2xl font-black text-rose-400 tracking-tight">246 Abandoned</div>
            <p className="text-[11px] text-slate-400 mt-1">Opened lead forms but dropped off due to field friction</p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 relative overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-1">
              <span>CREATIVE FATIGUE HORIZON</span>
              <span className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded text-[10px] font-mono">3 Ads at Risk</span>
            </div>
            <div className="text-2xl font-black text-white tracking-tight">4.2 Days Avg</div>
            <p className="text-[11px] text-slate-400 mt-1">Before active ads hit full audience saturation & CTR decay</p>
          </div>
        </section>

        {/* Tabs Content */}
        {activeTab === 'decision-engine' && (
          <div className="space-y-6">
            <CsvUploader onDataParsed={handleDataParsed} />
            <DecisionEngine demoData={demoData} perfData={perfData} />
          </div>
        )}
        
        {activeTab === 'insights' && (
          <MacroInsights />
        )}

        {activeTab === 'reallocator' && (
          <CapitalReallocator />
        )}

        {activeTab === 'dashboard' && (
          <SalesSurge />
        )}

        {activeTab === 'waste' && (
          <WasteAuditor />
        )}
      </main>
    </div>
  );
}
