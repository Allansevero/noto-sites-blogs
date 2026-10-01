import { TypewriterText } from './TypewriterText';
import { ScrollIndicator } from './ScrollIndicator';
import { FiscalGlyphMatrix } from './FiscalGlyphMatrix';

const words = [
  'paciente.',
  'atendimento.',
  'médico.'
];

export function HeroSection() {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 pt-16 bg-white text-slate-900 overflow-hidden">
      
      {/* Fiscal Glyph Matrix Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
        style={{
          maskImage: 'radial-gradient(ellipse at center, transparent 18%, rgba(0,0,0,0.95) 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 18%, rgba(0,0,0,0.95) 60%, transparent 100%)'
        }}
      >
        <FiscalGlyphMatrix
          color="rgba(71, 85, 105, 0.45)"
          accentColor="#006239"
        />
      </div>

      {/* Background Subtle Gradients for Light Theme */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#3ecf8e]/12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-[#006239]/8 blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl z-10 text-center py-16">
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black leading-tight md:leading-[1.22] tracking-tight text-center max-w-5xl mx-auto flex flex-col items-center justify-center">
          <div className="text-black">
            <span>O Noto emite suas NF-es</span>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-x-3 mt-1 sm:mt-2 text-black">
            <span>enquanto você cuida do</span>
            <TypewriterText 
              words={words} 
              typingSpeed={90} 
              deletingSpeed={45} 
              pauseDuration={2200}
              textColorClass="text-[#006239]"
              cursorColorClass="bg-[#006239]"
              fontClass="font-serif italic font-normal tracking-wide text-[1.15em] text-[#006239]"
            />
          </div>
        </h1>
        
        <p className="mt-8 text-slate-600 text-base md:text-lg max-w-2xl font-sans leading-relaxed">
          Automatize a emissão de notas fiscais e elimine o trabalho manual do seu consultório, clínica ou secretariado.
        </p>
      </div>

      {/* Scroll Indicator at the bottom of the fold */}
      <div className="pb-10 z-10">
        <ScrollIndicator />
      </div>

    </section>
  );
}
