import React from 'react';

/**
 * Modules Section: Cuadrícula de 6 tarjetas con glassmorphism,
 * bordes iluminados al pasar el cursor (hover), íconos, títulos y lista de 3-4 características.
 */
export default function Modules() {
  const modulesList = [
    {
      id: "pos",
      icon: "fa-cash-register",
      title: "POS Ágil",
      tag: "MÓDULO 01",
      accentColor: "#6246ea",
      items: [
        "Interfaz fluida para cobros ultra veloces en mostrador.",
        "Detección instantánea de lectores de código de barras.",
        "Ventas por unidades o fraccionado por peso en balanza.",
        "Cobro con Efectivo, Débito, Crédito, Transferencia y Cuenta Corriente."
      ]
    },
    {
      id: "inventario",
      icon: "fa-boxes-stacked",
      title: "Control de Inventario",
      tag: "MÓDULO 02",
      accentColor: "#6246ea",
      items: [
        "Administración exhaustiva de productos, rubros y listas de precios.",
        "Alertas preventivas de stock mínimo y productos agotados.",
        "Descuento automático de existencias en cada ticket.",
        "Categorización flexible con búsqueda inteligente en milisegundos."
      ]
    },
    {
      id: "analitica",
      icon: "fa-chart-pie",
      title: "Analítica",
      tag: "MÓDULO 03",
      accentColor: "#6246ea",
      items: [
        "Dashboard interactivo con métricas clave y volumen de ventas.",
        "Ticket promedio, artículos más vendidos y horarios pico.",
        "Filtros avanzados por intervalos de fechas, semanas y meses.",
        "Gráficos visuales limpios para toma de decisiones estratégicas."
      ]
    },
    {
      id: "caja",
      icon: "fa-wallet",
      title: "Control de Caja",
      tag: "MÓDULO 04",
      accentColor: "#e45858", // Acento secundario neón coral
      isSecondaryAccent: true,
      items: [
        "Apertura y cierre de caja con arqueo preciso y ciego.",
        "Control estricto de ingresos, retiros manuales y gastos.",
        "Historial inmutable y foliado de turnos de cajeros.",
        "Emisión de comprobante físico de cierre en impresora térmica."
      ]
    },
    {
      id: "cuentas",
      icon: "fa-file-invoice-dollar",
      title: "Cuentas Corrientes",
      tag: "MÓDULO 05",
      accentColor: "#6246ea",
      items: [
        "Ficha personalizada por cliente con control de saldos y fiados.",
        "Buscador predictivo para consultar deudas en segundos.",
        "Historial transparente de pagos parciales y entregas a cuenta.",
        "Eliminación definitiva de anotaciones precarias en papel."
      ]
    },
    {
      id: "seguridad",
      icon: "fa-shield-halved",
      title: "Seguridad y Roles",
      tag: "MÓDULO 06",
      accentColor: "#6246ea",
      items: [
        "Perfiles diferenciados con permisos específicos (Admin / Cajero).",
        "Protección con clave maestra para anulaciones y descuentos.",
        "Registro de auditoría (logs) de todas las operaciones críticas.",
        "Bases de datos encriptadas almacenadas localmente en tu equipo."
      ]
    }
  ];

  return (
    <section id="modulos" className="relative z-10 py-24">
      {/* Anchor invisible para compatibilidad con #caracteristicas */}
      <span id="caracteristicas" className="absolute -top-24"></span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6246ea]/15 border border-[#6246ea]/40 text-[#d1d1e9] text-xs font-['Orbitron'] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6246ea]"></span>
            <span>Arquitectura Modular</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Orbitron'] font-black tracking-wider text-[#fffffe] uppercase mb-4">
            Módulos del <span className="text-[#6246ea] glow-text">Sistema</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#d1d1e9] font-['Space_Grotesk'] font-light max-w-2xl mx-auto">
            Cada herramienta fue diseñada para integrarse con fluidez y potenciar la productividad operativa de tu mostrador.
          </p>
        </div>

        {/* Cuadrícula de 6 tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modulesList.map((mod) => (
            <div
              key={mod.id}
              className={`group relative rounded-2xl bg-[#2b2c34]/40 backdrop-blur-xl p-8 border transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                mod.isSecondaryAccent
                  ? 'border-[#e45858]/30 hover:border-[#e45858] hover:shadow-[0_0_30px_rgba(228,88,88,0.35)]'
                  : 'border-[#6246ea]/25 hover:border-[#6246ea] hover:shadow-[0_0_30px_rgba(98,70,234,0.35)]'
              } hover:-translate-y-1.5`}
            >
              {/* Resplandor interno sutil en hover */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: mod.accentColor }}
              ></div>

              <div>
                {/* Cabecera de la Tarjeta: Ícono y Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 shadow-lg"
                    style={{ 
                      backgroundColor: `${mod.accentColor}20`,
                      color: mod.accentColor,
                      border: `1px solid ${mod.accentColor}50`
                    }}
                  >
                    <i className={`fas ${mod.icon}`}></i>
                  </div>
                  <span className="text-[11px] font-['Orbitron'] tracking-widest text-[#d1d1e9]/60 font-semibold uppercase">
                    {mod.tag}
                  </span>
                </div>

                {/* Título del Módulo */}
                <h3 className="text-xl font-['Orbitron'] font-bold text-[#fffffe] mb-4 group-hover:text-[#fffffe] transition-colors">
                  {mod.title}
                </h3>

                {/* Lista de Características */}
                <ul className="space-y-2.5 mb-6 text-sm text-[#d1d1e9] font-['Space_Grotesk'] font-light">
                  {mod.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span 
                        className="text-xs mt-1 shrink-0 font-bold"
                        style={{ color: mod.accentColor }}
                      >
                        <i className="fas fa-chevron-right text-[10px]"></i>
                      </span>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pie de tarjeta estético */}
              <div className="pt-4 border-t border-[#6246ea]/15 flex items-center justify-between text-xs font-['Orbitron'] text-[#d1d1e9]/50">
                <span className="group-hover:text-[#fffffe] transition-colors flex items-center gap-1.5">
                  <i className="fas fa-circle-check text-[10px]" style={{ color: mod.accentColor }}></i> Activo
                </span>
                <span className="tracking-widest uppercase text-[10px]">100% Nativo</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}