import { PAGINAS } from '../config/paginas';

// Cabecera de las páginas internas: migas, titular y entrada.
export default function CabeceraPagina({ pagina, titulo, children, pie }) {
  return (
    <header className="border-b border-line pt-[4.5rem]">
      <div className="mx-auto max-w-[90rem] px-5 pt-14 pb-16 sm:px-8 lg:px-12 lg:pt-20 lg:pb-20">
        <nav aria-label="Ruta" className="rise">
          <ol className="flex items-center gap-2 text-sm text-mist-dim">
            <li>
              <a href={PAGINAS.inicio.href} className="text-mist-dim no-underline hover:text-paper">
                Inicio
              </a>
            </li>
            <li aria-hidden="true">/</li>
            {PAGINAS[pagina].padre && (
              <>
                <li>
                  <a href={PAGINAS[PAGINAS[pagina].padre].href} className="text-mist-dim no-underline hover:text-paper">
                    {PAGINAS[PAGINAS[pagina].padre].nombre}
                  </a>
                </li>
                <li aria-hidden="true">/</li>
              </>
            )}
            <li aria-current="page" className="text-mist">
              {PAGINAS[pagina].nombre}
            </li>
          </ol>
        </nav>
        <h1 className="display-xl rise mt-8 max-w-[22ch]">{titulo}</h1>
        {children && <p className="lead rise rise-2 mt-7 max-w-[44rem]">{children}</p>}
        {pie && <div className="rise rise-2 mt-10">{pie}</div>}
      </div>
    </header>
  );
}
