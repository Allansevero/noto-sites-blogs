import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Building2,
  CreditCard,
  UserRound,
  MapPin,
  FileText,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Sequential, centered, single-scene-at-a-time storyboard.
// 0  file appears, idles
// 1  file is "dragged" away (shrinks + fades)
// 2  brief blank pause
// 3  scanning window fades in, corners appear
// 4  scan sweep pulses
// 5  progress bars fill
// 6  checkmark pops, hold
// 7  scanning window fades out
// 8  brief blank pause
// 9  empresa card fades in
// 10 rows fill one by one
// 11 hold complete
// 12 empresa card fades out -> loop
const DURATIONS = [900, 420, 160, 500, 700, 900, 700, 420, 160, 500, 2200, 1200, 420];
const LIME = "#B7F20B";
const INK = "#09090b";

interface RowProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  checked: boolean;
}

function Row({ icon: Icon, label, active, checked }: RowProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950 px-3.5 py-2.5 shadow-sm">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400">
        <Icon size={15} strokeWidth={2} />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <span className="text-[11px] font-medium text-zinc-400 leading-none">{label}</span>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-900">
          <div
            className="h-full rounded-full transition-all ease-out"
            style={{
              width: active ? "85%" : "0%",
              backgroundColor: checked ? LIME : "#3f3f46",
              transitionDuration: "900ms",
            }}
          />
        </div>
      </div>
      <div
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300"
        style={{
          backgroundColor: checked ? LIME : "#27272a",
          transform: checked ? "scale(1)" : "scale(0.4)",
          opacity: checked ? 1 : 0,
        }}
      >
        <Check size={12} strokeWidth={3.5} color={INK} />
      </div>
    </div>
  );
}

function useCycle() {
  const [phase, setPhase] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setPhase((p) => (p + 1) % DURATIONS.length);
    }, DURATIONS[phase]);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [phase]);

  return phase;
}

export function NfeImportAnimation() {
  const phase = useCycle();

  const fileVisible = phase === 0;
  const fileExiting = phase === 1;

  const scanVisible = phase >= 3 && phase <= 6;
  const bracketsShow = phase >= 3 && phase <= 6;
  const scannerPulse = phase === 3 || phase === 4;
  const barsFilling = phase >= 5;
  const checkShow = phase >= 6;

  const empresaVisible = phase >= 9 && phase <= 11;
  const rowsFilled = phase >= 10;

  const [rowsChecked, setRowsChecked] = useState(0);
  useEffect(() => {
    if (phase === 10) {
      setRowsChecked(0);
      const timers = [0, 1, 2, 3].map((i) =>
        setTimeout(() => setRowsChecked((n) => Math.max(n, i + 1)), 220 + i * 360)
      );
      return () => timers.forEach(clearTimeout);
    }
    if (phase === 11) setRowsChecked(4);
    if (phase === 0) setRowsChecked(0);
  }, [phase]);

  return (
    <div className="flex min-h-[360px] sm:min-h-[400px] w-full items-center justify-center bg-transparent relative overflow-visible">
      <style>{`
        @keyframes scanSweep {
          0% { transform: translateY(-2px); opacity: 0.9; }
          50% { transform: translateY(58px); opacity: 0.4; }
          100% { transform: translateY(-2px); opacity: 0.9; }
        }
        @keyframes softPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          70% { transform: scale(1.15); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes floatFile {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* single centered stage, one scene visible at a time */}
      <div className="relative flex h-[340px] w-full max-w-[400px] items-center justify-center">
        {/* SCENE 1: the file, dragged away */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            opacity: fileVisible ? 1 : 0,
            transform: fileExiting
              ? "scale(0.55) translateY(26px)"
              : "scale(1) translateY(0)",
            transition: "opacity 420ms ease, transform 420ms ease",
            pointerEvents: "none",
          }}
        >
          <div
            className="relative flex h-48 w-48 flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl"
            style={{
              animation: phase === 0 ? "floatFile 3s ease-in-out infinite" : "none",
            }}
          >
            <div
              className="absolute right-0 top-0 h-9 w-9 rounded-bl-2xl rounded-tr-2xl bg-zinc-800"
            />
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-zinc-950 text-[#B7F20B] border border-zinc-800">
              <Code2 size={28} strokeWidth={2} />
            </div>
            <span className="mt-3 text-xs font-mono font-medium text-zinc-300">NFS-e_ultima.xml</span>
            <div className="mt-2 h-2 w-20 rounded-full bg-zinc-800" />
            <div className="mt-3 h-5 w-24 rounded-md bg-[#B7F20B]/10 border border-[#B7F20B]/30 flex items-center justify-center">
              <span className="text-[10px] font-semibold text-[#B7F20B]">Arrastar Nota</span>
            </div>
          </div>
        </div>

        {/* SCENE 2: scanning window */}
        <div
          className="absolute w-full max-w-[380px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl"
          style={{
            opacity: scanVisible ? 1 : 0,
            transform: scanVisible ? "scale(1)" : "scale(0.92)",
            transition: "opacity 420ms ease, transform 420ms ease",
            pointerEvents: "none",
          }}
        >
          <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2.5 bg-zinc-950/60">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            </div>
            <span className="text-[10px] font-mono text-zinc-400">OCR Fiscal Engine</span>
          </div>

          <div className="flex items-center gap-4 px-5 py-6">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
              {[
                { top: 0, left: 0, borderWidth: "3px 0 0 3px", radius: "8px 0 0 0" },
                { top: 0, right: 0, borderWidth: "3px 3px 0 0", radius: "0 8px 0 0" },
                { bottom: 0, left: 0, borderWidth: "0 0 3px 3px", radius: "0 0 0 8px" },
                { bottom: 0, right: 0, borderWidth: "0 3px 3px 0", radius: "0 0 8px 0" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="absolute h-4 w-4"
                  style={{
                    ...s,
                    borderStyle: "solid",
                    borderColor: LIME,
                    borderRadius: s.radius,
                    opacity: bracketsShow ? 1 : 0,
                    transition: "opacity 300ms ease",
                    animation: scannerPulse ? "softPulse 1s ease-in-out infinite" : "none",
                  }}
                />
              ))}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 shadow-sm">
                <Code2 size={20} className="text-[#B7F20B]" strokeWidth={2} />
                {scannerPulse && (
                  <div
                    className="absolute left-1 right-1 h-[2px] rounded-full shadow-[0_0_8px_#B7F20B]"
                    style={{ background: LIME, animation: "scanSweep 1.4s ease-in-out infinite" }}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2.5">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-2 overflow-hidden rounded-full bg-zinc-950">
                  <div
                    className="h-full rounded-full transition-all ease-out"
                    style={{
                      width: barsFilling ? `${90 - i * 14}%` : "0%",
                      backgroundColor: i < 2 ? LIME : "#3f3f46",
                      transitionDuration: "700ms",
                      transitionDelay: `${i * 120}ms`,
                    }}
                  />
                </div>
              ))}
            </div>

            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-lg"
              style={{
                backgroundColor: LIME,
                opacity: checkShow ? 1 : 0,
                animation: checkShow ? "popIn 400ms ease-out" : "none",
              }}
            >
              <Check size={16} strokeWidth={3.5} color={INK} />
            </div>
          </div>
        </div>

        {/* SCENE 3: empresa data */}
        <div
          className="absolute w-full max-w-[380px] rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-2xl"
          style={{
            opacity: empresaVisible ? 1 : 0,
            transform: empresaVisible ? "scale(1)" : "scale(0.94)",
            transition: "opacity 420ms ease, transform 420ms ease",
            pointerEvents: "none",
          }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 text-[#B7F20B]">
                <Building2 size={18} strokeWidth={2} />
              </div>
              <div>
                <span className="text-xs font-semibold text-white block">Dados Fiscais Mapeados</span>
                <span className="text-[10px] text-zinc-400">Configuração automática</span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#B7F20B] bg-[#B7F20B]/10 border border-[#B7F20B]/20 px-2 py-0.5 rounded">
              100% OK
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            <Row icon={CreditCard} label="CNPJ / Inscrição Municipal" active={rowsFilled} checked={rowsChecked >= 1} />
            <Row icon={UserRound} label="Razão Social & Nome Fantasia" active={rowsFilled} checked={rowsChecked >= 2} />
            <Row icon={MapPin} label="Alíquota ISS & Código de Serviço" active={rowsFilled} checked={rowsChecked >= 3} />
            <Row icon={FileText} label="Modelo NFS-e & Certificado Digital" active={rowsFilled} checked={rowsChecked >= 4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NfeImportAnimation;
