import React, { useState } from 'react';
import { ShieldCheck, FileText, MapPin, Eye, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';

export default function AegisWorkflowStepper() {
  const [activeStep, setActiveStep] = useState(4); // Default to Step 5 (AI Risk Assessment)

  const steps = [
    {
      num: "01",
      title: "Authentication",
      icon: <ShieldCheck size={18} className="highlight-orange" />,
      tag: "SECURITY",
      desc: "User login via Firebase Auth with role-based access control (Loan Officer vs Manager)."
    },
    {
      num: "02",
      title: "Loan Application",
      icon: <FileText size={18} className="highlight-blue" />,
      tag: "INPUT FORM",
      desc: "Applicant inputs income, loan request, employment details, and property collateral data."
    },
    {
      num: "03",
      title: "Property & GIS",
      icon: <MapPin size={18} style={{ color: '#22C55E' }} />,
      tag: "GEOSPATIAL",
      desc: "Geospatial mapping and environmental/climate risk assessment for collateral evaluation."
    },
    {
      num: "04",
      title: "Doc Verification",
      icon: <Eye size={18} style={{ color: '#A855F7' }} />,
      tag: "OPENCV OCR",
      desc: "Tesseract OCR extracts text from bank statements and tax proofs with cross-document matching."
    },
    {
      num: "05",
      title: "AI Risk Engine",
      icon: <Cpu size={18} className="highlight-orange" />,
      tag: "XGBOOST ML",
      desc: "Scikit-learn & XGBoost model predicts default probability and SHAP explains top risk factors."
    },
    {
      num: "06",
      title: "Underwriting Report",
      icon: <CheckCircle2 size={18} style={{ color: '#22C55E' }} />,
      tag: "PDF GENERATOR",
      desc: "Automated PDF summary report generated with credit approval recommendation."
    }
  ];

  return (
    <div className="stepper-box" style={{ marginTop: '2rem' }}>
      <div className="stepper-header">
        <span className="mono highlight-orange" style={{ fontSize: '0.75rem' }}>AEGISCR — LIVE SYSTEM WORKFLOW STEPPER</span>
        <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CLICK STEP TO INSPECT PHASE</span>
      </div>

      {/* Workflow Diagram Stepper Pills */}
      <div className="stepper-pills-row">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`step-pill ${activeStep === idx ? 'active' : ''}`}
          >
            <span className="step-num">{s.num}</span>
            <span className="step-title">{s.title}</span>
          </button>
        ))}
      </div>

      {/* Active Step Showcase Panel */}
      <div className="step-showcase-panel">
        <div className="step-showcase-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {steps[activeStep].icon}
            <h4 style={{ fontSize: '1.2rem', color: '#FFF' }}>
              STEP {steps[activeStep].num}: {steps[activeStep].title}
            </h4>
          </div>
          <span className="badge-active" style={{ fontSize: '0.65rem' }}>{steps[activeStep].tag}</span>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: '0.8rem 0 1.25rem 0', lineHeight: '1.6' }}>
          {steps[activeStep].desc}
        </p>

        <div className="stepper-flow-visual">
          <div className="flow-step-chip">Documents</div>
          <ChevronRight size={14} className="highlight-blue" />
          <div className="flow-step-chip">OCR Verification</div>
          <ChevronRight size={14} className="highlight-blue" />
          <div className="flow-step-chip">Fraud Intelligence</div>
          <ChevronRight size={14} className="highlight-blue" />
          <div className="flow-step-chip">Property GIS</div>
          <ChevronRight size={14} className="highlight-blue" />
          <div className="flow-step-chip active">Credit Risk ML</div>
          <ChevronRight size={14} className="highlight-blue" />
          <div className="flow-step-chip">Decision Report</div>
        </div>
      </div>
    </div>
  );
}
