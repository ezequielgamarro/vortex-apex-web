import React from "react";

export default function Modules() {
  const modulesList = [
    {
      id: "caja",
      icon: "fa-cash-register",
      title: "Pantalla Principal (Caja)",
      tag: "MODULO 01",
      accentColor: "#6246ea",
      items: [
        "Búsqueda ultrarrápida de productos por código de barras o nombre.",
        "Cálculo automático de vuelto al instante, sin errores humanos.",
        "Medios de pago combinados: efectivo, tarjeta, transferencia y cuenta corriente.",
        "Ventas por unidades o por peso integrado con balanza.",
        "Atajos de teclado para operar la caja sin soltar el teclado."
      ]
    },
    {
      id: "inventario",
      icon: "fa-boxes-stacked",
      title: "Control de Stock e Inventario",
      tag: "MODULO 02",
      accentColor: "#6246ea",
      items: [
        "Gestion detallada de articulos: costos, precios de venta y margenes.",
        "Alertas visuales automaticas ante stock bajo o producto agotado.",
        "Sincronizacion instantanea del inventario con cada venta realizada.",
        "Categorizacion flexible y busqueda inteligente en milisegundos."
      ]
    },
    {
      id: "arqueo",
      icon: "fa-wallet",
      title: "Movimientos de Caja (Arqueo)",
      tag: "MODULO 03",
      accentColor: "#e45858",
      isSecondaryAccent: true,
      items: [
        "Apertura y cierre de caja detallado con arqueo preciso por turno.",
        "Historial completo de turnos cerrados, foliados e inmutables.",
        "Control de ingresos manuales, retiros y gastos durante el turno.",
        "Filtros avanzados por fecha para auditoria rapida de periodos."
      ]
    },
    {
      id: "cuentas",
      icon: "fa-file-invoice-dollar",
      title: "Cuentas Corrientes",
      tag: "MODULO 04",
      accentColor: "#6246ea",
      items: [
        "Control ordenado de saldos y deudas de clientes y proveedores.",
        "Historial transparente de pagos parciales y entregas a cuenta.",
        "Buscador en tiempo real para consultar saldos en segundos.",
        "Eliminacion definitiva del registro manual en papel o planillas."
      ]
    },
    {
      id: "analitica",
      icon: "fa-chart-pie",
      title: "Analitica y Reportes",
      tag: "MODULO 05",
      accentColor: "#6246ea",
      items: [
        "Metricas clave de rendimiento: ventas del periodo y ticket promedio.",
        "Cantidad de tickets emitidos y articulos mas vendidos por periodo.",
        "Reportes estrategicos para tomar decisiones de negocio informadas.",
        "Filtros avanzados por dia, semana, mes y rangos personalizados."
      ]
    },
    {
      id: "seguridad",
      icon: "fa-shield-halved",
      title: "Seguridad y Roles",
      tag: "MODULO 06",
      accentColor: "#6246ea",
      items: [
        "Control de acceso diferenciado por roles: Administrador y Cajero.",
        "Protección con clave maestra para funciones críticas del sistema.",
        "Licencia local con activación sin internet: el software es tuyo, en tu equipo.",
        "Base de datos 100% local: tus datos nunca salen de tu equipo."
      ]
    }
  ];

  return (
    <section id="modulos" className="relative z-10 py-24">
      <span id="caracteristicas" className="absolute -top-24"></span>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6246ea]/15 border border-[#6246ea]/40 text-[#d1d1e9] text-xs font-['Orbitron'] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6246ea]"></span>
            <span>Arquitectura Modular</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Orbitron'] font-black tracking-wider text-[#fffffe] uppercase mb-4">
            Modulos del <span className="text-[#6246ea] glow-text">Sistema</span>
          </h2>
          <p className="text-base sm:text-lg text-[#d1d1e9] font-['Space_Grotesk'] font-light max-w-2xl mx-auto">
            Cada modulo fue disenado con un proposito claro: que tu negocio opere mas rapido, con mas orden y sin depender de internet en ningun momento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modulesList.map((mod) => (
            <div
              key={mod.id}
              className={"group relative rounded-2xl bg-[#2b2c34]/40 backdrop-blur-xl p-8 border transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 " + (mod.isSecondaryAccent
                ? "border-[#e45858]/30 hover:border-[#e45858] hover:shadow-[0_0_30px_rgba(228,88,88,0.35)]"
                : "border-[#6246ea]/25 hover:border-[#6246ea] hover:shadow-[0_0_30px_rgba(98,70,234,0.35)]")}
            >
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: mod.accentColor }}
              ></div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 shadow-lg"
                    style={{ backgroundColor: mod.accentColor + "20", color: mod.accentColor, border: "1px solid " + mod.accentColor + "50" }}
                  >
                    <i className={"fas " + mod.icon}></i>
                  </div>
                  <span className="text-[11px] font-['Orbitron'] tracking-widest text-[#d1d1e9]/60 font-semibold uppercase">
                    {mod.tag}
                  </span>
                </div>
                <h3 className="text-xl font-['Orbitron'] font-bold text-[#fffffe] mb-4">
                  {mod.title}
                </h3>
                <ul className="space-y-2.5 mb-6 text-sm text-[#d1d1e9] font-['Space_Grotesk'] font-light">
                  {mod.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-xs mt-1 shrink-0 font-bold" style={{ color: mod.accentColor }}>
                        <i className="fas fa-chevron-right text-[10px]"></i>
                      </span>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[#6246ea]/15 flex items-center justify-between text-xs font-['Orbitron'] text-[#d1d1e9]/50">
                <span className="group-hover:text-[#fffffe] transition-colors flex items-center gap-1.5">
                  <i className="fas fa-circle-check text-[10px]" style={{ color: mod.accentColor }}></i> Activo
                </span>
                <span className="tracking-widest uppercase text-[10px]">100% Offline</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}