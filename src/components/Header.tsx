"use client";

import React from 'react';
import { Download } from 'lucide-react';
import clsx from 'clsx';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const tabs = [
    { id: 'decision-engine', label: '🧠 Decision Engine' },
    { id: 'insights', label: '🔭 Macro Insights' },
    { id: 'reallocator', label: '💰 Capital Reallocator' },
    { id: 'dashboard', label: '⚡ Sales Surge (19)' },
    { id: 'waste', label: '🛡️ Waste Auditor' },
  ];

  return (
    <header className="border-b border-slate-800/80 bg-[#090D16]/90 backdrop-blur-md sticky top-0 z-40 px-6 py-3.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-extrabold text-slate-950 text-xl tracking-tighter shadow-lg shadow-amber-500/20">
            AM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold tracking-tight text-white text-base">AD MOMENTA</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Decision OS</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">B2B Multi-Metric Correlation & Capital Reallocation Engine</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1 pl-6 border-l border-slate-800 text-xs font-semibold">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={clsx(
                "px-3 py-1.5 rounded-md transition-all",
                activeTab === tab.id
                  ? "text-amber-400 bg-amber-500/10 border border-amber-500/20"
                  : "text-slate-400 hover:text-slate-200 border border-transparent"
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => alert('Exporting Ad Momenta Executive Decision Deck (PDF)...')}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs rounded-lg transition shadow-md shadow-amber-500/20"
        >
          <Download className="w-3.5 h-3.5" />
          Export CMO Action Deck
        </button>
      </div>
    </header>
  );
}
