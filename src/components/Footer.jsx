import Logo369 from './Logo369';
import { MENU, PAGINAS } from '../config/paginas';
import { enlaceWhatsApp, INSTAGRAM_URL, INSTAGRAM_USUARIO, WHATSAPP_VISIBLE } from '../config/contacto';

const secciones = [...MENU.map((c) => PAGINAS[c]), { nombre: 'Cómo funciona', href: '/taller-de-pipas.html#como-funciona' }];

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-12 lg:px-12">
        <div className="md:col-span-5">
          <Logo369 className="w-[13rem]" />
          <p className="mt-5 max-w-[24rem] text-[0.95rem] text-mist-dim">
            Software de gestión integral para gaseras de México: taller de pipas, personal, plantas y contabilidad.
          </p>
        </div>

        <nav className="md:col-span-3" aria-label="Sitio">
          <p className="label text-mist-dim">Sitio</p>
          <ul className="mt-4 grid gap-2.5">
            {secciones.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-mist no-underline hover:text-paper">
                  {s.nombre}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="label text-mist-dim">Contacto</p>
          <ul className="mt-4 grid gap-2.5">
            <li>
              <a href={enlaceWhatsApp()} target="_blank" rel="noreferrer" className="tabular text-mist no-underline hover:text-paper">
                WhatsApp {WHATSAPP_VISIBLE}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="text-mist no-underline hover:text-paper">
                Instagram @{INSTAGRAM_USUARIO}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-[90rem] px-5 py-6 text-sm text-mist-dim sm:px-8 lg:px-12">
          © {anio} Vortex Apex 369. Las pantallas muestran datos de demostración.
        </p>
      </div>
    </footer>
  );
}
