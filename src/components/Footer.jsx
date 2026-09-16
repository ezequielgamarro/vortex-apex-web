import React from 'react';

/**
 * Footer: Estilo terminal cyberpunk con info real de Vortex Apex.
 * Logo, ubicación, redes sociales y copyright actualizado.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[#6246ea]/30 bg-[#090a0f]/85 backdrop-blur-2xl pt-14 pb-8 overflow-hidden">

      {/* Línea de resplandor neón superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6246ea] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Barra de consola terminal */}
        <div className="mb-10 p-4 rounded-xl bg-[#090a0f]/90 border border-[#6246ea]/30 font-mono text-xs text-[#d1d1e9] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2">
            <span className="text-[#6246ea] font-bold">sysadmin@vortex-apex:~$</span>
            <span className="text-emerald-400">check-integrity --mode=offline --pos=active</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#d1d1e9]/70">
            <span>RESPUESTA: <strong className="text-emerald-400">INMEDIATA (LOCAL)</strong></span>
            <span>ALMACENAMIENTO: <strong className="text-[#6246ea]">100% LOCAL</strong></span>
            <span>BUILD: <strong className="text-[#fffffe]">2026-APEX-STABLE</strong></span>
          </div>
        </div>

        {/* Cuerpo del footer */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          {/* Logo + descripción + ubicación */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center mb-3">
              <img
                src="/img/vortex apex logo modo oscuro dentro del programa.webp"
                alt="Vortex Apex – POS para comercios"
                className="h-10 w-auto glow-image opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            <p className="text-sm text-[#d1d1e9] font-['Space_Grotesk'] font-light max-w-sm mb-4">
              Sistema POS y gestión integral para comercios minoristas y mayoristas. Cobros offline, stock en tiempo real y control total de caja —desde Tafí Viejo, Tucumán, Argentina.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2b2c34]/50 border border-[#6246ea]/40 font-mono text-xs text-[#6246ea] tracking-wider uppercase">
              <i className="fas fa-location-crosshairs text-xs"></i>
              <span>Sys.Location: <strong className="text-[#fffffe]">Tafí Viejo, Tucumán [ARG]</strong></span>
            </div>
          </div>

          {/* Navegación rápida */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-['Orbitron'] text-xs font-bold uppercase tracking-widest text-[#fffffe] mb-3">
              Navegación
            </div>
            <div className="flex flex-wrap justify-center md:flex-col gap-3 md:gap-2 text-sm text-[#d1d1e9] font-['Space_Grotesk']">
              <a href="#que-es" className="hover:text-[#6246ea] transition-colors">¿Qué es Vortex Apex?</a>
              <a href="#modulos" className="hover:text-[#6246ea] transition-colors">Módulos del Sistema</a>
              <a href="#visualizer" className="hover:text-[#6246ea] transition-colors">Interfaz en Acción</a>
              <a href="#beneficios" className="hover:text-[#6246ea] transition-colors">Ventajas Competitivas</a>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-center md:items-end">
            <div className="font-['Orbitron'] text-xs font-bold uppercase tracking-widest text-[#fffffe] mb-3">
              Contacto & Redes
            </div>

            <div className="flex space-x-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/vortexapex.arg"
                target="_blank"
                rel="noreferrer"
                id="footer-instagram"
                aria-label="Instagram de Vortex Apex"
                className="w-11 h-11 rounded-xl bg-[#2b2c34]/60 border border-[#6246ea]/40 flex items-center justify-center text-[#d1d1e9] hover:text-[#fffffe] hover:bg-[#6246ea] hover:border-[#6246ea] hover:shadow-[0_0_20px_rgba(98,70,234,0.6)] transition-all duration-300"
              >
                <i className="fab fa-instagram text-lg"></i>
              </a>

              {/* Linktree */}
              <a
                href="https://linktr.ee/vortexapex.arg"
                target="_blank"
                rel="noreferrer"
                id="footer-linktree"
                aria-label="Linktree de Vortex Apex"
                className="w-11 h-11 rounded-xl bg-[#2b2c34]/60 border border-[#6246ea]/40 flex items-center justify-center text-[#d1d1e9] hover:text-[#fffffe] hover:bg-[#6246ea] hover:border-[#6246ea] hover:shadow-[0_0_20px_rgba(98,70,234,0.6)] transition-all duration-300"
              >
                <i className="fas fa-link text-base"></i>
              </a>

              {/* WhatsApp / Contacto */}
              <a
                href="https://instagram.com/vortexapex.arg"
                target="_blank"
                rel="noreferrer"
                id="footer-contact"
                aria-label="Contactar a Vortex Apex"
                className="w-11 h-11 rounded-xl bg-[#2b2c34]/60 border border-[#6246ea]/40 flex items-center justify-center text-[#d1d1e9] hover:text-[#fffffe] hover:bg-[#6246ea] hover:border-[#6246ea] hover:shadow-[0_0_20px_rgba(98,70,234,0.6)] transition-all duration-300"
              >
                <i className="fas fa-paper-plane text-base"></i>
              </a>
            </div>

            <div className="mt-4 text-xs font-mono text-[#d1d1e9]/60">
              Canal oficial · demos y soporte
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-[#6246ea]/20 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#d1d1e9]/60">
          <div>
            &copy; {currentYear} <span className="text-[#fffffe]">VORTEX APEX</span> – Todos los derechos reservados.
          </div>

          {/* System Status */}
          <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-black/40 border border-emerald-500/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
            </span>
            <span className="text-[#d1d1e9]">System Status:</span>
            <span className="text-emerald-400 font-bold tracking-widest">Offline · Operativo</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
