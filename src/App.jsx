import Layout from './components/Layout';
import Hero from './components/Hero';
import Operacion from './components/Operacion';
import Plataforma from './components/Plataforma';
import ProductoDestacado from './components/ProductoDestacado';
import Ayuda from './components/Ayuda';
import Contacto from './components/Contacto';

// Página de inicio. Las demás páginas viven en src/pages/.
export default function App() {
  return (
    <Layout actual="inicio">
      <Hero />
      <Operacion />
      <Plataforma />
      <ProductoDestacado />
      <Ayuda />
      <Contacto />
    </Layout>
  );
}
