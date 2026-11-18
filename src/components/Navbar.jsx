import { useEffect, useState } from 'react';
import Logo369 from './Logo369';
import { IconClose, IconMenu } from './Icons';
import { MENU, PAGINAS } from '../config/paginas';

const enlaces = MENU.map((clave) => ({ clave, ...PAGINAS[clave] }));

export default function Navbar({ actual }) {
  const [conScroll, setConScroll] = useState(false);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const onScroll = () => setConScroll(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e) => e.key === 'Escape' && setAbierto(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [abierto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 border-b ${
        conScroll || abierto ? 'bg-ink border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12" aria-label="Principal">
        <a href={PAGINAS.inicio.href} className="shrink-0" aria-label="Vortex Apex 369, ir al inicio">
          <Logo369 className="w-[10.5rem] sm:w-[12.5rem]" />
        </a>

        <ul className="hidden h-full items-stretch gap-8 lg:flex">
          {enlaces.map((e) => {
            const activo = e.clave === actual;
            return (
              <li key={e.clave} className="flex">
                <a
                  href={e.href}
                  aria-current={activo ? 'page' : undefined}
                  className={`flex items-center border-b-2 pt-0.5 text-[0.95rem] no-underline transition-colors ${
                    activo ? 'border-violet text-paper' : 'border-transparent text-mist hover:text-paper'
                  }`}
                >
                  {e.nombre}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href={PAGINAS.contacto.href} className="btn btn-primary hidden !min-h-[2.6rem] !px-4 !text-[0.95rem] sm:inline-flex">
            Agendar demo
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-paper lg:hidden"
            aria-expanded={abierto}
            aria-controls="menu-movil"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setAbierto((v) => !v)}
          >
            {abierto ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      <div id="menu-movil" hidden={!abierto} className="border-t border-line bg-ink lg:hidden">
        <ul className="mx-auto max-w-[90rem] px-5 py-4 sm:px-8">
          {enlaces.map((e) => {
            const activo = e.clave === actual;
            return (
              <li key={e.clave}>
                <a
                  href={e.href}
                  aria-current={activo ? 'page' : undefined}
                  className={`flex items-center justify-between border-b border-line py-4 text-lg no-underline ${
                    activo ? 'text-paper' : 'text-mist'
                  }`}
                >
                  {e.nombre}
                  {activo && <span className="h-2 w-2 rounded-full bg-violet" aria-hidden="true" />}
                </a>
              </li>
            );
          })}
          <li className="pt-5 pb-2">
            <a href={PAGINAS.contacto.href} className="btn btn-primary w-full">
              Agendar demo
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
