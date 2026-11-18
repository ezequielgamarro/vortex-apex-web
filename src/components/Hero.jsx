import { BrowserFrame, PhoneFrame } from './Frames';
import { IconArrowRight } from './Icons';

const areas = [
  { titulo: 'Taller de pipas', texto: 'Órdenes de ingreso, tablero en tiempo real, refacciones e historial de cada unidad.' },
  { titulo: 'Personal', texto: 'Expedientes, documentos y control del personal de la gasera.' },
  { titulo: 'Plantas', texto: 'Operación diaria de las plantas de almacenamiento.' },
  { titulo: 'Contabilidad', texto: 'Costos del taller y de la operación, sin volver a capturarlos.' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="pt-[4.5rem]">
      <div className="mx-auto grid max-w-[90rem] items-center gap-y-14 px-5 pt-12 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-x-10 lg:px-12 lg:pt-12 lg:pb-16">
        <div className="rise lg:col-span-6 2xl:col-span-5">
          <h1 className="display-xl">
            Software de gestión integral <span className="block">para gaseras</span>
          </h1>
          <p className="lead mt-7">
            Taller de pipas, personal, plantas y contabilidad de su gasera en una sola plataforma, con los mismos usuarios
            y datos. En web, escritorio y Android.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="/contacto.html" className="btn btn-primary">
              Agendar una demostración <IconArrowRight />
            </a>
            <a href="/taller-de-pipas.html#como-funciona" className="btn btn-ghost">
              Ver cómo funciona <IconArrowRight />
            </a>
          </div>
        </div>

        <div className="rise rise-2 relative lg:col-span-6 2xl:col-span-7">
          <div className="relative pt-[21%] lg:-mr-[max(3rem,calc((100vw-90rem)/2+3rem))]">
            {/* Foto real de una planta de gas LP detrás del software que la administra. */}
            <img
              src="/img/fotos/planta.webp"
              alt="Planta de almacenamiento de gas LP vista desde arriba"
              width="1600"
              height="854"
              fetchPriority="high"
              className="absolute top-0 right-0 aspect-[2.6/1] w-[82%] rounded-xl border border-line-strong object-cover object-[50%_62%]"
            />
            <div className="relative ml-[6%]">
            <BrowserFrame
              src="/img/pipas/tablero.webp"
              alt="Tablero de Taller de Pipas con órdenes en espera, en taller, terminadas, en taller externo y canceladas"
              label="Taller de Pipas · Tablero"
              eager
            />
            </div>
          </div>
          <PhoneFrame
            src="/img/pipas/celular-tablero.webp"
            alt="Tablero de órdenes en la app de Android"
            className="absolute -bottom-10 -left-3 hidden w-[30%] max-w-[13rem] sm:block sm:-left-6 lg:left-4 2xl:-left-12"
            eager
          />
        </div>
      </div>
      </div>

      <div className="border-y border-line bg-ink-2">
        <dl className="mx-auto grid max-w-[90rem] gap-px bg-line sm:grid-cols-2 lg:grid-cols-4" aria-label="Áreas de la plataforma">
          {areas.map((h) => (
            <div key={h.titulo} className="bg-ink-2 px-5 py-7 sm:px-8 lg:px-10">
              <dt className="font-display text-[0.9rem] font-semibold uppercase tracking-[0.02em] text-paper">{h.titulo}</dt>
              <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-mist-dim">{h.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
