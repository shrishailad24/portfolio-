import React, { useState } from 'react';
import TiltCard from './TiltCard';
import AegisCRCaseStudyModal from './AegisCRCaseStudyModal';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Download, 
  ChevronDown
} from 'lucide-react';

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function HeroSection({ onOpenCaseStudy }) {
  return (
    <section className="exact-hero-section">
      <div className="exact-hero-grid">
        {/* Left Hero Content */}
        <div className="exact-hero-left">
          <div className="exact-status-pill">
            <span className="glowing-green-dot"></span>
            AVAILABLE FOR OPPORTUNITIES / 2026
          </div>

          <h1 className="exact-hero-heading">
            Building<br />
            useful<br />
            <span className="exact-highlight-orange">intelligence.</span>
          </h1>

          <p className="exact-hero-subtitle">
            I'm Shrishail — an AI & Data Science undergraduate building practical AI systems that turn messy real-world data into useful, explainable products.
          </p>

          <div className="exact-hero-buttons">
            <a href="#featured-work" className="btn-explore-work">
              EXPLORE MY WORK <ArrowUpRight size={16} />
            </a>

            <a 
              href="/Shrishail_Hebballi_Resume.pdf" 
              download="Shrishail_Hebballi_Resume.pdf" 
              className="btn-download-resume"
            >
              DOWNLOAD RESUME <Download size={15} />
            </a>
          </div>

          <div className="exact-hero-meta">
            <span>BENGALURU, INDIA</span>
            <span className="meta-dot">•</span>
            <span>B.E. AI & DATA SCIENCE</span>
            <span className="meta-dot">•</span>
            <span>CGPA 8.28 / 10</span>
          </div>

          <div className="exact-scroll-hint">
            <ChevronDown size={14} /> SCROLL TO EXPLORE
          </div>
        </div>

        {/* Right Hero Visual Card */}
        <div className="exact-hero-right">
          <TiltCard>
            <div className="exact-backplate-box">
              {/* Luminous Light Geoid Earth-Moon Orbital System SVG */}
              <svg className="geoid-orbit-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Light Geoid Elliptical Orbit Rings */}
                <ellipse cx="250" cy="250" rx="215" ry="145" transform="rotate(-25 250 250)" stroke="url(#blueOrbitGrad)" strokeWidth="1.8" strokeDasharray="8 5" opacity="0.9" />
                <ellipse cx="250" cy="250" rx="235" ry="165" transform="rotate(32 250 250)" stroke="url(#orangeOrbitGrad)" strokeWidth="1.8" opacity="0.9" />
                <circle cx="250" cy="250" r="225" stroke="rgba(58, 120, 255, 0.45)" strokeWidth="1.2" strokeDasharray="4 6" />

                {/* Orbiting Celestial Moon & Satellite Nodes */}
                <circle cx="65" cy="205" r="6" fill="#00F0FF" />
                <circle cx="65" cy="205" r="10" fill="rgba(0, 240, 255, 0.3)" />

                <circle cx="435" cy="285" r="6" fill="#FF5533" />
                <circle cx="435" cy="285" r="10" fill="rgba(255, 85, 51, 0.3)" />

                <circle cx="345" cy="85" r="4.5" fill="#38BDF8" />

                {/* SVG Gradient Definitions */}
                <defs>
                  <linearGradient id="blueOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
                    <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="orangeOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF5533" stopOpacity="1" />
                    <stop offset="60%" stopColor="#FF7755" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#FF5533" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Hero Cards Wrapper (Exact Match to Reference Screenshot) */}
              <div className="hero-cards-wrapper">
                {/* Behind Dark Backplate Layer */}
                <div className="backplate-dark-layer">
                  <div className="backplate-code-tag">
                    <span className="mono-blue">model.build()</span>
                    <span className="mono-orange">→ make it matter</span>
                  </div>
                </div>

                {/* Front Tilted Photo Card */}
                <div className="photo-card-container">
                  <img src="/profile.jpg" alt="Shrishail Hebballi Profile" className="exact-profile-img" />
                  <div className="photo-name-tag">
                    <span className="name-white">SHRISHAIL</span>
                    <span className="name-orange">HEBBALLI</span>
                  </div>
                </div>
              </div>

              {/* Scroll to Explore Label */}
              <div className="scroll-explore-tag">
                <span className="mono">∨ SCROLL TO EXPLORE</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjectsCards({ onOpenCaseStudy }) {
  return (
    <div id="featured-work" style={{ marginTop: '2.5rem' }}>
      <div className="min-section-head">
        <span className="min-tag highlight-orange">03 / FEATURED WORK ⭐</span>
        <h2>Featured Projects</h2>
        <p className="min-subtext">Flagship AI systems & engineering applications.</p>
      </div>

      {/* FEATURED PROJECT #1: AEGISCR FLAGSHIP CARD */}
      <section className="min-section" style={{ background: '#080C14', border: '1px solid var(--accent-orange)' }}>
        <div className="min-hero-pill" style={{ background: 'rgba(255,85,51,0.1)', borderColor: 'var(--accent-orange)' }}>
          FEATURED FLAGSHIP PRODUCT ⭐
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3.2rem', color: '#FFF', fontFamily: 'var(--font-heading)' }}>AEGISCR</h2>
            <p className="highlight-orange mono" style={{ fontSize: '1.15rem', margin: '0.4rem 0 1rem 0' }}>
              "From government land documents to explainable loan decisions."
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              An end-to-end AI credit-underwriting platform that converts borrower documents and Karnataka land records into explainable lending decisions using OCR, collateral valuation, fraud detection, ML risk scoring, and automated reporting.
            </p>

            <div className="min-cap-row" style={{ marginBottom: '1.75rem' }}>
              <span>250+ Karnataka Land PDFs</span>
              <span>•</span>
              <span>6 Loan Products</span>
              <span>•</span>
              <span>3 Role Interfaces</span>
              <span>•</span>
              <span>Google Vision OCR</span>
            </div>

            <div className="min-cta-row" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button 
                onClick={onOpenCaseStudy} 
                className="btn-primary" 
                style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.4rem' }}
              >
                VIEW CASE STUDY <ChevronRight size={16} />
              </button>
              <a href="https://aegiscr-5.onrender.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
                LIVE DEMO <ArrowUpRight size={16} />
              </a>
              <a href="https://github.com/shrishailad24/AegisCR" target="_blank" rel="noopener noreferrer" className="btn-outline">
                GITHUB <GithubIcon size={16} />
              </a>
            </div>
          </div>

          <TiltCard>
            <div className="ui-mockup-container" style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <img src="/aegiscr_ui.jpg" alt="AegisCR Underwriting Dashboard" className="ui-mockup-img" />
              <div className="ui-mockup-caption" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>AegisCR Underwriting Dashboard</span>
                <button 
                  onClick={onOpenCaseStudy} 
                  style={{ background: 'none', border: 'none', color: 'var(--accent-orange)', cursor: 'pointer', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  DEEP DIVE ➔
                </button>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* FEATURED PROJECT #2: AAROHA SPOTLIGHT CARD */}
      <section className="min-section" style={{ background: '#080C14', border: '1px solid var(--accent-blue)', marginTop: '1.5rem' }}>
        <div className="min-hero-pill" style={{ background: 'rgba(58,120,255,0.1)', borderColor: 'var(--accent-blue)', color: 'var(--accent-blue)' }}>
          FEATURED AI SYSTEM ⭐
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3.2rem', color: '#FFF', fontFamily: 'var(--font-heading)' }}>AAROHA</h2>
            <p className="highlight-blue mono" style={{ fontSize: '1.15rem', margin: '0.4rem 0 1rem 0' }}>
              "Human Operating System — Multi-Portal Flutter & FastAPI Application"
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              A comprehensive Flutter/Dart cross-platform application backed by a FastAPI AI decision server. Features 30+ dedicated screens spanning Career, Education, Money, Health, Life Portals, and automated advisor endpoints.
            </p>

            <div className="min-cap-row" style={{ marginBottom: '1.75rem' }}>
              <span>Flutter & Dart</span>
              <span>•</span>
              <span>FastAPI Port 8002</span>
              <span>•</span>
              <span>30+ Dart Screens</span>
              <span>•</span>
              <span>5 Decision Portals</span>
            </div>

            <div className="min-cta-row" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a 
                href="https://github.com/shrishailad24/AAROHA-HUMAN-0S" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ background: '#3A78FF' }}
              >
                VIEW AAROHA GITHUB <GithubIcon size={16} />
              </a>
            </div>
          </div>

          <TiltCard>
            <div className="ui-mockup-container" style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <img src="/aaroha_ui.jpg" alt="AAROHA Decision System Interface" className="ui-mockup-img" />
              <div className="ui-mockup-caption">
                <span>AAROHA — Flutter & FastAPI Human OS Dashboard</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>
    </div>
  );
}

export default function AegisCRMinimalFlagship({ recruiterMode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="minimal-aegis-container">
      <HeroSection onOpenCaseStudy={() => setIsModalOpen(true)} />
      <FeaturedProjectsCards onOpenCaseStudy={() => setIsModalOpen(true)} />
      <AegisCRCaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
