import { PhoneFrame } from './Frames';
import { IconGlobe, IconMonitor, IconPhone } from './Icons';

const plataformas = [
  { Icono: IconGlobe, nombre: 'Web', texto: 'Desde el navegador de cualquier computadora, sin instalar nada.' },
  { Icono: IconMonitor, nombre: 'Escritorio', texto: 'Aplicación para Windows en la PC de recepción o de la oficina.' },
  { Icono: IconPhone, nombre: 'Android', texto: 'En el celular del técnico, con avisos de órdenes nuevas.' },
];

const telefonos = [
  { src: '/img/pipas/celular-tablero.webp', alt: 'Tablero de órdenes en el celular', desfase: 'lg:translate-y-0' },
  { src: '/img/pipas/celular-ticket.webp', alt: 'Detalle de una orden en el celular', desfase: 'lg:translate-y-16' },
  { src: '/img/pipas/celular-ingreso.webp', alt: 'Formulario de ingreso en el celular', desfase: 'lg:translate-y-32' },
];

export default function Multiplataforma() {
  return (
    <section id="multiplataforma" className="overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 items-start gap-16 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-x-12 lg:px-12 lg:py-32">
        <div className="min-w-0 lg:col-span-4 lg:pt-10">
          <h2 className="display-lg">En la oficina, en el taller y en el celular</h2>
          <p className="mt-6 max-w-[30rem]">
            Es la misma aplicación con los mismos datos en cada pantalla. El técnico no tiene que ir a la oficina para
            ver qué le toca.
          </p>
          <ul className="mt-10 grid gap-px border-y border-line bg-line">
            {plataformas.map(({ Icono, nombre, texto }) => (
              <li key={nombre} className="flex gap-4 bg-ink py-5">
                <Icono className="mt-0.5 shrink-0 text-mist" />
                <div>
                  <p className="font-semibold text-paper">{nombre}</p>
                  <p className="mt-1 text-[0.95rem] text-mist-dim">{texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 lg:col-span-8 lg:pb-32">
          <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-8">
            {telefonos.map((t) => (
              <PhoneFrame key={t.src} src={t.src} alt={t.alt} className={`w-[68vw] max-w-[18rem] shrink-0 snap-center sm:w-auto sm:max-w-none ${t.desfase}`} eager />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
