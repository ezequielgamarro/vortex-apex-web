import Layout from '../components/Layout';
import CabeceraPagina from '../components/CabeceraPagina';
import BandaCTA from '../components/BandaCTA';
import Estado from '../components/Estado';
import { BrowserFrame } from '../components/Frames';
import { IconArrowRight } from '../components/Icons';
import { PAGINAS } from '../config/paginas';

const areas = [
  {
    nombre: 'Taller de pipas',
    disponible: true,
    texto:
      'Mantenimiento de la flota de pipas de principio a fin: orden de ingreso con firmas, tablero en tiempo real, refacciones contra inventario, cierre con firma e historial de cada unidad.',
  },
  {
    nombre: 'Personal',
    texto: 'Expedientes, documentos y control del personal de la gasera.',
  },
  {
    nombre: 'Plantas',
    texto: 'Operación diaria de las plantas de almacenamiento.',
  },
  {
    nombre: 'Contabilidad',
    texto: 'Costos del taller y de la operación, sin volver a capturarlos.',
  },
];

const base = [
  { titulo: 'Un solo inicio de sesión', texto: 'Cada persona entra con su usuario a todas las áreas que le corresponden.' },
  { titulo: 'Mismos usuarios y permisos', texto: 'Los roles se definen una vez y valen para toda la plataforma.' },
  { titulo: 'La información se captura una vez', texto: 'Lo que registra un área queda disponible para las demás.' },
  { titulo: 'Web, escritorio y Android', texto: 'La misma aplicación en la oficina, en el taller y en el celular.' },
];

export default function PaginaPlataforma() {
  return (
    <Layout actual="plataforma">
      <CabeceraPagina pagina="plataforma" titulo="Una plataforma para toda la gasera">
        Vortex Apex 369 reúne el taller de pipas, el personal, las plantas y la contabilidad en un solo sistema. Taller
        de Pipas ya está en operación; las demás áreas se suman sobre la misma base.
      </CabeceraPagina>

      <section aria-labelledby="areas" className="border-b border-line">
        <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <h2 id="areas" className="display-lg">
            Las cuatro áreas
          </h2>
          <ul className="mt-12 border-t border-line">
            {areas.map((a) => (
              <li key={a.nombre} className="border-b border-line py-10 lg:py-12">
                <div className="grid gap-6 lg:grid-cols-12 lg:gap-x-12">
                  <div className={a.disponible ? 'lg:col-span-5' : 'lg:col-span-12'}>
                    <div className="flex flex-wrap items-center gap-4">
                      <h3 className="display-md">{a.nombre}</h3>
                      {a.disponible ? <Estado activo>Disponible</Estado> : <Estado>Próximamente</Estado>}
                    </div>
                    <p className="mt-4 max-w-[38rem]">{a.texto}</p>
                    {a.disponible && (
                      <a
                        href={PAGINAS.taller.href}
                        className="mt-8 inline-flex items-center gap-2 font-semibold text-paper no-underline hover:text-violet-hover"
                      >
                        Conocer Taller de Pipas <IconArrowRight />
                      </a>
                    )}
                  </div>
                  {a.disponible && (
                    <div className="lg:col-span-7">
                      <BrowserFrame
                        src="/img/pipas/tablero.webp"
                        alt="Tablero de Taller de Pipas con órdenes en espera, en taller, terminadas, en taller externo y canceladas"
                        label="Taller de Pipas · Tablero"
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="base" className="border-b border-line">
        <div className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <h2 id="base" className="display-lg max-w-[20ch]">
            Lo que comparten todas las áreas
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {base.map((b) => (
              <li key={b.titulo} className="bg-ink-2 px-6 py-8">
                <h3 className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.02em] text-paper">{b.titulo}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-mist-dim">{b.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BandaCTA />
    </Layout>
  );
}
