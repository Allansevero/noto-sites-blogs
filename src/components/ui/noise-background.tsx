import React from "react";
import { cn } from "@/lib/utils";

interface NoiseBackgroundProps {
  children?: React.ReactNode;
  containerClassName?: string;
  className?: string;
  gradientColors?: string[];
}

export function NoiseBackground({
  children,
  containerClassName,
  className,
  gradientColors = [
    "rgb(183, 242, 11)",
    "rgb(62, 207, 142)",
    "rgb(0, 98, 57)",
  ],
}: NoiseBackgroundProps) {
  const gradientStr = gradientColors.join(", ");
  const conicGradient = `conic-gradient(from 0deg, ${gradientStr}, ${gradientColors[0]})`;

  return (
    <div className={cn("relative overflow-hidden p-[2px] rounded-full", containerClassName)}>
      <style>{`
        @keyframes spinNoiseGradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .noise-spin-bg {
          animation: spinNoiseGradient 6s linear infinite;
        }
      `}</style>

      {/* Animated Conic Gradient Background */}
      <div
        className="absolute inset-[-100%] noise-spin-bg opacity-90 pointer-events-none"
        style={{
          background: conicGradient,
        }}
      />

      {/* SVG Grain Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Inner Content Wrapper */}
      <div className={cn("relative z-10 w-full h-full", className)}>
        {children}
      </div>
    </div>
  );
}
