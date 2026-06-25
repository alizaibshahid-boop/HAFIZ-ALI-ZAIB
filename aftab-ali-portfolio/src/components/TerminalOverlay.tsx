import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Shield, Play, RotateCcw, AlertTriangle, Send } from 'lucide-react';

interface TerminalLine {
  text: string;
  type: 'system' | 'user' | 'success' | 'warning' | 'info';
}

export default function TerminalOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: 'AFTAB-OPS COMMAND CONSOLE v2.8.4', type: 'system' },
    { text: 'Initializing Secure Terminal Connection...', type: 'info' },
    { text: 'Location: Karachi, PK | Node: Korangi-05', type: 'info' },
    { text: 'System Status: ACTIVE | Database Connection: ONLINE', type: 'success' },
    { text: 'Type "help" to list available operations command macros.', type: 'system' },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [lines, isOpen]);

  const appendLines = (newLines: TerminalLine[]) => {
    setLines((prev) => [...prev, ...newLines]);
  };

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    const userLine: TerminalLine = { text: `root@aftab-analyst:~$ ${cmd}`, type: 'user' };
    appendLines([userLine]);

    const args = cleanCmd.split(' ');
    const primary = args[0];

    switch (primary) {
      case 'help':
        appendLines([
          { text: 'AVAILABLE CRITICAL COMMAND RUNTIMES:', type: 'system' },
          { text: '  dip_tank [depth_cm]  - Simulate oil storage measurement dipping calculation', type: 'info' },
          { text: '  fmcg_dispatch        - Run Young\'s Food distribution route analysis', type: 'info' },
          { text: '  patient_db           - Query clinical records filing audit system', type: 'info' },
          { text: '  skills               - Fetch core technical skills database (JSON format)', type: 'info' },
          { text: '  experience           - Output compressed chronology of professional roles', type: 'info' },
          { text: '  clear                - Flush terminal backlogs and reset screen', type: 'info' },
          { text: '  status               - Run comprehensive diagnostic check on operational nodes', type: 'info' },
        ]);
        break;

      case 'clear':
        setLines([{ text: 'AFTAB-OPS COMMAND CONSOLE v2.8.4 - Flushed.', type: 'system' }]);
        break;

      case 'dip_tank': {
        const depth = parseFloat(args[1]) || 450; // default 450cm
        if (isNaN(depth) || depth <= 0 || depth > 1500) {
          appendLines([
            { text: 'ERROR: Critical boundary failure.', type: 'warning' },
            { text: 'Valid dipping depth range: 1 - 1500 cm.', type: 'warning' },
          ]);
          break;
        }

        // Petroleum calculation simulation
        const tankRadius = 800; // cm (8 meters)
        const tankArea = Math.PI * Math.pow(tankRadius / 100, 2); // sq. m
        const volumeLiters = tankArea * (depth / 100) * 1000; // liters
        const metricTons = (volumeLiters * 0.84) / 1000; // density 0.84 for standard gasoil

        appendLines([
          { text: '--- INITIATING PETROLEUM TANK DIPPING OPERATION ---', type: 'system' },
          { text: `Target Vessel: Vertical Cylindrical Tank #04 | Sensor: Manual Dipping Tape`, type: 'info' },
          { text: `Measured Liquid Level: ${depth.toFixed(2)} cm (Dipping Reference Height: 1200 cm)`, type: 'info' },
          { text: `Calculated Cross-Sectional Area: ${tankArea.toFixed(3)} m²`, type: 'info' },
          { text: `Current Liquid Volume: ${volumeLiters.toLocaleString(undefined, { maximumFractionDigits: 1 })} Liters`, type: 'success' },
          { text: `Oil Weight (Equivalent): ${metricTons.toLocaleString(undefined, { maximumFractionDigits: 2 })} Metric Tons (Density: 0.840 kg/L @ 15°C)`, type: 'success' },
          { text: 'Dipping Logs updated successfully in International Tank Terminal Ledger.', type: 'system' },
        ]);
        break;
      }

      case 'fmcg_dispatch':
        appendLines([
          { text: '--- YOUNG\'S FOOD DISTRIBUTION OPERATIONS DISPATCH ---', type: 'system' },
          { text: 'Active Depot: Young\'s Food Pvt Ltd, Karachi', type: 'info' },
          { text: 'Active Fleet: 14 Delivery Units | Target Channels: 45 FMCG Distributors', type: 'info' },
          { text: 'Analyzing optimal routing and order matching vectors...', type: 'info' },
          { text: 'Dispatch Load Factor: 96.4% | Route Accuracy Index: 99.8%', type: 'success' },
          { text: 'Primary Shipments: Mayonnaise, Spreads, FMCG Finished Goods', type: 'success' },
          { text: 'Status: ALL DISTRIBUTION VECTORS COMPLIANT WITH SERVICE SLA.', type: 'success' },
        ]);
        break;

      case 'patient_db':
        appendLines([
          { text: '--- CLINICAL PATIENT RECORDS AUDIT DATABASE (NMC) ---', type: 'system' },
          { text: 'Database: National Medical Center Pvt Ltd, Karachi', type: 'info' },
          { text: 'Front-desk triage & record indexing pipeline active...', type: 'info' },
          { text: 'Secure Patient Files indexed: 142,500+ records', type: 'success' },
          { text: 'Investigations Log Matching Rate: 100% | Accuracy Audit: PASS', type: 'success' },
          { text: 'Administrative Support: Fully optimized record-keeping nodes', type: 'info' },
        ]);
        break;

      case 'skills':
        appendLines([
          { text: '{', type: 'system' },
          { text: '  "core": ["Data Analysis", "Record Archiving", "Logistics Coordination"],', type: 'info' },
          { text: '  "petroleum": ["Tank Dipping Operations", "Volume Calculation", "Fuel Cargo Supervision"],', type: 'info' },
          { text: '  "inventory": ["Stock Auditing", "Pharmacy Supply Control", "Warehouse Ledger"],', type: 'info' },
          { text: '  "digital": ["Microsoft Excel vLookups", "Database Indexing", "ERP Operations"]', type: 'info' },
          { text: '}', type: 'system' },
        ]);
        break;

      case 'experience':
        appendLines([
          { text: 'PROFESSIONAL HISTORY ARCHIVE:', type: 'system' },
          { text: '1. National Medical Center Pvt Ltd (2017-2019) -> Medical Reception & Archiving Specialist', type: 'info' },
          { text: '2. Al Mustafa Trust & Welfare (2019-2020) -> Pharmacy Store Incharge & Supply Control', type: 'info' },
          { text: '3. International Tank Terminal Pvt Ltd (2020-2024) -> Petroleum Operations & Cargo Data Clerk', type: 'info' },
          { text: '4. Young\'s Food Pvt Ltd (2025) -> Supplier & FMCG Logistics Coordinator', type: 'info' },
        ]);
        break;

      case 'status':
        appendLines([
          { text: '--- HARDWARE DIAGNOSTICS & SYSTEM COMPLIANCE ---', type: 'system' },
          { text: 'Core CPU Load: 12.4% | Memory: 3.2 GB / 16.0 GB allocated', type: 'info' },
          { text: 'Dipping Sensor Nodes: ONLINE | Stock Ledger Nodes: ONLINE', type: 'success' },
          { text: 'Karachi University B.Com Educational module: CONTINUING (Academic ledger OK)', type: 'info' },
          { text: 'System Diagnostics complete. AFTAB-ANALYST is fully optimized.', type: 'success' },
        ]);
        break;

      default:
        appendLines([
          { text: `Command not found: "${primary}". Type "help" for a full checklist of operations macros.`, type: 'warning' },
        ]);
        break;
    }

    setInput('');
  };

  const executeMacro = (macroCmd: string) => {
    handleCommand(macroCmd);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono" id="ops-terminal-overlay">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-slate-900/90 hover:bg-cyan-950/90 border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)] backdrop-blur-md transition-all duration-300 pointer-events-auto cursor-pointer"
        id="btn-toggle-terminal"
      >
        <Terminal size={18} className="animate-pulse text-cyan-400" />
        <span className="text-xs font-semibold tracking-wider uppercase">
          {isOpen ? 'Close Command Console' : 'Open Operations Console'}
        </span>
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div 
          className="absolute bottom-16 right-0 w-[90vw] max-w-lg h-[450px] bg-slate-950/95 border border-cyan-500/40 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col overflow-hidden backdrop-blur-lg animate-in fade-in slide-in-from-bottom-5 duration-300"
          id="ops-terminal-window"
        >
          {/* Header */}
          <div className="px-4 py-2 bg-slate-900 border-b border-cyan-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-cyan-400" />
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Operations Triage Matrix
              </span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
          </div>

          {/* Quick Macro Rails */}
          <div className="px-3 py-1.5 bg-slate-900/40 border-b border-cyan-500/10 flex flex-wrap gap-1.5">
            <button
              onClick={() => executeMacro('help')}
              className="text-[10px] px-2 py-0.5 bg-slate-800 hover:bg-cyan-950 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 text-slate-300 rounded transition-all cursor-pointer"
            >
              help
            </button>
            <button
              onClick={() => executeMacro('dip_tank 520')}
              className="text-[10px] px-2 py-0.5 bg-slate-800 hover:bg-cyan-950 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 text-slate-300 rounded transition-all cursor-pointer"
            >
              dip_tank (5.2m)
            </button>
            <button
              onClick={() => executeMacro('fmcg_dispatch')}
              className="text-[10px] px-2 py-0.5 bg-slate-800 hover:bg-cyan-950 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 text-slate-300 rounded transition-all cursor-pointer"
            >
              fmcg_dispatch
            </button>
            <button
              onClick={() => executeMacro('skills')}
              className="text-[10px] px-2 py-0.5 bg-slate-800 hover:bg-cyan-950 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 text-slate-300 rounded transition-all cursor-pointer"
            >
              skills_json
            </button>
            <button
              onClick={() => executeMacro('status')}
              className="text-[10px] px-2 py-0.5 bg-slate-800 hover:bg-cyan-950 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 text-slate-300 rounded transition-all cursor-pointer"
            >
              diagnostics
            </button>
          </div>

          {/* Output lines */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 text-xs leading-relaxed select-text" id="terminal-logs-list">
            {lines.map((line, idx) => (
              <div 
                key={idx} 
                className={`${
                  line.type === 'system' ? 'text-cyan-400 font-semibold' :
                  line.type === 'user' ? 'text-white' :
                  line.type === 'success' ? 'text-emerald-400' :
                  line.type === 'warning' ? 'text-amber-400 animate-pulse' :
                  'text-slate-400'
                }`}
              >
                {line.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(input);
            }}
            className="p-3 bg-slate-900 border-t border-cyan-500/30 flex items-center gap-2"
          >
            <span className="text-cyan-400 font-bold text-xs select-none">~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter ops query or helper command..."
              className="flex-1 bg-transparent border-none text-white text-xs outline-none font-mono placeholder-slate-600 focus:ring-0 focus:border-none p-0"
              id="terminal-cli-input"
            />
            <button
              type="submit"
              className="p-1.5 text-cyan-400 hover:text-cyan-300 hover:bg-slate-800 rounded transition-all cursor-pointer"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
