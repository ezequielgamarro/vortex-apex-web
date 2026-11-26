// Contenido de la página Plantas: recorrido del día en la planta y capacidades, con capturas reales del programa.
export const recorridoPlantas = {
  titulo: 'De la salida de la pipa a la liquidación en caja',
  intro: 'Así corre un día de planta en Plantas, en cuatro pasos y con las pantallas reales del programa.',
  producto: 'Plantas',
  pasos: [
    {
      id: 'paso-panel',
      corto: 'Panel',
      titulo: 'La operación del día en una pantalla',
      texto:
        'El encargado ve cuántas pipas están en ruta, cuáles regresaron sin papeleta, cuáles tienen diferencias por revisar y cuáles ya pasan a caja, junto con los litros del día y el padrón de resguardo.',
      puntos: ['Pipas en ruta, en revisión y por liquidar', 'Litros cargados y liquidados del día', 'Últimas actas de resguardo'],
      img: '/img/plantas/panel.webp',
      alt: 'Panel de Plantas con pipas en ruta, sin papeleta, en revisión y por liquidar, padrón de resguardo y litros de hoy',
    },
    {
      id: 'paso-rutas',
      corto: 'Rutas',
      titulo: 'Cada pipa con lo que le falta',
      texto:
        'Las rutas del día se agrupan por lo que falta hacer: en ruta, falta la papeleta, en revisión del encargado o por liquidar. Cada una lleva su chofer, su cuota y los resurtidos.',
      puntos: ['Acta de resguardo por unidad', 'Salida, resurtido y regreso', 'Revisión del encargado si no cuadra'],
      img: '/img/plantas/rutas.webp',
      alt: 'Rutas del día agrupadas en ruta, falta papeleta, en revisión y por liquidar, con chofer, cuota y litros',
    },
    {
      id: 'paso-caja',
      corto: 'Caja',
      titulo: 'Caja liquida en pesos',
      texto:
        'Caja solo ve lo suyo: las papeletas que el encargado ya aprobó, listas para cobrar al precio por litro de la planta, con su folio y el total cobrado de la semana.',
      puntos: ['Solo papeletas aprobadas', 'Precio por litro por planta', 'Folio de caja por liquidación'],
      img: '/img/plantas/caja.webp',
      alt: 'Caja con papeletas por cobrar, total cobrado de la semana y precio por litro de la planta',
    },
    {
      id: 'paso-descargas',
      corto: 'Descargas',
      titulo: 'El transporte que surte el almacén',
      texto:
        'Cada autotanque que llega a descargar queda registrado con su hora de inicio y el porcentaje del transporte y del almacén antes y después, para saber cuánto gas entró.',
      puntos: ['Descarga en curso y terminadas', 'Porcentaje de transporte y almacén', 'Descarga imprimible'],
      img: '/img/plantas/descargas.webp',
      alt: 'Descargas de transporte con la descarga en curso y las terminadas, con porcentajes de transporte y almacén',
    },
  ],
};

export const capacidadesPlantas = {
  titulo: 'El control de la planta, sin hojas sueltas',
  intro: 'Lo que antes se anotaba en papel ahora cuadra solo y queda firmado.',
  items: [
    {
      titulo: 'Hoja diaria',
      texto: 'La hoja del día con todas las rutas, lista para imprimir y firmar como el formato de papel.',
    },
    {
      titulo: 'Acta de resguardo',
      texto: 'Cada pipa queda a cargo de un chofer con su acta firmada, en PDF o impresa.',
    },
    {
      titulo: 'Tolerancia por planta',
      texto: 'Los litros del ticket se comparan con el nivel del tanque y el totalizador; si la diferencia pasa la tolerancia, lo revisa el encargado.',
    },
    {
      titulo: 'Choferes y licencias',
      texto: 'Padrón de choferes con su pipa en resguardo, cuota diaria y aviso antes de que venza la licencia.',
    },
    {
      titulo: 'Roles y permisos',
      texto: 'Encargado, plantero y caja ven y hacen solo lo que les corresponde.',
    },
    {
      titulo: 'Las mismas pipas',
      texto: 'Las unidades son las mismas del taller y de sellos: se dan de alta una vez para toda la plataforma.',
    },
  ],
};
