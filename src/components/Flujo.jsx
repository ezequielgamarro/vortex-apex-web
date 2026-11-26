import { useRef, useState } from 'react';
import { BrowserFrame } from './Frames';
import { IconArrowRight } from './Icons';

const dos = (n) => String(n).padStart(2, '0');

// Recorrido paso a paso de un módulo: el usuario elige el paso (pestañas o Anterior/Siguiente) y ve la pantalla
// completa con su explicación al lado. Sin autoplay ni cambios por scroll.
// pasos: [{ id, corto, titulo, texto, puntos[], img, alt }]
export default function Flujo({ titulo, intro, pasos, producto }) {
  const [activo, setActivo] = useState(0);
  const tabs = useRef([]);
  const lista = useRef(null);
  const paso = pasos[activo];
  const ultimo = pasos.length - 1;

  const ir = (i, enfocar = false) => {
    const destino = Math.max(0, Math.min(ultimo, i));
    setActivo(destino);
    const tab = tabs.current[destino];
    // En celular la fila de pasos se desliza: mantener visible el paso activo sin mover la página.
    tab?.parentElement.scrollTo({ left: tab.offsetLeft - 20, behavior: 'smooth' });
    if (enfocar) tab?.focus({ preventScroll: true });
  };

  // Anterior/Siguiente: si los pasos quedaron arriba de la pantalla (celular), volver a ellos para ver la captura nueva.
  const mover = (delta) => {
    ir(activo + delta);
    if (lista.current && lista.current.getBoundingClientRect().top < 0) {
      lista.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Flechas, Inicio y Fin mueven entre pestañas (patrón ARIA de pestañas).
  const alTeclado = (e) => {
    const mapa = { ArrowRight: activo + 1, ArrowLeft: activo - 1, Home: 0, End: ultimo };
    if (e.key in mapa) {
      e.preventDefault();
      ir(mapa[e.key], true);
    }
  };

  return (
    <section id="como-funciona" className="relative border-b border-line">
      <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="display-lg lg:col-span-6">{titulo}</h2>
          <p className="lead lg:col-span-5 lg:col-start-8 lg:self-end">{intro}</p>
        </div>

        <div
          role="tablist"
          aria-label={`Pasos de ${producto}`}
          ref={lista}
          onKeyDown={alTeclado}
          style={{ '--pasos': pasos.length }}
          className="relative -mx-5 mt-14 flex scroll-mt-24 gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-[repeat(var(--pasos),minmax(0,1fr))] sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {pasos.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => (tabs.current[i] = el)}
              type="button"
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={i === activo}
              aria-controls="panel-paso"
              tabIndex={i === activo ? 0 : -1}
              onClick={() => ir(i)}
              className={`group min-w-[9.5rem] shrink-0 cursor-pointer border-t-2 pt-3 text-left transition-colors duration-300 sm:min-w-0 ${
                i <= activo ? 'border-violet' : 'border-line-strong hover:border-mist-dim'
              }`}
            >
              <span className={`label tabular block ${i === activo ? 'text-paper' : 'text-mist-dim group-hover:text-mist'}`}>
                {dos(i + 1)} · {p.corto}
              </span>
            </button>
          ))}
        </div>

        <div
          id="panel-paso"
          role="tabpanel"
          aria-labelledby={`tab-${paso.id}`}
          className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-12"
        >
          <div className="lg:col-span-4" aria-live="polite">
            <p className="label tabular text-mist-dim">
              Paso {dos(activo + 1)} de {dos(pasos.length)}
            </p>
            <h3 key={paso.id} className="display-md mt-4">
              {paso.titulo}
            </h3>
            <p className="mt-4 max-w-[34rem]">{paso.texto}</p>
            <ul className="mt-6 grid gap-2.5">
              {paso.puntos.map((t) => (
                <li key={t} className="flex items-start gap-3 text-[0.95rem] text-mist">
                  <span className="mt-[0.8em] h-px w-4 shrink-0 bg-mist-dim" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex gap-3">
              <button type="button" className="btn btn-ghost" onClick={() => mover(-1)} disabled={activo === 0}>
                <IconArrowRight className="rotate-180" /> Anterior
              </button>
              <button type="button" className="btn btn-primary" onClick={() => mover(1)} disabled={activo === ultimo}>
                Siguiente <IconArrowRight />
              </button>
            </div>
          </div>

          <div className="order-first lg:order-none lg:col-span-8">
            <BrowserFrame label={`${producto} · ${paso.corto}`}>
              <div className="relative aspect-[16/10]">
                {pasos.map((p, i) => (
                  <img
                    key={p.id}
                    src={p.img}
                    alt={i === activo ? p.alt : ''}
                    aria-hidden={i === activo ? undefined : true}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    width="2000"
                    height="1250"
                    className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
                      i === activo ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </BrowserFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
