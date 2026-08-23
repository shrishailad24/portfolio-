import React, { useState } from 'react';
import { GitBranch, Layers, Cpu, Database, Eye, Info } from 'lucide-react';

export default function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState('ocr');

  const nodes = {
    ui: {
      title: "React Frontend",
      type: "PRESENTATION LAYER",
      tech: "React, JavaScript, Framer Motion, HTML/CSS",
      desc: "Interactive dashboard featuring real-time form inputs, PDF report viewer, and dynamic credit score gauge rendering."
    },
    api: {
      title: "Python / FastAPI Backend",
      type: "ORCHESTRATION LAYER",
      tech: "Python, REST APIs, Streamlit",
      desc: "Handles request routing, payload validation, feature preprocessing, and orchestrates asynchronous model evaluation tasks."
    },
    ml: {
      title: "Scikit-Learn / XGBoost Risk Engine",
      type: "PREDICTIVE MODELING",
      tech: "Scikit-learn, XGBoost, Pandas, NumPy",
      desc: "Evaluates loan applicant default probability using cross-validated decision tree ensembles trained on financial indicators."
    },
    ocr: {
      title: "Intelligent Document Verification (OCR)",
      type: "COMPUTER VISION",
      tech: "OpenCV, Tesseract OCR Engine",
      desc: "Extracts structured text from bank statements, identity cards, and tax documents with 95%+ confidence matching."
    },
    xai: {
      title: "Explainable AI (XAI) Engine",
      type: "INTERPRETABILITY LAYER",
      tech: "SHAP / LIME Feature Importance Analysis",
      desc: "Deconstructs black-box ML risk predictions into human-understandable positive and negative loan approval factors."
    }
  };

  return (
    <div className="arch-diagram-box">
      <div className="arch-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <GitBranch className="highlight-orange" size={22} />
          <strong>AEGISCR — INTERACTIVE SYSTEM ARCHITECTURE MAP</strong>
        </div>
        <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>CLICK ANY NODE TO INSPECT PIPELINE</span>
      </div>

      <div className="arch-flow-grid">
        <div className="arch-flow-map">
          <div 
            onClick={() => setActiveNode('ui')} 
            className={`arch-node ${activeNode === 'ui' ? 'active' : ''}`}
          >
            <Layers size={18} />
            <span>REACT / STREAMLIT UI</span>
          </div>

          <div className="arch-arrow">↓</div>

          <div 
            onClick={() => setActiveNode('api')} 
            className={`arch-node ${activeNode === 'api' ? 'active' : ''}`}
          >
            <Cpu size={18} />
            <span>PYTHON / FASTAPI ORCHESTRATION</span>
          </div>

          <div className="arch-arrow">↓ (PARALLEL EXECUTION)</div>

          <div className="arch-sub-grid">
            <div 
              onClick={() => setActiveNode('ml')} 
              className={`arch-node ${activeNode === 'ml' ? 'active' : ''}`}
            >
              <Cpu size={16} />
              <span>ML RISK MODEL</span>
            </div>

            <div 
              onClick={() => setActiveNode('ocr')} 
              className={`arch-node ${activeNode === 'ocr' ? 'active' : ''}`}
            >
              <Eye size={16} />
              <span>OCR VERIFICATION</span>
            </div>

            <div 
              onClick={() => setActiveNode('xai')} 
              className={`arch-node ${activeNode === 'xai' ? 'active' : ''}`}
            >
              <Info size={16} />
              <span>EXPLAINABLE AI (XAI)</span>
            </div>
          </div>
        </div>

        <div className="arch-inspector">
          {activeNode && nodes[activeNode] && (
            <div className="arch-details">
              <span className="badge-active" style={{ fontSize: '0.65rem' }}>{nodes[activeNode].type}</span>
              <h4 style={{ fontSize: '1.2rem', color: '#FFF', margin: '0.5rem 0' }}>{nodes[activeNode].title}</h4>
              <div className="mono" style={{ fontSize: '0.8rem', color: 'var(--accent-orange)', marginBottom: '0.75rem' }}>
                STACK: {nodes[activeNode].tech}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                {nodes[activeNode].desc}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
