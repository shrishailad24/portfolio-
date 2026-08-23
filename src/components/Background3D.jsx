import React, { useEffect, useRef } from 'react';

export default function Background3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 5D Multi-Layer Spatial Particles (Depth 1: Background stars, Depth 2: Midground links, Depth 3: Foreground Orbs)
    const particles = [];
    const count = 45;

    for (let i = 0; i < count; i++) {
      const layer = Math.random() > 0.7 ? 3 : Math.random() > 0.3 ? 2 : 1;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        layer: layer, // 1 = deep background, 2 = midground, 3 = foreground
        radius: layer === 3 ? Math.random() * 2.5 + 1.5 : layer === 2 ? Math.random() * 1.5 + 0.8 : Math.random() * 1 + 0.4,
        vx: (Math.random() - 0.5) * (0.1 * layer),
        vy: (Math.random() - 0.5) * (0.1 * layer),
        color: layer === 3 ? '#FF5533' : layer === 2 ? '#3A78FF' : '#A855F7',
        alpha: layer === 3 ? 0.6 : layer === 2 ? 0.35 : 0.2
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Render 5D Spatial Parallax Light Orbs
      const primaryOrb = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 600);
      primaryOrb.addColorStop(0, 'rgba(58, 120, 255, 0.08)');
      primaryOrb.addColorStop(0.5, 'rgba(255, 85, 51, 0.03)');
      primaryOrb.addColorStop(1, 'transparent');
      ctx.fillStyle = primaryOrb;
      ctx.fillRect(0, 0, width, height);

      // Secondary 5D Counter Light Orb
      const secondaryOrb = ctx.createRadialGradient(width - mouseX, height - mouseY, 0, width - mouseX, height - mouseY, 500);
      secondaryOrb.addColorStop(0, 'rgba(168, 85, 247, 0.04)');
      secondaryOrb.addColorStop(1, 'transparent');
      ctx.fillStyle = secondaryOrb;
      ctx.fillRect(0, 0, width, height);

      // Render 5D Depth-Weighted Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply 5D spatial parallax offset based on depth layer and scroll
        const parallaxX = (mouseX - width / 2) * (0.015 * p.layer);
        const parallaxY = (mouseY - height / 2) * (0.015 * p.layer) + scrollY * (0.02 * p.layer);

        let renderX = p.x + parallaxX;
        let renderY = p.y + parallaxY;

        // Wrap around bounds
        renderX = (renderX + width) % width;
        renderY = (renderY + height) % height;

        p.x += p.vx;
        p.y += p.vy;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(renderX, renderY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;

        if (p.layer === 3) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = p.color;
        }

        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw 5D constellation links for mid & foreground layers
        if (p.layer >= 2) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            if (p2.layer >= 2) {
              const dx = renderX - (p2.x + (mouseX - width / 2) * (0.015 * p2.layer));
              const dy = renderY - (p2.y + (mouseY - height / 2) * (0.015 * p2.layer));
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < 110) {
                ctx.beginPath();
                ctx.moveTo(renderX, renderY);
                ctx.lineTo(p2.x + (mouseX - width / 2) * (0.015 * p2.layer), p2.y + (mouseY - height / 2) * (0.015 * p2.layer));
                ctx.strokeStyle = p.color;
                ctx.globalAlpha = (1 - dist / 110) * 0.12;
                ctx.lineWidth = 0.6 * p.layer;
                ctx.stroke();
              }
            }
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
