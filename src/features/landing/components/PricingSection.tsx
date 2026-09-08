import { useState } from 'react';
import { Check, Plus, Minus, ArrowRight, Layers, Building2 } from 'lucide-react';

export function PricingSection() {
  // Stepper for extra CNPJs in Noto Hub
  const [extraCnpjs, setExtraCnpjs] = useState(0);

  // Calculations
  const baseCnpjs = 3;
  const totalCnpjs = baseCnpjs + extraCnpjs;
  const baseNotas = 600;
  const totalNotas = baseNotas + extraCnpjs * 200;
  const baseHubPrice = 297;
  const totalHubPrice = baseHubPrice + extraCnpjs * 102;

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section id="precos" className="w-full py-24 md:py-32 px-4 sm:px-8 bg-[#B7F20B] text-slate-950 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/10 border border-slate-950/15 text-slate-950 text-xs font-bold uppercase tracking-wider mb-4">
            Planos
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-950 leading-tight tracking-tight mb-5">
            Estrutura de planos para operação individual ou multi-empresa
          </h2>
          <p className="text-slate-900/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Emissão automatizada de NFS-e com franquia mensal de notas e escalabilidade por CNPJ.
          </p>
        </div>

        {/* GRID DE PLANOS: 2 COLUNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* COLUNA 1: NOTO PRO */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-9 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              {/* Header do Card */}
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="font-display font-bold text-2xl text-slate-950">
                  Noto Pro
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 min-h-[40px]">
                Operação dedicada para emissão fiscal em volume individual.
              </p>

              {/* Preço */}
              <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-slate-100">
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-slate-950 tracking-tight">
                  R$ 147
                </span>
                <span className="text-slate-500 font-medium text-base">/mês</span>
              </div>

              {/* Lista de Recursos Principais (Checks) */}
              <div className="space-y-3.5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Recursos essenciais:
                </span>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">
                    <strong className="text-slate-900 font-semibold">1 CNPJ emissor</strong> cadastrado
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">
                    <strong className="text-slate-900 font-semibold">200 notas fiscais por mês</strong> incluídas
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">
                    <strong className="text-slate-900 font-semibold">R$ 0,15 por nota excedente</strong>
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">
                    Emissão automatizada e envio direto de comprovantes
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">
                    Integração bancária e via canais de mensageria
                  </span>
                </div>
              </div>

              {/* Benefícios Extras Agregados (Ícone de Mais Verde) */}
              <div className="pt-5 border-t border-slate-100 space-y-3 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                  Benefícios adicionais incluídos:
                </span>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B7F20B] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-black">
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    Acesso para 1 contador vinculado
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B7F20B] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-black">
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    Até 2 secretárias com login individual
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B7F20B] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-black">
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    Até 3 clínicas cadastradas
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B7F20B] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-black">
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    Previsão de imposto automática
                  </span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6 border-t border-slate-100">
              <button className="w-full py-3.5 px-5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                <span>Contratar Noto Pro</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-slate-500 mt-3 font-medium">
                Sem taxa de adesão ou contrato de fidelidade.
              </p>
            </div>
          </div>

          {/* COLUNA 2: NOTO HUB */}
          <div className="bg-white border-2 border-slate-900 rounded-2xl p-7 sm:p-9 shadow-lg flex flex-col justify-between relative">
            
            {/* Badge de Destaque */}
            <div className="absolute -top-3.5 right-6 bg-slate-900 text-white text-[11px] font-bold tracking-wider px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-[#B7F20B]" />
              Secretárias e clínicas
            </div>

            <div>
              {/* Header do Card */}
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="font-display font-bold text-2xl text-slate-950">
                  Noto Hub
                </h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 min-h-[40px]">
                Painel centralizado para gestão e emissão fiscal de múltiplos CNPJs.
              </p>

              {/* Preço */}
              <div className="flex items-baseline gap-1.5 mb-5">
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-slate-950 tracking-tight">
                  {formatCurrency(totalHubPrice)}
                </span>
                <span className="text-slate-500 font-medium text-base">/mês</span>
              </div>

              {/* SELETOR DIRETO E LIMPO DE CNPJS */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 mb-6 flex items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-slate-900" />
                    Quantidade de CNPJs
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    +R$ 102/mês por CNPJ extra
                  </span>
                </div>

                {/* Stepper Interativo */}
                <div className="flex items-center gap-1.5 bg-white border border-slate-300 rounded-lg p-1 shrink-0 shadow-sm">
                  <button
                    onClick={() => setExtraCnpjs((prev) => Math.max(0, prev - 1))}
                    disabled={extraCnpjs <= 0}
                    className="w-7 h-7 rounded flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
                    title="Diminuir CNPJ adicional"
                  >
                    <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                  <span className="text-xs font-bold text-slate-900 min-w-[62px] text-center font-mono">
                    {totalCnpjs} CNPJs
                  </span>
                  <button
                    onClick={() => setExtraCnpjs((prev) => prev + 1)}
                    className="w-7 h-7 rounded bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 cursor-pointer transition-colors"
                    title="Adicionar CNPJ extra"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Lista de Recursos Principais (Checks atualizados dinamicamente) */}
              <div className="space-y-3.5 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Recursos essenciais:
                </span>
                
                {/* Check 1: Quantidade de CNPJs Atualizada */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    <strong className="text-slate-950 font-bold transition-all">
                      {totalCnpjs} CNPJs emissores
                    </strong> cadastrados na base {extraCnpjs > 0 && (
                      <span className="text-emerald-700 font-semibold text-xs ml-1">
                        (3 base + {extraCnpjs} extra{extraCnpjs > 1 ? 's' : ''})
                      </span>
                    )}
                  </span>
                </div>

                {/* Check 2: Quantidade de Notas Atualizada */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    <strong className="text-slate-950 font-bold transition-all">
                      {totalNotas} notas fiscais por mês
                    </strong>
                  </span>
                </div>

                {/* Check 3: Valor de Nota Excedente */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    <strong className="text-slate-950 font-bold">R$ 0,15 por nota excedente</strong>
                  </span>
                </div>

                {/* Check 4: Painel Único */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    Painel único com alternância rápida entre empresas
                  </span>
                </div>

                {/* Check 5: Emissão Automatizada */}
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    Emissão automatizada e envio direto de comprovantes
                  </span>
                </div>
              </div>

              {/* Benefícios Extras Agregados (Ícone de Mais Verde) */}
              <div className="pt-5 border-t border-slate-100 space-y-3 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-2">
                  Benefícios adicionais incluídos:
                </span>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B7F20B] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-black">
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    Cada médico com acesso próprio e independente
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B7F20B] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-black">
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    Contador vinculado por médico/CNPJ
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B7F20B] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-black">
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    Até 2 membros de equipe inclusos
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B7F20B] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-black">
                    <Plus className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-800 text-sm font-medium">
                    Assistencialize de graça
                  </span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-6 border-t border-slate-100">
              <button className="w-full py-3.5 px-5 rounded-xl bg-[#B7F20B] text-slate-950 font-bold text-sm hover:bg-[#a8df0a] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                <span>Contratar Noto Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-slate-500 mt-3 font-medium">
                Faturamento consolidado em fatura única mensal.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
