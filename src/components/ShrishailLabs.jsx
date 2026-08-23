import React from 'react';
import { FlaskConical, ArrowUpRight, Cpu, Eye, Database, BrainCircuit } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ShrishailLabs() {
  const experiments = [
    {
      title: "Credit Risk Scoring Engine",
      tag: "AI / ML EXPERIMENT",
      tech: "Python · Scikit-learn · Pandas",
      objective: "Predict loan applicant default risk from tabular financial indicators.",
      approach: "Decision tree ensemble modeling with feature scaling & ROC-AUC validation.",
      result: "88.5% test accuracy (evaluated on 80/20 train-test split cross-validation).",
      link: "https://github.com/shrishailad24/AegisCR"
    },
    {
      title: "Tesseract OCR Text Extraction",
      tag: "COMPUTER VISION",
      tech: "OpenCV · Tesseract OCR",
      objective: "Automate document verification for bank statements and identity proofs.",
      approach: "Preprocessed images via grayscale conversion, thresholding, and contour filtering.",
      result: "95%+ average Google Cloud Vision OCR confidence score across financial fields.",
      link: "https://github.com/shrishailad24/AegisCR"
    },
    {
      title: "Demographic Face Classifier",
      tag: "DEEP LEARNING",
      tech: "OpenCV · Caffe DNN",
      objective: "Real-time age range and gender estimation via camera feed.",
      approach: "Pre-trained deep Caffe neural networks for facial detection & multi-task classification.",
      result: "Real-time webcam inference at 30 FPS.",
      link: "https://github.com/shrishailad24/Age-gender-detection-open-cv-cafe-model"
    },
    {
      title: "Movie Preference Vector Engine",
      tag: "RECOMMENDATION NLP",
      tech: "Python · NLP · Cosine Similarity",
      objective: "Discover movie similarity based on plot summaries and tag metadata.",
      approach: "Transformed text features into TF-IDF vector matrices and computed cosine distance.",
      result: "Instant top-N relevant movie recommendations.",
      link: "https://github.com/shrishailad24/movie_recommendation-system"
    }
  ];

  return (
    <div className="labs-box">
      <div className="section-tag" style={{ marginBottom: '0.4rem' }}>08 / SHRISHAIL LABS 🧪</div>
      <h2 className="section-heading-big">Engineering Experiments.</h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', maxWidth: '650px', marginBottom: '2rem', lineHeight: '1.6' }}>
        Focused technical experiments demonstrating curiosity, model evaluation, and software engineering paradigms.
      </p>

      <div className="labs-grid">
        {experiments.map((exp, idx) => (
          <TiltCard key={idx}>
            <div className="lab-card">
              <div className="lab-head">
                <span className="mono highlight-orange" style={{ fontSize: '0.7rem' }}>{exp.tag}</span>
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="external-icon">
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#FFF', margin: '0.6rem 0 0.3rem 0' }}>{exp.title}</h3>
              <div className="mono" style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', marginBottom: '0.8rem' }}>
                {exp.tech}
              </div>

              <div className="lab-info">
                <div><strong>Objective:</strong> {exp.objective}</div>
                <div><strong>Approach:</strong> {exp.approach}</div>
                <div style={{ color: '#22C55E' }}><strong>Result:</strong> {exp.result}</div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
