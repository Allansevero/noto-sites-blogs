import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "O Noto substitui meu contador?",
    answer: "Não. O Noto emite a nota automaticamente, mas seu contador continua cuidando da parte fiscal e contábil. Inclusive, você pode dar acesso direto a ele pela plataforma."
  },
  {
    question: "Preciso trocar de banco pra usar o Noto?",
    answer: "Não. O Noto se conecta via Open Finance a mais de 130 bancos e instituições — você continua usando o banco que já tem."
  },
  {
    question: "E se eu não quiser conectar minha conta bancária?",
    answer: "Sem problema. Você pode usar só o WhatsApp: basta o paciente enviar o comprovante que o Noto identifica e emite a nota."
  },
  {
    question: "Como o Noto sabe os dados fiscais da minha empresa?",
    answer: "Você sobe sua última nota emitida e o Noto extrai e configura tudo automaticamente — CNPJ, serviço, alíquota, etc."
  },
  {
    question: "Preciso configurar nota por nota?",
    answer: "Não. Depois da configuração inicial, tudo acontece sozinho: pagamento identificado, nota emitida e enviada ao paciente."
  },
  {
    question: "O que acontece se eu ultrapassar as 200 notas incluídas?",
    answer: "Cada nota extra custa apenas R$ 0,15 por nota excedente (no Noto Hub, com franquia somada em pool consolidado entre todos os CNPJs)."
  },
  {
    question: "Uma secretária pode gerenciar mais de um médico?",
    answer: "Sim. No plano Noto Hub (Secretárias e clínicas), cada médico tem seu próprio acesso e as notas de todos entram num pool único de cobrança."
  },
  {
    question: "Meus dados e os dos meus pacientes ficam seguros?",
    answer: "Sim. A conexão bancária segue o padrão do Open Finance, regulamentado pelo Banco Central, e seus dados são tratados conforme a LGPD."
  },
  {
    question: "Posso cadastrar meus pacientes em lote?",
    answer: "Sim, por lista ou individualmente, como preferir."
  },
  {
    question: "Se eu cancelar, perco o histórico de notas?",
    answer: "Não, seu histórico fica disponível para consulta e exportação a qualquer momento."
  },
  {
    question: "Funciona pra qualquer tipo de clínica ou só consultório individual?",
    answer: "Funciona para os dois. O plano Noto Pro já inclui até 3 clínicas cadastradas."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 md:py-32 px-4 sm:px-8 bg-[#09090b] text-white relative overflow-hidden">
      {/* Ambience glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#B7F20B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#B7F20B]" />
            Perguntas Frequentes
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Dúvidas frequentes sobre o Noto
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Tudo o que você precisa saber sobre funcionamento, integração bancária e segurança da emissão automática.
          </p>
        </div>

        {/* Accordion sem cards (lista limpa com divisores) */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="transition-colors group"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full py-5 sm:py-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "font-display font-medium text-base sm:text-lg transition-colors",
                    isOpen ? "text-[#B7F20B] font-semibold" : "text-white group-hover:text-[#B7F20B]"
                  )}>
                    {item.question}
                  </span>
                  <div
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                      isOpen
                        ? "bg-[#B7F20B] text-slate-950 rotate-180"
                        : "bg-white/10 text-slate-400 group-hover:bg-white/20 group-hover:text-white"
                    )}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
