import logoNoto from '@/assets/logo-noto.svg';
import abaIcon from '@/assets/aba.svg';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#09090b] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* Upper CTA Banner */}
      <div className="bg-white border-b border-slate-200 text-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-14 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left max-w-xl">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight mb-2">
              Pronto para automatizar suas notas médicas?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Configure em 3 minutos subindo sua última nota fiscal ou falando diretamente com nossa equipe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href="#precos"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#B7F20B] text-slate-950 font-extrabold text-sm hover:bg-[#a8df0a] transition-all shadow-md text-center border border-slate-900/10"
            >
              Escolher plano agora
            </a>
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C+gostaria+de+conhecer+o+Noto"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-sm transition-all border border-slate-300/80 text-center flex items-center justify-center gap-1.5"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-slate-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Coluna 1 & 2: Identidade e Redes Sociais */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm">
                <img src={abaIcon} alt="Noto Ícone" className="w-full h-full object-contain" />
              </div>
              <img
                src={logoNoto}
                alt="Noto"
                className="h-6 w-auto brightness-0 invert object-contain"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Emissão automatizada de Notas Fiscais de Serviço (NFS-e) conectada via Open Finance e WhatsApp para médicos, secretárias remotas e clínicas.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#B7F20B]" />
              <span>Regulado pelo Banco Central • LGPD Compliance</span>
            </div>

            {/* Redes Sociais: Facebook, Instagram, LinkedIn */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Siga o Noto
              </span>
              <div className="flex items-center gap-3">
                
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook do Noto"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#B7F20B] hover:text-slate-950 text-slate-300 flex items-center justify-center border border-white/10 hover:border-[#B7F20B] transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do Noto"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#B7F20B] hover:text-slate-950 text-slate-300 flex items-center justify-center border border-white/10 hover:border-[#B7F20B] transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn do Noto"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#B7F20B] hover:text-slate-950 text-slate-300 flex items-center justify-center border border-white/10 hover:border-[#B7F20B] transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp do Noto"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#B7F20B] hover:text-slate-950 text-slate-300 flex items-center justify-center border border-white/10 hover:border-[#B7F20B] transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>

              </div>
            </div>
          </div>

          {/* Coluna 3: Navegação */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#como-funciona" className="text-slate-400 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#problemas" className="text-slate-400 hover:text-white transition-colors">
                  Problemas Comuns
                </a>
              </li>
              <li>
                <a href="#solucao" className="text-slate-400 hover:text-white transition-colors">
                  Nossa Solução & Bancos
                </a>
              </li>
              <li>
                <a href="#precos" className="text-slate-400 hover:text-white transition-colors">
                  Planos & Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
                  Dúvidas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Soluções */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Públicos
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#precos" className="text-slate-400 hover:text-white transition-colors">
                  Para Médicos Individuais
                </a>
              </li>
              <li>
                <a href="#precos" className="text-slate-400 hover:text-white transition-colors">
                  Para Secretárias Remotas
                </a>
              </li>
              <li>
                <a href="#precos" className="text-slate-400 hover:text-white transition-colors">
                  Para Clínicas & Consultórios
                </a>
              </li>
              <li>
                <a href="#precos" className="text-slate-400 hover:text-white transition-colors">
                  Para Contadores Parceiros
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-slate-400 hover:text-white transition-colors">
                  Open Finance (+130 Bancos)
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Institucional & Legal */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
                  Segurança & LGPD
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%2C+preciso+de+suporte+do+Noto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contato & Suporte
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Noto Tecnologia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Desenvolvido com foco na rotina médica sem burocracia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
