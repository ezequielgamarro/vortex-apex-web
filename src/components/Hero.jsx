import { BrowserFrame, PhoneFrame } from './Frames';
import { IconArrowRight } from './Icons';
import { PAGINAS } from '../config/paginas';
import { MODULOS } from '../data/modulos';

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div className="relative pt-[4.5rem]">
      {/* Foto real de una planta de gas LP a todo el ancho, detrás del software que la administra. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src="/img/fotos/planta.webp"
          alt=""
          width="1896"
          height="1010"
          fetchPriority="high"
          className="h-full w-full object-cover object-[60%_55%]"
        />
        <div className="absolute inset-0 bg-ink/75 lg:bg-transparent lg:bg-linear-to-r lg:from-ink/95 lg:via-ink/60 lg:to-ink/15" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink to-transparent" />
      </div>
      <div className="mx-auto grid max-w-[90rem] items-center gap-y-14 px-5 pt-12 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-x-10 lg:px-12 lg:pt-12 lg:pb-16">
        <div className="rise lg:col-span-6 2xl:col-span-5">
          <h1 className="display-xl">
            Software de gestión integral <span className="block">para gaseras</span>
          </h1>
          <p className="lead mt-7">
            El taller de pipas, los sellos de seguridad y la operación de sus plantas en una sola plataforma, con los
            mismos usuarios y datos. En web, escritorio y Android.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="/contacto.html" className="btn btn-primary">
              Agendar una reunión <IconArrowRight />
            </a>
            <a href="/taller-de-pipas.html#como-funciona" className="btn btn-ghost">
              Ver cómo funciona <IconArrowRight />
            </a>
          </div>
        </div>

        <div className="rise rise-2 relative lg:col-span-6 2xl:col-span-7">
          <div className="relative lg:-mr-[max(3rem,calc((100vw-90rem)/2+3rem))]">
            <BrowserFrame
              src="/img/pipas/tablero.webp"
              alt="Tablero de Taller de Pipas con órdenes en espera, en taller, terminadas, en taller externo y canceladas"
              label="Taller de Pipas · Tablero"
              eager
            />
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
        <dl className="mx-auto grid max-w-[90rem] gap-px bg-line sm:grid-cols-2 lg:grid-cols-5" aria-label="Áreas de la plataforma">
          {MODULOS.map((m) => (
            <div key={m.clave} className="bg-ink-2 px-5 py-7 last:sm:col-span-2 last:lg:col-span-1 sm:px-8 lg:px-7">
              <dt className="font-display text-[0.9rem] font-semibold uppercase tracking-[0.02em] text-paper">
                {m.disponible ? (
                  <a href={PAGINAS[m.pagina].href} className="text-paper no-underline hover:text-violet-hover">
                    {m.nombre}
                  </a>
                ) : (
                  m.nombre
                )}
              </dt>
              <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-mist-dim">
                {m.resumen}
                {!m.disponible && <span className="mt-2 block text-sm text-mist-dim/70">Próximamente</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
