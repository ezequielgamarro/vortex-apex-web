import React from 'react';

/**
 * About Section: Sección centrada y limpia que explica brevemente qué es Vortex Apex,
 * destacando su naturaleza offline y moderna para comercios.
 */
export default function About() {
  const pillars = [
    {
      icon: "fa-server",
      title: "100% Autónomo",
      desc: "Instalación local en Windows sin cuotas ocultas por servidor.",
    },
    {
      icon: "fa-bolt",
      title: "Velocidad Extrema",
      desc: "Respuesta en milisegundos para filas rápidas sin tiempos de carga.",
    },
    {
      icon: "fa-database",
      title: "Control Absoluto",
      desc: "Toda la información financiera y de inventario reside en tu equipo.",
    },
  ];

  return (
    <section id="que-es" className="relative z-10 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tarjeta Centrada con Glassmorphism */}
        <div className="relative rounded-3xl bg-[#2b2c34]/40 backdrop-blur-xl border border-[#6246ea]/30 p-8 sm:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Luz de fondo sutil */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#6246ea]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#e45858]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center relative z-10">
            
            {/* Tag superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6246ea]/15 border border-[#6246ea]/40 text-[#d1d1e9] text-xs font-['Orbitron'] tracking-widest uppercase mb-6">
              <i className="fas fa-microchip text-[#6246ea]"></i>
              <span>Arquitectura de Próxima Generación</span>
            </div>

            {/* Título de la Sección */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Orbitron'] font-extrabold mb-8 text-[#fffffe] tracking-wide">
              ¿Qué es <span className="text-[#6246ea] glow-text">Vortex Apex</span>?
            </h2>

            {/* Párrafo explicativo */}
            <p className="text-base sm:text-lg lg:text-xl text-[#d1d1e9] font-['Space_Grotesk'] font-light leading-relaxed max-w-3xl mx-auto mb-12">
              Vortex Apex es una solución integral de punto de venta desarrollada para optimizar el flujo de trabajo diario de comercios minoristas y mayoristas. Diseñado para operar con o sin conexión a internet, nuestro sistema garantiza que tu caja nunca se detenga, manteniendo tus datos seguros, privados y centralizados en un entorno moderno, ágil y fácil de usar.
            </p>

            {/* 3 Pilares destacados */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#6246ea]/20">
              {pillars.map((item, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl bg-[#2b2c34]/30 border border-[#6246ea]/20 hover:border-[#6246ea]/60 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#6246ea]/20 flex items-center justify-center text-[#6246ea] text-xl group-hover:scale-110 transition-transform">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h3 className="font-['Orbitron'] font-bold text-sm text-[#fffffe] mb-1.5 uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#d1d1e9]/80 font-['Space_Grotesk'] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}