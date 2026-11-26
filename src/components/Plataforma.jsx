import { IconArrowRight } from './Icons';
import Estado from './Estado';
import { PAGINAS } from '../config/paginas';
import { MODULOS_DISPONIBLES, MODULOS_PROXIMOS } from '../data/modulos';

export default function Plataforma() {
  return (
    <section id="plataforma" className="border-b border-line">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-x-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-5 xl:col-span-4">
          <h2 className="display-lg">Una plataforma, un módulo por área</h2>
          <p className="mt-6 max-w-[30rem]">
            Vortex Apex 369 crece por módulos. Taller de Pipas, Sellos y Plantas ya están en operación; los siguientes se
            construyen sobre la misma base: un solo inicio de sesión, los mismos usuarios y permisos, y la información que
            se registra una sola vez.
          </p>
        </div>

        <div className="lg:col-span-7 xl:col-span-8">
          <ul className="grid gap-4">
            {MODULOS_DISPONIBLES.map((m) => (
              <li key={m.clave}>
                <article className="rounded-xl border border-line-strong bg-ink-2 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="display-md">{m.nombre}</h3>
                    <Estado activo>Disponible</Estado>
                  </div>
                  <p className="mt-3 max-w-[40rem]">{m.texto}</p>
                  <a
                    href={PAGINAS[m.pagina].href}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-paper no-underline hover:text-violet-hover"
                  >
                    {m.enlace} <IconArrowRight />
                  </a>
                </article>
              </li>
            ))}
          </ul>

          <ul className="mt-4 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {MODULOS_PROXIMOS.map((m) => (
              <li key={m.clave} className="bg-ink px-6 py-7">
                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.02em] text-paper">{m.nombre}</h3>
                  <Estado>Próximamente</Estado>
                </div>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-mist-dim">{m.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
