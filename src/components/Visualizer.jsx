import React from 'react';

/**
 * Visualizer Section: Muestra las pantallas de la interfaz de Vortex Apex
 * con marco estilo sistema operativo cyberpunk y animaciones flotantes.
 */
export default function Visualizer() {
  const screenshots = [
    {
      id: "caja-ventas",
      tag: "PANTALLA PRINCIPAL DE CAJA · VENTAS RÁPIDAS",
      badge: "1920×1080 FHD",
      status: "OFFLINE_ACTIVE",
      statusColor: "emerald-400",
      img: "/img/5e342a312f6910656ecbaadbb31e6890_1_1789572244_9742.png",
      alt: "Vortex Apex – Pantalla principal de ventas en caja",
      footLeft: "Lector de código de barras activo",
      footRight: "Sin necesidad de internet · Base local",
    },
    {
      id: "catalogo-precios",
      tag: "CATÁLOGO DE PRODUCTOS · PRECIOS Y MÁRGENES",
      badge: "GESTIÓN DE ARTÍCULOS",
      status: "SYNC_READY",
      statusColor: "emerald-400",
      img: "/img/6135639fe9d69b1996af7071800b55cb_1_1789573370_5266.png",
      alt: "Vortex Apex – Catálogo de productos y lista de precios",
      footLeft: "Cálculo automático de costos y márgenes de ganancia",
      footRight: "Búsqueda instantánea en milisegundos",
    },
    {
      id: "historial-ventas",
      tag: "HISTORIAL DE VENTAS · REGISTRO EN TIEMPO REAL",
      badge: "VENTAS EN VIVO",
      status: "VENTAS_OK",
      statusColor: "emerald-400",
      img: "/img/6d135ee686e8b22b7f7b02120e7f44e0_1_1789573512_5154.png",
      alt: "Vortex Apex – Historial de ventas y registro de transacciones",
      footLeft: "Registro detallado de tickets y métodos de pago",
      footRight: "Totales diarios y consultas instantáneas",
    },
  ];

  return (
    <section id="visualizer" className="relative z-10 py-24 overflow-hidden">

      {/* Nebulosa de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6246ea]/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Cabecera */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6246ea]/15 border border-[#6246ea]/40 text-[#d1d1e9] text-xs font-['Orbitron'] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6246ea] animate-ping"></span>
            <span>Interfaz en Acción</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-['Orbitron'] font-black tracking-widest text-[#fffffe] uppercase mb-4">
            UI.<span className="text-[#6246ea] glow-text">VISUALIZER</span>
          </h2>

          <p className="text-base sm:text-lg text-[#d1d1e9] font-['Space_Grotesk'] font-light max-w-2xl mx-auto">
            Diseño ergonómico de alto contraste optimizado para operaciones continuas en caja. Rápido, claro y sin distracciones.
          </p>
        </div>

        {/* Lista de Pantallas */}
        <div className="flex flex-col gap-20">
          {screenshots.map((screen, idx) => (
            <div
              key={screen.id}
              className={`relative group ${idx % 2 === 1 ? 'lg:w-11/12 lg:ml-auto animate-float-slow' : 'animate-float'}`}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-[#6246ea]/40 via-[#2b2c34]/20 to-[#e45858]/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#6246ea] shadow-[0_0_40px_rgba(98,70,234,0.4)] bg-[#2b2c34]/70 backdrop-blur-xl">

                {/* Barra de ventana */}
                <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#090a0f]/80 border-b border-[#6246ea]/40 flex items-center justify-between gap-2 overflow-hidden">
                  <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#e45858] inline-block shadow-[0_0_8px_rgba(228,88,88,0.8)]"></span>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400 inline-block"></span>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-['Orbitron'] font-bold text-[#fffffe] tracking-wider uppercase truncate min-w-0">
                    <i className="fas fa-desktop text-[#6246ea] shrink-0"></i>
                    <span className="truncate">{screen.tag}</span>
                    <span className="text-[10px] text-[#6246ea] hidden md:inline-block shrink-0">• {screen.badge}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono text-emerald-400 shrink-0">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="hidden sm:inline">{screen.status}</span>
                  </div>
                </div>

                {/* Imagen */}
                <div className="relative p-2 sm:p-3 bg-[#090a0f]/40">
                  <img
                    src={screen.img}
                    alt={screen.alt}
                    className="w-full h-auto rounded-xl object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>

                {/* Barra inferior de estado */}
                <div className="px-3 sm:px-4 py-2 bg-[#090a0f]/70 border-t border-[#6246ea]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[10px] font-mono text-[#d1d1e9]/60">
                  <span className="truncate"><i className="fas fa-check-circle text-[#6246ea] mr-1"></i> {screen.footLeft}</span>
                  <span className="truncate"><i className="fas fa-wifi-slash text-emerald-400 mr-1"></i> {screen.footRight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

