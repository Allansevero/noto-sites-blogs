import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoNoto from '@/assets/logo-noto.svg';

export function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Problemas', href: '#problemas' },
    { label: 'Solução', href: '#solucao' },
    { label: 'Planos', href: '#precos' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#inicio" className="flex items-center gap-2 group cursor-pointer" aria-label="Noto Início">
          <img
            src={logoNoto}
            alt="Noto"
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%2C+gostaria+de+tirar+d%C3%BAvidas+sobre+o+Noto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-950 px-3 py-2 transition-colors"
          >
            Tirar dúvidas
          </a>

          <a
            href="#precos"
            className="inline-flex items-center gap-1.5 px-4 py-2 sm:py-2.5 rounded-xl bg-[#B7F20B] text-slate-950 font-bold text-xs sm:text-sm hover:bg-[#a8df0a] transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
          >
            <span>Testar emissão</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-slate-950 py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%2C+gostaria+de+tirar+d%C3%BAvidas+sobre+o+Noto"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl border border-slate-200 text-slate-800 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                Tirar dúvidas no WhatsApp
              </a>
              <a
                href="#precos"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-[#B7F20B] text-slate-950 font-extrabold text-sm hover:bg-[#a8df0a] transition-colors shadow-sm"
              >
                Testar emissão agora
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
