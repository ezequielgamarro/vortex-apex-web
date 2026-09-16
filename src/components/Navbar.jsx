import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenDemo }) {
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
    { name: '¿QUÉ ES?', href: '#que-es' },
    { name: 'MÓDULOS', href: '#modulos' },
    { name: 'INTERFAZ', href: '#visualizer' },
    { name: 'BENEFICIOS', href: '#beneficios' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#2b2c34]/80 backdrop-blur-xl border-b border-[#6246ea]/40 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3'
          : 'bg-[#2b2c34]/40 backdrop-blur-md border-b border-[#6246ea]/20 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo a la izquierda */}
          <a href="#" className="flex items-center shrink min-w-0 group">
            <img
              src="/img/vortex apex logo modo oscuro dentro del programa.webp"
              alt="Vortex Apex"
              className="h-8 sm:h-10 md:h-11 w-auto max-w-[140px] sm:max-w-none glow-image group-hover:scale-105 transition-transform duration-300 object-contain shrink-0"
            />
          </a>

          {/* Enlaces de navegación al centro (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 font-['Space_Grotesk'] text-sm tracking-wider font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-[#d1d1e9] hover:text-[#fffffe] transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6246ea] to-[#e45858] group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Botón [ Solicitar Demo ] a la derecha (Desktop) */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="https://instagram.com/vortexapex.arg"
              target="_blank"
              rel="noreferrer"
              onClick={onOpenDemo}
              className="relative inline-flex group focus:outline-none"
            >
              {/* Resplandor neón morado con hover brillante */}
              <span className="absolute -inset-0.5 bg-gradient-to-r from-[#6246ea] via-[#e45858] to-[#6246ea] rounded-lg blur-md opacity-70 group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse"></span>
              
              <button
                type="button"
                className="relative px-6 py-2.5 text-xs lg:text-sm font-bold font-['Orbitron'] tracking-widest uppercase text-[#fffffe] bg-[#2b2c34]/90 border border-[#6246ea] rounded-lg hover:border-[#fffffe] transition-all duration-300 shadow-[0_0_15px_rgba(98,70,234,0.4)] group-hover:shadow-[0_0_25px_rgba(98,70,234,0.8)] cursor-pointer whitespace-nowrap"
              >
                [ Solicitar Demo ]
              </button>
            </a>
          </div>

          {/* Botón Hamburguesa Móvil */}
          <div className="flex md:hidden items-center gap-2 sm:gap-3 shrink-0 ml-auto">
            <a
              href="https://instagram.com/vortexapex.arg"
              target="_blank"
              rel="noreferrer"
              onClick={onOpenDemo}
              className="relative px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-['Orbitron'] font-bold text-[#fffffe] bg-[#6246ea] border border-[#6246ea] rounded-lg shadow-[0_0_12px_rgba(98,70,234,0.6)] whitespace-nowrap shrink-0 hover:bg-[#6246ea]/90 transition-all cursor-pointer"
            >
              [ Demo ]
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#d1d1e9] hover:text-[#fffffe] p-1.5 focus:outline-none shrink-0"
              aria-label="Alternar Menú"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg sm:text-xl`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Móvil con Glassmorphism */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-3 pb-6 bg-[#2b2c34]/95 backdrop-blur-2xl border-b border-[#6246ea]/30 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium font-['Space_Grotesk'] text-[#d1d1e9] hover:text-[#fffffe] hover:bg-[#6246ea]/20 px-3 py-2 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://instagram.com/vortexapex.arg"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-2.5 text-center font-['Orbitron'] text-xs font-bold uppercase tracking-widest text-[#fffffe] bg-[#6246ea] rounded-lg shadow-[0_0_15px_rgba(98,70,234,0.5)]"
          >
            [ Solicitar Demo ]
          </a>
        </div>
      )}
    </nav>
  );
}