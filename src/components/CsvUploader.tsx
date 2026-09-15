"use client";

import React, { useRef, useState } from 'react';
import Papa from 'papaparse';
import { UploadCloud, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

interface CsvUploaderProps {
  onDataParsed: (type: 'demographics' | 'performance', data: any[]) => void;
}

export function CsvUploader({ onDataParsed }: CsvUploaderProps) {
  const [demoFile, setDemoFile] = useState<string | null>(null);
  const [perfFile, setPerfFile] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'demographics' | 'performance') => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    if (type === 'demographics') setDemoFile(files[0].name);
    if (type === 'performance') setPerfFile(files.length > 1 ? `${files.length} files loaded` : files[0].name);

    files.forEach(file => {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          console.log(`Parsed ${type} (${file.name}):`, results.data);
          onDataParsed(type, results.data);
        },
        error: (error) => {
          console.error("Error parsing CSV:", error);
          alert(`Error parsing CSV: ${error.message}`);
        }
      });
    });
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 shadow-xl space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-lg font-bold text-white tracking-tight">Audit Mode: Data Ingestion Engine</h2>
        <p className="text-xs text-slate-400 max-w-xl mx-auto">
          Upload raw LinkedIn Ads CSV exports to bypass Ads Manager limitations. The engine will parse the raw data in-browser and identify immediate leaks and correlation opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Demographics Uploader */}
        <div className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all ${demoFile ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-slate-700 bg-slate-950 hover:border-amber-500/50 hover:bg-slate-900'}`}>
          <input
            type="file"
            accept=".csv"
            onChange={(e) => handleFileUpload(e, 'demographics')}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center gap-3">
            {demoFile ? (
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            ) : (
              <UploadCloud className="w-8 h-8 text-slate-400" />
            )}
            <div>
              <div className="text-sm font-bold text-white">
                {demoFile ? 'Demographics Loaded' : 'Upload Demographics.csv'}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {demoFile ? demoFile : 'Company, Industry, Seniority breakdowns'}
              </div>
            </div>
          </div>
        </div>

        {/* Ad Performance Uploader */}
        <div className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all ${perfFile ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-slate-700 bg-slate-950 hover:border-amber-500/50 hover:bg-slate-900'}`}>
          <input
            type="file"
            accept=".csv"
            multiple
            onChange={(e) => handleFileUpload(e, 'performance')}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center gap-3">
            {perfFile ? (
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            ) : (
              <FileSpreadsheet className="w-8 h-8 text-slate-400" />
            )}
            <div>
              <div className="text-sm font-bold text-white">
                {perfFile ? 'Performance Loaded' : 'Upload Performance CSVs'}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {perfFile ? perfFile : 'Select multiple: Creative, Conversion, Campaign'}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
