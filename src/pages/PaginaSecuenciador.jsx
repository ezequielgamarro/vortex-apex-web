import Layout from '../components/Layout';
import CabeceraPagina from '../components/CabeceraPagina';
import BandaCTA from '../components/BandaCTA';
import Estado from '../components/Estado';
import { IconArrowRight, IconWhatsApp } from '../components/Icons';
import { enlaceWhatsApp } from '../config/contacto';

// Contenido tomado del documento técnico «Nuevo Secuenciador» entregado por el dueño.
const MENSAJE = 'Hola, quiero información sobre el nuevo Secuenciador para pipas.';

const mejoras = [
  {
    titulo: 'Filtro de corriente',
    texto:
      'La batería de la pipa sube y baja de voltaje con la carga y la descarga. El filtro protege al secuenciador de esa variación, que era lo que dañaba al equipo anterior.',
  },
  {
    titulo: 'Solo consume durante el servicio',
    texto:
      'Se enciende cuando empieza el servicio y se apaga cuando termina. No descarga la batería mientras la unidad está detenida o pasa días en el taller.',
  },
  {
    titulo: 'Señales separadas',
    texto:
      'La válvula solenoide y la válvula interna tienen cada una su propia señal. En el secuenciador anterior compartían la misma y la línea se sobrecargaba. Con las señales divididas, el voltaje se reparte mejor y el equipo dura más.',
  },
  {
    titulo: 'Indicador de paro de emergencia',
    texto: 'Se ve a simple vista si el paro de emergencia está activo o no.',
  },
];

const indicadores = ['Paro de emergencia', 'Toma de fuerza', 'Válvula interna', 'Solenoide', 'Señal de distribuidor'];

const pines = [
  { pin: 1, senal: 'Negativo (GND)', cable: 'Negro' },
  { pin: 2, senal: 'Señal de distribuidor', cable: 'Rojo' },
  { pin: 3, senal: 'Solenoide', cable: 'Rojo' },
  { pin: 4, senal: 'Válvula interna', cable: 'Rojo' },
  { pin: 5, senal: 'Toma de fuerza', cable: 'Azul' },
  { pin: 6, senal: 'Paro de emergencia', cable: 'Blanco' },
];

export default function PaginaSecuenciador() {
  return (
    <Layout actual="productos">
      <CabeceraPagina
        pagina="secuenciador"
        titulo="Nuevo Secuenciador para pipas"
        pie={
          <div className="flex flex-col items-start gap-6">
            <Estado activo>Disponible</Estado>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={enlaceWhatsApp(MENSAJE)} target="_blank" rel="noreferrer" className="btn btn-primary">
                <IconWhatsApp /> Consultar por WhatsApp
              </a>
              <a href="#conexion" className="btn btn-ghost">
                Ver cómo se conecta <IconArrowRight />
              </a>
            </div>
          </div>
        }
      >
        Secuenciador actualizado para pipas de gas LP. Corrige las fallas de voltaje y consumo del modelo anterior y se
        instala en su lugar sin cambiar el cableado.
      </CabeceraPagina>

      <section aria-labelledby="mejoras" className="border-b border-line">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-x-12 lg:px-12 lg:py-28">
          <figure className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line-strong bg-ink-2">
              <img
                src="/img/productos/secuenciador.webp"
                alt="Secuenciador con su bornera de seis cables y los indicadores de paro de emergencia, toma de fuerza, válvula interna, solenoide y señal de distribuidor"
                width="1100"
                height="1100"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </figure>

          <div className="min-w-0 lg:col-span-7">
            <h2 id="mejoras" className="display-lg">
              Qué mejora
            </h2>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {mejoras.map((m) => (
                <li key={m.titulo} className="bg-ink px-6 py-7">
                  <h3 className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.02em] text-paper">
                    {m.titulo}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-mist-dim">{m.texto}</p>
                </li>
              ))}
            </ul>

            <h3 className="mt-14 font-sans text-lg font-semibold text-paper">Indicadores en el frente</h3>
            <p className="mt-2 text-[0.95rem] text-mist-dim">Una luz por señal, para revisar el estado sin abrir la instalación.</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {indicadores.map((i) => (
                <li key={i} className="rounded-full border border-line-strong px-3 py-1 text-sm text-mist">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="conexion" aria-labelledby="conexion-titulo" className="border-b border-line bg-ink-2">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-x-12 lg:px-12 lg:py-28">
          <div className="min-w-0 lg:col-span-7">
            <h2 id="conexion-titulo" className="display-lg">
              Cómo se conecta
            </h2>
            <p className="mt-6 max-w-[38rem]">
              La conexión no modifica la instalación del secuenciador anterior. Lo único que se elimina es la alimentación
              de 12 V, porque este secuenciador no necesita estar alimentado para funcionar.
            </p>

            <div className="mt-10 overflow-x-auto rounded-xl border border-line-strong">
              <table className="w-full min-w-[26rem] border-collapse text-left">
                <caption className="sr-only">Conexiones de la bornera del secuenciador</caption>
                <thead>
                  <tr className="border-b border-line-strong bg-ink">
                    <th scope="col" className="px-5 py-3 text-sm font-medium text-mist-dim">Pin</th>
                    <th scope="col" className="px-5 py-3 text-sm font-medium text-mist-dim">Señal</th>
                    <th scope="col" className="px-5 py-3 text-sm font-medium text-mist-dim">Cable</th>
                  </tr>
                </thead>
                <tbody>
                  {pines.map((p) => (
                    <tr key={p.pin} className="border-b border-line last:border-b-0">
                      <td className="tabular px-5 py-3.5 font-display font-semibold text-paper">{p.pin}</td>
                      <td className="px-5 py-3.5 text-paper">{p.senal}</td>
                      <td className="px-5 py-3.5 text-mist-dim">{p.cable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <figure className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-line-strong bg-ink">
              <img
                src="/img/productos/secuenciador-conexion.webp"
                alt="Bornera del secuenciador con los pines numerados del 1 al 6 y sus cables conectados"
                width="900"
                height="930"
                loading="lazy"
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-mist-dim">Bornera vista desde arriba, con los pines numerados.</figcaption>
          </figure>
        </div>
      </section>

      <BandaCTA
        titulo="¿Quiere el Secuenciador para sus pipas?"
        texto="Escríbanos cuántas unidades tiene y le respondemos por WhatsApp con la información."
        whatsapp={MENSAJE}
      />
    </Layout>
  );
}
