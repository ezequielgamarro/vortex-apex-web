import React from "react";

export default function Benefits() {
  const benefitsList = [
    {
      id: "offline",
      icon: "fa-wifi-slash",
      iconColor: "text-emerald-400",
      borderColor: "hover:border-emerald-400",
      shadowColor: "hover:shadow-[0_0_25px_rgba(52,211,153,0.3)]",
      title: "100% Offline",
      metric: "0% INTERNET REQUERIDO",
      text: "Ante cualquier corte de red o falla del proveedor, Vortex Apex sigue funcionando sin interrupciones. Tu caja nunca se detiene, tu negocio siempre cobra."
    },
    {
      id: "rendimiento",
      icon: "fa-desktop",
      iconColor: "text-[#e45858]",
      borderColor: "hover:border-[#e45858]",
      shadowColor: "hover:shadow-[0_0_25px_rgba(228,88,88,0.3)]",
      title: "Alto Rendimiento",
      metric: "NATIVO WINDOWS 64-BIT",
      text: "Aplicación de escritorio nativa para Windows. Máxima velocidad de respuesta en cobros, búsquedas y reportes, sin depender de navegadores web."
    },
    {
      id: "pagos",
      icon: "fa-credit-card",
      iconColor: "text-[#6246ea]",
      borderColor: "hover:border-[#6246ea]",
      shadowColor: "hover:shadow-[0_0_25px_rgba(98,70,234,0.35)]",
      title: "Medios de Pago",
      metric: "EFECTIVO + TARJETA + TRANSFERENCIA",
      text: "Cobra con efectivo, tarjeta de débito/crédito, transferencia bancaria o cuenta corriente, incluso de forma combinada en una misma venta."
    },
    {
      id: "seguridad",
      icon: "fa-lock",
      iconColor: "text-sky-400",
      borderColor: "hover:border-sky-400",
      shadowColor: "hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]",
      title: "Seguridad de Datos",
      metric: "100% LOCAL + ROLES ADMIN/CAJERO",
      text: "Información financiera almacenada de forma 100% local en tu equipo. Control de acceso por roles para proteger las funciones críticas del sistema."
    },
    {
      id: "licencia",
      icon: "fa-key",
      iconColor: "text-amber-400",
      borderColor: "hover:border-amber-400",
      shadowColor: "hover:shadow-[0_0_25px_rgba(251,191,36,0.3)]",
      title: "Licencia Local",
      metric: "ACTIVACIÓN SIN INTERNET",
      text: "Activación y renovación sin conexión ni cuentas en la nube. Tu software funciona en tu equipo, sin suscripciones obligatorias ni validaciones remotas que puedan interrumpir tu operación."
    }
  ];

  return (
    <section id="beneficios" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6246ea]/15 border border-[#6246ea]/40 text-[#d1d1e9] text-xs font-['Orbitron'] tracking-widest uppercase mb-4">
            <i className="fas fa-crown text-[#6246ea]"></i>
            <span>Ventajas Competitivas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Orbitron'] font-black tracking-wider text-[#fffffe] uppercase mb-4">
            Por que elegir <span className="text-[#6246ea] glow-text">Vortex Apex</span>?
          </h2>
          <p className="text-base sm:text-lg text-[#d1d1e9] font-['Space_Grotesk'] font-light max-w-2xl mx-auto">
            Un punto de venta disenado para las condiciones reales del comercio minorista y mayorista: rapido, confiable y siempre disponible.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {benefitsList.map((item) => (
            <div
              key={item.id}
              className={"group relative p-7 rounded-2xl bg-[#2b2c34]/40 backdrop-blur-xl border border-[#6246ea]/20 " + item.borderColor + " " + item.shadowColor + " transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"}
            >
              <div>
                <div className={"w-14 h-14 rounded-xl bg-[#090a0f]/60 border border-[#6246ea]/30 flex items-center justify-center text-2xl " + item.iconColor + " mb-6 shadow-inner group-hover:scale-110 transition-transform"}>
                  <i className={"fas " + item.icon}></i>
                </div>
                <div className="text-[10px] font-['Orbitron'] font-bold tracking-widest text-[#d1d1e9]/60 uppercase mb-1">
                  {item.metric}
                </div>
                <h3 className="text-xl font-['Orbitron'] font-bold text-[#fffffe] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#d1d1e9] font-['Space_Grotesk'] font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#6246ea]/15 flex items-center justify-between text-[11px] font-mono text-[#d1d1e9]/50">
                <span>ESTADO</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> GARANTIZADO
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}