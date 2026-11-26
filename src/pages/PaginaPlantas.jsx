import Layout from '../components/Layout';
import CabeceraPagina from '../components/CabeceraPagina';
import Flujo from '../components/Flujo';
import Capacidades from '../components/Capacidades';
import BandaCTA from '../components/BandaCTA';
import Estado from '../components/Estado';
import { recorridoPlantas, capacidadesPlantas } from '../data/plantas';

export default function PaginaPlantas() {
  return (
    <Layout actual="plantas">
      <CabeceraPagina pagina="plantas" titulo="Plantas" pie={<Estado activo>Disponible</Estado>}>
        La operación diaria de su planta en la app: carga y salida de cada pipa, papeleta y revisión del encargado,
        liquidación en caja y descarga de los transportes que surten el almacén.
      </CabeceraPagina>
      <Flujo {...recorridoPlantas} />
      <Capacidades {...capacidadesPlantas} />
      <BandaCTA
        titulo="Vea Plantas con la operación de su gasera"
        whatsapp="Hola, quiero agendar una reunión para conocer el módulo Plantas de Vortex Apex 369."
      />
    </Layout>
  );
}
