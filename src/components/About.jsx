import React from "react";

export default function About() {
  const pillars = [
    {
      icon: "fa-server",
      title: "100% Autonomo",
      desc: "Aplicacion de escritorio nativa para Windows. Sin cuotas por servidor, sin dependencia de la nube y sin cortes de servicio por terceros.",
    },
    {
      icon: "fa-bolt",
      title: "Velocidad Extrema",
      desc: "Búsqueda por código de barras, cálculo de vuelto y registro de venta en tiempo real. Filas rápidas, clientes satisfechos.",
    },
    {
      icon: "fa-database",
      title: "Datos en tu Local",
      desc: "Toda la informacion —ventas, stock, clientes y caja— reside exclusivamente en tu equipo. Tu negocio, tu informacion.",
    },
  ];

  return (
    <section id="que-es" className="relative z-10 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#2b2c34]/40 backdrop-blur-xl border border-[#6246ea]/30 p-8 sm:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#6246ea]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#e45858]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6246ea]/15 border border-[#6246ea]/40 text-[#d1d1e9] text-xs font-['Orbitron'] tracking-widest uppercase mb-6">
              <i className="fas fa-microchip text-[#6246ea]"></i>
              <span>Sistema POS Windows 100% Offline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Orbitron'] font-extrabold mb-8 text-[#fffffe] tracking-wide">
              Que es <span className="text-[#6246ea] glow-text">Vortex Apex</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#d1d1e9] font-['Space_Grotesk'] font-light leading-relaxed max-w-3xl mx-auto mb-4">
              <strong className="text-[#fffffe] font-medium">Vortex Apex</strong> es un sistema de punto de venta (POS) y gestion integral disenado para comercios minoristas y mayoristas que exigen velocidad, control y confiabilidad en cada operacion.
            </p>
            <p className="text-base sm:text-lg text-[#d1d1e9] font-['Space_Grotesk'] font-light leading-relaxed max-w-3xl mx-auto mb-12">
              Opera <strong className="text-emerald-400 font-semibold">100% offline</strong>: no importa si tu proveedor de internet falla o se corta la senal —<strong className="text-[#fffffe] font-medium">Vortex Apex nunca se detiene</strong>. Cada venta, movimiento de caja y actualizacion de stock sucede en tiempo real, de forma local y segura en tu equipo Windows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#6246ea]/20">
              {pillars.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-[#2b2c34]/30 border border-[#6246ea]/20 hover:border-[#6246ea]/60 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#6246ea]/20 flex items-center justify-center text-[#6246ea] text-xl group-hover:scale-110 transition-transform">
                    <i className={"fas " + item.icon}></i>
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