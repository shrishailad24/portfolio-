import React, { useState } from 'react';
import TiltCard from './TiltCard';
import AegisSimulator from './AegisSimulator';
import ArchitectureDiagram from './ArchitectureDiagram';
import AegisWorkflowStepper from './AegisWorkflowStepper';
import { 
  ArrowUpRight, 
  ChevronRight, 
  ShieldCheck, 
  FileText, 
  MapPin, 
  Eye, 
  Cpu, 
  CheckCircle2, 
  Coins, 
  Car, 
  Tractor, 
  Home, 
  Building2, 
  Users, 
  UserCheck, 
  Briefcase, 
  Bot, 
  Sparkles, 
  FileSpreadsheet, 
  Network,
  Lock,
  Scale,
  FileCheck,
  TrendingUp,
  Check,
  X,
  ArrowLeft
} from 'lucide-react';

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function AegisCRCaseStudyModal({ isOpen, onClose }) {
  const [copilotQuery, setCopilotQuery] = useState('');
  const [copilotResponse, setCopilotResponse] = useState(null);

  if (!isOpen) return null;

  const loanProducts = [
    { name: 'Home Loan', icon: <Home size={16} />, desc: 'Property valuation, LTV, market value, collateral intelligence and home-loan underwriting.' },
    { name: 'Agriculture Loan', icon: <Tractor size={16} />, desc: 'Agricultural land valuation, land characteristics, crop/agriculture intelligence, risk assessment and eligible loan calculation.' },
    { name: 'Commercial Loan', icon: <Building2 size={16} />, desc: 'Commercial property valuation, rental/cash-flow analysis, DSCR and commercial underwriting.' },
    { name: 'Gold Loan', icon: <Coins size={16} />, desc: 'Live gold pricing API, purity-based valuation, LTV calculation and gold-loan eligibility.' },
    { name: 'Farm Equipment Loan', icon: <Tractor size={16} />, desc: 'Equipment cost, subsidy, depreciation/resale analysis, repayment feasibility and machinery-loan eligibility.' },
    { name: 'Vehicle Loan', icon: <Car size={16} />, desc: 'Vehicle API specifications, market/resale valuation, depreciation and vehicle-loan underwriting.' }
  ];

  const engineeringCapabilities = [
    "01 — Government land-record PDF intelligence across ~250 Bhoomi/Kaveri gazette documents",
    "02 — Structured document OCR extraction via Google Cloud Vision API",
    "03 — Multi-document identity verification and fuzzy similarity matching",
    "04 — Property ownership title verification and survey number boundary lookup",
    "05 — Fraud and document-trust score evaluation",
    "06 — Explainable credit-risk scoring via decision models and SHAP risk waterfalls",
    "07 — Deterministic business-rule compliance overrides superseding ML outputs",
    "08 — AI-assisted underwriting copilot and analysis",
    "09 — Automated PDF sanction and rejection report generation",
    "10 — Role-aware workflows across Customers, Employees, and Officers",
    "11 — External live API orchestration (Gold, Vehicle, Groq, Location)",
    "12 — Audit-ready underwriting history and decision logs"
  ];

  const handleCopilot = (q) => {
    setCopilotQuery(q);
    if (q.includes('approved')) {
      setCopilotResponse("🤖 Aegis Copilot: Approved. Aegis Risk Index: LOW (0.18). LTV 48%, 100% Document Trust Score via Google Vision OCR, verified RTC survey land rate ₹28.5L.");
    } else if (q.includes('land')) {
      setCopilotResponse("📜 Land Intel: Matched Bhoomi PDF #KA-BLR-104 (Yelahanka, Survey 42/1). Rate: ₹3,200/sq.ft. Property title matches applicant PAN (98.2% similarity).");
    } else {
      setCopilotResponse("🪙 Gold Intel: Live API rate ₹6,420/g (22K). Evaluated 150g gold collateral. Gross value: ₹9,63,000. Eligible loan @ 75% LTV: ₹7,22,250.");
    }
  };

  return (
    <div className="aegis-modal-overlay">
      <div className="aegis-modal-container">
        {/* Sticky Header Bar */}
        <div className="aegis-modal-header">
          <div className="aegis-modal-header-left">
            <button onClick={onClose} className="btn-back-portfolio">
              <ArrowLeft size={16} /> Back to Portfolio
            </button>
            <span className="min-tag highlight-orange" style={{ margin: 0 }}>AEGISCR DEEP-DIVE CASE STUDY</span>
          </div>

          <div className="aegis-modal-header-right">
            <a href="https://aegiscr-5.onrender.com" target="_blank" rel="noopener noreferrer" className="btn-outline case-study-hdr-btn">
              Live Demo <ArrowUpRight size={14} />
            </a>
            <a href="https://github.com/shrishailad24/AegisCR" target="_blank" rel="noopener noreferrer" className="btn-outline case-study-hdr-btn">
              GitHub <GithubIcon size={14} />
            </a>
            <button onClick={onClose} className="aegis-close-btn" aria-label="Close Case Study">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="aegis-modal-body container">
          {/* Title Header */}
          <div className="min-section-head" style={{ marginTop: '1rem' }}>
            <span className="min-tag highlight-blue">FLAGSHIP CASE STUDY DEEP-DIVE ⭐</span>
            <h1 style={{ fontSize: '2.8rem', color: '#FFF', fontFamily: 'var(--font-heading)' }}>AEGISCR — AI Credit Underwriting Platform</h1>
            <p className="min-subtext">Complete End-to-End System Architecture, Land Intelligence & Underwriting Engine</p>
          </div>

          {/* Problem Statement vs Solution */}
          <div className="min-grid-2col" style={{ marginBottom: '2rem' }}>
            <div className="min-info-card">
              <strong className="mono" style={{ color: '#EF4444', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
                PROBLEM STATEMENT
              </strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                Traditional loan underwriting suffers from fragmented document verification, manual land valuation lookup across government gazettes, opaque credit scoring, and high risk of document fraud.
              </p>
            </div>

            <div className="min-info-card">
              <strong className="mono" style={{ color: '#22C55E', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>
                ENGINEERED SOLUTION
              </strong>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
                AegisCR unifies document OCR, collateral valuation across 250+ Karnataka Bhoomi/Kaveri PDFs, fraud graph analysis, XGBoost credit modeling, SHAP explainable AI, and automated sanction PDF generation into one auditable platform.
              </p>
            </div>
          </div>

          {/* Clean 11-Node Architecture Flow */}
          <div className="min-flow-bar" style={{ marginBottom: '2rem' }}>
            <div className="min-flow-node"><strong>USER / OFFICER</strong><span>Role interface state</span></div>
            <div className="min-flow-arrow">→</div>
            <div className="min-flow-node"><strong>DOCUMENT INGESTION</strong><span>PDF dossier upload</span></div>
            <div className="min-flow-arrow">→</div>
            <div className="min-flow-node"><strong>GOOGLE VISION OCR</strong><span>Cloud Vision API</span></div>
            <div className="min-flow-arrow">→</div>
            <div className="min-flow-node"><strong>STRUCTURED EXTRACTION</strong><span>JSON field parsing</span></div>
            <div className="min-flow-arrow">→</div>
            <div className="min-flow-node"><strong>LAND VALUATION</strong><span>Bhoomi/Kaveri rates</span></div>
            <div className="min-flow-arrow">→</div>
            <div className="min-flow-node"><strong>DOC VERIFICATION</strong><span>Cross-doc check</span></div>
            <div className="min-flow-arrow">→</div>
            <div className="min-flow-node"><strong>FRAUD INTEL</strong><span>Anomaly detection</span></div>
            <div className="min-flow-arrow">→</div>
            <div className="min-flow-node"><strong>RISK ENGINE</strong><span>DTI / LTV ratios</span></div>
            <div className="min-flow-arrow">→</div>
            <div className="min-flow-node"><strong>AI UNDERWRITING</strong><span>XGBoost + SHAP XAI</span></div>
            <div className="min-flow-arrow">→</div>
            <div className="min-flow-node highlight"><strong>DECISION</strong><span>Approve / Reject</span></div>
            <div className="min-flow-arrow">→</div>
            <div className="min-flow-node"><strong>PDF REPORT</strong><span>Sanction document</span></div>
          </div>

          {/* Multi-Tier Architecture Diagram Component */}
          <ArchitectureDiagram />

          {/* SECTION 01: KARNATAKA LAND INTELLIGENCE */}
          <section className="min-section">
            <div className="min-section-head">
              <span className="min-tag">SECTION 01 / COLLATERAL VALUATION</span>
              <h2>Karnataka Land-Record Intelligence</h2>
              <p className="min-subtext">Turning government land-record PDFs into collateral intelligence.</p>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              AegisCR works with a corpus of Karnataka government land-record documents and extracts location, survey, area, and valuation information for downstream collateral assessment.
            </p>

            <div className="min-land-pipeline">
              <div className="min-land-step"><span>Location Input</span></div>
              <span className="min-land-arrow">→</span>
              <div className="min-land-step"><span>PDF Retrieval</span></div>
              <span className="min-land-arrow">→</span>
              <div className="min-land-step"><span>Google Cloud Vision OCR</span></div>
              <span className="min-land-arrow">→</span>
              <div className="min-land-step"><span>Structured Fields</span></div>
              <span className="min-land-arrow">→</span>
              <div className="min-land-step"><span>District / Taluk / Village</span></div>
              <span className="min-land-arrow">→</span>
              <div className="min-land-step"><span>Survey Number</span></div>
              <span className="min-land-arrow">→</span>
              <div className="min-land-step"><span>Guidance Rate</span></div>
              <span className="min-land-arrow">→</span>
              <div className="min-land-step"><span>Collateral Valuation</span></div>
              <span className="min-land-arrow">→</span>
              <div className="min-land-step highlight"><span>Loan Eligibility</span></div>
            </div>

            <div className="min-highlight-banner">
              📜 Indexed across <strong>250+ Karnataka government land-record PDFs</strong> sourced from Bhoomi (RTC/Pahani) and Kaveri e-Registration ecosystems.
            </div>
          </section>

          {/* SECTION 02: DOCUMENT INTELLIGENCE & TRUST */}
          <section className="min-section">
            <div className="min-section-head">
              <span className="min-tag">SECTION 02 / DOCUMENT VERIFICATION</span>
              <h2>Document Intelligence & Connected Trust</h2>
              <p className="min-subtext">Google Cloud Vision API extracts structured fields from uploaded documents for downstream verification.</p>
            </div>

            <div className="min-doc-grid">
              <span>Aadhaar</span><span>PAN Card</span><span>Salary Slip</span><span>Sale Deed</span>
              <span>Passport</span><span>Driving Licence</span><span>ITR / Form 16</span><span>EC / RTC</span><span>Utility Bill</span>
            </div>

            <div className="min-flow-compact" style={{ marginBottom: '1.5rem' }}>
              <code>PDF / Image</code> → <code>Google Cloud Vision OCR</code> → <code>Structured Fields</code> → <code>Cross-Document Verification</code> → <code>Trust Score</code>
            </div>

            <div className="min-fraud-grid">
              <div className="min-fraud-item"><Check size={16} className="highlight-orange" /><strong>Identity</strong><span>PAN & Aadhaar name similarity</span></div>
              <div className="min-fraud-item"><Check size={16} className="highlight-orange" /><strong>Income</strong><span>Salary slip vs cashflow stability</span></div>
              <div className="min-fraud-item"><Check size={16} className="highlight-orange" /><strong>Property</strong><span>Sale deed title ownership match</span></div>
              <div className="min-fraud-item"><Check size={16} className="highlight-orange" /><strong>Cashflow</strong><span>EMI bounce analysis & stability</span></div>
              <div className="min-fraud-item"><Check size={16} className="highlight-orange" /><strong>Fraud</strong><span>Document trust & QR metadata check</span></div>
            </div>
          </section>

          {/* INTERACTIVE UNDERWRITING SIMULATOR */}
          <section className="min-section">
            <div className="min-section-head">
              <span className="min-tag">SECTION 03 & 04 / EXPLAINABLE AI & UNDERWRITING</span>
              <h2>Explainable Credit Risk & Underwriting Simulator</h2>
              <p className="min-subtext">The system combines predictive modeling with deterministic underwriting and compliance rules so decisions can be inspected rather than treated as black boxes.</p>
            </div>

            <div className="min-risk-box" style={{ marginBottom: '2rem' }}>
              <div className="min-risk-formula">
                <code>Credit History</code> + <code>Income</code> + <code>DTI</code> + <code>LTV</code> + <code>Collateral</code> + <code>Document Trust</code>
                <span className="min-risk-eq">↓</span>
                <strong className="highlight-orange" style={{ fontSize: '1.4rem' }}>Aegis Risk Index</strong>
                <span className="min-risk-eq">↓</span>
                <span className="badge-active">Approval / Rejection Decision</span>
              </div>
            </div>

            <AegisSimulator />
            <AegisWorkflowStepper />
          </section>

          {/* SIX LOAN PRODUCTS */}
          <section className="min-section">
            <div className="min-section-head">
              <span className="min-tag">MULTI-PRODUCT SUPPORT</span>
              <h2>One Underwriting Engine. Six Loan Products.</h2>
            </div>

            <div className="min-products-grid">
              {loanProducts.map((p, idx) => (
                <div key={idx} className="min-product-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-orange)' }}>
                    {p.icon}
                    <strong style={{ color: '#FFF', fontSize: '0.95rem' }}>{p.name}</strong>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: '1.4' }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ROLE-BASED SYSTEM */}
          <section className="min-section">
            <div className="min-section-head">
              <span className="min-tag">ROLE ARCHITECTURE</span>
              <h2>One Platform. Three Interfaces.</h2>
            </div>

            <div className="min-roles-grid">
              <div className="min-role-card">
                <strong style={{ fontSize: '1.1rem' }}>CUSTOMER</strong>
                <p style={{ marginTop: '0.3rem' }}>Self-service loan application, document upload, and real-time status tracking.</p>
              </div>
              <div className="min-role-card">
                <strong style={{ fontSize: '1.1rem' }}>EMPLOYEE</strong>
                <p style={{ marginTop: '0.3rem' }}>Operations workspace for document verification, field audit, and preliminary screening.</p>
              </div>
              <div className="min-role-card">
                <strong style={{ fontSize: '1.1rem' }}>LOAN OFFICER</strong>
                <p style={{ marginTop: '0.3rem' }}>Underwriting dashboard for Aegis Risk Index, XAI risk waterfall, compliance overrides, and sanction PDF generation.</p>
              </div>
            </div>
          </section>

          {/* AI UNDERWRITING COPILOT */}
          <section className="min-section">
            <div className="min-section-head">
              <span className="min-tag">OFFICER ASSISTANT</span>
              <h2>AI Underwriting Copilot</h2>
            </div>

            <div className="min-flow-compact" style={{ marginBottom: '1rem' }}>
              <code>Structured Application Data</code> + <code>Risk Results</code> + <code>Verification Results</code> + <code>Officer Notes</code> → <code>Groq LLM</code> → <code>Underwriting Analysis / Copilot</code>
            </div>

            <div className="copilot-prompts-row">
              <button onClick={() => handleCopilot("Why was this applicant approved?")} className="sample-btn">"Why was this applicant approved?"</button>
              <button onClick={() => handleCopilot("Show Bhoomi land details")} className="sample-btn">"Show Bhoomi land details"</button>
              <button onClick={() => handleCopilot("Calculate gold collateral loan")} className="sample-btn">"Calculate gold loan"</button>
            </div>

            {copilotResponse && (
              <div className="copilot-response-card" style={{ marginTop: '0.75rem' }}>
                {copilotResponse}
              </div>
            )}
          </section>

          {/* REAL PRODUCT SCREENSHOT GALLERY ("INSIDE AEGISCR") */}
          <section className="min-section">
            <div className="min-section-head">
              <span className="min-tag">INSIDE AEGISCR ⭐</span>
              <h2>Rich Product Showcase & Interface Gallery</h2>
              <p className="min-subtext">Direct screenshots from the compiled AegisCR credit underwriting platform.</p>
            </div>

            <div className="gallery-stack" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="gallery-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <span className="mono highlight-orange" style={{ fontSize: '0.75rem' }}>01 — LAND VALUATION & COLLATERAL INTELLIGENCE</span>
                  <h3 style={{ fontSize: '1.5rem', color: '#FFF', margin: '0.4rem 0' }}>Bhoomi & Kaveri PDF Rate Extractor</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Automated land rate retrieval across 250+ Karnataka survey PDFs, matching district, taluk, village, and survey numbers for loan eligibility calculations.
                  </p>
                </div>
                <TiltCard>
                  <div className="ui-mockup-container" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                    <img src="/aegiscr_ui.jpg" alt="AegisCR Land Valuation View" className="ui-mockup-img" style={{ width: '100%', height: 'auto' }} />
                    <div className="ui-mockup-caption">AegisCR Underwriting Dashboard & Land Intelligence</div>
                  </div>
                </TiltCard>
              </div>

              <div className="gallery-row" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '2rem', alignItems: 'center' }}>
                <TiltCard>
                  <div className="ui-mockup-container" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                    <img src="/aaroha_ui.jpg" alt="AAROHA Decision System View" className="ui-mockup-img" style={{ width: '100%', height: 'auto' }} />
                    <div className="ui-mockup-caption">AAROHA Decision Engine Dashboard</div>
                  </div>
                </TiltCard>
                <div>
                  <span className="mono highlight-blue" style={{ fontSize: '0.75rem' }}>02 — DOCUMENT VERIFICATION & FRAUD TRUST</span>
                  <h3 style={{ fontSize: '1.5rem', color: '#FFF', margin: '0.4rem 0' }}>Google Cloud Vision OCR & Trust Graph</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Multi-document identity verification, PAN/Aadhaar fuzzy similarity matching, salary stability checks, and document trust scoring.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WHAT I ENGINEERED (12 CAPABILITY HIGHLIGHTS) */}
          <section className="min-section">
            <div className="min-section-head">
              <span className="min-tag">ENGINEERING HIGHLIGHTS</span>
              <h2>What I engineered</h2>
            </div>

            <div className="min-grid-2col">
              <ul className="min-eng-list">
                {engineeringCapabilities.slice(0, 6).map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              <ul className="min-eng-list">
                {engineeringCapabilities.slice(6, 12).map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* ENTERPRISE METRICS */}
          <section className="min-section" style={{ marginBottom: '4rem' }}>
            <div className="min-metrics-grid">
              <div className="min-metric-card"><strong className="highlight-orange">250+</strong><span>Karnataka Land PDFs</span></div>
              <div className="min-metric-card"><strong className="highlight-blue">6</strong><span>Loan Products</span></div>
              <div className="min-metric-card"><strong style={{ color: '#22C55E' }}>3</strong><span>Role-Based Interfaces</span></div>
              <div className="min-metric-card"><strong style={{ color: '#A855F7' }}>Google Vision</strong><span>OCR Engine</span></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
