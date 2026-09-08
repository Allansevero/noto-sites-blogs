import { useEffect, useRef, useState } from 'react';

import abaLogo from '@/assets/aba.svg';
import bank31872495 from '@/assets/bancos_svg/31872495.svg';
import bank30680829 from '@/assets/bancos_svg/30680829.svg';
import bank18189547 from '@/assets/bancos_svg/18189547.svg';

const BANK_LOGOS = [
  bank31872495,
  bank30680829,
  bank18189547,
];

// Accelerated orbit speeds for the 3 bank SVGs
const ORBITS = [
  { radius: 118, inclination: 12, phi: 15, speed: 48, dir: 1, phase: 0 },
  { radius: 104, inclination: 26, phi: 35, speed: 60, dir: -1, phase: 110 },
  { radius: 126, inclination: -22, phi: -22, speed: 42, dir: 1, phase: 220 },
];

const SUN_Z = 1000;
const CYCLE_DURATION = 7.5; // seconds per full animation sequence

export function BankOrbitAnimation() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const frame = useRef<number | null>(null);
  const start = useRef<number | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipVisibleRef = useRef(false);

  useEffect(() => {
    const animate = (t: number) => {
      if (start.current === null) start.current = t;
      const elapsed = (t - start.current) / 1000; // seconds
      const cycleTime = elapsed % CYCLE_DURATION;

      // Handle tooltip state synchronization
      const isTooltipTime = cycleTime >= 5.0 && cycleTime < 6.8;
      if (tooltipVisibleRef.current !== isTooltipTime) {
        tooltipVisibleRef.current = isTooltipTime;
        setShowTooltip(isTooltipTime);
      }

      // Check animation phase
      const isConverging = cycleTime >= 4.2 && cycleTime < 5.0;
      const isHiddenBehind = cycleTime >= 5.0;

      let pCenter = 0;
      if (isConverging) {
        const rawP = (cycleTime - 4.2) / 0.8;
        // Smooth ease in-out curve
        pCenter = rawP < 0.5 ? 2 * rawP * rawP : 1 - Math.pow(-2 * rawP + 2, 2) / 2;
      } else if (isHiddenBehind) {
        pCenter = 1;
      }

      ORBITS.forEach((o, i) => {
        const el = refs.current[i];
        if (!el) return;

        // Accelerate orbit angle computation
        const angle = ((elapsed * o.speed * o.dir + o.phase) * Math.PI) / 180;

        const x0 = o.radius * Math.cos(angle);
        const z0 = o.radius * Math.sin(angle);

        const iRad = (o.inclination * Math.PI) / 180;
        const y1 = z0 * Math.sin(iRad);
        const z1 = z0 * Math.cos(iRad);
        const x1 = x0;

        const phiRad = (o.phi * Math.PI) / 180;
        let x2 = x1 * Math.cos(phiRad) - y1 * Math.sin(phiRad);
        let y2 = x1 * Math.sin(phiRad) + y1 * Math.cos(phiRad);

        const maxDepth = Math.max(o.radius * Math.cos(iRad), 1);
        let depthNorm = z1 / maxDepth; // -1 (back) .. 1 (front)

        // Calculate scale and opacity (solid 1.0)
        let scale = 0.6 + ((depthNorm + 1) / 2) * (1.25 - 0.6);
        let opacity = 1;
        let zIndex = Math.round(SUN_Z + depthNorm * 200);

        // Apply convergence transition: banks move behind logo AT THE SAME INSTANT, but KEEP SEPARATED POSITIONS
        if (pCenter > 0) {
          // Contract inward towards 0.35 radius (so each stays separated at its unique angle behind logo)
          const shrinkFactor = 1 - 0.65 * pCenter;
          x2 = x2 * shrinkFactor;
          y2 = y2 * shrinkFactor;
          scale = scale * (1 - pCenter * 0.4);
          zIndex = 800; // Force zIndex behind logo (SUN_Z = 1000)
          if (pCenter === 1) {
            opacity = 0; // Fully tucked and hidden behind central logo
          }
        }

        el.style.transform = `translate(-50%, -50%) translate(${x2}px, ${y2}px) scale(${scale})`;
        el.style.opacity = opacity.toString();
        el.style.zIndex = zIndex.toString();
      });

      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="flex min-h-[380px] sm:min-h-[420px] w-full items-center justify-center bg-transparent p-4 overflow-hidden relative">
      <div
        className="relative flex items-center justify-center"
        style={{ width: 380, height: 380, maxWidth: "100%", aspectRatio: "1/1" }}
      >
        {/* Central Element: Noto Logo (aba.png) with Tooltip */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
          style={{
            width: 130,
            height: 130,
            zIndex: SUN_Z,
          }}
        >
          {showTooltip && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-900 border border-[#B7F20B] text-[#B7F20B] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold shadow-[0_0_25px_rgba(183,242,11,0.7)] flex items-center gap-2 whitespace-nowrap animate-in fade-in zoom-in-90 duration-300 z-[2000]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B7F20B] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B7F20B]" />
              </span>
              <span>Pagamento identificado!</span>
            </div>
          )}
          <img
            src={abaLogo}
            alt="Noto Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_4px_24px_rgba(183,242,11,0.3)]"
          />
        </div>

        {/* 3 Orbiting Bank SVGs - Solid White Background, 100% radius, no border */}
        {ORBITS.map((_, i) => {
          const bankLogo = BANK_LOGOS[i];

          return (
            <div
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="absolute left-1/2 top-1/2 rounded-full p-2.5 bg-white border-0 shadow-[0_6px_20px_rgba(0,0,0,0.18)] flex items-center justify-center pointer-events-none transition-shadow duration-300"
              style={{
                width: 48,
                height: 48,
                willChange: "transform, opacity",
              }}
            >
              <img
                src={bankLogo}
                alt="Banco"
                className="w-full h-full object-contain filter drop-shadow-xs"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BankOrbitAnimation;





