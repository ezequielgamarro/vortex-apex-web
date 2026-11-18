import { BrowserFrame } from './Frames';

const capacidades = [
  {
    titulo: 'Reportes de eficiencia',
    texto: 'Pipas ingresadas contra reparadas, tiempo promedio de reparación y desempeño de cada mecánico, por periodo.',
  },
  {
    titulo: 'Semáforo de llantas',
    texto: 'El estado de las llantas de cada pipa según su profundidad, para cambiarlas antes de que fallen.',
  },
  {
    titulo: 'Avisos de vencimiento',
    texto: 'Pólizas de las pipas y licencias de los operadores con aviso anticipado antes de que venzan.',
  },
  {
    titulo: 'Roles y permisos',
    texto: 'Recepción, mecánicos, jefe de taller y administración ven y hacen solo lo que les corresponde.',
  },
  {
    titulo: 'Auditoría',
    texto: 'Queda registrado quién creó, movió, firmó o modificó cada orden, y a qué hora.',
  },
  {
    titulo: 'Orden imprimible',
    texto: 'Cuando se necesita en papel, la orden se imprime completa, con sus firmas.',
  },
];

export default function Capacidades() {
  return (
    <section id="capacidades" className="border-b border-line bg-ink-2">
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="display-lg lg:col-span-6">Más allá de la orden de taller</h2>
          <p className="lead lg:col-span-5 lg:col-start-8 lg:self-end">
            Lo que la gerencia necesita para decidir y lo que el taller necesita para no quedarse parado.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-12 lg:gap-x-12">
          <BrowserFrame
            src="/img/pipas/reportes.webp"
            alt="Reporte de eficiencia del taller con pipas ingresadas, reparadas, tiempo promedio de reparación y eficiencia por mecánico"
            label="Taller de Pipas · Reportes"
            className="lg:col-span-7"
          />
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 xl:grid-cols-2">
            {capacidades.map((c) => (
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
