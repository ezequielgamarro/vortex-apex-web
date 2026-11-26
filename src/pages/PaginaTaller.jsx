import Layout from '../components/Layout';
import CabeceraPagina from '../components/CabeceraPagina';
import Flujo from '../components/Flujo';
import Capacidades from '../components/Capacidades';
import Multiplataforma from '../components/Multiplataforma';
import BandaCTA from '../components/BandaCTA';
import Estado from '../components/Estado';
import { recorridoTaller, capacidadesTaller } from '../data/taller';

export default function PaginaTaller() {
  return (
    <Layout actual="taller">
      <CabeceraPagina pagina="taller" titulo="Taller de Pipas" pie={<Estado activo>Disponible</Estado>}>
        La orden de taller de sus pipas pasa del papel a la app: ingreso con firmas, tablero en tiempo real, refacciones
        contra inventario, cierre con firma e historial completo de cada unidad.
      </CabeceraPagina>
      <Flujo {...recorridoTaller} />
      <Capacidades {...capacidadesTaller} />
      <Multiplataforma />
      <BandaCTA titulo="Vea Taller de Pipas con sus unidades" />
    </Layout>
  );
}
