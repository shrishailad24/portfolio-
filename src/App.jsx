import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Download, 
  Mail, 
  Phone, 
  ExternalLink, 
  X, 
  Printer, 
  Sparkles, 
  Code2, 
  BrainCircuit, 
  BarChart3, 
  Layers,
  ChevronDown,
  ShieldCheck,
  Bot,
  Terminal,
  Database,
  Cpu,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  GitBranch,
  Zap,
  Check
} from 'lucide-react';
import TiltCard from './components/TiltCard';
import Background3D from './components/Background3D';
import AskShrishailAI from './components/AskShrishailAI';
import TerminalCLI from './components/TerminalCLI';
import SkillEvidenceMatrix from './components/SkillEvidenceMatrix';
import ShrishailLabs from './components/ShrishailLabs';
import AegisCRCaseStudyModal from './components/AegisCRCaseStudyModal';
import { HeroSection, FeaturedProjectsCards } from './components/AegisCRMinimalFlagship';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function App() {
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`portfolio-app ${recruiterMode ? 'recruiter-mode-active' : ''}`}>
      {/* 3D Ambient Particle Canvas (Hidden in Recruiter Mode) */}
      {!recruiterMode && <Background3D />}

      {/* Sticky Navigation Bar */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#hero" className="brand-logo">
            <span className="brand-badge">SH</span>
            <span className="brand-title">AI + DATA SCIENCE</span>
          </a>

          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#featured-work" className="nav-link">Projects</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
            
            {/* Recruiter Mode Toggle */}
            <li>
              <button 
                onClick={() => setRecruiterMode(!recruiterMode)}
                className={`recruiter-toggle-btn ${recruiterMode ? 'active' : ''}`}
              >
                <Briefcase size={14} />
                <span>{recruiterMode ? 'RECRUITER MODE ON' : 'Recruiter Mode'}</span>
              </button>
            </li>

            <li>
              <a 
                href="/Shrishail_Hebballi_Resume.pdf" 
                download="Shrishail_Hebballi_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-btn-resume"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* RECRUITER STREAMLINED BANNER */}
      {recruiterMode && (
        <div className="recruiter-banner">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>⚡ RECRUITER MODE ACTIVE: Streamlined 60-Second Executive View</span>
            <button onClick={() => setRecruiterMode(false)} style={{ background: 'none', border: 'none', color: '#FFF', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'var(--font-mono)' }}>
              Switch to Full Interactive View
            </button>
          </div>
        </div>
      )}

      {/* 01. HERO SECTION */}
      <section id="hero">
        <div className="container">
          <HeroSection onOpenCaseStudy={() => setIsModalOpen(true)} />
        </div>
      </section>

      {/* 02. ABOUT ME SECTION (IMMEDIATELY AFTER HERO) */}
      <section id="about" style={{ marginTop: '2rem' }}>
        <div className="container">
          <div className="min-section">
            <div className="min-section-head">
              <span className="min-tag">02 / ABOUT ME</span>
              <h2>About</h2>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '850px', marginBottom: '2rem' }}>
              I'm a data-focused AI developer building practical systems that connect models, data, APIs, and real-world workflows.
            </p>

            <div className="min-grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              <div className="min-info-card">
                <strong className="mono highlight-orange" style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.3rem' }}>
                  AI / ML
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Predictive and explainable models.</p>
              </div>

              <div className="min-info-card">
                <strong className="mono highlight-blue" style={{ fontSize: '0.85rem', display: 'block', marginBottom: '0.3rem' }}>
                  DOCUMENT INTELLIGENCE
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Turning unstructured documents into structured data.</p>
              </div>

              <div className="min-info-card">
                <strong className="mono" style={{ color: '#22C55E', fontSize: '0.85rem', display: 'block', marginBottom: '0.3rem' }}>
                  APPLIED AI
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Connecting models, business rules, and usable interfaces.</p>
              </div>
            </div>

            {/* Education & CGPA */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <span className="min-tag">EDUCATION</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                <div>
                  <strong style={{ fontSize: '1.1rem', color: '#FFF' }}>B.E. in Artificial Intelligence & Data Science</strong>
                  <div className="mono" style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>B.M.S. College of Engineering, Bengaluru</div>
                </div>
                <span className="highlight-orange mono" style={{ fontSize: '1.1rem', fontWeight: '700' }}>CGPA: 8.28 / 10 | Class of 2028</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. FEATURED WORK / PROJECTS (AEGISCR + AAROHA) */}
      <section id="featured-work">
        <div className="container">
          <FeaturedProjectsCards onOpenCaseStudy={() => setIsModalOpen(true)} />
        </div>
      </section>

      {/* 04. INDUSTRY EXPERIENCE (MOVED IMMEDIATELY AFTER FEATURED PROJECTS!) */}
      <section id="experience" style={{ marginTop: '2.5rem' }}>
        <div className="container">
          <div className="min-section">
            <div className="min-section-head">
              <span className="min-tag">04 / INDUSTRY EXPERIENCE</span>
              <h2>Experience</h2>
            </div>

            <div className="experience-list">
              <div className="exp-item">
                <div className="exp-date">JULY 2026 – PRESENT</div>
                <div>
                  <h3 className="exp-role">AI/ML Internship Trainee</h3>
                  <div className="exp-company">FlyRank AI · Virtual Trainee</div>
                  <ul className="pdf-bullets" style={{ marginTop: '0.5rem', fontSize: '0.88rem' }}>
                    <li>Built machine-learning models and evaluation pipelines through industry project-centric engineering paradigms.</li>
                    <li>Applied Python, Scikit-learn, and data preprocessing techniques across predictive modeling and real-world ML workflows.</li>
                  </ul>
                </div>
              </div>

              <div className="exp-item">
                <div className="exp-date">JUNE – JULY 2026</div>
                <div>
                  <h3 className="exp-role">Data Science & Analytics Intern</h3>
                  <div className="exp-company">Future Interns · Summer Intern</div>
                  <ul className="pdf-bullets" style={{ marginTop: '0.5rem', fontSize: '0.88rem' }}>
                    <li>Executed Exploratory Data Analysis (EDA) pipelines on commercial datasets to extract actionable business insights.</li>
                    <li>Developed interactive Tableau dashboards featuring KPI tracking, customer churn analysis, and sales funnel metrics.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. CORE FOCUS (WHAT I BUILD) */}
      <section id="what-i-build" style={{ marginTop: '2.5rem' }}>
        <div className="container">
          <div className="min-section-head">
            <span className="min-tag">05 / CORE FOCUS</span>
            <h2>What I Build</h2>
            <p className="min-subtext">Three engineering pillars of my practical AI work.</p>
          </div>

          <div className="min-grid-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            <div className="min-info-card">
              <strong className="mono highlight-orange" style={{ fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
                AI & ML
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Predictive models, explainable AI (SHAP waterfalls), credit-risk scoring engines, and intelligent decision systems.
              </p>
            </div>

            <div className="min-info-card">
              <strong className="mono highlight-blue" style={{ fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
                DOCUMENT INTELLIGENCE
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Google Cloud Vision OCR, structured text extraction, cross-document verification graphs, and PDF land-record retrieval.
              </p>
            </div>

            <div className="min-info-card">
              <strong className="mono" style={{ color: '#22C55E', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>
                AI PRODUCTS & DECISION SYSTEMS
              </strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                End-to-end applications combining machine learning models, FastAPI backends, business rules, and Flutter/React user interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06. PROOF, NOT CLAIMS (SKILL EVIDENCE MATRIX) */}
      {!recruiterMode && (
        <section id="evidence" style={{ marginTop: '2.5rem' }}>
          <div className="container">
            <SkillEvidenceMatrix />
          </div>
        </section>
      )}

      {/* 07. SECONDARY PROJECTS */}
      <section id="projects" style={{ marginTop: '2.5rem' }}>
        <div className="container">
          <div className="min-section-head">
            <span className="min-tag">07 / SECONDARY PROJECTS</span>
            <h2>Secondary Projects</h2>
            <p className="min-subtext">Compact data science applications & analytics systems.</p>
          </div>

          <div className="min-grid-2col">
            <TiltCard>
              <div className="min-info-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="mono highlight-orange" style={{ fontSize: '0.75rem', marginBottom: '0.3rem' }}>DATA ANALYTICS DASHBOARDS</div>
                  <strong style={{ fontSize: '1.2rem', color: '#FFF' }}>Business KPI Analytics Dashboards</strong>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: '1.5' }}>
                    Interactive Tableau and SQL dashboards tracking sales funnel metrics, customer churn trends, and commercial financial insights.
                  </p>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tableau · SQL · Data Analysis</span>
                  <a href="https://github.com/shrishailad24/FUTURE_DS_03" target="_blank" rel="noopener noreferrer" className="external-icon">
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="min-info-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="mono highlight-blue" style={{ fontSize: '0.75rem', marginBottom: '0.3rem' }}>RECOMMENDATION ENGINE</div>
                  <strong style={{ fontSize: '1.2rem', color: '#FFF' }}>Movie Preference Vector Engine</strong>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem', lineHeight: '1.5' }}>
                    Content-based recommendation model using TF-IDF vectorization and Cosine Similarity over metadata descriptors.
                  </p>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Python · Scikit-learn · Cosine Similarity</span>
                  <a href="https://github.com/shrishailad24" target="_blank" rel="noopener noreferrer" className="external-icon">
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 08. SHRISHAIL LABS EXPERIMENTS */}
      {!recruiterMode && (
        <section id="labs" style={{ marginTop: '2.5rem' }}>
          <div className="container">
            <ShrishailLabs />
          </div>
        </section>
      )}

      {/* 09. TECHNICAL CAPABILITIES (GROUPED RECRUITER MATRIX) */}
      <section id="skills" style={{ marginTop: '2.5rem' }}>
        <div className="container">
          <div className="min-section">
            <div className="min-section-head">
              <span className="min-tag">09 / TECHNICAL CAPABILITIES</span>
              <h2>Technical Capabilities</h2>
            </div>

            <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              <div className="skill-category-card">
                <h3 className="skill-cat-title mono highlight-orange" style={{ fontSize: '0.85rem' }}>PROGRAMMING</h3>
                <div className="skill-pill-list" style={{ marginTop: '0.6rem' }}>
                  <span className="tag">Python</span>
                  <span className="tag">SQL</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">Dart</span>
                  <span className="tag">HTML/CSS</span>
                </div>
              </div>

              <div className="skill-category-card">
                <h3 className="skill-cat-title mono highlight-blue" style={{ fontSize: '0.85rem' }}>ML / AI</h3>
                <div className="skill-pill-list" style={{ marginTop: '0.6rem' }}>
                  <span className="tag">Scikit-learn</span>
                  <span className="tag">XGBoost</span>
                  <span className="tag">OpenCV</span>
                  <span className="tag">NLP</span>
                  <span className="tag">GenAI</span>
                </div>
              </div>

              <div className="skill-category-card">
                <h3 className="skill-cat-title mono" style={{ color: '#22C55E', fontSize: '0.85rem' }}>BACKEND & FRONTEND</h3>
                <div className="skill-pill-list" style={{ marginTop: '0.6rem' }}>
                  <span className="tag">FastAPI</span>
                  <span className="tag">Flutter</span>
                  <span className="tag">REST APIs</span>
                  <span className="tag">Streamlit</span>
                  <span className="tag">Firebase</span>
                </div>
              </div>

              <div className="skill-category-card">
                <h3 className="skill-cat-title mono" style={{ color: '#A855F7', fontSize: '0.85rem' }}>DATA ENGINEERING</h3>
                <div className="skill-pill-list" style={{ marginTop: '0.6rem' }}>
                  <span className="tag">Pandas</span>
                  <span className="tag">NumPy</span>
                  <span className="tag">MySQL</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>

              <div className="skill-category-card">
                <h3 className="skill-cat-title mono highlight-orange" style={{ fontSize: '0.85rem' }}>DOCUMENT AI</h3>
                <div className="skill-pill-list" style={{ marginTop: '0.6rem' }}>
                  <span className="tag">Google Cloud Vision OCR</span>
                  <span className="tag">PDF Processing</span>
                  <span className="tag">Vector Search</span>
                </div>
              </div>

              <div className="skill-category-card">
                <h3 className="skill-cat-title mono highlight-blue" style={{ fontSize: '0.85rem' }}>TOOLS</h3>
                <div className="skill-pill-list" style={{ marginTop: '0.6rem' }}>
                  <span className="tag">Git</span>
                  <span className="tag">GitHub</span>
                  <span className="tag">VS Code</span>
                  <span className="tag">Tableau</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. DEVELOPER TERMINAL CLI */}
      {!recruiterMode && (
        <section id="terminal" style={{ marginTop: '2.5rem' }}>
          <div className="container">
            <div className="contact-card" style={{ textAlign: 'left', padding: '3rem' }}>
              <div className="section-tag">10 / DEVELOPER CLI</div>
              <h3 style={{ fontSize: '1.6rem', color: '#FFF' }}>Interactive Terminal</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.4rem', fontSize: '0.9rem' }}>
                Type commands like <code className="highlight-orange">help</code>, <code className="highlight-orange">projects</code>, or <code className="highlight-orange">sudo hire shrishail</code>.
              </p>

              <TerminalCLI />
            </div>
          </div>
        </section>
      )}

      {/* 11. ONE-PAGE EXECUTIVE RESUME CTA */}
      <section id="resume-cta" style={{ marginTop: '2.5rem' }}>
        <div className="container">
          <div className="min-info-card" style={{ textAlign: 'center', padding: '3rem 2rem', background: '#090E17' }}>
            <span className="min-tag">11 / EXECUTIVE RESUME</span>
            <h2 style={{ fontSize: '2.2rem', color: '#FFF', margin: '0.5rem 0' }}>Want the one-page version?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem' }}>
              Download the complete single-page PDF resume with full academic credentials and project summaries.
            </p>

            <a 
              href="/Shrishail_Hebballi_Resume.pdf" 
              download="Shrishail_Hebballi_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ margin: '0 auto', display: 'inline-flex' }}
            >
              DOWNLOAD RESUME ↗ <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 12. CONTACT SECTION */}
      <section id="contact" style={{ marginTop: '2.5rem' }}>
        <div className="container">
          <div className="contact-card">
            <div className="section-tag">12 / GET IN TOUCH</div>
            <h2 className="contact-title">Let's build something useful with AI.</h2>
            <p className="contact-subtitle">
              Open to AI/ML engineering roles, data science opportunities, and software collaborations.
            </p>

            <div className="contact-links-grid">
              <a href="mailto:shrishail.ad24@bmsce.ac.in" className="contact-chip">
                <Mail size={16} className="highlight-orange" />
                shrishail.ad24@bmsce.ac.in
              </a>

              <a href="mailto:shrishailmhebballi@gmail.com" className="contact-chip">
                <Mail size={16} className="highlight-blue" />
                shrishailmhebballi@gmail.com
              </a>

              <a 
                href="https://www.linkedin.com/in/shrishail-mallappa-hebballi-b33b19375" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-chip"
              >
                <LinkedinIcon size={16} className="highlight-blue" />
                LinkedIn Profile
              </a>

              <a 
                href="https://github.com/shrishailad24" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-chip"
              >
                <GithubIcon size={16} />
                github.com/shrishailad24
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Full-Screen AegisCR Case Study Modal */}
      <AegisCRCaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Interactive Floating AI Assistant Drawer */}
      {!recruiterMode && <AskShrishailAI />}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p>© {new Date().getFullYear()} Shrishail Mallappa Hebballi · AI & Data Science Engineer.</p>
            <div className="mono" style={{ fontSize: '0.75rem', display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/shrishailad24" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)' }}>GitHub</a>
              <a href="https://www.linkedin.com/in/shrishail-mallappa-hebballi-b33b19375" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)' }}>LinkedIn</a>
              <a href="/Shrishail_Hebballi_Resume.pdf" download="Shrishail_Hebballi_Resume.pdf" style={{ color: 'var(--accent-orange)' }}>Resume PDF</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
