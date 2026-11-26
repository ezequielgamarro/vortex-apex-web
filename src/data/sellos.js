// Contenido de la página Sellos: recorrido de una revisión y capacidades, con capturas reales del programa.
export const recorridoSellos = {
  titulo: 'De la revisión en campo a la bitácora de cada unidad',
  intro: 'Así se controla un sello de seguridad en Sellos, en cuatro pasos y con las pantallas reales del programa.',
  producto: 'Sellos',
  pasos: [
    {
      id: 'paso-panel',
      corto: 'Panel',
      titulo: 'Ve qué toca revisar',
      texto:
        'El panel junta lo urgente: los activos con pendientes, los pendientes que ya pasaron su fecha compromiso, las unidades a las que ya les toca revisión y las revisiones sin cerrar.',
      puntos: ['Frecuencia de revisión configurable', 'Pendientes vencidos a la vista', 'Pipas, estaciones e instrumentos'],
      img: '/img/sellos/panel.webp',
      alt: 'Panel de Sellos con indicadores, pendientes más urgentes y activos que toca revisar',
    },
    {
      id: 'paso-revision',
      corto: 'Revisión',
      titulo: 'Revisa punto por punto',
      texto:
        'Cada unidad tiene su plantilla de puntos: tanque, dispensario, bomba. En cada uno se anota el número de sello, el sello nuevo si se cambió y cómo estaba: bien, mal colocado, con otro número o sin sello.',
      puntos: ['Plantillas de puntos por tipo de unidad', 'Fotos de evidencia por punto', 'Firma de quien revisa'],
      img: '/img/sellos/revision.webp',
      alt: 'Revisión de sellos de una estación con puntos de tanque, dispensario y bomba, números de sello y observaciones',
    },
    {
      id: 'paso-pendientes',
      corto: 'Pendientes',
      titulo: 'Da seguimiento a lo que quedó mal',
      texto:
        'Lo que no estaba bien se vuelve un pendiente con su fecha compromiso y la indicación de qué hacer. Se ordenan por urgencia y se cierran registrando la corrección.',
      puntos: ['Fecha compromiso por pendiente', 'Ordenados por urgencia', 'Corrección registrada en la bitácora'],
      img: '/img/sellos/pendientes.webp',
      alt: 'Pendientes de corrección con el problema de cada sello, su fecha compromiso y la revisión de origen',
    },
    {
      id: 'paso-calibracion',
      corto: 'Calibración',
      titulo: 'La calibración de cada unidad',
      texto:
        'La bitácora de calibración guarda el factor, el método y la eficiencia de cada pipa y estación, quién calibró y cuándo, para saber qué unidad conviene volver a revisar.',
      puntos: ['Factor, método y eficiencia', 'Historial por unidad', 'Filtro por base y por calibrar'],
      img: '/img/sellos/calibracion.webp',
      alt: 'Bitácora de calibración con factor, método, eficiencia y laboratorio de cada pipa',
    },
  ],
};

export const capacidadesSellos = {
  titulo: 'La bitácora completa de cada sello',
  intro: 'Qué sello tiene cada punto hoy, desde cuándo y quién lo revisó, sin buscar en carpetas.',
  captura: {
    src: '/img/sellos/activo.webp',
    alt: 'Historial de sellos de una pipa con el número y estado de cada punto según la última revisión',
    label: 'Sellos · Historial de la unidad',
  },
  items: [
    {
      titulo: 'Estado actual por punto',
      texto: 'Cada unidad muestra el número y el estado de cada sello según su última revisión cerrada.',
    },
    {
      titulo: 'Pipas, estaciones y planta',
      texto: 'Una bitácora para cada tipo de activo, con sus propios puntos de sellado.',
    },
    {
      titulo: 'Equipos electrónicos',
      texto: 'Bitácora aparte para medidores y equipos electrónicos, agrupados por categoría.',
    },
    {
      titulo: 'Revisión imprimible',
      texto: 'Cuando se necesita en papel, la revisión se imprime completa, con sus firmas.',
    },
    {
      titulo: 'Roles y permisos',
      texto: 'Administración, gerencia y encargado de sellos ven y hacen solo lo que les corresponde.',
    },
    {
      titulo: 'La misma plataforma',
      texto: 'Las pipas son las mismas del taller: se dan de alta una vez y se ven en los dos módulos.',
    },
  ],
};
