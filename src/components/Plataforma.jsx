import { IconArrowRight } from './Icons';
import Estado from './Estado';

const proximos = [
  { nombre: 'Personal', texto: 'Expedientes, documentos y control del personal de la gasera.' },
  { nombre: 'Plantas', texto: 'Operación diaria de las plantas de almacenamiento.' },
  { nombre: 'Contabilidad', texto: 'Costos del taller y de la operación, sin volver a capturarlos.' },
];

export default function Plataforma() {
  return (
    <section id="plataforma" className="border-b border-line">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-x-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-5 xl:col-span-4">
          <h2 className="display-lg">Una plataforma, un módulo por área</h2>
          <p className="mt-6 max-w-[30rem]">
            Vortex Apex 369 crece por módulos. Taller de Pipas ya está en operación; los siguientes se construyen sobre la
            misma base: un solo inicio de sesión, los mismos usuarios y permisos, y la información que se registra una
            sola vez.
          </p>
        </div>

        <div className="lg:col-span-7 xl:col-span-8">
          <article className="rounded-xl border border-line-strong bg-ink-2 p-6 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="display-md">Taller de Pipas</h3>
              <Estado activo>Disponible</Estado>
            </div>
            <p className="mt-4 max-w-[40rem]">
              Mantenimiento de la flota de pipas de principio a fin: desde que la unidad entra al taller hasta que sale
              con su historial completo.
            </p>
            <a href="/taller-de-pipas.html#como-funciona" className="mt-8 inline-flex items-center gap-2 font-semibold text-paper no-underline hover:text-violet-hover">
              Ver el recorrido de una orden <IconArrowRight />
            </a>
          </article>

          <ul className="mt-4 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {proximos.map((m) => (
              <li key={m.nombre} className="bg-ink px-6 py-7">
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
