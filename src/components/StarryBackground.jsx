import React from 'react';

/**
 * StarryBackground: Fondo global fijo con degradado radial de #090a0f a #1b2735
 * y 3 capas de estrellas parallax (1px, 2px y 3px) animadas hacia arriba en bucle infinito.
 */
export default function StarryBackground() {
  return (
    <div 
      className="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse at 50% 35%, #1b2735 0%, #090a0f 100%)'
      }}
    >
      {/* Capa 1: Estrellas de 1px (Parallax rápido: 50s) */}
      <div id="stars" className="relative" />

      {/* Capa 2: Estrellas de 2px (Parallax medio: 100s) */}
      <div id="stars2" className="relative" />

      {/* Capa 3: Estrellas de 3px (Parallax lento: 150s) */}
      <div id="stars3" className="relative" />

      {/* Malla cyber suave sutil en overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

      {/* Resplandor ambiental de nebulosa neón en esquinas */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#6246ea]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#e45858]/10 rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
}