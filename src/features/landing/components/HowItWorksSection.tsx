import { Timeline } from '@/components/ui/timeline';
import { NfeImportAnimation } from './NfeImportAnimation';
import { BankOrbitAnimation } from './BankOrbitAnimation';
import { PatientImportAnimation } from './PatientImportAnimation';
import { NoiseBackground } from '@/components/ui/noise-background';
import { 
  ArrowRight, 
  Zap 
} from 'lucide-react';

export function HowItWorksSection() {
  const data = [
    {
      title: (
        <div>
          <span className="text-[#B7F20B] font-extrabold text-2xl md:text-3xl tracking-tight block font-display">
            Passo 01
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1 leading-snug">
            Suba sua última nota
          </h3>
          <p className="text-zinc-400 text-sm md:text-base mt-2 leading-relaxed">
            O Noto identifica e configura seus dados fiscais automaticamente.
          </p>
        </div>
      ),
      content: <NfeImportAnimation />,
    },
    {
      title: (
        <div>
          <span className="text-[#B7F20B] font-extrabold text-2xl md:text-3xl tracking-tight block font-display">
            Passo 02
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1 leading-snug">
            Conecte um banco ou só o WhatsApp
          </h3>
          <p className="text-zinc-400 text-sm md:text-base mt-2 leading-relaxed">
            Assim o Noto identifica os pagamentos e sabe pra quem enviar a nota.
          </p>
        </div>
      ),
      content: <BankOrbitAnimation />,
    },
    {
      title: (
        <div>
          <span className="text-[#B7F20B] font-extrabold text-2xl md:text-3xl tracking-tight block font-display">
            Passo 03
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1 leading-snug">
            Cadastre seus pacientes
          </h3>
          <p className="text-zinc-400 text-sm md:text-base mt-2 leading-relaxed">
            Em lista ou um por um, você escolhe.
          </p>
        </div>
      ),
      content: <PatientImportAnimation />,
    },
    {
      title: (
        <div>
          <span className="text-[#B7F20B] font-extrabold text-2xl md:text-3xl tracking-tight block font-display">
            Pronto!
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1 leading-snug">
            Automação em Ação
          </h3>
          <p className="text-zinc-300 text-sm md:text-base mt-2 leading-relaxed font-medium">
            Assim que o paciente paga no banco ou manda o comprovante no WhatsApp, o Noto emite a nota e envia direto pra ele.
          </p>
        </div>
      ),
      content: (
        <div className="flex items-center justify-start pt-2">
          <NoiseBackground
            containerClassName="w-fit p-1.5 rounded-full"
            gradientColors={[
              "rgb(183, 242, 11)",
              "rgb(62, 207, 142)",
              "rgb(255, 255, 255)",
            ]}
          >
            <button className="h-full w-full cursor-pointer rounded-full bg-[#09090b] px-6 py-3.5 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-100 active:scale-98 shadow-xl hover:bg-zinc-900 border border-zinc-800">
              <span>Começar Agora</span>
              <ArrowRight className="w-4 h-4 text-[#B7F20B]" />
            </button>
          </NoiseBackground>
        </div>
      ),
    },
  ];

  return (
    <section id="como-funciona" className="w-full py-20 md:py-28 bg-[#09090b] text-white relative overflow-hidden">
      <style>{`
        @keyframes scanMove {
          0% { transform: translateX(-40%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(260%); opacity: 0; }
        }
        .scanner-beam {
          animation: scanMove 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#B7F20B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#B7F20B] text-xs sm:text-sm font-semibold mb-5">
            <Zap className="w-3.5 h-3.5 fill-current" />
            Configuração em 3 minutos
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6">
            Pensado para quem não tem tempo de configurar sistema nenhum
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Em poucos minutos você configura, e o Noto assume o resto.
          </p>
        </div>

        {/* Timeline Component com os 4 Passos Conectados */}
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
}

// Export raw TimelineDemo with exact user-provided data as well
export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

