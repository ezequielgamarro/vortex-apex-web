import { PAGINAS } from '../config/paginas';
import { enlaceWhatsApp } from '../config/contacto';
import { IconArrowRight, IconWhatsApp } from './Icons';

// Cierre de cada página interna: una sola acción, agendar la demo.
export default function BandaCTA({
  titulo = 'Vea la plataforma con los datos de su gasera',
  texto,
  whatsapp = 'Hola, quiero agendar una demostración de Vortex Apex 369.',
}) {
  return (
    <section className="border-b border-line bg-ink-2">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-24">
        <div className="max-w-[40rem]">
          <h2 className="display-lg">{titulo}</h2>
          <p className="mt-5">
            {texto ??
              'Le mostramos Vortex Apex 369 funcionando, con sus unidades y su forma de trabajar. La demostración se agenda por WhatsApp.'}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a href={PAGINAS.contacto.href} className="btn btn-primary">
            Agendar una demostración <IconArrowRight />
          </a>
          <a
            href={enlaceWhatsApp(whatsapp)}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            <IconWhatsApp /> Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
