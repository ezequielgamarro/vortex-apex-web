import React from 'react';

/**
 * Benefits Section: Cuadrícula de 4 columnas destacando:
 * 100% Offline, Diseño Moderno, Impresión Térmica y Alto Rendimiento.
 */
export default function Benefits() {
  const benefitsList = [
    {
      id: "offline",
      icon: "fa-wifi-slash",
      accent: "emerald",
      iconColor: "text-emerald-400",
      borderColor: "hover:border-emerald-400",
      shadowColor: "hover:shadow-[0_0_25px_rgba(52,211,153,0.3)]",
      title: "100% Offline",
      metric: "0% INTERNET REQUERIDO",
      text: "Funciona sin internet, asegurando que tu negocio siga operando y cobrando ante cualquier corte de red o falla de proveedor."
    },
    {
      id: "design",
      icon: "fa-moon",
      accent: "purple",
      iconColor: "text-[#6246ea]",
      borderColor: "hover:border-[#6246ea]",
      shadowColor: "hover:shadow-[0_0_25px_rgba(98,70,234,0.35)]",
      title: "Diseño Moderno",
      metric: "MODO OSCURO INTELIGENTE",
      text: "Interfaz limpia y ergonómica optimizada para reducir drásticamente la fatiga visual durante largas jornadas de trabajo en caja."
    },
    {
      id: "thermal",
      icon: "fa-receipt",
      accent: "blue",
      iconColor: "text-sky-400",
      borderColor: "hover:border-sky-400",
      shadowColor: "hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]",
      title: "Impresión Térmica",
      metric: "SOPORTE 58MM & 80MM",
      text: "Compatible con impresoras de tickets estándar (ESC/POS) para comprobantes limpios, rápidos, profesionales y sin atascos."
    },
    {
      id: "performance",
      icon: "fa-desktop",
      accent: "red",
      iconColor: "text-[#e45858]",
      borderColor: "hover:border-[#e45858]",
      shadowColor: "hover:shadow-[0_0_25px_rgba(228,88,88,0.3)]",
      title: "Alto Rendimiento",
      metric: "NATIVO WINDOWS 64-BIT",
      text: "Desarrollado con tecnología nativa para Windows, ofreciendo máxima velocidad de respuesta sin depender de navegadores lentos."
    }
  ];

  return (
    <section id="beneficios" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de Sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#6246ea]/15 border border-[#6246ea]/40 text-[#d1d1e9] text-xs font-['Orbitron'] tracking-widest uppercase mb-4">
            <i className="fas fa-crown text-[#6246ea]"></i>
            <span>Ventajas Competitivas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Orbitron'] font-black tracking-wider text-[#fffffe] uppercase mb-4">
            ¿Por qué elegir <span className="text-[#6246ea] glow-text">Vortex Apex</span>?
          </h2>

          <p className="text-base sm:text-lg text-[#d1d1e9] font-['Space_Grotesk'] font-light max-w-2xl mx-auto">
            La tranquilidad de un punto de venta sólido, confiable y concebido para operar bajo las condiciones reales del comercio actual.
          </p>
        </div>

        {/* Cuadrícula de 4 Columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefitsList.map((item) => (
            <div
              key={item.id}
              className={`group relative p-7 rounded-2xl bg-[#2b2c34]/40 backdrop-blur-xl border border-[#6246ea]/20 ${item.borderColor} ${item.shadowColor} transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
            >
              <div>
                {/* Ícono */}
                <div className={`w-14 h-14 rounded-xl bg-[#090a0f]/60 border border-[#6246ea]/30 flex items-center justify-center text-2xl ${item.iconColor} mb-6 shadow-inner group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${item.icon}`}></i>
                </div>

                {/* Subtag métrico */}
                <div className="text-[10px] font-['Orbitron'] font-bold tracking-widest text-[#d1d1e9]/60 uppercase mb-1">
                  {item.metric}
                </div>

                {/* Título del beneficio */}
                <h3 className="text-xl font-['Orbitron'] font-bold text-[#fffffe] mb-3 group-hover:text-[#fffffe] transition-colors">
                  {item.title}
                </h3>

                {/* Descripción */}
                <p className="text-sm text-[#d1d1e9] font-['Space_Grotesk'] font-light leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Indicador inferior */}
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