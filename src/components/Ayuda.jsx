import { enlaceWhatsApp } from '../config/contacto';
import { IconArrowRight } from './Icons';

// «¿Cómo podemos ayudarle?»: tres caminos directos antes del formulario.
const caminos = [
  {
    titulo: 'Quiero ver el software',
    texto: 'Agende una demostración con las unidades y la forma de trabajar de su gasera.',
    accion: 'Llenar el formulario',
    href: '#contacto',
  },
  {
    titulo: 'Busco un equipo',
    texto: 'Pregúntenos por el Secuenciador o por el equipo que necesita para sus pipas o su planta.',
    accion: 'Escribir por WhatsApp',
    href: enlaceWhatsApp('Hola, busco un equipo para mi gasera.'),
    externo: true,
  },
  {
    titulo: 'Ya uso Vortex Apex',
    texto: 'Si su gasera ya trabaja con la plataforma y necesita soporte, escríbanos directo.',
    accion: 'Pedir soporte',
    href: enlaceWhatsApp('Hola, ya uso Vortex Apex 369 y necesito soporte.'),
    externo: true,
  },
];

export default function Ayuda() {
  return (
    <section aria-labelledby="ayuda-titulo">
      <div className="mx-auto max-w-[90rem] px-5 pt-24 sm:px-8 lg:px-12 lg:pt-32">
        <h2 id="ayuda-titulo" className="display-lg">
          ¿Cómo podemos ayudarle?
        </h2>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {caminos.map((c) => (
            <li key={c.titulo} className="flex">
              <a
                href={c.href}
                {...(c.externo ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group flex flex-1 flex-col bg-ink px-6 py-8 no-underline transition-colors hover:bg-ink-2 sm:px-8"
              >
                <span className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.02em] text-paper">{c.titulo}</span>
                <span className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-mist-dim">{c.texto}</span>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-paper group-hover:text-violet-hover">
                  {c.accion} <IconArrowRight />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
