import { PAGINAS } from '../config/paginas';
import { enlaceWhatsApp } from '../config/contacto';
import Estado from './Estado';
import { IconArrowRight } from './Icons';

const puntos = [
  'Filtro de corriente contra el voltaje variable de la batería.',
  'Solo consume durante el servicio: no descarga la unidad detenida.',
  'Señales separadas para la válvula solenoide y la válvula interna.',
  'Indicador visible del paro de emergencia.',
];

export default function ProductoDestacado() {
  return (
    <section id="producto-destacado" aria-labelledby="destacado-titulo" className="border-b border-line bg-ink-2">
      <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-x-14 lg:px-12 lg:py-32">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-xl border border-line-strong bg-ink">
            <img
              src="/img/productos/secuenciador.webp"
              alt="Nuevo Secuenciador para pipas con su bornera de seis cables y cinco indicadores luminosos"
              width="1100"
              height="1100"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <Estado activo>Nuevo · Disponible</Estado>
          <h2 id="destacado-titulo" className="display-lg mt-6">
            Nuevo Secuenciador para pipas
          </h2>
          <p className="mt-6 max-w-[38rem]">
            Corrige las fallas de voltaje y consumo del modelo anterior y se instala en su lugar sin cambiar el cableado.
          </p>
          <ul className="mt-8 grid max-w-[40rem] gap-3">
            {puntos.map((p) => (
              <li key={p} className="flex gap-3 text-mist">
                <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-mist-dim" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={PAGINAS.secuenciador.href} className="btn btn-ghost">
              Ver ficha técnica <IconArrowRight />
            </a>
            <a
              href={enlaceWhatsApp('Hola, quiero información sobre el nuevo Secuenciador para pipas.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start px-1 py-3 font-semibold text-paper no-underline hover:text-violet-hover sm:self-auto"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
