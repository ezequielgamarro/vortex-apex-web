import React from 'react';

/**
 * Footer: Estilo terminal / hacker cyberpunk.
 * Incluye logo, ubicación del sistema "Sys.Location: Tafí Viejo, Tucumán [ARG]",
 * enlaces a redes sociales y el indicador parpadeante en verde "System Status: Online".
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[#6246ea]/30 bg-[#090a0f]/85 backdrop-blur-2xl pt-14 pb-8 overflow-hidden">
      
      {/* Línea de resplandor neón superior */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6246ea] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Barra de Consola Terminal Superior */}
        <div className="mb-10 p-4 rounded-xl bg-[#090a0f]/90 border border-[#6246ea]/30 font-mono text-xs text-[#d1d1e9] flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-inner">
          <div className="flex items-center gap-2">
            <span className="text-[#6246ea] font-bold">sysadmin@vortex-apex:~$</span>
            <span className="text-emerald-400">check-integrity --pos-mode=offline</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#d1d1e9]/70">
            <span>PING: <strong className="text-emerald-400">0.00ms (LOCAL)</strong></span>
            <span>ENCRYPTION: <strong className="text-[#6246ea]">AES-256</strong></span>
            <span>BUILD: <strong className="text-[#fffffe]">2026.09-APEX</strong></span>
          </div>
        </div>

        {/* Sección Central del Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Logo y Ubicación del Sistema */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center mb-3">
              <img
                src="/img/vortex apex logo modo oscuro dentro del programa.webp"
                alt="Vortex Apex"
                className="h-10 w-auto glow-image opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            <p className="text-sm text-[#d1d1e9] font-['Space_Grotesk'] font-light max-w-sm mb-4">
              Punto de venta y gestión integral offline diseñado para la velocidad, confiabilidad y control de comercios modernos.
            </p>

            {/* Sys.Location requerido */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2b2c34]/50 border border-[#6246ea]/40 font-mono text-xs text-[#6246ea] tracking-wider uppercase">
              <i className="fas fa-location-crosshairs text-xs"></i>
              <span>Sys.Location: <strong className="text-[#fffffe]">Tafí Viejo, Tucumán [ARG]</strong></span>
            </div>
          </div>

          {/* Enlaces de Navegación Rápida */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-['Orbitron'] text-xs font-bold uppercase tracking-widest text-[#fffffe] mb-3">
              Navegación
            </div>
            <div className="flex flex-wrap justify-center md:flex-col gap-3 md:gap-2 text-sm text-[#d1d1e9] font-['Space_Grotesk']">
              <a href="#que-es" className="hover:text-[#6246ea] transition-colors">¿Qué es?</a>
              <a href="#modulos" className="hover:text-[#6246ea] transition-colors">Módulos del Sistema</a>
              <a href="#visualizer" className="hover:text-[#6246ea] transition-colors">Interfaz Gráfica</a>
              <a href="#beneficios" className="hover:text-[#6246ea] transition-colors">Beneficios Clave</a>
            </div>
          </div>

          {/* Enlaces a Redes Sociales */}
          <div className="flex flex-col items-center md:items-end">
            <div className="font-['Orbitron'] text-xs font-bold uppercase tracking-widest text-[#fffffe] mb-3">
              Conexión & Redes
            </div>
            
            <div className="flex space-x-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/vortexapex.arg"
                target="_blank"
                rel="noreferrer"
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
                aria-label="Linktree de Vortex Apex"
                className="w-11 h-11 rounded-xl bg-[#2b2c34]/60 border border-[#6246ea]/40 flex items-center justify-center text-[#d1d1e9] hover:text-[#fffffe] hover:bg-[#6246ea] hover:border-[#6246ea] hover:shadow-[0_0_20px_rgba(98,70,234,0.6)] transition-all duration-300"
              >
                <i className="fas fa-link text-base"></i>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/vortex-apex"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub de Vortex Apex"
                className="w-11 h-11 rounded-xl bg-[#2b2c34]/60 border border-[#6246ea]/40 flex items-center justify-center text-[#d1d1e9] hover:text-[#fffffe] hover:bg-[#6246ea] hover:border-[#6246ea] hover:shadow-[0_0_20px_rgba(98,70,234,0.6)] transition-all duration-300"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>

            <div className="mt-4 text-xs font-mono text-[#d1d1e9]/60">
              Canal oficial de soporte y demos
            </div>
          </div>

        </div>

        {/* Fila Inferior: Copyright e Indicador Parpadeante de Estado */}
        <div className="border-t border-[#6246ea]/20 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#d1d1e9]/60">
          <div>
            &copy; {currentYear} <span className="text-[#fffffe]">VORTEX APEX CORPORATION</span>. TODOS LOS DERECHOS RESERVADOS.
          </div>

          {/* Indicador parpadeante en verde "System Status: Online" */}
          <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-black/40 border border-emerald-500/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
            </span>
            <span className="text-[#d1d1e9]">System Status:</span>
            <span className="text-emerald-400 font-bold tracking-widest">Online</span>
          </div>
        </div>

      </div>
    </footer>
  );
}