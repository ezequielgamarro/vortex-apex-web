import React from 'react';

/**
 * DemoModal: Modal interactivo cyberpunk para solicitar demostración de Vortex Apex.
 */
export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Contenedor del Modal */}
      <div className="relative w-full max-w-lg rounded-2xl bg-[#2b2c34]/95 border-2 border-[#6246ea] shadow-[0_0_50px_rgba(98,70,234,0.5)] p-6 sm:p-8 overflow-hidden">
        
        {/* Resplandor ambiental de fondo */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6246ea]/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#e45858]/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Botón de Cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[#090a0f]/60 border border-[#6246ea]/40 flex items-center justify-center text-[#d1d1e9] hover:text-[#fffffe] hover:border-[#e45858] hover:text-[#e45858] transition-colors"
          aria-label="Cerrar modal"
        >
          <i className="fas fa-times text-base"></i>
        </button>

        {/* Cabecera del Modal */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6246ea]/20 border border-[#6246ea]/50 text-xs font-['Orbitron'] text-[#d1d1e9] tracking-widest uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Acceso Instantáneo</span>
          </div>
          
          <h3 className="text-2xl font-['Orbitron'] font-bold text-[#fffffe] tracking-wide mb-2">
            Solicitar Demo <span className="text-[#6246ea] glow-text">Vortex Apex</span>
          </h3>
          
          <p className="text-sm text-[#d1d1e9] font-['Space_Grotesk'] font-light">
            Elige tu canal preferido para coordinar una prueba guiada personalizada sin compromiso.
          </p>
        </div>

        {/* Opciones de Contacto Directo */}
        <div className="space-y-3.5 mb-6">
          
          {/* Opción 1: Instagram DM */}
          <a
            href="https://instagram.com/vortexapex.arg"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#090a0f]/60 border border-[#6246ea]/30 hover:border-[#6246ea] hover:shadow-[0_0_20px_rgba(98,70,234,0.4)] transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white text-lg shadow-md group-hover:scale-105 transition-transform">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="text-left">
                <div className="text-sm font-['Orbitron'] font-bold text-[#fffffe]">Instagram Direct</div>
                <div className="text-xs text-[#d1d1e9]/70">@vortexapex.arg</div>
              </div>
            </div>
            <span className="text-xs font-mono text-[#6246ea] group-hover:translate-x-1 transition-transform">
              Contactar <i className="fas fa-arrow-right ml-1"></i>
            </span>
          </a>

          {/* Opción 2: Linktree / Enlaces Oficiales */}
          <a
            href="https://linktr.ee/vortexapex.arg"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#090a0f]/60 border border-[#6246ea]/30 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 text-lg shadow-md group-hover:scale-105 transition-transform">
                <i className="fas fa-link"></i>
              </div>
              <div className="text-left">
                <div className="text-sm font-['Orbitron'] font-bold text-[#fffffe]">Hub de Enlaces</div>
                <div className="text-xs text-[#d1d1e9]/70">linktr.ee/vortexapex.arg</div>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
              Abrir <i className="fas fa-arrow-right ml-1"></i>
            </span>
          </a>

          {/* Opción 3: WhatsApp Directo */}
          <a
            href="https://wa.me/?text=Hola!%20Quiero%20solicitar%20una%20demostraci%C3%B3n%20de%20Vortex%20Apex%20POS"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-[#090a0f]/60 border border-[#6246ea]/30 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-400 flex items-center justify-center text-green-400 text-lg shadow-md group-hover:scale-105 transition-transform">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="text-left">
                <div className="text-sm font-['Orbitron'] font-bold text-[#fffffe]">Asesor WhatsApp</div>
                <div className="text-xs text-[#d1d1e9]/70">Atención personalizada y cotización</div>
              </div>
            </div>
            <span className="text-xs font-mono text-green-400 group-hover:translate-x-1 transition-transform">
              Chatear <i className="fas fa-arrow-right ml-1"></i>
            </span>
          </a>

        </div>

        {/* Pie del modal */}
        <div className="text-center pt-4 border-t border-[#6246ea]/20 text-[11px] font-mono text-[#d1d1e9]/60 flex items-center justify-center gap-2">
          <i className="fas fa-shield-alt text-[#6246ea]"></i>
          <span>Instalación asistida y prueba gratis para tu negocio</span>
        </div>

      </div>
    </div>
  );
}
