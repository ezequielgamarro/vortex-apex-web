import { enlaceWhatsApp } from '../config/contacto';
import Estado from './Estado';
import { IconArrowRight } from './Icons';

export default function TarjetaProducto({ producto, nivel = 'h3' }) {
  const Titulo = nivel;
  const consulta = enlaceWhatsApp(`Hola, quiero información sobre el equipo: ${producto.nombre}.`);
  const enlace = producto.ficha ?? consulta;
  const externo = !producto.ficha;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line-strong bg-ink-2">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-[#0d0e14]">
        <img
          src={producto.imagen}
          alt={producto.foto ? `Foto del ${producto.nombre.toLowerCase()}` : `Ilustración de ${producto.nombre.toLowerCase()}`}
          loading="lazy"
          width="480"
          height="360"
          className={`h-full w-full transition-transform duration-500 ease-out-expo group-hover:scale-[1.03] ${
            producto.foto ? 'object-cover' : 'object-contain p-4'
          }`}
        />
        <span className={`absolute top-4 left-4 ${producto.foto ? 'rounded-full bg-ink/85' : ''}`}>
          {producto.disponible ? <Estado activo>Disponible</Estado> : <Estado>Próximamente</Estado>}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Titulo className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.02em] text-paper">{producto.nombre}</Titulo>
        <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-mist-dim">{producto.texto}</p>
        <div className="mt-6 flex items-center justify-between gap-4">
          <a
            href={enlace}
            {...(externo ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="inline-flex items-center gap-2 font-semibold text-paper no-underline hover:text-violet-hover"
          >
            {producto.ficha ? 'Ver ficha' : 'Consultar'} <IconArrowRight />
          </a>
          {producto.codigo && <span className="tabular text-sm text-mist-dim">Ref. {producto.codigo}</span>}
        </div>
      </div>
    </article>
  );
}
