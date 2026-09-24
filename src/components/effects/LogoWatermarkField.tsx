import { useEffect, useRef } from 'react';
import { useReducedMotion, useMediaQuery } from '@/hooks';

// ============================================================
// LogoWatermarkField — Canvas 2D watermark effect
// Renders logo mark as tiled maroon watermark with cursor proximity
// ============================================================

export function LogoWatermarkField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();
  const isCoarse = useMediaQuery('(pointer: coarse)');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio, 2);
    let animId = 0;
    let hidden = false;
    let mouseX = -9999;
    let mouseY = -9999;
    const IDLE_OPACITY = 0.022;
    const HOVER_OPACITY = 0.11;
    const RADIUS = 220;
    const SPACING = 200;

    interface Tile {
      x: number;
      y: number;
      rotation: number;
      scale: number;
      currentOpacity: number;
    }

    let tiles: Tile[] = [];
    let sprite: HTMLCanvasElement | null = null;

    function buildSprite(): HTMLCanvasElement {
      const size = 80;
      const sc = document.createElement('canvas');
      sc.width = size;
      sc.height = size;
      const sctx = sc.getContext('2d')!;
      // Draw a stylised medical cross / hands icon in maroon
      sctx.fillStyle = '#8B1538';
      // Simple SVG-path-like cross for sprite
      const cx = size / 2, cy = size / 2;
      const arm = size * 0.32, thick = size * 0.14;
      sctx.beginPath();
      sctx.roundRect(cx - thick / 2, cy - arm, thick, arm * 2, 3);
      sctx.roundRect(cx - arm, cy - thick / 2, arm * 2, thick, 3);
      sctx.fill();
      // Small circle top
      sctx.beginPath();
      sctx.arc(cx, cy - arm - size * 0.08, size * 0.07, 0, Math.PI * 2);
      sctx.fill();
      return sc;
    }

    function buildTiles(w: number, h: number) {
      tiles = [];
      for (let row = -1; row < h / SPACING + 2; row++) {
        for (let col = -1; col < w / SPACING + 2; col++) {
          const offsetX = row % 2 === 0 ? 0 : SPACING / 2;
          tiles.push({
            x: col * SPACING + offsetX,
            y: row * SPACING,
            rotation: (Math.random() - 0.5) * 16 * (Math.PI / 180),
            scale: 0.7 + Math.random() * 0.4,
            currentOpacity: IDLE_OPACITY,
          });
        }
      }
    }

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(DPR, DPR);
      buildTiles(w, h);
    }

    function draw() {
      if (hidden) return;
      ctx.clearRect(0, 0, canvas.width / DPR, canvas.height / DPR);
      if (!sprite) return;

      const isStatic = reducedMotion || isCoarse;

      tiles.forEach((tile) => {
        const targetOpacity = isStatic ? IDLE_OPACITY : (() => {
          const dx = tile.x - mouseX;
          const dy = tile.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < RADIUS) {
            const t = 1 - dist / RADIUS;
            return IDLE_OPACITY + (HOVER_OPACITY - IDLE_OPACITY) * t * t;
          }
          return IDLE_OPACITY;
        })();

        tile.currentOpacity += (targetOpacity - tile.currentOpacity) * 0.08;

        const spriteSize = 80 * tile.scale;
        ctx.save();
        ctx.translate(tile.x, tile.y);
        ctx.rotate(tile.rotation);
        ctx.globalAlpha = tile.currentOpacity;
        ctx.drawImage(sprite!, -spriteSize / 2, -spriteSize / 2, spriteSize, spriteSize);
        ctx.restore();
      });
    }

    function loop() {
      draw();
      animId = requestAnimationFrame(loop);
    }

    // Visibility API
    const onVisibility = () => { hidden = document.hidden; };
    document.addEventListener('visibilitychange', onVisibility);

    // Mouse tracking
    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    if (!isCoarse && !reducedMotion) {
      window.addEventListener('mousemove', onMouse, { passive: true });
    }

    const onLeave = () => { mouseX = -9999; mouseY = -9999; };
    document.addEventListener('mouseleave', onLeave);

    // ResizeObserver
    const ro = new ResizeObserver(() => {
      resize();
    });
    ro.observe(document.documentElement);

    sprite = buildSprite();
    resize();
    loop();

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('mousemove', onMouse);
      document.removeEventListener('mouseleave', onLeave);
      ro.disconnect();
    };
  }, [reducedMotion, isCoarse]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -10,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}
    />
  );
}
