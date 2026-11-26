// Contenido de la página Taller de Pipas: recorrido de una orden y capacidades, con capturas reales del programa.
export const recorridoTaller = {
  titulo: 'De la orden en papel al historial de cada pipa',
  intro: 'Así recorre el taller una orden en Taller de Pipas, en cinco pasos y con las pantallas reales del programa.',
  producto: 'Taller de Pipas',
  pasos: [
    {
      id: 'paso-ingreso',
      corto: 'Ingreso',
      titulo: 'Recepción registra la pipa',
      texto:
        'La orden de taller se llena en la app: número económico, kilometraje, nivel de gas, conductor y motivo del ingreso. Firman quien entrega la unidad y quien la recibe.',
      puntos: ['Datos de la unidad cargados desde el catálogo', 'Firmas en pantalla, sin papel', 'Se guarda como borrador si se interrumpe'],
      img: '/img/pipas/ingreso.webp',
      alt: 'Ingreso de una pipa con motivo, falla reportada, observaciones y firmas de entrega y recepción',
    },
    {
      id: 'paso-tablero',
      corto: 'Tablero',
      titulo: 'El técnico toma la orden',
      texto:
        'La orden aparece en el tablero de todos al mismo tiempo, en su columna: en espera, en taller, en taller externo o terminada. Las que llevan demasiado tiempo se marcan en rojo.',
      puntos: ['Tablero compartido en tiempo real', 'Asignación «el primero que la toma»', 'Órdenes demoradas a la vista'],
      img: '/img/pipas/tablero.webp',
      alt: 'Tablero de órdenes con columnas por estado, órdenes demoradas y técnicos asignados',
    },
    {
      id: 'paso-refacciones',
      corto: 'Refacciones',
      titulo: 'Pide refacciones al almacén',
      texto:
        'Desde la orden, el técnico solicita las piezas. Almacén aprueba el pedido contra el inventario y el sistema avisa cuando una refacción baja de su stock mínimo.',
      puntos: ['Pedidos ligados a la orden', 'Descuento de inventario al aprobar', 'Alerta de stock mínimo y valor del inventario'],
      img: '/img/pipas/refacciones.webp',
      alt: 'Refacciones e inventario con pedidos pendientes de aprobar y alertas de stock bajo',
    },
    {
      id: 'paso-cierre',
      corto: 'Cierre',
      titulo: 'Cierra con su firma',
      texto:
        'Se marcan los trabajos realizados con su mano de obra y firman quien entregó, quien recibió y el mecánico. La orden queda cerrada con su comprobante interno.',
      puntos: ['Trabajos realizados y mano de obra', 'Tres firmas en la orden', 'Comprobante con refacciones y mano de obra'],
      img: '/img/pipas/cierre.webp',
      alt: 'Orden terminada con las firmas de entrega, recepción y mecánico, y los trabajos realizados con su mano de obra',
    },
    {
      id: 'paso-historial',
      corto: 'Historial',
      titulo: 'Todo queda en el historial de la pipa',
      texto:
        'Cada unidad acumula sus órdenes: qué falla tuvo, qué se le cambió, quién la atendió y cuándo. Ya no depende de buscar papeles en un archivero.',
      puntos: ['Búsqueda por unidad, mecánico y fechas', 'Órdenes terminadas y canceladas', 'Impresión de cualquier orden'],
      img: '/img/pipas/historial.webp',
      alt: 'Historial de órdenes terminadas y canceladas con pipa, fecha de cierre, mecánico y motivos',
    },
  ],
};

export const capacidadesTaller = {
  titulo: 'Más allá de la orden de taller',
  intro: 'Lo que la gerencia necesita para decidir y lo que el taller necesita para no quedarse parado.',
  captura: {
    src: '/img/pipas/reportes.webp',
    alt: 'Reportes del taller con pipas ingresadas y reparadas, eficiencia, tiempo promedio y eficiencia por mecánico',
    label: 'Taller de Pipas · Reportes',
  },
  items: [
    {
      titulo: 'Reportes de eficiencia',
      texto: 'Pipas ingresadas contra reparadas, tiempo promedio de reparación y desempeño de cada mecánico, por periodo.',
    },
    {
      titulo: 'Taller externo',
      texto: 'Las unidades que salen a un taller especializado, con su costo estimado y fecha de regreso.',
    },
    {
      titulo: 'Semáforo de llantas y baterías',
      texto: 'El estado de llantas y baterías de cada pipa, para cambiarlas antes de que fallen.',
    },
    {
      titulo: 'Avisos de vencimiento',
      texto: 'Pólizas de las pipas y licencias de los operadores con aviso anticipado antes de que venzan.',
    },
    {
      titulo: 'Roles y permisos',
      texto: 'Recepción, mecánicos, jefe de taller y administración ven y hacen solo lo que les corresponde.',
    },
    {
      titulo: 'Auditoría',
      texto: 'Queda registrado quién creó, movió, firmó o modificó cada orden, y a qué hora.',
    },
  ],
};
