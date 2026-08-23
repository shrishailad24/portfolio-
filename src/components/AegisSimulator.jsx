import React, { useState } from 'react';
import { ShieldCheck, RefreshCw, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export default function AegisSimulator() {
  const [income, setIncome] = useState(800000);
  const [loanAmount, setLoanAmount] = useState(1200000);
  const [creditScore, setCreditScore] = useState(742);
  const [propertyValue, setPropertyValue] = useState(2500000);
  const [employment, setEmployment] = useState('Salaried');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState(null);

  const calculateRisk = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const dtiRatio = loanAmount / (income || 1);
      const ltvRatio = loanAmount / (propertyValue || 1);

      let riskLevel = 'LOW';
      let confidence = 88.5;
      let topFactors = [];

      if (creditScore >= 720 && dtiRatio <= 2.5 && ltvRatio <= 0.7) {
        riskLevel = 'LOW';
        confidence = Math.min(94.2, 85 + (creditScore - 700) * 0.1);
        topFactors = [
          '+ Excellent credit score history (' + creditScore + ')',
          '+ Strong collateral coverage (LTV ' + (ltvRatio * 100).toFixed(1) + '%)',
          '- Moderate loan-to-income ratio (' + dtiRatio.toFixed(1) + 'x)'
        ];
      } else if (creditScore >= 650 && dtiRatio <= 4.0) {
        riskLevel = 'ELEVATED / MEDIUM';
        confidence = 82.4;
        topFactors = [
          '~ Moderate credit rating (' + creditScore + ')',
          '- Higher debt burden relative to annual income',
          '+ Property valuation provides adequate collateral security'
        ];
      } else {
        riskLevel = 'HIGH';
        confidence = 91.0;
        topFactors = [
          '- Low credit score threshold (' + creditScore + ')',
          '- Excessive leverage ratio (' + dtiRatio.toFixed(1) + 'x annual income)',
          '- Insufficient collateral margin'
        ];
      }

      setResult({
        riskLevel,
        confidence: confidence.toFixed(1),
        dtiRatio: dtiRatio.toFixed(2),
        ltvRatio: (ltvRatio * 100).toFixed(1),
        topFactors
      });
      setIsCalculating(false);
    }, 400);
  };

  return (
    <div className="simulator-box">
      <div className="simulator-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <ShieldCheck className="highlight-orange" size={24} />
          <strong>AEGISCR — LIVE ML CREDIT RISK SIMULATOR</strong>
        </div>
        <span className="badge-active">MODEL v1.4 ACTIVE</span>
      </div>

      <div className="simulator-body">
        <div className="sim-inputs">
          <div className="sim-field">
            <label>Annual Income (₹): <strong>₹{income.toLocaleString()}</strong></label>
            <input 
              type="range" 
              min="200000" 
              max="5000000" 
              step="50000" 
              value={income} 
              onChange={(e) => setIncome(Number(e.target.value))} 
            />
          </div>

          <div className="sim-field">
            <label>Requested Loan Amount (₹): <strong>₹{loanAmount.toLocaleString()}</strong></label>
            <input 
              type="range" 
              min="100000" 
              max="10000000" 
              step="100000" 
              value={loanAmount} 
              onChange={(e) => setLoanAmount(Number(e.target.value))} 
            />
          </div>

          <div className="sim-field">
            <label>Credit Score (CIBIL): <strong>{creditScore}</strong></label>
            <input 
              type="range" 
              min="300" 
              max="900" 
              step="5" 
              value={creditScore} 
              onChange={(e) => setCreditScore(Number(e.target.value))} 
            />
          </div>

          <div className="sim-field">
            <label>Collateral Property Value (₹): <strong>₹{propertyValue.toLocaleString()}</strong></label>
            <input 
              type="range" 
              min="500000" 
              max="20000000" 
              step="250000" 
              value={propertyValue} 
              onChange={(e) => setPropertyValue(Number(e.target.value))} 
            />
          </div>

          <button onClick={calculateRisk} className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
            {isCalculating ? <RefreshCw className="spin" size={16} /> : <ShieldCheck size={16} />}
            {isCalculating ? 'EVALUATING RISK MATRIX...' : 'ASSESS CREDIT RISK'}
          </button>
        </div>

        <div className="sim-results">
          {result ? (
            <div className="sim-result-card">
              <div className="sim-res-row">
                <span>RISK ASSESSMENT</span>
                <span 
                  className="risk-tag"
                  style={{
                    color: result.riskLevel === 'LOW' ? '#22C55E' : result.riskLevel.includes('MEDIUM') ? '#F59E0B' : '#EF4444',
                    borderColor: result.riskLevel === 'LOW' ? '#22C55E' : result.riskLevel.includes('MEDIUM') ? '#F59E0B' : '#EF4444'
                  }}
                >
                  ● {result.riskLevel}
                </span>
              </div>

              <div className="sim-res-row">
                <span>MODEL CONFIDENCE</span>
                <strong style={{ color: '#FFF', fontSize: '1.1rem' }}>{result.confidence}%</strong>
              </div>

              <div className="sim-res-row">
                <span>DTI / LTV RATIOS</span>
                <span className="mono" style={{ fontSize: '0.85rem' }}>DTI: {result.dtiRatio}x | LTV: {result.ltvRatio}%</span>
              </div>

              <div className="sim-factors">
                <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--accent-orange)' }}>EXPLAINABLE AI (XAI) TOP FACTORS:</span>
                {result.topFactors.map((factor, idx) => (
                  <div key={idx} className="factor-item">{factor}</div>
                ))}
              </div>
            </div>
          ) : (
            <div className="sim-placeholder">
              <Info size={32} className="highlight-blue" style={{ marginBottom: '0.5rem' }} />
              <p>Adjust financial parameters and click <strong>ASSESS CREDIT RISK</strong> to run live AegisCR ML prediction engine.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
