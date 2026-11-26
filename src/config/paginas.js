// Páginas del sitio. Cada una es un .html propio (ver vite.config.js).
export const PAGINAS = {
  inicio: { nombre: 'Inicio', href: '/' },
  plataforma: { nombre: 'Plataforma', href: '/plataforma.html' },
  taller: { nombre: 'Taller de Pipas', href: '/taller-de-pipas.html' },
  sellos: { nombre: 'Sellos', href: '/sellos.html' },
  plantas: { nombre: 'Plantas', href: '/plantas.html' },
  productos: { nombre: 'Productos', href: '/productos.html' },
  contacto: { nombre: 'Contacto', href: '/contacto.html' },
  secuenciador: { nombre: 'Secuenciador', href: '/secuenciador.html', padre: 'productos' },
};

export const MENU = ['plataforma', 'taller', 'sellos', 'plantas', 'productos', 'contacto'];
