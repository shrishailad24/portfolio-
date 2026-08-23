import React, { useState } from 'react';
import { CheckCircle2, Code2, BrainCircuit, Database, ArrowRight } from 'lucide-react';

export default function SkillEvidenceMatrix() {
  const [selectedSkill, setSelectedSkill] = useState('python');

  const skillsData = {
    python: {
      name: "Python",
      level: "Core Engineering",
      icon: <BrainCircuit size={20} className="highlight-orange" />,
      desc: "Primary language for machine learning modeling, computer vision pipelines, backend API orchestration, and exploratory data analysis.",
      projects: [
        { name: "AegisCR", role: "Built ML default predictor, OCR text parser, & Streamlit UI" },
        { name: "AAROHA", role: "Architected centralized AI decision microservices" },
        { name: "Age & Gender Detection", role: "Implemented OpenCV camera stream & Caffe DNN inference" },
        { name: "Movie Recommender", role: "NLP tf-idf feature extraction & Cosine Similarity vector matching" }
      ]
    },
    ml: {
      name: "Machine Learning & CV",
      level: "Scikit-Learn · XGBoost · OpenCV",
      icon: <BrainCircuit size={20} className="highlight-blue" />,
      desc: "Supervised classification, feature engineering, model evaluation metrics (ROC-AUC, Precision/Recall), Explainable AI (SHAP), and Caffe DNNs.",
      projects: [
        { name: "AegisCR", role: "Credit risk scoring ensemble with decision trees & feature importance" },
        { name: "Age & Gender Detection", role: "Real-time face detection & age classification via Caffe model" },
        { name: "Movie Recommender", role: "Content-based recommendation vector engine" }
      ]
    },
    react: {
      name: "React.js & Full-Stack",
      level: "Component Architecture · UI Logic",
      icon: <Code2 size={20} style={{ color: '#22C55E' }} />,
      desc: "Building modern responsive web applications, component state management, custom CSS styling systems, and REST API integration.",
      projects: [
        { name: "Shrishail OS Portfolio", role: "Built interactive AI personal operating system with 3D tilt & terminal CLI" },
        { name: "AAROHA UI", role: "Designed modular UI state screens for decision engine" },
        { name: "ApexPlanet Internship", role: "Developed modular React UI components during summer internship" }
      ]
    },
    sql: {
      name: "SQL & Data Analytics",
      level: "PostgreSQL · MySQL · Tableau",
      icon: <Database size={20} style={{ color: '#A855F7' }} />,
      desc: "Relational database querying, multi-tier data aggregations, exploratory data analysis (EDA), and Tableau KPI visual storytelling.",
      projects: [
        { name: "Business Analytics Dashboards", role: "Engineered Tableau & Excel dashboards tracking Sales, Churn, and Marketing Funnel" },
        { name: "Future Interns Internship", role: "Executed EDA pipelines on commercial datasets to extract business insights" }
      ]
    }
  };

  const active = skillsData[selectedSkill];

  return (
    <div className="evidence-matrix-box">
      <div className="matrix-header">
        <div>
          <div className="section-tag" style={{ marginBottom: '0.4rem' }}>06 / PROOF, NOT CLAIMS ⭐</div>
          <h3 style={{ fontSize: '1.6rem', color: '#FFF' }}>Skill Evidence & Project Matrix</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
            Click any technology to inspect exact production projects where it was engineered.
          </p>
        </div>
      </div>

      <div className="matrix-grid">
        <div className="matrix-skills-nav">
          {Object.keys(skillsData).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedSkill(key)}
              className={`matrix-skill-btn ${selectedSkill === key ? 'active' : ''}`}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {skillsData[key].icon}
                <strong>{skillsData[key].name}</strong>
              </div>
              <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{skillsData[key].level}</span>
            </button>
          ))}
        </div>

        <div className="matrix-evidence-panel">
          <div className="evidence-head">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              {active.icon}
              <h4 style={{ fontSize: '1.3rem', color: '#FFF' }}>{active.name}</h4>
            </div>
            <span className="badge-active" style={{ fontSize: '0.65rem' }}>EVIDENCE VERIFIED</span>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '1rem 0 1.25rem 0', lineHeight: '1.6' }}>
            {active.desc}
          </p>

          <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', display: 'block', marginBottom: '0.6rem' }}>
            PROJECT IMPLEMENTATION PROOF ({active.projects.length} PROJECTS):
          </span>

          <div className="evidence-projects-list">
            {active.projects.map((proj, idx) => (
              <div key={idx} className="evidence-item">
                <CheckCircle2 size={16} className="highlight-blue" style={{ flexShrink: 0 }} />
                <div>
                  <strong style={{ color: '#FFF', fontSize: '0.9rem' }}>{proj.name}</strong>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: '0.15rem' }}>{proj.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
