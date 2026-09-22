import React, { useState, useRef } from 'react';

export default function TiltCard({ children, className = "", style = {} }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    // Only apply 3D tilt on devices with a mouse/hover to prevent mobile touch-scroll interference
    if (typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2; // -1 to 1
    const yPct = (mouseY / height - 0.5) * 2; // -1 to 1

    const rotateX = -yPct * 10; // smooth natural tilt
    const rotateY = xPct * 10;

    setTransform(`perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.25
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease-out",
        position: "relative",
        borderRadius: "16px",
        ...style
      }}
      className={`tilt-card-container ${className}`}
    >
      <div style={{ width: "100%", height: "100%" }}>
        {children}
      </div>

      {/* Holographic Specular Glare Overlay (Desktop only) */}
      <div
        className="tilt-glare"
        style={{
          position: "absolute",
          inset: "0px",
          borderRadius: "16px",
          pointerEvents: "none",
          zIndex: 10,
          background: `radial-gradient(circle 120px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${(glarePos.opacity * 0.4).toFixed(2)}) 0%, rgba(58, 120, 255, 0.05) 30%, transparent 60%)`,
          transition: "opacity 0.25s"
        }}
      />
    </div>
  );
}
