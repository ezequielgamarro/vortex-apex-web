import { BrowserFrame } from './Frames';

// Capacidades de un módulo: la lista de lo que resuelve, con una captura al lado si la hay.
// captura (opcional): { src, alt, label } · items: [{ titulo, texto }]
export default function Capacidades({ titulo, intro, captura, items }) {
  const columnasLista = captura
    ? 'sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 xl:grid-cols-2'
    : 'sm:grid-cols-2 lg:col-span-12 lg:grid-cols-3';
  return (
    <section id="capacidades" className="border-b border-line bg-ink-2">
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="display-lg lg:col-span-6">{titulo}</h2>
          <p className="lead lg:col-span-5 lg:col-start-8 lg:self-end">{intro}</p>
        </div>

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-12 lg:gap-x-12">
          {captura && <BrowserFrame src={captura.src} alt={captura.alt} label={captura.label} className="lg:col-span-7" />}
          <dl className={`grid gap-x-10 ${columnasLista}`}>
            {items.map((c) => (
              <div key={c.titulo} className="border-t border-line-strong pt-5 pb-8">
                <dt className="font-display text-[0.9rem] font-semibold uppercase tracking-[0.02em] text-paper">{c.titulo}</dt>
                <dd className="mt-2.5 text-[0.95rem] text-mist">{c.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
