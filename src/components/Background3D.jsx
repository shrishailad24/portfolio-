import React from 'react';

export default function Background3D() {
  return (
    <div 
      className="portfolio-ambient-backdrop"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      {/* Ultra-subtle deep ambient top-left & bottom-right lighting */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          left: '5%',
          width: '55vw',
          height: '45vh',
          background: 'radial-gradient(ellipse at center, rgba(58, 120, 255, 0.04) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }} 
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '5%',
          width: '50vw',
          height: '45vh',
          background: 'radial-gradient(ellipse at center, rgba(255, 85, 51, 0.03) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none'
        }} 
      />

      {/* Crisp, Static Engineer Dot Matrix (Zero distraction, maximum readability) */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.5,
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)'
        }}
      />
    </div>
  );
}
