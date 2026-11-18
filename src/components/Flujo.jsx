import { useEffect, useRef, useState } from 'react';
import { BrowserFrame } from './Frames';

const pasos = [
  {
    id: 'paso-ingreso',
    corto: 'Ingreso',
    titulo: 'Recepción registra la pipa',
    texto:
      'La orden de taller se llena en la app: número económico, kilometraje, nivel de gas, conductor y motivo del ingreso. Firman quien entrega la unidad y quien la recibe.',
    puntos: ['Datos de la unidad cargados desde el catálogo', 'Firmas en pantalla, sin papel', 'Se puede guardar como borrador'],
    img: '/img/pipas/ingreso.webp',
    alt: 'Formulario de ingreso de una pipa al taller con datos de la unidad y firmas',
  },
  {
    id: 'paso-tablero',
    corto: 'Tablero',
    titulo: 'El técnico toma la orden',
    texto:
      'La orden aparece en el tablero de todos al mismo tiempo. El primer técnico que la toma se la queda, y el resto ve quién la está atendiendo.',
    puntos: ['Tablero compartido en tiempo real', 'Asignación «el primero que la toma»', 'Avisos en el celular del técnico'],
    img: '/img/pipas/tablero.webp',
    alt: 'Tablero de órdenes con columnas por estado y técnicos asignados',
  },
  {
    id: 'paso-refacciones',
    corto: 'Refacciones',
    titulo: 'Pide refacciones al almacén',
    texto:
      'Desde la orden, el técnico solicita las piezas. Almacén las surte contra el inventario y el sistema avisa cuando una refacción baja de su stock mínimo.',
    puntos: ['Solicitud ligada a la orden', 'Descuento de inventario', 'Alerta de stock mínimo'],
    img: '/img/pipas/refacciones.webp',
    alt: 'Pantalla de refacciones e inventario con alertas de stock mínimo',
  },
  {
    id: 'paso-cierre',
    corto: 'Cierre',
    titulo: 'Cierra con su firma',
    texto:
      'El técnico marca el trabajo realizado, se registran la mano de obra y las refacciones usadas, y firma. La orden queda cerrada con su comprobante interno.',
    puntos: ['Trabajos realizados y mano de obra', 'Firma del técnico', 'Comprobante con refacciones y mano de obra'],
    img: '/img/pipas/cierre.webp',
    alt: 'Orden de taller terminada con el trabajo realizado y la firma del técnico',
  },
  {
    id: 'paso-historial',
    corto: 'Historial',
    titulo: 'Todo queda en el historial de la pipa',
    texto:
      'Cada unidad acumula sus órdenes: qué falla tuvo, qué se le cambió, quién la atendió y cuándo. Ya no depende de buscar papeles en un archivero.',
    puntos: ['Consulta por número económico', 'Órdenes y refacciones por unidad', 'Registro de quién hizo cada cambio'],
    img: '/img/pipas/historial.webp',
    alt: 'Historial de órdenes de una pipa',
  },
];

// Zoom a la zona que narra cada paso: [escala, origen].
const focos = {
  'paso-ingreso': [1.3, '50% 100%'],
  'paso-tablero': [1.3, '30% 22%'],
  'paso-refacciones': [1.5, '56% 42%'],
  'paso-cierre': [1.55, '50% 30%'],
  'paso-historial': [1.35, '55% 38%'],
};

export default function Flujo() {
  const [activo, setActivo] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((en) => {
          if (en.isIntersecting) setActivo(Number(en.target.dataset.index));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="relative border-b border-line">
      <div className="mx-auto max-w-[90rem] px-5 pt-24 sm:px-8 lg:px-12 lg:pt-32">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="display-lg lg:col-span-6">De la orden en papel al historial de cada pipa</h2>
          <p className="lead lg:col-span-5 lg:col-start-8 lg:self-end">
            Así recorre el taller una orden en Taller de Pipas, con las pantallas reales del programa.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[90rem] px-5 pb-24 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:px-12 lg:pb-32">
        <div className="lg:col-span-4">
          {pasos.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              data-index={i}
              ref={(el) => (refs.current[i] = el)}
              className="flex flex-col justify-center border-t border-line py-14 first:border-t-0 lg:min-h-[78vh] lg:border-t-0 lg:py-0"
            >
              <h3
                className={`display-md transition-colors duration-500 ${
                  i === activo ? 'lg:text-paper' : 'lg:text-mist-dim'
                }`}
              >
                <span className="tabular mr-3 text-mist-dim lg:hidden">{String(i + 1).padStart(2, '0')}</span>
                {p.titulo}
              </h3>
              <p className="mt-4 max-w-[34rem]">{p.texto}</p>
              <ul className="mt-6 grid gap-2.5">
                {p.puntos.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[0.95rem] text-mist">
                    <span className="mt-[0.8em] h-px w-4 shrink-0 bg-mist-dim" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <BrowserFrame src={p.img} alt={p.alt} label={`Taller de Pipas · ${p.corto}`} className="mt-10 lg:hidden" />
            </article>
          ))}
        </div>

        <div className="hidden lg:col-span-8 lg:block">
          <div className="sticky top-[max(6rem,calc(50vh-min(24vw,21rem)))]">
            <ol className="mb-5 grid grid-cols-5 gap-2" aria-label="Pasos">
              {pasos.map((p, i) => (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    className={`group block border-t-2 pt-3 no-underline transition-colors duration-500 ${
                      i <= activo ? 'border-violet' : 'border-line-strong'
                    }`}
                    aria-current={i === activo ? 'step' : undefined}
                  >
                    <span className={`label tabular ${i === activo ? 'text-paper' : 'text-mist-dim group-hover:text-mist'}`}>
                      {String(i + 1).padStart(2, '0')} · {p.corto}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
            <BrowserFrame label={`Taller de Pipas · ${pasos[activo].corto}`}>
              <div className="relative aspect-[16/10]">
                {pasos.map((p, i) => (
                  <div
                    key={p.id}
                    className="flujo-shot absolute inset-0 overflow-hidden"
                    data-state={i === activo ? 'on' : i < activo ? 'past' : 'next'}
                    aria-hidden={i === activo ? undefined : true}
                  >
                    <img
                      src={p.img}
                      alt={i === activo ? p.alt : ''}
                      decoding="async"
                      className="flujo-zoom h-full w-full object-cover object-top"
                      style={{ transformOrigin: focos[p.id][1], '--zoom': focos[p.id][0] }}
                      data-on={i === activo ? 'true' : undefined}
                    />
                  </div>
                ))}
              </div>
            </BrowserFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
