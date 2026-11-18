// Catálogo. El Secuenciador es un producto real y disponible (tiene ficha en /secuenciador.html).
// Los demás son PROVISORIOS: nombres, códigos e imágenes de ejemplo para armar la estructura;
// reemplazarlos por los productos reales (con foto, ficha y precio) cuando estén definidos.
export const CATEGORIAS = ['Taller', 'Reparto', 'Plantas', 'Accesorios'];

export const PRODUCTOS = [
  {
    nombre: 'Secuenciador para pipas',
    categoria: 'Reparto',
    texto: 'Secuenciador actualizado con filtro de corriente y señales separadas. Se instala en lugar del anterior sin cambiar el cableado.',
    imagen: '/img/productos/secuenciador.webp',
    foto: true,
    disponible: true,
    ficha: '/secuenciador.html',
  },
  {
    codigo: 'VA-101',
    nombre: 'Terminal móvil Android',
    categoria: 'Reparto',
    texto: 'Equipo resistente para operar la app en la pipa, en ruta o en el patio.',
    imagen: '/img/productos/terminal-movil.svg',
  },
  {
    codigo: 'VA-102',
    nombre: 'Impresora térmica portátil',
    categoria: 'Reparto',
    texto: 'Tickets y comprobantes impresos en el momento, conectada al celular o la terminal.',
    imagen: '/img/productos/impresora-portatil.svg',
  },
  {
    codigo: 'VA-201',
    nombre: 'Display para autotanque',
    categoria: 'Reparto',
    texto: 'Indicador digital montado en la unidad, a la vista del operador.',
    imagen: '/img/productos/display-autotanque.svg',
  },
  {
    codigo: 'VA-301',
    nombre: 'Sensor de nivel para tanque',
    categoria: 'Plantas',
    texto: 'Lectura del nivel de los tanques de almacenamiento de la planta.',
    imagen: '/img/productos/sensor-nivel.svg',
  },
  {
    codigo: 'VA-302',
    nombre: 'Lector de tags',
    categoria: 'Plantas',
    texto: 'Identificación de unidades y operadores con un tag, sin capturar a mano.',
    imagen: '/img/productos/lector-tags.svg',
  },
  {
    codigo: 'VA-401',
    nombre: 'Tablet para taller',
    categoria: 'Taller',
    texto: 'Pantalla con funda reforzada para seguir el tablero de órdenes desde el piso del taller.',
    imagen: '/img/productos/tablet-taller.svg',
  },
  {
    codigo: 'VA-501',
    nombre: 'Funda para terminal',
    categoria: 'Accesorios',
    texto: 'Protección con clip de cinturón para la terminal móvil.',
    imagen: '/img/productos/funda-terminal.svg',
  },
  {
    codigo: 'VA-502',
    nombre: 'Convertidor USB a RS485',
    categoria: 'Accesorios',
    texto: 'Conecta equipos de medición a la computadora de la planta.',
    imagen: '/img/productos/convertidor-usb-rs485.svg',
  },
];
