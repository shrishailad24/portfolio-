import React, { useState } from 'react';
import { Layers, Eye, Cpu, Database, Server, Code, ArrowRight } from 'lucide-react';

export default function ProjectXRay({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  const xrayData = {
    aegiscr: {
      frontend: "React.js + Custom CSS + Streamlit UI",
      backend: "FastAPI / Python REST Orchestration",
      ml: "XGBoost Ensembles + Scikit-Learn Decision Trees",
      ai: "SHAP / LIME Explainable AI (XAI) Engine",
      data: "SQL & Pandas Data Frames",
      external: "OpenCV + Tesseract OCR Engine + Geospatial Valuation Maps",
      decisions: [
        { q: "Why XGBoost?", a: "Selected for superior predictive power on structured tabular financial datasets over traditional logistic regression." },
        { q: "Why OpenCV OCR?", a: "Automates document validation by extracting text from bank statements with 95%+ match confidence." },
        { q: "Why Explainable AI?", a: "Provides loan officers with clear reason codes for regulatory compliance and transparent decisioning." }
      ],
      evolution: [
        { v: "v0.1", title: "Loan Prediction MVP", desc: "Basic Logistic Regression model." },
        { v: "v0.3", title: "OCR Integration", desc: "Added OpenCV document text verification." },
        { v: "v0.5", title: "Explainable AI Layer", desc: "Integrated XAI feature importance graphs." },
        { v: "v1.0", title: "Full Credit Intelligence Platform", desc: "End-to-end platform with live risk dashboard." }
      ]
    },
    aaroha: {
      frontend: "React.js + Modular Screen State",
      backend: "Python / REST API Services",
      ml: "Adaptive Decision Trees & Workflow Graph Engine",
      ai: "Intelligent Context Router & Recommendation Pipeline",
      data: "MongoDB / JSON State Storage",
      external: "REST API Microservices",
      decisions: [
        { q: "Why Modular Architecture?", a: "Allows independent scaling of career, financial, and educational decision microservices." },
        { q: "Why REST APIs?", a: "Provides clean decoupling between the frontend interface and AI decision backend." }
      ],
      evolution: [
        { v: "v0.1", title: "Concept & Rules Engine", desc: "Initial decision tree logic." },
        { v: "v0.5", title: "Modular REST API", desc: "Decoupled backend service architecture." },
        { v: "v1.0", title: "Human OS System", desc: "Full multi-tier intelligent decision platform." }
      ]
    }
  };

  const data = xrayData[project] || xrayData.aegiscr;

  return (
    <div className="xray-wrapper" style={{ marginTop: '1rem' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="btn-outline" 
        style={{ fontSize: '0.8rem', padding: '0.4rem 0.9rem' }}
      >
        <Eye size={14} className="highlight-orange" />
        {isOpen ? "CLOSE X-RAY INSPECTOR" : "INSPECT ARCHITECTURE X-RAY 🔬"}
      </button>

      {isOpen && (
        <div className="xray-panel">
          <div className="xray-header">
            <span className="mono highlight-orange" style={{ fontSize: '0.75rem' }}>PROJECT TECHNICAL X-RAY DIAGNOSTIC</span>
            <span className="badge-active" style={{ fontSize: '0.65rem' }}>SYSTEM DECONSTRUCTION</span>
          </div>

          <div className="xray-grid">
            <div className="xray-card">
              <Code size={16} className="highlight-blue" />
              <strong>FRONTEND LAYER</strong>
              <p>{data.frontend}</p>
            </div>

            <div className="xray-card">
              <Server size={16} className="highlight-orange" />
              <strong>BACKEND SERVICE</strong>
              <p>{data.backend}</p>
            </div>

            <div className="xray-card">
              <Cpu size={16} style={{ color: '#22C55E' }} />
              <strong>ML / AI ENGINE</strong>
              <p>{data.ml}</p>
              <p style={{ color: 'var(--accent-orange)', marginTop: '0.2rem' }}>{data.ai}</p>
            </div>

            <div className="xray-card">
              <Database size={16} style={{ color: '#A855F7' }} />
              <strong>DATA & INTEGRATIONS</strong>
              <p>{data.data}</p>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.2rem' }}>{data.external}</p>
            </div>
          </div>

          {/* Architectural Decision Log */}
          <div className="xray-decisions" style={{ marginTop: '1.25rem' }}>
            <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', display: 'block', marginBottom: '0.5rem' }}>
              🧠 ENGINEERING DECISION LOG
            </span>
            {data.decisions.map((dec, idx) => (
              <div key={idx} className="decision-item">
                <strong style={{ color: '#FFF', fontSize: '0.85rem' }}>Q: {dec.q}</strong>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: '0.2rem' }}>A: {dec.a}</p>
              </div>
            ))}
          </div>

          {/* Evolution Timeline */}
          <div className="xray-evolution" style={{ marginTop: '1.25rem' }}>
            <span className="mono" style={{ fontSize: '0.75rem', color: '#22C55E', display: 'block', marginBottom: '0.5rem' }}>
              ⏱️ PROJECT EVOLUTION PIPELINE
            </span>
            <div className="evolution-row">
              {data.evolution.map((step, idx) => (
                <div key={idx} className="evolution-step">
                  <span className="evo-ver">{step.v}</span>
                  <strong className="evo-title">{step.title}</strong>
                  <span className="evo-desc">{step.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
