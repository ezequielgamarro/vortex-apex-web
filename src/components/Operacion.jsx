import { PAGINAS } from '../config/paginas';
import Estado from './Estado';
import { IconArrowRight } from './Icons';

// Tres escenas reales de una gasera, cada una con lo que la plataforma ofrece para ella.
const escenas = [
  {
    titulo: 'Plantas de almacenamiento',
    texto: 'Plantas: carga y salida de cada pipa, papeleta, revisión del encargado, liquidación en caja y descarga de transporte.',
    foto: '/img/fotos/planta.webp',
    alt: 'Vista aérea de una planta de almacenamiento de gas LP con cuatro tanques y pipas en el andén de carga',
    ancho: 1896,
    alto: 1010,
    estado: 'Disponible',
    enlace: { texto: 'Conocer Plantas', href: PAGINAS.plantas.href },
  },
  {
    titulo: 'Pipas en ruta',
    texto: 'Equipos para sus unidades, empezando por el nuevo Secuenciador con filtro de corriente y señales separadas.',
    foto: '/img/fotos/pipa.webp',
    alt: 'Pipa de gas LP nueva, con tanque blanco montado sobre el chasis',
    ancho: 1400,
    alto: 804,
    estado: 'Disponible',
    enlace: { texto: 'Ver equipos para pipas', href: `${PAGINAS.productos.href}?categoria=Reparto` },
  },
  {
    titulo: 'Taller',
    texto: 'Taller de Pipas: orden de ingreso con firmas, tablero en tiempo real, refacciones e historial de cada unidad.',
    foto: '/img/fotos/taller.webp',
    alt: 'Taller con un tanque de gas LP sobre su estructura y pipas en mantenimiento al fondo',
    ancho: 1400,
    alto: 1235,
    estado: 'Disponible',
    enlace: { texto: 'Conocer Taller de Pipas', href: PAGINAS.taller.href },
  },
];

export default function Operacion() {
  return (
    <section id="operacion" aria-labelledby="operacion-titulo" className="border-b border-line">
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <h2 id="operacion-titulo" className="display-lg max-w-[22ch]">
          De la planta al taller, toda su operación
        </h2>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {escenas.map((e) => (
            <li key={e.titulo} className="flex">
              <article className="group flex flex-1 flex-col overflow-hidden rounded-xl border border-line-strong bg-ink-2">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
                  <img
                    src={e.foto}
                    alt={e.alt}
                    width={e.ancho}
                    height={e.alto}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-ink/85">
                    <Estado activo={e.estado === 'Disponible'}>{e.estado}</Estado>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="display-md">{e.titulo}</h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-mist-dim">{e.texto}</p>
                  <a
                    href={e.enlace.href}
                    className="mt-6 inline-flex items-center gap-2 self-start font-semibold text-paper no-underline hover:text-violet-hover"
                  >
                    {e.enlace.texto} <IconArrowRight />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
