import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  MapPin, 
  Eye, 
  Cpu, 
  CheckCircle2, 
  ChevronRight, 
  ArrowUpRight, 
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
  Search, 
  Check, 
  AlertTriangle,
  FileCheck,
  TrendingUp,
  Scale,
  Database,
  Server,
  Layers,
  Lock,
  Compass,
  FileSpreadsheet,
  Network
} from 'lucide-react';
import TiltCard from './TiltCard';
import AegisSimulator from './AegisSimulator';
import ArchitectureDiagram from './ArchitectureDiagram';
import AegisWorkflowStepper from './AegisWorkflowStepper';
import ProjectXRay from './ProjectXRay';

const GithubIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function AegisCRFlagship({ recruiterMode }) {
  const [activeTab, setActiveTab] = useState('land');
  const [activeProduct, setActiveProduct] = useState('home');
  const [activeRole, setActiveRole] = useState('officer');
  const [copilotQuery, setCopilotQuery] = useState('');
  const [copilotResponse, setCopilotResponse] = useState(null);

  const loanProducts = [
    { 
      id: 'home', 
      name: 'Home Loan', 
      icon: <Home size={18} />, 
      color: '#3A78FF', 
      intel: 'Property valuation, LTV, market value, collateral intelligence and home-loan underwriting.' 
    },
    { 
      id: 'agri', 
      name: 'Agriculture Loan', 
      icon: <Tractor size={18} />, 
      color: '#22C55E', 
      intel: 'Agricultural land valuation, land characteristics, crop/agriculture intelligence, risk assessment and eligible loan calculation.' 
    },
    { 
      id: 'comm', 
      name: 'Commercial Loan', 
      icon: <Building2 size={18} />, 
      color: '#A855F7', 
      intel: 'Commercial property valuation, rental/cash-flow analysis, DSCR and commercial underwriting.' 
    },
    { 
      id: 'gold', 
      name: 'Gold Loan', 
      icon: <Coins size={18} />, 
      color: '#F59E0B', 
      intel: 'Live gold pricing API, purity-based valuation, LTV calculation and gold-loan eligibility.' 
    },
    { 
      id: 'farm', 
      name: 'Farm Equipment', 
      icon: <Tractor size={18} />, 
      color: '#10B981', 
      intel: 'Equipment cost, subsidy, depreciation/resale analysis, repayment feasibility and machinery-loan eligibility.' 
    },
    { 
      id: 'vehicle', 
      name: 'Vehicle Loan', 
      icon: <Car size={18} />, 
      color: '#EC4899', 
      intel: 'Vehicle API specifications, market/resale valuation, depreciation and vehicle-loan underwriting.' 
    }
  ];

  const roles = [
    { 
      id: 'customer', 
      title: 'Customer Interface', 
      icon: <Users size={20} />, 
      desc: 'Self-service portal for loan applications, document upload, status tracking, and collateral submission.' 
    },
    { 
      id: 'employee', 
      title: 'Employee Interface', 
      icon: <UserCheck size={20} />, 
      desc: 'Operations & verification workspace for document inspection, field audit validation, and preliminary screening.' 
    },
    { 
      id: 'officer', 
      title: 'Loan Officer Interface', 
      icon: <Briefcase size={20} />, 
      desc: 'Executive underwriting dashboard featuring Aegis Risk Index, XAI risk waterfall, compliance overrides, and PDF report generation.' 
    }
  ];

  const engineeringChallenges = [
    { id: 1, title: "Karnataka Land PDF Corpus Retrieval", desc: "Searching & identifying relevant land guideline documents across ~250 government PDFs matching district, taluk, village, and survey numbers." },
    { id: 2, title: "Structured OCR Information Extraction", desc: "Extracting structured text fields from real-world government documents with varying layouts using Google Cloud Vision OCR." },
    { id: 3, title: "Location & Terminology Normalization", desc: "Handling inconsistent Kannada/English place names, spelling variations, and survey number formats via fuzzy matching algorithms." },
    { id: 4, title: "Multi-Tier District ➔ Taluk ➔ Survey Mapping", desc: "Correlating location hierarchy parameters down to individual survey boundaries for precise guideline rate lookup." },
    { id: 5, title: "Normalized Valuation Mathematics", desc: "Converting extracted raw rates into standardized ₹/sq.ft or ₹/acre valuation inputs for automated collateral underwriting." },
    { id: 6, title: "OCR & Cross-Document Verification", desc: "Fusing OCR text outputs with identity tax records to perform multi-document verification and name-similarity matching." },
    { id: 7, title: "Document Trust & Fraud Intelligence", desc: "Detecting font inconsistencies, metadata tampering, salary anomalies, and QR/signature discrepancies." },
    { id: 8, title: "Hybrid ML & Policy Compliance Rules", desc: "Combining XGBoost loan probability predictions with deterministic lending threshold overrides to enforce regulatory compliance." },
    { id: 9, title: "External Live API Resilience", desc: "Orchestrating live Gold Price, Vehicle Data, Google Vision, and Groq APIs with asynchronous error handlers." },
    { id: 10, title: "Role-Aware Multi-Interface Workflows", desc: "Maintaining role-specific views, permission scopes, and interface states across Customers, Employees, and Officers." },
    { id: 11, title: "Explainable Underwriting Intelligence", desc: "Deconstructing black-box ML outputs into transparent risk factor waterfalls with officer reason codes." },
    { id: 12, title: "Auditable PDF Report Generation", desc: "Compiling structured AI analysis, valuation data, and decision metrics into downloadable sanction PDF reports." }
  ];

  const handleCopilotAsk = (q) => {
    const query = q || copilotQuery;
    if (!query.trim()) return;

    if (q) setCopilotQuery(q);

    let answer = "";
    const lower = query.toLowerCase();
    if (lower.includes('why') || lower.includes('decision') || lower.includes('approve') || lower.includes('reject')) {
      answer = "🤖 AI Copilot Analysis: Applicant #AG-8941 evaluated with 87.4% Model Confidence. Aegis Risk Index: LOW (0.18). Key approval drivers: High collateral coverage (LTV 48%), 100% Document Trust Score via Google Cloud Vision OCR, and verified Karnataka RTC survey land rate ₹28,50,000.";
    } else if (lower.includes('land') || lower.includes('karnataka') || lower.includes('bhoomi') || lower.includes('kaveri')) {
      answer = "📜 Land Intelligence: Matched Bhoomi/Kaveri PDF #KA-BLR-104 (Taluk: Yelahanka, Village: Sahakar Nagar, Survey: 42/1). Extracted guidance rate: ₹3,200/sq.ft. Property title matches applicant PAN name with 98.2% similarity.";
    } else if (lower.includes('gold') || lower.includes('price')) {
      answer = "🪙 Gold Intelligence: Live Gold API retrieved ₹6,420/gram (22K). Evaluated 150g gold collateral. Gross valuation: ₹9,63,000. Eligible loan amount @ 75% LTV: ₹7,22,250.";
    } else {
      answer = "💡 AegisCR Copilot: All document verification checks passed (Aadhaar, PAN, Salary Slip). No fraud flags detected across node verification graph. Aegis Risk Index indicates strong approval suitability.";
    }

    setCopilotResponse(answer);
  };

  return (
    <div className="aegis-flagship-container">
      {/* 1. HERO SECTION */}
      <div className="flagship-hero-banner">
        <div className="flagship-header-meta">
          <span className="badge-active" style={{ borderColor: 'var(--accent-orange)', color: 'var(--accent-orange)' }}>
            FLAGSHIP ENTERPRISE CASE STUDY ⭐
          </span>
          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-blue)' }}>
            AI CREDIT UNDERWRITING & COLLATERAL INTELLIGENCE
          </span>
        </div>

        <h2 className="flagship-title">AegisCR</h2>
        <p className="flagship-tagline">"From government land documents to explainable loan decisions."</p>

        <p className="flagship-desc">
          An end-to-end lending intelligence platform combining document OCR, collateral valuation, fraud detection, machine learning, explainable AI, and automated underwriting across six loan products.
        </p>

        {/* Highlight Chips */}
        <div className="flagship-chips-row">
          <span className="chip-item">📜 250+ Karnataka Land Documents</span>
          <span className="chip-item">🏦 6 Loan Products</span>
          <span className="chip-item">👥 3 Role-Based Interfaces</span>
          <span className="chip-item">🔍 Google Cloud Vision OCR</span>
          <span className="chip-item">⚡ Live API Integrations</span>
          <span className="chip-item">🧠 AI-Powered Underwriting</span>
          <span className="chip-item">📄 Automated PDF Reporting</span>
        </div>

        {/* Hero Buttons */}
        <div className="flagship-cta-row">
          <a href="#pipeline-section" className="btn-primary">
            VIEW CASE STUDY <ChevronRight size={16} />
          </a>
          <a 
            href="https://aegiscr-5.onrender.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline"
          >
            LIVE DEMO <ArrowUpRight size={16} />
          </a>
          <a 
            href="https://github.com/shrishailad24/AegisCR" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline"
          >
            VIEW GITHUB <GithubIcon size={16} />
          </a>
        </div>
      </div>

      {/* 2 & 3. PROBLEM & SOLUTION STATEMENT */}
      <div className="flagship-grid-2col">
        <div className="flagship-section-card">
          <div className="section-tag">01 / THE PROBLEM</div>
          <h3 className="subheading-bold" style={{ color: '#EF4444' }}>Fragmented Underwriting & Manual Review Bottlenecks</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Traditional financial institutions face severe operational friction when evaluating multi-product loan applications. Loan officers must manually verify paper documents, cross-check land valuation records across government gazettes, calculate collateral ratios, and assess risk without transparent AI guidance — leading to slow processing times and inconsistent risk signals.
          </p>
        </div>

        <div className="flagship-section-card">
          <div className="section-tag">02 / THE SOLUTION</div>
          <h3 className="subheading-bold" style={{ color: '#22C55E' }}>Unified AI Underwriting & Collateral Engine</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            AegisCR unifies document OCR, collateral valuation, fraud analysis, machine learning risk modeling, and business-rule compliance into a single automated platform. It transforms raw unstructured PDFs into explainable credit decisions with full auditability.
          </p>
        </div>
      </div>

      {/* 4. COMPLETE SYSTEM WORKFLOW ARCHITECTURE */}
      <div id="pipeline-section" className="flagship-section-card">
        <div className="section-tag">03 / END-TO-END SYSTEM WORKFLOW</div>
        <h3 className="subheading-bold">Complete 15-Node Underwriting Architecture</h3>

        <div className="pipeline-flow-container">
          <div className="pipeline-node"><Users size={18} className="highlight-blue" /><strong>USER / OFFICER</strong><span>Role Interface</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node"><MapPin size={18} className="highlight-orange" /><strong>ASSET INFO</strong><span>Collateral Data</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node"><FileText size={18} style={{ color: '#22C55E' }} /><strong>DOC INTEL</strong><span>PDF Parsing</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node"><Eye size={18} style={{ color: '#A855F7' }} /><strong>VISION OCR</strong><span>Cloud Vision API</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node"><Scale size={18} className="highlight-orange" /><strong>VALUATION</strong><span>Guidance Rates</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node"><FileCheck size={18} style={{ color: '#22C55E' }} /><strong>VERIFICATION</strong><span>Doc Trust Score</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node"><ShieldCheck size={18} style={{ color: '#EF4444' }} /><strong>FRAUD ENGINE</strong><span>Anomaly Check</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node"><Cpu size={18} className="highlight-blue" /><strong>CREDIT ENGINE</strong><span>DTI / LTV Ratios</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node"><TrendingUp size={18} className="highlight-orange" /><strong>ML PREDICTION</strong><span>XGBoost Model</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node"><Bot size={18} style={{ color: '#A855F7' }} /><strong>EXPLAINABLE AI</strong><span>SHAP Waterfall</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node"><Lock size={18} style={{ color: '#EF4444' }} /><strong>COMPLIANCE</strong><span>Rule Overrides</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node highlight-active"><CheckCircle2 size={18} style={{ color: '#22C55E' }} /><strong>DECISION</strong><span>Approve / Reject</span></div>
          <div className="pipeline-arrow">➔</div>
          <div className="pipeline-node"><FileSpreadsheet size={18} className="highlight-blue" /><strong>SANCTION PDF</strong><span>Audit Trail</span></div>
        </div>
      </div>

      {/* INTERACTIVE NAVIGATION TABS */}
      <div className="flagship-tabs-nav">
        <button className={`flagship-tab ${activeTab === 'land' ? 'active' : ''}`} onClick={() => setActiveTab('land')}>
          📜 LAND VALUATION (BHOOMI & KAVERI)
        </button>
        <button className={`flagship-tab ${activeTab === 'vector' ? 'active' : ''}`} onClick={() => setActiveTab('vector')}>
          ⚡ VECTOR DOCUMENT RETRIEVAL & SEMANTIC SEARCH
        </button>
        <button className={`flagship-tab ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>
          🏦 6 LENDING PRODUCTS
        </button>
        <button className={`flagship-tab ${activeTab === 'ocr' ? 'active' : ''}`} onClick={() => setActiveTab('ocr')}>
          🔍 VISION OCR & FRAUD TRUST
        </button>
        <button className={`flagship-tab ${activeTab === 'roles' ? 'active' : ''}`} onClick={() => setActiveTab('roles')}>
          👥 ROLE ARCHITECTURE
        </button>
        <button className={`flagship-tab ${activeTab === 'copilot' ? 'active' : ''}`} onClick={() => setActiveTab('copilot')}>
          🤖 OFFICER COPILOT
        </button>
      </div>

      {/* Tab: Vector-Based Document Intelligence */}
      {activeTab === 'vector' && (
        <div className="tab-content-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Network size={24} className="highlight-orange" />
            <div>
              <h4 style={{ fontSize: '1.4rem', color: '#FFF' }}>Vector-Based Document Intelligence & Semantic Search Pipeline</h4>
              <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent-orange)' }}>
                EMBEDDING-BASED SEMANTIC RETRIEVAL OVER PDF CORPUS & UPLOADED DOSSIERS
              </div>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            To locate relevant property guideline rates and verified document clauses across hundreds of government PDFs, AegisCR utilizes an embedding-based semantic retrieval architecture. Text passages are chunked and vectorized, allowing the system to match applicant location context even when exact keywords differ from government gazette terminology.
          </p>

          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', display: 'block', marginBottom: '0.6rem' }}>
            1. GOVERNMENT LAND PDF CORPUS SEMANTIC RETRIEVAL PIPELINE:
          </span>
          <div className="ka-engine-pipeline" style={{ marginBottom: '1.5rem' }}>
            <div className="ka-step"><span className="step-tag">1. PDF CORPUS</span><p>250+ Government PDFs</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step"><span className="step-tag">2. CHUNKING</span><p>Text Passage Extraction</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step"><span className="step-tag">3. EMBEDDINGS</span><p>Vector Representation</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step"><span className="step-tag">4. VECTOR SEARCH</span><p>Semantic Similarity Index</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step active"><span className="step-tag">5. VALUATION</span><p>Guidance Rate & Underwriting</p></div>
          </div>

          <span className="mono" style={{ fontSize: '0.75rem', color: '#22C55E', display: 'block', marginBottom: '0.6rem' }}>
            2. BORROWER UPLOADED DOSSIER VERIFICATION PIPELINE:
          </span>
          <div className="ka-engine-pipeline">
            <div className="ka-step"><span className="step-tag">1. UPLOADED PDF</span><p>Aadhaar / PAN / Sale Deed</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step"><span className="step-tag">2. VISION OCR</span><p>Google Cloud Vision OCR</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step"><span className="step-tag">3. VECTOR RETRIEVAL</span><p>Clause & Field Indexing</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step"><span className="step-tag">4. CROSS-MATCH</span><p>Multi-Doc Name / ID Match</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step active"><span className="step-tag">5. TRUST SCORE</span><p>Fraud Analysis & Sanction</p></div>
          </div>
        </div>
      )}

      {/* 5. LAND VALUATION INTELLIGENCE (kaveri_extraction_pipeline.py) */}
      {activeTab === 'land' && (
        <div className="tab-content-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <MapPin size={24} className="highlight-orange" />
            <div>
              <h4 style={{ fontSize: '1.4rem', color: '#FFF' }}>Karnataka Bhoomi & Kaveri Land-Record Intelligence</h4>
              <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent-orange)' }}>
                POWERED BY kaveri_extraction_pipeline.py & 250+ GOVERNMENT PDFS
              </div>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            The system works with approximately 250 Karnataka Government land-record PDFs sourced from the Bhoomi land-records ecosystem (RTC / Pahani records) and Kaveri e-Registration system (guideline rates). The automated extraction pipeline resolves location parameters down to survey numbers and calculates verified collateral market value.
          </p>

          <div className="ka-engine-pipeline">
            <div className="ka-step"><span className="step-tag">1. LOCATION INPUT</span><p>District / Taluk / Village / Survey</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step"><span className="step-tag">2. PDF RETRIEVAL</span><p>250+ Karnataka Land PDFs Corpus</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step"><span className="step-tag">3. VISION OCR</span><p>Structured Text Field Parsing</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step"><span className="step-tag">4. RATE CALCULATION</span><p>Guidance Rate per Sq.Ft / Acre</p></div>
            <div className="ka-arrow">➔</div>
            <div className="ka-step active"><span className="step-tag">5. ELIGIBILITY</span><p>Collateral Margin & Loan Cap</p></div>
          </div>
        </div>
      )}

      {/* 6. SIX LOAN PRODUCTS GRID */}
      {activeTab === 'products' && (
        <div className="tab-content-panel">
          <div className="section-tag">MULTI-PRODUCT LENDING PLATFORM</div>
          <h4 style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '1rem' }}>Context-Aware Intelligence Across Six Loan Modules</h4>

          <div className="products-grid">
            {loanProducts.map((p) => (
              <div 
                key={p.id}
                onClick={() => setActiveProduct(p.id)}
                className={`product-card ${activeProduct === p.id ? 'active' : ''}`}
                style={{ borderColor: activeProduct === p.id ? p.color : 'var(--border-color)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: p.color }}>
                  {p.icon}
                  <strong style={{ fontSize: '1rem', color: '#FFF' }}>{p.name}</strong>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: '1.5' }}>{p.intel}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. OCR & DOCUMENT TRUST FRAUD INTELLIGENCE */}
      {activeTab === 'ocr' && (
        <div className="tab-content-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Eye size={24} className="highlight-blue" />
            <h4 style={{ fontSize: '1.3rem', color: '#FFF' }}>Google Cloud Vision OCR & Document Trust Scoring</h4>
          </div>

          <div className="ocr-specs-grid">
            <div className="ocr-spec-card">
              <strong style={{ color: 'var(--accent-blue)', display: 'block', marginBottom: '0.5rem' }}>DOCUMENTS EXTRACTED & VERIFIED:</strong>
              <div className="skill-pill-list">
                <span className="tag">Aadhaar</span>
                <span className="tag">PAN Card</span>
                <span className="tag">Salary Slip</span>
                <span className="tag">Sale Deed</span>
                <span className="tag">Passport</span>
                <span className="tag">Driving Licence</span>
                <span className="tag">ITR / Form 16</span>
                <span className="tag">EC / RTC Pahani</span>
                <span className="tag">Utility Bills</span>
              </div>
            </div>

            <div className="ocr-spec-card">
              <strong style={{ color: 'var(--accent-orange)', display: 'block', marginBottom: '0.5rem' }}>CONNECTED FRAUD NETWORK CHECKS:</strong>
              <ul className="pdf-bullets" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <li>Identity matching & PAN/Aadhaar name similarity scoring</li>
                <li>Salary / cashflow stability & EMI bounce analysis</li>
                <li>Survey number & property ownership verification</li>
                <li>Metadata integrity, QR/signature checks & trust scoring</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 8. ROLE-BASED ARCHITECTURE */}
      {activeTab === 'roles' && (
        <div className="tab-content-panel">
          <div className="section-tag">ROLE-BASED LENDING WORKFLOWS</div>
          <h4 style={{ fontSize: '1.3rem', color: '#FFF', marginBottom: '1rem' }}>Three Role-Specific Platform Interfaces</h4>

          <div className="roles-grid">
            {roles.map((r) => (
              <div key={r.id} className="role-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <span className="highlight-orange">{r.icon}</span>
                  <strong style={{ fontSize: '1.1rem', color: '#FFF' }}>{r.title}</strong>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 9. AI UNDERWRITING OFFICER COPILOT */}
      {activeTab === 'copilot' && (
        <div className="tab-content-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Bot size={24} className="highlight-orange" />
            <div>
              <h4 style={{ fontSize: '1.3rem', color: '#FFF' }}>AI Copilot for Loan Officers</h4>
              <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>GROQ LLM API INTEGRATION</div>
            </div>
          </div>

          <div className="copilot-interactive-box">
            <div className="copilot-prompts-row">
              <button onClick={() => handleCopilotAsk("Why was this applicant approved?")} className="sample-btn">
                "Why was this applicant approved?"
              </button>
              <button onClick={() => handleCopilotAsk("Show Bhoomi / Kaveri land valuation details")} className="sample-btn">
                "Show Bhoomi / Kaveri land details"
              </button>
              <button onClick={() => handleCopilotAsk("Calculate gold collateral loan eligibility")} className="sample-btn">
                "Calculate gold collateral loan"
              </button>
            </div>

            {copilotResponse && (
              <div className="copilot-response-card">
                {copilotResponse}
              </div>
            )}
          </div>
        </div>
      )}

      {/* 10. REAL EXTERNAL INTEGRATIONS */}
      <div className="flagship-section-card">
        <div className="section-tag">EXTERNAL INTELLIGENCE INTEGRATIONS</div>
        <h3 className="subheading-bold">Confirmed External API Stack</h3>

        <div className="ocr-specs-grid">
          <div className="ocr-spec-card">
            <strong style={{ color: 'var(--accent-blue)' }}>GOOGLE CLOUD VISION API</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>High-accuracy OCR document field parsing & text extraction.</p>
          </div>
          <div className="ocr-spec-card">
            <strong style={{ color: 'var(--accent-orange)' }}>GROQ LLM API</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Underwriting analysis, officer copilot responses & PDF summary generation.</p>
          </div>
          <div className="ocr-spec-card">
            <strong style={{ color: '#22C55E' }}>LIVE GOLD-PRICE API</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Real-time gold spot rates for purity valuation & instant LTV math.</p>
          </div>
          <div className="ocr-spec-card">
            <strong style={{ color: '#A855F7' }}>VEHICLE DATA & REVERSE GEOCODING APIs</strong>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>RTO specs, vehicle resale rates, and map coordinate-to-district resolution.</p>
          </div>
        </div>
      </div>

      {/* 11. KEY ENGINEERING CHALLENGES SOLVED */}
      <div className="flagship-section-card">
        <div className="section-tag">TECHNICAL CHALLENGES SOLVED</div>
        <h3 className="subheading-bold">Key Engineering Accomplishments</h3>

        <div className="challenges-grid">
          {engineeringChallenges.map((c) => (
            <div key={c.id} className="challenge-card">
              <strong className="ch-q">#{c.id} — {c.title}</strong>
              <p className="ch-a">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 12. WHY AEGISCR IS DIFFERENT & METRICS */}
      <div className="flagship-section-card">
        <div className="section-tag">WHY AEGISCR IS DIFFERENT</div>
        <h3 className="subheading-bold">Enterprise Capability Metrics</h3>

        <div className="impact-grid">
          <div className="impact-card">
            <strong className="imp-val">250+</strong>
            <span className="imp-lbl">Government Land / Guideline PDFs</span>
          </div>
          <div className="impact-card">
            <strong className="imp-val" style={{ color: 'var(--accent-blue)' }}>6</strong>
            <span className="imp-lbl">Lending Products</span>
          </div>
          <div className="impact-card">
            <strong className="imp-val" style={{ color: '#22C55E' }}>3</strong>
            <span className="imp-lbl">Role-Based Interfaces</span>
          </div>
          <div className="impact-card">
            <strong className="imp-val" style={{ color: '#A855F7' }}>Vision OCR</strong>
            <span className="imp-lbl">Google Cloud Vision API</span>
          </div>
        </div>
      </div>

      {/* Embedded Simulator & Architecture Components (Full Mode only) */}
      {!recruiterMode && (
        <>
          <AegisSimulator />
          <ArchitectureDiagram />
          <AegisWorkflowStepper />
        </>
      )}
    </div>
  );
}
