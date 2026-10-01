import { useState, useEffect } from 'react';
import { ShieldCheck, Landmark, ArrowRight, MessageCircle } from 'lucide-react';
import notoIcon from '@/assets/aba.svg';

// Import all 16 bank SVGs
import bank01 from '@/assets/bancos_svg/00000000.svg';
import bank02 from '@/assets/bancos_svg/00360305.svg';
import bank03 from '@/assets/bancos_svg/00416968.svg';
import bank04 from '@/assets/bancos_svg/01181521.svg';
import bank05 from '@/assets/bancos_svg/02038232.svg';
import bank06 from '@/assets/bancos_svg/06271464.svg';
import bank07 from '@/assets/bancos_svg/07138049.svg';
import bank08 from '@/assets/bancos_svg/08561701.svg';
import bank09 from '@/assets/bancos_svg/10573521.svg';
import bank10 from '@/assets/bancos_svg/18189547.svg';
import bank11 from '@/assets/bancos_svg/18236120.svg';
import bank12 from '@/assets/bancos_svg/19540550.svg';
import bank13 from '@/assets/bancos_svg/29162769.svg';
import bank14 from '@/assets/bancos_svg/30680829.svg';
import bank15 from '@/assets/bancos_svg/31872495.svg';
import bank16 from '@/assets/bancos_svg/37241230.svg';

const bankIcons = [
  bank01, bank02, bank03, bank04,
  bank05, bank06, bank07, bank08,
  bank09, bank10, bank11, bank12,
  bank13, bank14, bank15, bank16
];

// Natural, scattered / organic resting positions (not aligned, varied depths & heights)
const scatteredPositions = [
  { x: 50,  y: 20 },
  { x: 175, y: 38 },
  { x: 290, y: 58 },
  { x: 100, y: 82 },
  { x: 220, y: 98 },
  { x: 330, y: 118 },
  { x: 35,  y: 138 },
  { x: 155, y: 152 },
  { x: 260, y: 168 },
  { x: 80,  y: 202 },
  { x: 195, y: 216 },
  { x: 315, y: 228 },
  { x: 45,  y: 258 },
  { x: 165, y: 274 },
  { x: 280, y: 292 },
  { x: 95,  y: 318 },
];

// Chaotic floating offsets during dancing phase
const dancingOffsets = [
  { x: 110, y: 40 },
  { x: 155, y: 135 },
  { x: 80,  y: 215 },
  { x: 240, y: 70 },
  { x: 130, y: 100 },
  { x: 205, y: 225 },
  { x: 50,  y: 125 },
  { x: 275, y: 185 },
  { x: 105, y: 75 },
  { x: 220, y: 35 },
  { x: 70,  y: 175 },
  { x: 170, y: 110 },
  { x: 295, y: 115 },
  { x: 145, y: 255 },
  { x: 40,  y: 50 },
  { x: 185, y: 275 },
];

export function SolutionSection() {
  const [phase, setPhase] = useState<'dancing' | 'connected'>('dancing');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (phase === 'dancing') {
      timer = setTimeout(() => {
        setPhase('connected');
      }, 3200);
    } else {
      timer = setTimeout(() => {
        setPhase('dancing');
      }, 4800);
    }

    return () => clearTimeout(timer);
  }, [phase]);

  // Center of the Noto circle
  const notoCenterX = 485;
  const notoCenterY = 180;
  const notoRadius = 34; // aba.png is a circle of diameter 68 (radius 34)

  // Exact contact points on the circle circumference
  const leftContactX = notoCenterX - notoRadius;   // Exact left edge: 451
  const rightContactX = notoCenterX + notoRadius;  // Exact right edge: 519

  return (
    <section id="solucao" className="w-full py-20 md:py-28 px-4 sm:px-8 bg-white text-slate-900 overflow-hidden select-none">
      <style>{`
        @keyframes randomDance {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(15px, -18px) rotate(9deg); }
          50% { transform: translate(-17px, 13px) rotate(-11deg); }
          75% { transform: translate(11px, 17px) rotate(7deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        @keyframes dashLine {
          to {
            stroke-dashoffset: -32;
          }
        }
        .dancing-icon {
          animation: randomDance 3.2s ease-in-out infinite alternate;
        }
        .flow-black-line {
          stroke-dasharray: 4 4;
          animation: dashLine 1.1s linear infinite;
        }
        .flow-lime-line {
          stroke-dasharray: 6 5;
          animation: dashLine 0.9s linear infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-6">
            Foi exatamente por viver os mesmos problemas que você que decidimos criar essa ferramenta.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed">
            Ela se conecta ao seu WhatsApp e à sua conta bancária, identifica o pagamento da consulta assim que ele cai, e emite a nota automaticamente — sem você precisar lembrar, cobrar nem conferir nada.
          </p>
        </div>

        {/* Diagram Canvas */}
        <div className="w-full max-w-5xl mx-auto overflow-visible py-2">
          <div className="w-full relative" style={{ aspectRatio: '920 / 360' }}>
            
            <svg viewBox="0 0 920 360" className="w-full h-full overflow-visible">

              {/* LINHAS PRETAS FINAS: Convergem exatamente na borda lateral esquerda do círculo da Noto */}
              <g className={`transition-opacity duration-500 ease-out ${phase === 'connected' ? 'opacity-90' : 'opacity-0'}`}>
                {scatteredPositions.map((pos, i) => {
                  const startX = pos.x + 28; // Borda direita do banco
                  const startY = pos.y + 14; // Centro Y do banco
                  
                  // Curva cúbica suave entrando na borda esquerda do logo da Noto
                  const deltaX = leftContactX - startX;
                  const cp1X = startX + deltaX * 0.42;
                  const cp1Y = startY;
                  const cp2X = startX + deltaX * 0.85;
                  const cp2Y = notoCenterY;

                  return (
                    <path
                      key={i}
                      d={`M ${startX},${startY} C ${cp1X},${cp1Y} ${cp2X},${cp2Y} ${leftContactX},${notoCenterY}`}
                      fill="none"
                      stroke="#0f172a"
                      strokeWidth="1.1"
                      className="flow-black-line"
                      strokeLinecap="round"
                    />
                  );
                })}
              </g>

              {/* LINHA VERDE-LIMÃO (#B7F20B): Sai diretamente da borda direita da Noto até o cartão da Nota Fiscal */}
              <g className={`transition-opacity duration-500 ease-out delay-150 ${phase === 'connected' ? 'opacity-100' : 'opacity-0'}`}>
                <path
                  d={`M ${rightContactX},${notoCenterY} L 690,${notoCenterY}`}
                  fill="none"
                  stroke="#B7F20B"
                  strokeWidth="3.2"
                  className="flow-lime-line"
                  strokeLinecap="round"
                />
              </g>

              {/* ÍCONES DOS BANCOS (Dispersão Orgânica) */}
              {bankIcons.map((bankSrc, index) => {
                const isDancing = phase === 'dancing';
                const targetX = isDancing ? dancingOffsets[index].x : scatteredPositions[index].x;
                const targetY = isDancing ? dancingOffsets[index].y : scatteredPositions[index].y;

                return (
                  <g
                    key={index}
                    style={{
                      transform: `translate(${targetX}px, ${targetY}px)`,
                      transition: 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <g className={isDancing ? 'dancing-icon' : ''} style={{ animationDelay: `${index * 0.12}s` }}>
                      <image
                        href={bankSrc}
                        x="0"
                        y="0"
                        width="28"
                        height="28"
                        className="hover:scale-125 transition-transform duration-200 cursor-pointer drop-shadow-sm"
                      />
                    </g>
                  </g>
                );
              })}

              {/* LOGO DA NOTO (aba.png) - Perfeitamente centralizado no ponto de contato */}
              <g 
                transform={`translate(${notoCenterX - notoRadius}, ${notoCenterY - notoRadius})`}
                className={`transition-all duration-500 ease-out ${
                  phase === 'dancing' 
                    ? 'opacity-30 scale-95' 
                    : 'opacity-100 scale-100'
                }`}
                style={{ transformOrigin: `${notoCenterX}px ${notoCenterY}px` }}
              >
                <image
                  href={notoIcon}
                  x="0"
                  y="0"
                  width={notoRadius * 2}
                  height={notoRadius * 2}
                  className="hover:scale-105 transition-transform duration-200 cursor-pointer drop-shadow-md"
                />
              </g>

              {/* CARD DA NOTA FISCAL EMITIDA (Perfeitamente alinhado na altura Y = 180) */}
              <g 
                transform={`translate(690, ${notoCenterY - 50})`}
                className={`transition-all duration-500 ease-out ${
                  phase === 'connected' 
                    ? 'scale-100 opacity-100 translate-x-0' 
                    : 'scale-90 opacity-0 translate-x-6 pointer-events-none'
                }`}
              >
                {/* Card Container */}
                <rect 
                  x="0" 
                  y="0" 
                  width="155" 
                  height="100" 
                  rx="14" 
                  fill="#FFFFFF" 
                  stroke="#B7F20B" 
                  strokeWidth="2.5" 
                  className="drop-shadow-lg" 
                />
                <rect x="1.5" y="1.5" width="152" height="6" rx="3" fill="#B7F20B" />
                
                {/* Textos */}
                <text x="14" y="28" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="800" fill="#0f172a">NF-e EMITIDA</text>
                <text x="141" y="28" textAnchor="end" fontSize="9" fontFamily="Inter, sans-serif" fill="#64748b">#4092</text>
                
                <text x="14" y="50" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="800" fill="#0f172a">R$ 350,00</text>
                <text x="14" y="65" fontSize="9" fontFamily="Inter, sans-serif" fill="#64748b">Consulta Médica</text>
                
                <rect x="10" y="73" width="135" height="19" rx="5" fill="#B7F20B" />
                <text x="77" y="86" textAnchor="middle" fontSize="8.5" fontFamily="Inter, sans-serif" fontWeight="800" fill="#0f172a">✓ Enviado via WhatsApp</text>
              </g>

            </svg>

          </div>
        </div>

        {/* Botões de Ação (CTA) acima das informações de confiança */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#B7F20B] text-slate-950 font-extrabold text-base sm:text-lg hover:bg-[#a8df0a] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer">
            <span>Testar emissão agora</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-800 font-bold text-base sm:text-lg border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 shadow-sm flex items-center justify-center gap-2.5 cursor-pointer">
            <MessageCircle className="w-5 h-5 text-[#006239]" />
            <span>Tirar dúvidas antes</span>
          </button>
        </div>

        {/* Informações em Linha Abaixo da Animação */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-700">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-slate-800">
              Regulamentado pelo Banco Central
            </span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
              <Landmark className="w-4 h-4" />
            </div>
            <span className="text-sm sm:text-base font-semibold text-slate-800">
              <strong className="font-bold text-[#006239]">+130</strong> bancos conectados
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
