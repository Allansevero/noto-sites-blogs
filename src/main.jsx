import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import mascot from '../assets/mascote-noto-320.webp';
import mascotLarge from '../assets/mascote-noto-640.webp';
import './styles.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!detailsOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event) => {
      if (event.key === 'Escape') setDetailsOpen(false);
      if (event.key === 'Tab') {
        const buttons = [...document.querySelectorAll('.modal button')];
        const first = buttons[0];
        const last = buttons.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    document.getElementById('close-details')?.focus();
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKey); document.getElementById('hero-cta')?.focus(); };
  }, [detailsOpen]);
  const showDetails = () => { setMenuOpen(false); setDetailsOpen(true); };
  return <>
    <header className={`navbar ${compact ? 'compact' : ''}`}>
      <a href="#inicio" className="logo" aria-label="Noto, início">noto<span className="logo-dot">.</span></a>
      <nav className="desktop-nav" aria-label="Navegação principal"><a href="#como-funciona">Como funciona</a><button onClick={showDetails}>Conheça o Noto</button></nav>
      <button className="nav-cta" onClick={showDetails}>Conhecer o Noto <span aria-hidden="true">↗</span></button>
      <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
      {menuOpen && <nav id="mobile-menu" className="mobile-menu" aria-label="Navegação móvel"><a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a><button onClick={showDetails}>Conhecer o Noto ↗</button></nav>}
    </header>
    <main id="inicio">
      <section className="hero" aria-labelledby="hero-title">
        <div className="eyebrow"><span></span> Menos burocracia. Mais tempo para cuidar.</div>
        <h1 id="hero-title">Uma IA que emite e envia a nota assim que a consulta é paga</h1>
        <p className="subtitle">Eu vejo o comprovante que seu paciente manda, emito a nota e já entrego ali, na conversa entre vocês dois.</p>
        <button id="hero-cta" className="primary-button" onClick={showDetails}>Conhecer o Noto <span aria-hidden="true">↗</span></button>
        <div className="hero-visual" aria-label="Ilustração do fluxo: comprovante recebido, nota emitida e enviada">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="floating-card payment"><span className="card-icon">↙</span><div><span className="card-label">O paciente pagou</span><strong>Comprovante recebido</strong></div><span className="status-dot"></span></div>
          <div className="mascot-wrap"><img src={mascot} srcSet={`${mascot} 320w, ${mascotLarge} 640w`} sizes="(max-width: 700px) 225px, 275px" width="320" height="320" decoding="async" alt="Mascote do Noto, uma lhama de óculos" /></div>
          <div className="floating-card invoice"><span className="card-icon">✓</span><div><span className="card-label">Eu cuido da nota</span><strong>Emitida e enviada</strong></div><span className="status-dot"></span></div>
          <span className="mascot-caption">Pode deixar comigo.</span>
        </div>
      </section>
      <section id="como-funciona" className="how" aria-labelledby="how-title"><div className="section-intro"><span className="eyebrow">Da conversa à nota</span><h2 id="how-title">Você cuida da consulta.<br />Eu cuido da nota.</h2></div><div className="steps">{[
        ['01', 'O comprovante chega', 'Seu paciente manda o comprovante na conversa entre vocês.'],
        ['02', 'Eu emito a nota', 'Assim que a consulta é paga, eu cuido da emissão.'],
        ['03', 'A nota já está lá', 'Eu entrego a nota ali mesmo, na conversa.']
      ].map(([number, title, text]) => <article key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    </main>
    <footer><a href="#inicio" className="logo">noto<span className="logo-dot">.</span></a><span>Mais tempo para o que importa.</span></footer>
    {detailsOpen && <div className="modal-backdrop" onClick={() => setDetailsOpen(false)}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="details-title" onClick={e => e.stopPropagation()}><button id="close-details" className="close" aria-label="Fechar" onClick={() => setDetailsOpen(false)}>✕</button><span className="eyebrow">Olá, eu sou o Noto.</span><h2 id="details-title">Sua nota, resolvida na conversa.</h2><p>Eu vejo o comprovante que seu paciente manda, emito a nota e já entrego ali, na conversa entre vocês dois.</p><button className="primary-button" onClick={() => { setDetailsOpen(false); document.getElementById('como-funciona').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }}>Ver como funciona <span aria-hidden="true">↓</span></button></section></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
