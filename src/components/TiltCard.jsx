import React, { useState, useRef } from 'react';

export default function TiltCard({ children, className = "", style = {} }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 2; // -1 to 1
    const yPct = (mouseY / height - 0.5) * 2; // -1 to 1

    const rotateX = -yPct * 18; // 18deg 5D tilt angle
    const rotateY = xPct * 18;

    setTransform(`perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px) scale3d(1.03, 1.03, 1.03)`);
    setGlarePos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.35
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)");
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease-out",
        transformStyle: "preserve-3d",
        position: "relative",
        borderRadius: "16px",
        ...style
      }}
      className={`tilt-card-container 5d-depth-card ${className}`}
    >
      {/* Hyper 3D Multi-Layer Inner Container */}
      <div style={{ transform: "translateZ(35px)", transformStyle: "preserve-3d", width: "100%", height: "100%" }}>
        {children}
      </div>

      {/* Holographic 5D Iridescent Specular Glare Overlay (Compact Micro Spotlight) */}
      <div
        className="tilt-glare"
        style={{
          position: "absolute",
          inset: "0px",
          borderRadius: "16px",
          pointerEvents: "none",
          zIndex: 10,
          background: `radial-gradient(circle 120px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${(glarePos.opacity * 0.5).toFixed(2)}) 0%, rgba(58, 120, 255, 0.08) 30%, transparent 60%)`,
          transition: "opacity 0.25s"
        }}
      />
    </div>
  );
}
