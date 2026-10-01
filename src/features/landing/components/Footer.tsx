import logoNoto from '@/assets/logo-noto.svg';
import whatsappQr from '@/assets/whatsapp-qr.svg';
import { MessageCircle, Apple, Play } from 'lucide-react';

const whatsappUrl = 'https://wa.me/5551993527271';

export function Footer() {
  return (
    <footer className="bg-[#090909] text-[#a3a3a3]">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:px-10 sm:pb-24 sm:pt-24">
        <img src={logoNoto} alt="Noto" className="mb-12 h-auto w-44 brightness-0 invert sm:mb-16 sm:w-56" />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[minmax(0,1fr)_180px] sm:gap-12 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div>
            <p className="max-w-xl text-lg leading-relaxed sm:text-xl">
              Seu assistente para emissão automática de notas fiscais.
            </p>

            <div className="mb-8 mt-10 flex items-center gap-7 sm:mt-12" aria-label="Redes sociais e contato do Noto">
              {/* Endereços fictícios para revisão do layout. */}
              <a href="https://example.com/noto/instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram do Noto" className="rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://example.com/noto/linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn do Noto" className="rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="9" width="4" height="13" />
                  <circle cx="4" cy="4" r="2" />
                  <path d="M10 22V9h4v2a4 4 0 0 1 8 2v9h-4v-9a2 2 0 0 0-4 0v9z" />
                </svg>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar com o Noto pelo WhatsApp" className="rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white">
                <MessageCircle className="h-8 w-8" strokeWidth={1.6} />
              </a>
            </div>

            <nav aria-label="Informações e ajuda" className="flex flex-wrap items-center gap-x-5 gap-y-4 text-sm sm:text-base">
              <a href="https://example.com/noto/termos" target="_blank" rel="noopener noreferrer" className="rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">TERMOS DE USO</a>
              <span aria-hidden="true" className="h-8 w-px bg-[#303030]" />
              <a href="https://example.com/noto/ajuda" target="_blank" rel="noopener noreferrer" className="rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">CENTRAL DE AJUDA</a>
            </nav>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="https://example.com/noto/app-store" target="_blank" rel="noopener noreferrer" aria-label="Baixar Noto na App Store" className="inline-flex h-16 min-w-48 items-center gap-3 rounded-lg border border-[#555] px-4 text-white transition-colors hover:border-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <Apple className="h-9 w-9" fill="currentColor" strokeWidth={1} aria-hidden="true" />
                <span><span className="block text-xs">Download on the</span><span className="block text-2xl leading-7">App Store</span></span>
              </a>
              <a href="https://example.com/noto/google-play" target="_blank" rel="noopener noreferrer" aria-label="Baixar Noto no Google Play" className="inline-flex h-16 min-w-52 items-center gap-3 rounded-lg border border-[#555] px-4 text-white transition-colors hover:border-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <Play className="h-9 w-9" fill="currentColor" strokeWidth={1} aria-hidden="true" />
                <span><span className="block text-xs">GET IT ON</span><span className="block text-2xl leading-7">Google Play</span></span>
              </a>
            </div>
          </div>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp do Noto: +55 51 99352-7271" className="block w-40 self-start rounded-sm focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white sm:w-full">
            <img src={whatsappQr} alt="QR code para conversar com o Noto pelo WhatsApp" className="aspect-square w-full" width="220" height="220" />
          </a>
        </div>

        <div className="mt-20 border-t border-[#292929] pt-12 sm:mt-24 sm:pt-14">
          <p className="text-base leading-8 sm:text-lg">
            Para atendimento técnico e operacional, entre em contato com a equipe do Noto pelo WhatsApp{' '}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-sm underline decoration-[#555] underline-offset-4 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">+55 51 99352-7271</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
