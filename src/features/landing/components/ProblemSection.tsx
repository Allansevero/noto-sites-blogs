import identificacao1 from '../../../assets/identificacao-1.svg';
import identificacao2 from '../../../assets/identificacao-2.svg';
import identificacao3 from '../../../assets/identificacao-3.svg';
import excelIcon from '../../../assets/excel.svg';

interface ProblemCardProps {
  text: string;
  imageSrc: string;
  imageAlt: string;
}

function ProblemCard({ text, imageSrc, imageAlt }: ProblemCardProps) {
  return (
    <div className="bg-[#C7EA5F] rounded-2xl p-6 md:p-8 flex flex-col justify-start shadow-md border border-[#b2e246] hover:shadow-xl transition-all duration-300 group">
      {/* 1. Imagem Direta no Card (Sem div conteinerizadora) */}
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        loading="lazy"
        decoding="async"
        className="w-full h-auto max-h-80 object-contain mb-6 group-hover:scale-105 transition-transform duration-300 rounded-xl"
      />

      {/* 2. Texto Explicativo */}
      <div>
        <p className="text-slate-950 text-base md:text-lg font-medium leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

export function ProblemSection() {
  const situations = [
    {
      id: "1",
      text: "Você fica refém do site da prefeitura, que cai, atrasa e trava a emissão;",
      imageSrc: identificacao1,
      imageAlt: "Site da prefeitura travado ou lento"
    },
    {
      id: "2",
      text: "Você já teve nota atrasada 3, 4 dias, ou até uma semana, e o paciente cobrando na sua porta;",
      imageSrc: identificacao2,
      imageAlt: "Nota fiscal atrasada e cobrança de paciente"
    },
    {
      id: "3",
      text: "Você usa uma planilha para ficar controlando se a nota foi emitida certa, errada, ou nem saiu.",
      imageSrc: identificacao3,
      imageAlt: "Controle manual em planilha"
    }
  ];

  return (
    <section id="problemas" className="w-full py-20 md:py-28 px-6 sm:px-12 bg-[#B7F20B] text-slate-950 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-950 leading-tight tracking-tight mb-6">
            Você usa planilha{' '}
            <img 
              src={excelIcon} 
              alt="Excel" 
              className="inline-block h-[0.9em] md:h-[1em] align-middle mx-1 -mt-1" 
            />{' '}
            ou precisou depender do site da prefeitura pra emitir suas notas?
          </h2>
          <p className="text-slate-900 text-lg md:text-xl font-medium leading-relaxed">
            Se você é médico ou secretária que emite nota fiscal de forma manual, com certeza se encaixa em uma das três situações:
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {situations.map((sit) => (
            <ProblemCard
              key={sit.id}
              text={sit.text}
              imageSrc={sit.imageSrc}
              imageAlt={sit.imageAlt}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
