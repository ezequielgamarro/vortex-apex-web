import React from 'react';

/**
 * Visualizer Section: Muestra dos imágenes de gran tamaño de la interfaz
 * (modo monitor y modo laptop) diseñadas como pantallas flotantes con bordes neón morados.
 */
export default function Visualizer() {
  return (
    <section id="visualizer" className="relative z-10 py-24 overflow-hidden">
      
      {/* Resplandor de nebulosa en el fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6246ea]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabecera del visualizador */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6246ea]/15 border border-[#6246ea]/40 text-[#d1d1e9] text-xs font-['Orbitron'] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6246ea] animate-ping"></span>
            <span>Experiencia Visual 4K</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-['Orbitron'] font-black tracking-widest text-[#fffffe] uppercase mb-4">
            UI.<span className="text-[#6246ea] glow-text">VISUALIZER</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#d1d1e9] font-['Space_Grotesk'] font-light max-w-2xl mx-auto">
            Diseño ergonómico de alto contraste con soporte completo para modo nocturno, concebido para prevenir la fatiga visual en jornadas intensas.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          
          {/* Pantalla 1: Modo Monitor (Estación Base) - Flotante */}
          <div className="relative group animate-float">
            
            {/* Halo de resplandor morado detrás de la pantalla */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#6246ea]/40 to-[#e45858]/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Ventana de Pantalla Flotante */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#6246ea] shadow-[0_0_40px_rgba(98,70,234,0.4)] bg-[#2b2c34]/70 backdrop-blur-xl">
              
              {/* Barra Superior estilo Sistema Operativo Cyberpunk */}
              <div className="px-4 py-3 bg-[#090a0f]/80 border-b border-[#6246ea]/40 flex items-center justify-between">
                
                {/* Botones de control de ventana */}
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-[#e45858] inline-block shadow-[0_0_8px_rgba(228,88,88,0.8)]"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                </div>

                {/* Título de la pantalla */}
                <div className="flex items-center gap-2 text-xs font-['Orbitron'] font-bold text-[#fffffe] tracking-wider uppercase">
                  <i className="fas fa-desktop text-[#6246ea]"></i>
                  <span>ESTACIÓN BASE [MODO MONITOR]</span>
                  <span className="text-[10px] text-[#6246ea] hidden sm:inline-block">• 1920x1080 FHD</span>
                </div>

                {/* Indicador de red offline */}
                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="hidden sm:inline">OFFLINE_ACTIVE</span>
                </div>

              </div>

              {/* Imagen de Pantalla 1 */}
              <div className="relative p-2 sm:p-3 bg-[#090a0f]/40">
                <img
                  src="/img/1789247680685-f1lvkpk4enl.png"
                  alt="Vortex Apex Desktop Dashboard - Modo Monitor"
                  className="w-full h-auto rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

          {/* Pantalla 2: Modo Laptop (Terminal Móvil) - Flotante con retraso armónico */}
          <div className="relative group animate-float-slow lg:w-11/12 lg:ml-auto">
            
            {/* Halo de resplandor morado */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#e45858]/30 via-[#6246ea]/40 to-[#6246ea]/50 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Ventana de Pantalla Flotante */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#6246ea] shadow-[0_0_40px_rgba(98,70,234,0.4)] bg-[#2b2c34]/70 backdrop-blur-xl">
              
              {/* Barra Superior */}
              <div className="px-4 py-3 bg-[#090a0f]/80 border-b border-[#6246ea]/40 flex items-center justify-between">
                
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-[#e45858] inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                </div>

                <div className="flex items-center gap-2 text-xs font-['Orbitron'] font-bold text-[#fffffe] tracking-wider uppercase">
                  <i className="fas fa-laptop text-[#6246ea]"></i>
                  <span>TERMINAL MÓVIL [MODO LAPTOP]</span>
                  <span className="text-[10px] text-[#6246ea] hidden sm:inline-block">• COMPACT VIEW</span>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono text-[#d1d1e9]">
                  <i className="fas fa-battery-full text-emerald-400"></i>
                  <span className="hidden sm:inline">STANDBY_READY</span>
                </div>

              </div>

              {/* Imagen de Pantalla 2 */}
              <div className="relative p-2 sm:p-3 bg-[#090a0f]/40">
                <img
                  src="/img/205295c19cf61121db9349ea0e65ded7_1_1789243487_4442.png"
                  alt="Vortex Apex Laptop Dashboard - Modo Laptop"
                  className="w-full h-auto rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}