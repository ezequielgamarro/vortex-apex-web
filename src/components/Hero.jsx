import { useEffect, useRef } from 'react';

export default function Hero() {
  const v1 = useRef(null);
  const v2 = useRef(null);

  useEffect(() => {
    const video1 = v1.current;
    const video2 = v2.current;
    if (!video1 || !video2) return;

    let activeVideo = 1;
    let isCrossfading = false;
    const FADE_DURATION_SEC = 1.5;

    // Inicializar estados iniciales
    video1.style.opacity = '0.35';
    video2.style.opacity = '0';
    video1.currentTime = 0;
    video1.play().catch(() => {});

    const performCrossfade = (current, incoming, nextIndex) => {
      if (isCrossfading || !current || !incoming) return;
      isCrossfading = true;

      // 1. Iniciar el video entrante desde el segundo 0
      incoming.currentTime = 0;
      incoming.play().catch(() => {});

      // 2. Disolver opacidades con transición CSS suave
      incoming.style.opacity = '0.35';
      current.style.opacity = '0';

      // 3. Al culminar el fundido, pausar el anterior y resetear bandera
      setTimeout(() => {
        current.pause();
        current.currentTime = 0;
        activeVideo = nextIndex;
        isCrossfading = false;
      }, FADE_DURATION_SEC * 1000);
    };

    const handleTimeUpdate1 = () => {
      if (activeVideo === 1 && !isCrossfading && video1.duration > 0) {
        const timeLeft = video1.duration - video1.currentTime;
        if (timeLeft <= FADE_DURATION_SEC && timeLeft >= 0) {
          performCrossfade(video1, video2, 2);
        }
      }
    };

    const handleTimeUpdate2 = () => {
      if (activeVideo === 2 && !isCrossfading && video2.duration > 0) {
        const timeLeft = video2.duration - video2.currentTime;
        if (timeLeft <= FADE_DURATION_SEC && timeLeft >= 0) {
          performCrossfade(video2, video1, 1);
        }
      }
    };

    // Respaldo de seguridad por si el navegador pausa timeupdate
    const handleEnded1 = () => {
      if (activeVideo === 1) performCrossfade(video1, video2, 2);
    };
    const handleEnded2 = () => {
      if (activeVideo === 2) performCrossfade(video2, video1, 1);
    };

    video1.addEventListener('timeupdate', handleTimeUpdate1);
    video2.addEventListener('timeupdate', handleTimeUpdate2);
    video1.addEventListener('ended', handleEnded1);
    video2.addEventListener('ended', handleEnded2);

    return () => {
      video1.removeEventListener('timeupdate', handleTimeUpdate1);
      video2.removeEventListener('timeupdate', handleTimeUpdate2);
      video1.removeEventListener('ended', handleEnded1);
      video2.removeEventListener('ended', handleEnded2);
    };
  }, []);

  return (
    <section className="relative z-10 pt-32 pb-20 lg:py-40 flex items-center min-h-[90vh] overflow-hidden">
      
      {/* Fondo de Video con Crossfade Suave continuo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={v1}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter brightness-75 scale-105 pointer-events-none"
          style={{ opacity: 0.35, transition: 'opacity 1500ms ease-in-out' }}
        >
          <source src="/img/8d3a03b520cc67c9ba65d64e2fb06c66_1_1789244625_8476.mp4" type="video/mp4" />
        </video>
        <video
          ref={v2}
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter brightness-75 scale-105 pointer-events-none"
          style={{ opacity: 0, transition: 'opacity 1500ms ease-in-out' }}
        >
          <source src="/img/8d3a03b520cc67c9ba65d64e2fb06c66_1_1789244625_8476.mp4" type="video/mp4" />
        </video>

        {/* Gradiente sutil para integrar el video con el fondo de estrellas */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a0f]/60 via-[#090a0f]/40 to-[#090a0f]/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Columna Izquierda: Información Principal */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            
            {/* Badge sutil */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#6246ea]/20 border border-[#6246ea]/50 text-[#fffffe] text-xs sm:text-sm font-['Orbitron'] tracking-widest mb-6 shadow-[0_0_15px_rgba(98,70,234,0.3)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#6246ea] animate-ping"></span>
              <span className="text-[#d1d1e9]">SOFTWARE POS</span>
              <span className="text-[#fffffe] font-bold">100% OFFLINE</span>
            </div>

            {/* H1 Masivo con Orbitron y degradado de texto */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Orbitron'] font-black tracking-tight leading-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#fffffe] via-[#d1d1e9] to-[#6246ea] glow-text mb-6">
              Optimiza la gestión de tu negocio con Vortex Apex
            </h1>

            {/* Párrafo descriptivo */}
            <p className="max-w-2xl text-base sm:text-lg text-[#d1d1e9] font-['Space_Grotesk'] font-light leading-relaxed mb-8 mx-auto lg:mx-0">
              El software de punto de venta moderno, rápido y 100% offline diseñado para comercios que buscan control total, agilidad en caja y cero complicaciones.
            </p>

            {/* Dos Botones: "Solicitar Demo" (sólido) y "Ver Características" (outline) */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-6">
              
              {/* Botón Sólido */}
              <a
                href="https://instagram.com/vortexapex.arg"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto relative group inline-flex items-center justify-center px-8 py-4 bg-[#6246ea] text-[#fffffe] font-['Orbitron'] font-bold text-sm tracking-widest uppercase rounded-lg shadow-[0_0_20px_rgba(98,70,234,0.5)] hover:shadow-[0_0_35px_rgba(98,70,234,0.9)] hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                {/* Reflejo brillante al pasar el cursor */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"></div>
                <i className="fas fa-play text-xs mr-2.5 text-[#fffffe]/90"></i>
                <span>Solicitar Demo</span>
              </a>

              {/* Botón Outline */}
              <a
                href="#modulos"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#2b2c34]/40 border-2 border-[#d1d1e9]/40 hover:border-[#6246ea] text-[#d1d1e9] hover:text-[#fffffe] hover:bg-[#6246ea]/15 font-['Orbitron'] font-bold text-sm tracking-widest uppercase rounded-lg backdrop-blur-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              >
                <i className="fas fa-layer-group text-xs mr-2.5 text-[#6246ea]"></i>
                <span>Ver Características</span>
              </a>

            </div>

            {/* Micro-píldoras de especificaciones técnicas */}
            <div className="mt-10 pt-6 border-t border-[#6246ea]/20 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-left">
                <div className="text-[#fffffe] font-['Orbitron'] font-bold text-sm sm:text-base flex items-center gap-1.5">
                  <i className="fas fa-bolt text-[#6246ea] text-xs"></i> 0 ms
                </div>
                <div className="text-xs text-[#d1d1e9]/70 font-['Space_Grotesk']">Latencia en cobros</div>
              </div>
              <div className="text-left">
                <div className="text-[#fffffe] font-['Orbitron'] font-bold text-sm sm:text-base flex items-center gap-1.5">
                  <i className="fas fa-shield-alt text-emerald-400 text-xs"></i> 100%
                </div>
                <div className="text-xs text-[#d1d1e9]/70 font-['Space_Grotesk']">Disponibilidad offline</div>
              </div>
              <div className="text-left">
                <div className="text-[#fffffe] font-['Orbitron'] font-bold text-sm sm:text-base flex items-center gap-1.5">
                  <i className="fas fa-lock text-[#e45858] text-xs"></i> Local
                </div>
                <div className="text-xs text-[#d1d1e9]/70 font-['Space_Grotesk']">Bases de datos privadas</div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Imagen destacada flotante con resplandor morado */}
          <div className="w-full lg:w-5/12 flex justify-center relative">
            
            {/* Resplandor morado detrás de la imagen */}
            <div className="absolute inset-0 bg-[#6246ea]/35 blur-[90px] rounded-full scale-90 pointer-events-none"></div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#6246ea]/20 to-[#e45858]/20 blur-2xl rounded-3xl pointer-events-none"></div>

            {/* Contenedor Flotante */}
            <div className="relative z-10 w-full max-w-sm lg:max-w-md animate-float">
              
              {/* Marco Glassmorphism con bordes neón */}
              <div className="relative p-2.5 rounded-2xl bg-[#2b2c34]/50 backdrop-blur-xl border border-[#6246ea]/50 shadow-[0_0_35px_rgba(98,70,234,0.4)] group overflow-hidden">
                
                {/* Badge de Estado Cyberpunk */}
                <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#090a0f]/80 border border-[#6246ea] backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] font-['Orbitron'] font-bold text-[#d1d1e9] tracking-wider uppercase">
                    SYS.ACTIVE
                  </span>
                </div>

                <img
                  src="/img/c99e485188259a41ca937b1b11a5bfc3_1_1789247735_2074.png"
                  alt="Vortex Apex Core Interface"
                  className="w-full h-auto object-cover rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Cyber Barra Inferior */}
                <div className="mt-2 px-2 py-1.5 flex items-center justify-between text-[11px] font-mono text-[#d1d1e9]/80 border-t border-[#6246ea]/20">
                  <span className="flex items-center gap-1.5">
                    <i className="fas fa-terminal text-[#6246ea]"></i> VORTEX-CORE::NODE_01
                  </span>
                  <span className="text-[#6246ea] font-['Orbitron']">v2.4.0</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}