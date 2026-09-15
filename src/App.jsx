import React, { useState } from 'react';
import StarryBackground from './components/StarryBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Modules from './components/Modules';
import Visualizer from './components/Visualizer';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = (e) => {
    // Si se pasa evento, podemos prevenir navegación externa y abrir el modal
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="text-[#fffffe] font-['Space_Grotesk'] antialiased selection:bg-[#6246ea] selection:text-[#fffffe] relative overflow-x-hidden min-h-screen">
      
      {/* 1. Fondo fijo global con degradado radial y estrellas parallax */}
      <StarryBackground />

      {/* 2. Barra de navegación fija con glassmorphism */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Contenedor principal de secciones */}
      <main className="relative z-10">
        {/* 3. Hero Section (min-h-[90vh], badge, H1 Orbitron degradado, 2 botones, imagen flotante) */}
        <Hero />

        {/* 4. About Section (centrada y limpia, qué es Vortex Apex) */}
        <About />

        {/* 5. Modules Section (grid de 6 tarjetas con glassmorphism y hover resplandeciente) */}
        <Modules />

        {/* 6. Visualizer Section (dos pantallas flotantes: monitor y laptop con bordes morados) */}
        <Visualizer />

        {/* 7. Benefits Section (grid de 4 columnas: 100% Offline, Diseño Moderno, Impresión Térmica, Alto Rendimiento) */}
        <Benefits />
      </main>

      {/* 8. Footer (estilo terminal/hacker, Sys.Location, redes sociales, System Status: Online parpadeante) */}
      <Footer />

      {/* Modal interactivo para solicitar demo */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />

    </div>
  );
}