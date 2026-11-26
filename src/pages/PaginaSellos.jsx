import Layout from '../components/Layout';
import CabeceraPagina from '../components/CabeceraPagina';
import Flujo from '../components/Flujo';
import Capacidades from '../components/Capacidades';
import BandaCTA from '../components/BandaCTA';
import Estado from '../components/Estado';
import { recorridoSellos, capacidadesSellos } from '../data/sellos';

export default function PaginaSellos() {
  return (
    <Layout actual="sellos">
      <CabeceraPagina pagina="sellos" titulo="Sellos" pie={<Estado activo>Disponible</Estado>}>
        La bitácora de los sellos de seguridad de sus pipas, estaciones e instrumentos: revisión punto por punto, lo que
        quedó mal con su fecha compromiso y la calibración de cada unidad.
      </CabeceraPagina>
      <Flujo {...recorridoSellos} />
      <Capacidades {...capacidadesSellos} />
      <BandaCTA
        titulo="Vea Sellos con sus unidades"
        whatsapp="Hola, quiero agendar una reunión para conocer el módulo Sellos de Vortex Apex 369."
      />
    </Layout>
  );
}
