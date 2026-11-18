import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import CabeceraPagina from '../components/CabeceraPagina';
import BandaCTA from '../components/BandaCTA';
import TarjetaProducto from '../components/TarjetaProducto';
import { CATEGORIAS, PRODUCTOS } from '../data/productos';

const TODOS = 'Todos';

// La categoría elegida vive en la URL (?categoria=Reparto) para poder enlazarla.
function categoriaDeUrl() {
  const c = new URLSearchParams(window.location.search).get('categoria');
  return CATEGORIAS.includes(c) ? c : TODOS;
}

function Filtro({ actual, onCambiar }) {
  const opciones = [TODOS, ...CATEGORIAS];
  const cuenta = (c) => (c === TODOS ? PRODUCTOS.length : PRODUCTOS.filter((p) => p.categoria === c).length);

  return (
    <div role="group" aria-label="Filtrar por categoría">
      <p className="label hidden text-mist-dim lg:block">Categorías</p>
      <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-5 lg:grid lg:gap-0 lg:overflow-visible lg:border-t lg:border-line lg:px-0">
        {opciones.map((c) => {
          const activo = c === actual;
          return (
            <li key={c} className="shrink-0 lg:border-b lg:border-line">
              <button
                type="button"
                aria-pressed={activo}
                onClick={() => onCambiar(c)}
                className={`flex w-full items-center justify-between gap-4 rounded-full border px-4 py-2 text-[0.95rem] transition-colors lg:rounded-none lg:border-0 lg:px-0 lg:py-3.5 ${
                  activo
                    ? 'border-violet bg-violet/10 text-paper lg:bg-transparent lg:font-semibold'
                    : 'border-line-strong text-mist hover:text-paper'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  {activo && <span className="hidden h-2 w-2 rounded-full bg-violet lg:block" aria-hidden="true" />}
                  {c}
                </span>
                <span className="tabular text-sm text-mist-dim">{cuenta(c)}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function PaginaProductos() {
  const [categoria, setCategoria] = useState(categoriaDeUrl);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (categoria === TODOS) url.searchParams.delete('categoria');
    else url.searchParams.set('categoria', categoria);
    window.history.replaceState(null, '', url);
  }, [categoria]);
  const lista = categoria === TODOS ? PRODUCTOS : PRODUCTOS.filter((p) => p.categoria === categoria);

  return (
    <Layout actual="productos">
      <CabeceraPagina pagina="productos" titulo="Equipos para la operación de su gasera">
        Ya está disponible el nuevo Secuenciador para pipas. El resto del catálogo (terminales, impresoras, displays y
        sensores) está en preparación: pregúntenos por el equipo que necesita. Esos equipos se muestran como referencia
        mientras definimos el catálogo.
      </CabeceraPagina>

      <section aria-labelledby="catalogo" className="border-b border-line">
        <h2 id="catalogo" className="sr-only">
          Catálogo
        </h2>
        <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:gap-x-12 lg:px-12 lg:py-20">
          <aside className="min-w-0 lg:col-span-3 xl:col-span-2">
            <div className="lg:sticky lg:top-28">
              <Filtro actual={categoria} onCambiar={setCategoria} />
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-9 xl:col-span-10">
            <p className="text-sm text-mist-dim" aria-live="polite">
              {lista.length} {lista.length === 1 ? 'producto' : 'productos'}
              {categoria !== TODOS && ` en ${categoria}`}
            </p>
            <ul className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {lista.map((p) => (
                <li key={p.nombre} className="flex">
                  <TarjetaProducto producto={p} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BandaCTA
        titulo="¿Busca un equipo en particular?"
        texto="Cuéntenos qué necesita su gasera en el taller, en reparto o en planta. Le respondemos por WhatsApp."
      />
    </Layout>
  );
}
