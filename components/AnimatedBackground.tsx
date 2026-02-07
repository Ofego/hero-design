'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  speed: number;
  radius: number;
  color: string;
}

interface GridPulse {
  colIndex: number;
  planeIndex: number;
  z: number;
  speed: number;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;

    // Configuration
    const fl = 400; // Focal length
    const gridSpacing = 60;
    const gridSpeed = 2;
    const farZ = 2000;
    const particleCount = 50;
    
    let gridOffsetZ = 0;
    const particles: Particle[] = [];
    const pulses: GridPulse[] = [];
    let scanY = 0;
    let scanSpeed = 2;

    const colors = {
      blue: '#2557EC',
      yellow: '#F7D051'
    };

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cx = w / 2;
      cy = h / 2;
      scanY = 0;

      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        resetParticle({}, true);
      }
    };

    const resetParticle = (p: Partial<Particle>, randomZ = false) => {
      const spreadX = w * 2;
      const spreadY = h * 2;
      
      let x = (Math.random() - 0.5) * spreadX;
      // Avoid center dead zone
      if (Math.abs(x) < 100) x += 100 * (Math.random() > 0.5 ? 1 : -1);
      
      p.x = x;
      p.y = (Math.random() - 0.5) * spreadY;
      p.z = randomZ ? Math.random() * farZ : farZ;
      p.speed = 5 + Math.random() * 5;
      p.radius = 1 + Math.random() * 2;
      p.color = Math.random() > 0.6 ? colors.blue : colors.yellow;
      
      if (particles.indexOf(p as Particle) === -1) {
        particles.push(p as Particle);
      }
    };

    const project = (x: number, y: number, z: number) => {
      const scale = fl / (fl + z);
      const sx = cx + x * scale;
      const sy = cy + y * scale;
      return { x: sx, y: sy, scale };
    };

    const drawGrid = () => {
      ctx.lineWidth = 1;
      ctx.shadowBlur = 5;
      ctx.shadowColor = 'rgba(37, 87, 236, 0.3)';
      
      const planeHeight = 250; 
      const planes = [planeHeight, -planeHeight];

      planes.forEach((planeY, planeIndex) => {
        // Vertical lines
        const cols = Math.ceil(w / gridSpacing) * 3;
        
        for (let i = -cols/2; i <= cols/2; i++) {
            const worldX = i * gridSpacing;
            if (Math.abs(worldX * (fl/farZ)) > w) continue;

            ctx.beginPath();
            const pFar = project(worldX, planeY, farZ);
            const pNear = project(worldX, planeY, 0);
            
            const grad = ctx.createLinearGradient(pNear.x, pNear.y, pFar.x, pFar.y);
            grad.addColorStop(0, 'rgba(37, 87, 236, 0.4)');
            grad.addColorStop(1, 'rgba(37, 87, 236, 0)');
            
            ctx.strokeStyle = grad;
            ctx.moveTo(pFar.x, pFar.y);
            ctx.lineTo(pNear.x, pNear.y);
            ctx.stroke();

            // Draw Pulses
            pulses.forEach(pulse => {
              if (pulse.colIndex === i && pulse.planeIndex === planeIndex) {
                const pStart = project(worldX, planeY, pulse.z);
                const pEnd = project(worldX, planeY, pulse.z - 150);
                
                if (pStart.scale > 0 && pEnd.scale > 0) {
                  ctx.beginPath();
                  ctx.strokeStyle = colors.yellow;
                  ctx.lineWidth = 3 * pStart.scale;
                  ctx.shadowColor = colors.yellow;
                  ctx.shadowBlur = 10;
                  ctx.moveTo(pStart.x, pStart.y);
                  ctx.lineTo(pEnd.x, pEnd.y);
                  ctx.stroke();
                  ctx.shadowBlur = 0;
                }
              }
            });
        }

        // Horizontal lines
        for (let z = gridOffsetZ; z < farZ; z += gridSpacing) {
            if (z < 10) continue;
            const opacity = Math.max(0, 1 - (z / farZ));
            if (opacity < 0.05) continue;

            const pLeft = project(-w * 2, planeY, z);
            const pRight = project(w * 2, planeY, z);

            ctx.beginPath();
            ctx.strokeStyle = `rgba(37, 87, 236, ${opacity * 0.3})`;
            ctx.moveTo(pLeft.x, pLeft.y);
            ctx.lineTo(pRight.x, pRight.y);
            ctx.stroke();
        }
      });
      
      ctx.shadowBlur = 0;
    };

    const drawParticles = () => {
      particles.forEach(p => {
        p.z -= p.speed;
        if (p.z <= 10) {
          resetParticle(p);
          return;
        }

        const { x, y, scale } = project(p.x, p.y, p.z);
        if (x < 0 || x > w || y < 0 || y > h) return;

        const alpha = Math.max(0, 1 - (p.z / farZ));
        const size = p.radius * scale * 8;
        
        // Trail
        const trailZ = p.z + p.speed * 4;
        const trailP = project(p.x, p.y, trailZ);

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(trailP.x, trailP.y);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = size * 0.5;
        ctx.globalAlpha = alpha * 0.4;
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Particle
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });
    };

    const drawScanLine = () => {
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(w, scanY);
      ctx.strokeStyle = colors.blue;
      ctx.lineWidth = 2;
      ctx.shadowColor = colors.blue;
      ctx.shadowBlur = 15;
      ctx.globalAlpha = 0.5;
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const drawHUD = () => {
      const size = 40;
      const padding = 30;
      ctx.strokeStyle = colors.yellow;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.2;

      // Top Left
      ctx.beginPath();
      ctx.moveTo(padding, padding + size);
      ctx.lineTo(padding, padding);
      ctx.lineTo(padding + size, padding);
      ctx.stroke();

      // Bottom Right
      ctx.beginPath();
      ctx.moveTo(w - padding, h - padding - size);
      ctx.lineTo(w - padding, h - padding);
      ctx.lineTo(w - padding - size, h - padding);
      ctx.stroke();

      ctx.globalAlpha = 1;
    };

    const render = () => {
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, w, h);

      gridOffsetZ -= gridSpeed;
      if (gridOffsetZ < 0) gridOffsetZ += gridSpacing;

      // Update pulses
      if (Math.random() < 0.03) {
        const cols = Math.ceil(w / gridSpacing) * 3;
        const colIndex = Math.floor(Math.random() * cols) - Math.floor(cols/2);
        pulses.push({
          colIndex,
          planeIndex: Math.random() > 0.5 ? 0 : 1,
          z: farZ,
          speed: gridSpeed * 5
        });
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        pulses[i].z -= pulses[i].speed;
        if (pulses[i].z < 0) pulses.splice(i, 1);
      }

      // Update scan line
      scanY += scanSpeed;
      if (scanY > h || scanY < 0) scanSpeed *= -1;

      drawGrid();
      drawParticles();
      drawScanLine();
      drawHUD();

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', init);
    init();
    render();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AnimatedBackground;