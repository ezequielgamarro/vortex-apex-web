import Layout from '../components/Layout';
import Contacto from '../components/Contacto';

export default function PaginaContacto() {
  return (
    <Layout actual="contacto">
      <div className="pt-[4.5rem]">
        <Contacto esPagina />
      </div>
    </Layout>
  );
}
