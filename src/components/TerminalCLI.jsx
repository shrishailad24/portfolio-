import React, { useState } from 'react';
import { Terminal, CornerDownLeft, Sparkles } from 'lucide-react';

export default function TerminalCLI() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'SHRISHAIL OS [Version 2.4.0]' },
    { type: 'system', text: 'Type "help" or "sudo hire shrishail" to begin.' }
  ]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.trim();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${cmd}` }];
    const lower = cmd.toLowerCase();

    if (lower === 'help') {
      newHistory.push({
        type: 'system',
        text: 'Available commands:\n  help        - Show available commands\n  about       - Display bio & CGPA\n  projects    - List star AI projects\n  skills      - Show capability map\n  sudo hire   - Run interview candidate evaluation'
      });
    } else if (lower === 'about') {
      newHistory.push({
        type: 'system',
        text: 'SHRISHAIL M HEBBALLI\nAI & Data Science Engineer undergrad @ B.M.S. College of Engineering (8.28 CGPA)\nLocation: Bengaluru, India'
      });
    } else if (lower === 'projects') {
      newHistory.push({
        type: 'system',
        text: '1. AegisCR - AI Credit Risk & Loan Intelligence Platform\n2. AAROHA - AI Human Operating System\n3. Business Analytics Dashboards (Tableau & SQL)\n4. Age & Gender Detection (OpenCV & Caffe DNN)'
      });
    } else if (lower === 'skills') {
      newHistory.push({
        type: 'system',
        text: 'AI/ML: Python, Scikit-learn, XGBoost, Pandas, NumPy, OpenCV\nDev: React, JS, REST APIs, Node.js, Streamlit\nData: SQL, Tableau, MySQL, MongoDB'
      });
    } else if (lower.includes('sudo hire') || lower.includes('hire')) {
      newHistory.push({
        type: 'system',
        text: '> sudo hire shrishail\nChecking candidate status...\nAI/ML Foundations ..... [✓ PASSED]\nReact & Web Dev ...... [✓ PASSED]\nPython & Pipelines .... [✓ PASSED]\nProblem Solving ....... [✓ PASSED]\n\nSTATUS: CANDIDATE IS READY FOR INTERVIEW! 🚀'
      });
    } else if (lower === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else {
      newHistory.push({
        type: 'system',
        text: `Command not recognized: "${cmd}". Type "help" for command list.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="terminal-cli-box">
      <div className="terminal-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Terminal size={16} className="highlight-orange" />
          <span>SHRISHAIL_OS_TERMINAL.EXE</span>
        </div>
        <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>BASH / ZSH</span>
      </div>

      <div className="terminal-body">
        {history.map((h, idx) => (
          <pre key={idx} className={`terminal-line ${h.type}`}>
            {h.text}
          </pre>
        ))}

        <div className="terminal-input-line">
          <span className="terminal-prompt">$ </span>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            onKeyDown={handleCommand} 
            placeholder="Type 'help' or 'sudo hire shrishail'..." 
            className="terminal-input"
          />
          <CornerDownLeft size={14} className="highlight-blue" />
        </div>
      </div>
    </div>
  );
}
