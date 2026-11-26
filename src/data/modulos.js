// Módulos de la plataforma: una sola fuente para el inicio, la página Plataforma y las páginas de cada módulo.
// Para sumar un módulo basta con agregarlo aquí (y su página, si la tiene).
export const MODULOS = [
  {
    clave: 'taller',
    nombre: 'Taller de pipas',
    disponible: true,
    resumen: 'Órdenes de ingreso, tablero en tiempo real, refacciones e historial de cada unidad.',
    texto:
      'Mantenimiento de la flota de pipas de principio a fin: orden de ingreso con firmas, tablero en tiempo real, refacciones contra inventario, cierre con firma e historial de cada unidad.',
    pagina: 'taller',
    enlace: 'Conocer Taller de Pipas',
    captura: {
      src: '/img/pipas/tablero.webp',
      alt: 'Tablero de Taller de Pipas con órdenes en espera, en taller, en taller externo, terminadas y canceladas',
      label: 'Taller de Pipas · Tablero',
    },
  },
  {
    clave: 'sellos',
    nombre: 'Sellos',
    disponible: true,
    resumen: 'Bitácora de sellos de seguridad en pipas, estaciones y equipos de medición.',
    texto:
      'Revisión periódica de los sellos de seguridad de pipas, estaciones y equipos: número de sello por punto, lo que quedó mal con su fecha compromiso y la bitácora de calibración de cada unidad.',
    pagina: 'sellos',
    enlace: 'Conocer Sellos',
    captura: {
      src: '/img/sellos/panel.webp',
      alt: 'Panel de Sellos con activos con pendientes, pendientes vencidos, revisiones vencidas y los activos que toca revisar',
      label: 'Sellos · Panel',
    },
  },
  {
    clave: 'plantas',
    nombre: 'Plantas',
    disponible: true,
    resumen: 'Carga de pipas, rutas del día, liquidación en caja y descarga de transporte.',
    texto:
      'La operación diaria de la planta: hoja del día, acta de resguardo, salida y regreso de cada pipa con su papeleta, revisión del encargado, liquidación en caja y descarga de los transportes.',
    pagina: 'plantas',
    enlace: 'Conocer Plantas',
    captura: {
      src: '/img/plantas/panel.webp',
      alt: 'Panel de Plantas con pipas en ruta, sin papeleta, en revisión y por liquidar, padrón de resguardo y litros del día',
      label: 'Plantas · Operación de gas',
    },
  },
  {
    clave: 'personal',
    nombre: 'Personal',
    disponible: false,
    resumen: 'Expedientes, documentos y control del personal de la gasera.',
    texto: 'Expedientes, documentos y control del personal de la gasera.',
  },
  {
    clave: 'contabilidad',
    nombre: 'Contabilidad',
    disponible: false,
    resumen: 'Costos del taller y de la operación, sin volver a capturarlos.',
    texto: 'Costos del taller y de la operación, sin volver a capturarlos.',
  },
];

export const MODULOS_DISPONIBLES = MODULOS.filter((m) => m.disponible);
export const MODULOS_PROXIMOS = MODULOS.filter((m) => !m.disponible);
