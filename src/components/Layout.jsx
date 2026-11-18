import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ actual, children }) {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-violet focus:px-4 focus:py-2 focus:text-paper"
      >
        Saltar al contenido
      </a>
      <Navbar actual={actual} />
      <main id="contenido">{children}</main>
      <Footer />
    </>
  );
}
