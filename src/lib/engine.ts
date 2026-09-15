export function analyzeData(demoData: any[], perfData: any[]) {
  // Defensive check
  if (!demoData || !perfData) return null;

  // Basic stats just to prove the engine is reading the exact CSV arrays
  const demoRows = demoData.length;
  const perfRows = perfData.length;

  let totalSpend = 0;
  let totalClicks = 0;

  // LinkedIn CSVs often have keys like 'Spend in INR', 'Spend (INR)', 'Total Spent'
  // We do a fuzzy search for spend and clicks
  perfData.forEach(row => {
    for (const key in row) {
      if (key.toLowerCase().includes('spend')) {
        totalSpend += parseFloat(row[key]) || 0;
      }
      if (key.toLowerCase().includes('clicks')) {
        totalClicks += parseInt(row[key], 10) || 0;
      }
    }
  });

  return {
    isLive: demoRows > 0 || perfRows > 0,
    demoRows,
    perfRows,
    totalSpend: totalSpend.toFixed(2),
    totalClicks
  };
}
