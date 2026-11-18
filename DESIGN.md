---
name: Vortex Apex 369
description: Software de taller para gaseras de México; el producto real carga la página.
colors:
  ink: "#090a0f"
  ink-2: "#101118"
  frame-surface: "#15161d"
  line: "#22232b"
  line-strong: "#2b2c34"
  violet: "#6246ea"
  violet-hover: "#7259f0"
  signal: "#e45858"
  mist: "#d1d1e9"
  mist-dim: "#9a9bb3"
  paper: "#fffffe"
  product-panel: "#0d0e14"
  illustration-face: "#1d1e27"
  illustration-rim: "#3a3b47"
typography:
  display:
    fontFamily: "Orbitron, Eurostile, Microgramma, sans-serif"
    fontSize: "clamp(2rem, 0.9rem + 3vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "0"
  headline:
    fontFamily: "Orbitron, Eurostile, Microgramma, sans-serif"
    fontSize: "clamp(1.55rem, 1rem + 1.6vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0"
  title:
    fontFamily: "Orbitron, Eurostile, Microgramma, sans-serif"
    fontSize: "clamp(1.05rem, 0.95rem + 0.4vw, 1.3rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.01em"
  lead:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Orbitron, Eurostile, Microgramma, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  lg: "12px"
  phone: "44px"
  full: "9999px"
spacing:
  gutter-mobile: "20px"
  gutter-tablet: "32px"
  gutter-desktop: "48px"
  section-mobile: "96px"
  section-desktop: "128px"
  container: "1440px"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0 22.4px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.violet-hover}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0 22.4px"
    height: "48px"
  input:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "11.2px 14.4px"
    height: "48px"
  card-surface:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.mist}"
    rounded: "{rounded.lg}"
    padding: "40px"
  chip-status:
    backgroundColor: "transparent"
    textColor: "{colors.mist-dim}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  chip-status-active:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "4px 12px"
  frame-browser:
    backgroundColor: "{colors.frame-surface}"
    rounded: "{rounded.lg}"
  frame-phone:
    backgroundColor: "{colors.frame-surface}"
    rounded: "{rounded.phone}"
    padding: "9px"
  nav:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.mist}"
    height: "72px"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
  card-product:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.mist-dim}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-product-media:
    backgroundColor: "{colors.product-panel}"
    padding: "16px"
  filter-pill:
    backgroundColor: "transparent"
    textColor: "{colors.mist}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  filter-pill-active:
    backgroundColor: "rgba(98, 70, 234, 0.1)"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  cta-band:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.mist}"
    padding: "80px 20px"
---

# Design System: Vortex Apex 369

## Overview

**Creative North Star: "El tablero del taller"**

Un sitio oscuro, sobrio y preciso donde el protagonista es el programa funcionando. Las capturas reales de Taller de Pipas, montadas en marcos de navegador y de celular fieles al dispositivo, cargan la persuasión; la tipografía y la paleta solo ponen orden alrededor. La terminación toma como vara a Linear y Samsara: filetes de 1px, superficies apenas más claras que el fondo, un solo color de acción.

La densidad es de producto, no de folleto. Cada sección se apoya en una grilla de 12 columnas dentro de un contenedor de 1440px, con titulares Orbitron en mayúsculas a la izquierda y la evidencia (captura, lista con filetes, formulario) a la derecha. La profundidad se logra por tintes escalonados del mismo negro azulado y por sombras oscuras bajo los marcos, nunca por brillo.

El sitio es multipágina (inicio, Plataforma, Taller de Pipas, Productos y Contacto) y todas las páginas comparten el mismo armazón: enlace para saltar al contenido, barra fija con la página actual marcada, cabecera con migas en las páginas internas, secciones separadas por filetes y una franja de cierre en ink-2 antes del pie. Donde todavía no hay capturas reales, como en el catálogo de equipos, la evidencia la dan ilustraciones SVG propias dibujadas con la misma paleta, nunca fotos de terceros.

El mundo rechaza de forma explícita los recursos de la landing genérica de IA: badges con brillo, texto con glow o degradado, tarjetas de vidrio con blur, íconos dentro de cuadritos de color, eyebrows o kickers sobre los titulares y numerales decorativos.

**Key Characteristics:**
- Fondo casi negro (#090a0f) con superficies en tintes intermedios, nunca en gris lleno.
- Filetes de 1px como estructura: separan secciones, listas y celdas de grilla.
- Morado solo para acción y avance; rojo solo para el 369 y los errores.
- Orbitron en mayúsculas para titulares y numerales; Space Grotesk para todo lo que se lee.
- Capturas reales en marcos de dispositivo precisos como unidad visual principal; ilustraciones SVG propias en la paleta cuando no hay captura.
- Un mismo armazón en todas las páginas: barra con página actual, migas, secciones con filete y franja de cierre.
- Movimiento con una sola curva (ease-out-expo), lento y sin rebote.

## Colors

Una paleta de marca fija sobre negro azulado: neutros fríos que escalan por tinte, un morado de acción y un rojo de señal que casi no aparece.

### Primary
- **Morado Apex** (violet): botón primario, foco de teclado, selección de texto, barra de avance del recorrido, punto del estado «Disponible», ícono de confirmación del formulario, filete y punto de la página actual en la navegación, punto y borde de la categoría activa del filtro y el único acento de cada ilustración de producto. Su versión **Morado Apex encendido** (violet-hover) es el estado hover del botón primario y de los enlaces de texto.

### Secondary
- **Rojo Señal 369** (signal): reservado para el «369» del logotipo y favicon y para errores de formulario (borde del campo inválido y su mensaje). No decora nada más.

### Neutral
- **Negro Taller** (ink): fondo de página, barra de navegación con scroll, fondo de campos y de celdas de lista.
- **Negro Elevado** (ink-2): franja de datos del hero, sección Capacidades, pie de página, tarjetas y formulario.
- **Gris Marco** (frame-surface): cuerpo de los marcos de navegador y de celular; la superficie más clara del sistema.
- **Filete** (line): divisores de sección, bordes de listas y las ranuras de 1px entre celdas de grilla.
- **Filete Fuerte** (line-strong): borde de marcos, tarjetas, campos y botón ghost; pista inactiva de la barra de avance.
- **Niebla** (mist): texto de cuerpo y enlaces de navegación en reposo.
- **Niebla Tenue** (mist-dim): texto secundario, pistas, pasos inactivos, encabezados de columna del pie.
- **Papel** (paper): titulares, etiquetas de campo, texto de botones, enlaces en hover y la página o categoría activa.
- **Panel de Producto** (product-panel): fondo del área de ilustración de las tarjetas de producto; un tinte entre ink e ink-2 que deja leer los cuerpos de los equipos sin recuadro de color.
- **Cara de Equipo** (illustration-face) y **Canto de Equipo** (illustration-rim): solo dentro de las ilustraciones SVG de producto, para la cara iluminada y los cantos de los cuerpos. No se usan en la interfaz.

### Named Rules
**La Regla de la Acción Única.** El morado marca lo que se puede hacer o lo que avanza; si un elemento no es acción, foco ni estado, no lleva morado.

**La Regla del Rojo Contado.** El rojo aparece en el 369 y en errores. Una pantalla sin errores tiene exactamente un rojo: el del logotipo.

**La Regla del Tinte, no del Gris.** Las superficies elevadas son tintes entre ink y line-strong; line-strong nunca se usa como relleno de superficie, porque aplasta las capturas.

## Typography

**Display Font:** Orbitron (con Eurostile, Microgramma, sans-serif)
**Body Font:** Space Grotesk (con ui-sans-serif, system-ui, Segoe UI, sans-serif)

**Character:** Orbitron aporta la geometría técnica del logotipo y se usa siempre en mayúsculas y con peso 600 o 700; Space Grotesk es la voz de lectura, con un toque mecánico que la emparenta sin competir. Solo se cargan los pesos 600/700 de Orbitron y 400/500/600 de Space Grotesk.

### Hierarchy
- **Display** (700, 32 a 57.6px, 1.08, mayúsculas): el h1 de cada página, uno solo: el del hero en el inicio y el de la cabecera en las páginas internas (máx. 22ch).
- **Headline** (700, 24.8 a 38.4px, 1.15, mayúsculas): h2 de cada sección.
- **Title** (600, 16.8 a 20.8px, 1.3, mayúsculas): h3 de pasos del recorrido, tarjetas y confirmación. Sus variantes compactas en Orbitron 600 de 14.4 a 15.2px con tracking 0.02em titulan celdas de lista (módulos próximos, capacidades) y tarjetas de producto (15.2px).
- **Lead** (400, 17 a 20px, 1.6, máx. 34rem): el párrafo que acompaña a un titular de sección.
- **Body** (400, 17px, 1.6): texto corrido; las descripciones secundarias bajan a 15.2px en mist-dim.
- **Label** (600, 12px, tracking 0.08em, mayúsculas): numeración de pasos del recorrido («01 · Ingreso»), encabezados de columna del pie y el encabezado «Categorías» del filtro. Nunca como eyebrow sobre un titular.

### Named Rules
**La Regla de las Dos Voces.** Orbitron siempre en mayúsculas y solo para titulares, numerales y etiquetas; nunca para un párrafo. Space Grotesk para todo lo demás.

**La Regla del Numeral Tabular.** Números de paso, teléfonos, conteos y códigos de referencia usan cifras tabulares para que no bailen al cambiar.

**La Regla del Numeral que Cuenta.** Un número aparece solo si ordena o cuenta algo real (pasos del recorrido, productos por categoría, referencia de un equipo); nunca como numeral decorativo de sección.

La regla de titulares (h1, h2 y h3 en Orbitron y papel, con `text-wrap: balance`) vive en la capa base de estilos, para que las utilidades de margen de cada componente puedan ajustarla.

## Layout

Contenedor centrado de 1440px (90rem) con márgenes laterales de 20px, 32px desde 640px y 48px desde 1024px. Grilla de 12 columnas desde 1024px con separación de 40 a 48px. Las secciones respiran con 96px verticales en móvil y 128px desde 1024px, y se separan entre sí con un filete inferior en lugar de cambiar de fondo; solo Capacidades y el pie alternan a ink-2.

El patrón de encabezado de sección es titular en 6 columnas y lead en 5 columnas alineado a la base (columna 8 a 12). El patrón de contenido es texto en 4 a 5 columnas frente a evidencia en 7 a 8.

En el hero, el titular ocupa 6/12 entre 1024 y 1535px y 5/12 desde 1536px; la captura del tablero se sale por el borde derecho del contenedor y la vista de celular se monta encima, abajo a la izquierda. Bajo 640px el celular del hero se oculta.

Las páginas internas abren con una cabecera que reserva 72px para la barra fija y lleva migas, h1 display y lead de hasta 44rem, cerrada por un filete. Terminan con la franja de cierre en ink-2 (80px verticales, 96px desde 1024px): texto a la izquierda y acciones alineadas a la base a la derecha. En el catálogo, el filtro ocupa 3/12 (2/12 desde 1280px) y queda sticky a 112px del borde; las tarjetas van en una columna, en dos desde 640px y en tres desde 1280px, con separación de 20px. En móvil el filtro pasa arriba como fila de pastillas con scroll horizontal que llega hasta el borde de la pantalla.

Las listas y franjas de datos usan grillas con `gap` de 1px sobre fondo de filete, de modo que las ranuras son los divisores. El recorrido de cinco pasos fija la captura en una columna sticky de 8/12 en escritorio; en móvil cada paso trae su propia captura en línea. Los celulares de Multiplataforma se escalonan en altura (0, 64 y 128px) en escritorio y pasan a carrusel con scroll-snap en móvil.

## Elevation & Depth

Sistema híbrido: las secciones son planas y se separan por filetes y tintes; solo los objetos físicos (marcos de dispositivo y el botón primario) proyectan sombra. Las sombras son siempre negras, largas y con spread negativo, para que el objeto se despegue sin halo de color.

### Shadow Vocabulary
- **Marco de navegador** (`box-shadow: 0 1px 0 rgba(255,255,254,0.06) inset, 0 40px 80px -30px rgba(0,0,0,0.85), 0 18px 36px -18px rgba(0,0,0,0.6)`): capturas de escritorio.
- **Marco de celular** (`box-shadow: 0 1px 0 rgba(255,255,254,0.08) inset, 0 40px 70px -24px rgba(0,0,0,0.9)`): capturas de Android.
- **Botón primario** (`box-shadow: 0 8px 18px -10px rgba(0,0,0,0.7)`): asienta la acción principal sobre el fondo.
- **Anillo de foco de campo** (`box-shadow: 0 0 0 3px rgba(98,70,234,0.3)`): estado de foco de campos de formulario, no decoración.

### Named Rules
**La Regla Sin Brillo.** Nada brilla: sin glow, sin blur, sin degradados en texto. La única luz es el filo interior de 1px en la parte superior de los marcos.

## Shapes

Esquinas contenidas y consistentes por función: 8px en botones y campos, 12px en tarjetas, formularios y marco de navegador, 44px en el marco de celular (35px en su pantalla) y píldora completa solo en las etiquetas de estado. Los bordes son siempre de 1px; los únicos trazos de 2px son la barra de avance de los pasos y el filete inferior de la página actual en la navegación. Ningún indicador de estado usa una franja lateral: lo activo se marca con punto, peso o filete inferior. Los íconos están dibujados a mano en una retícula de 24px con trazo de 1.75, puntas cuadradas y uniones en ángulo, sin contenedor. Las viñetas de lista son guiones horizontales de 16px x 1px en mist-dim. Los puntos de estado son círculos llenos de 8px.

Las ilustraciones de producto son SVG sin fondo en un lienzo de 480 x 360: cuerpos en gris marco con la cara en un degradado suave hacia cara de equipo, cantos en filete fuerte y canto de equipo, pantallas en un negro más profundo que ink, un solo acento morado por equipo y una sombra de contacto elíptica con degradado radial negro. Las pantallas dibujadas usan solo barras de texto abstractas en niebla y papel, nunca datos legibles.

## Components

### Buttons
Firmes y planos; el movimiento vive en la flecha, no en el botón.
- **Shape:** esquinas suaves (8px), alto mínimo de 48px, padding horizontal de 22.4px, Space Grotesk 600 a 16px.
- **Primary:** fondo y borde morado Apex, texto papel, sombra de botón primario.
- **Hover / Focus:** el fondo pasa a morado encendido en 200ms con ease-out-expo; la flecha se desplaza 3px hacia su dirección en 300ms; `:active` baja 1px. El foco de teclado es un contorno morado de 2px con 3px de separación.
- **Ghost:** transparente con borde line-strong y texto papel; en hover el borde sube a mist-dim y el fondo a papel al 3%. Su flecha apunta hacia abajo cuando lleva a una sección.
- **Disabled:** opacidad 55% y cursor no permitido.
- En la barra de navegación el primario se compacta a 41.6px de alto y 15.2px de texto.

### Chips
- **Style:** etiqueta de estado en píldora, borde de 1px, 14px, peso 500.
- **State:** activa («Disponible») con borde morado al 60%, texto papel y punto morado de 8px; inactiva («Próximamente») con borde line-strong y texto mist-dim.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** ink-2 para tarjetas y formulario; las celdas de lista usan ink sobre ranuras de filete.
- **Shadow Strategy:** ninguna; ver Elevation & Depth.
- **Border:** 1px line-strong.
- **Internal Padding:** 24px en móvil, 40px desde 640px.

### Inputs / Fields
- **Style:** fondo ink, borde 1px line-strong, 8px de radio, alto mínimo de 48px, texto papel a 16px; placeholder en gris medio. Etiqueta arriba en papel a 14.4px peso 500 y pista debajo en mist-dim a 13.6px.
- **Focus:** borde morado y anillo de 3px de morado al 30%; en hover el borde se aclara.
- **Error:** borde rojo señal y mensaje rojo debajo, enlazado con `aria-describedby`.
- **Select:** flecha dibujada con dos triángulos en mist-dim, sin control nativo.

### Navigation
- **Style:** barra fija de 72px, transparente sobre el hero y con fondo ink y filete inferior al pasar 12px de scroll (transición de 300ms). Logo a 168px (200px desde 640px), enlaces en mist a 15.2px que pasan a papel en hover, y botón primario «Agendar demo».
- **Página actual:** el enlace lleva `aria-current="page"`, texto papel y filete inferior morado de 2px que toca la base de la barra; los demás tienen el filete transparente para que el texto no salte.
- **Mobile:** desde menos de 1024px los enlaces se mueven a un panel bajo la barra con filas de 18px separadas por filetes y el botón primario a ancho completo; la página actual va en papel con un punto morado de 8px a la derecha. Se cierra con Escape.
- **Saltar al contenido:** enlace oculto que aparece al recibir foco, fijo arriba a la izquierda, en morado con texto papel.
- **Migas:** en las páginas internas, «Inicio / Página» a 14px en mist-dim, con la página actual en mist y `aria-current`.

### Filtro de categorías
- **Escritorio:** lista vertical entre filetes con el encabezado label «Categorías»; cada fila a 15.2px en mist, con el conteo tabular en mist-dim alineado a la derecha. La activa va en papel y negrita con un punto morado de 8px delante, sin fondo y sin franja lateral.
- **Móvil:** pastillas con borde line-strong y scroll horizontal; la activa lleva borde morado y fondo morado al 10%.
- **Estado:** botones con `aria-pressed`; la categoría se guarda en la URL (`?categoria=`) para poder enlazarla, y el total de productos se anuncia con `aria-live`.

### Tarjeta de producto
Superficie ink-2 de 12px de radio con borde line-strong. Arriba, el panel de producto en 4/3 con la ilustración contenida (16px de margen) y la etiqueta de estado «Próximamente» en la esquina superior izquierda; en hover la ilustración crece 3% en 500ms. Abajo, con 24px de padding: título Orbitron compacto, descripción a 15.2px en mist-dim y una fila final con el enlace «Consultar» con flecha (papel, morado encendido en hover) frente a «Ref. código» tabular en mist-dim. Sin precio, carrito ni botón de compra mientras el catálogo sea provisorio.

### Franja de cierre
Sección ink-2 con filete inferior que cierra cada página interna antes del pie: titular headline y párrafo a la izquierda (máx. 40rem) y, a la derecha, el botón primario hacia Contacto y un ghost con ícono de WhatsApp. Una sola franja por página.

### Marco de navegador (componente firma)
Figura de 12px de radio con barra de 36px en un tinte más oscuro, tres puntos de 9px en line-strong y el nombre de la pantalla centrado en mist-dim a 12px («Taller de Pipas · Tablero»). Contiene capturas reales a 1440 x 900. Nunca muestra datos ni logos de clientes reales.

### Marco de celular (componente firma)
Cuerpo de 44px de radio con 9px de bisel en el gris marco y pantalla de 35px de radio; capturas a 390 x 844.

### Recorrido de cinco pasos (componente firma)
Columna de texto con pasos de 78vh y, al lado, una captura sticky en marco de navegador. Encima, cinco tramos con borde superior de 2px que se tiñen de morado hasta el paso activo y numeración en label tabular. Al cambiar de paso, la captura entrante entra con un barrido de recorte (`clip-path` de 35%) y 2% de desplazamiento en 900ms, y la activa se acerca despacio (escala 1.3 a 1.55 hacia la zona que narra el texto) en 1.4s con 250ms de retraso. El titular del paso activo pasa de mist-dim a papel en 500ms.

### Movimiento
Una sola curva para todo: ease-out-expo (`cubic-bezier(0.16, 1, 0.3, 1)`). Entrada del hero con subida de 24px y fundido en 1s, escalonada 120ms entre titular y capturas. Con `prefers-reduced-motion` todas las transiciones y animaciones se anulan y el scroll deja de ser suave.

## Do's and Don'ts

### Do:
- **Do** mostrar el programa con capturas reales dentro del marco de navegador o de celular antes que describirlo.
- **Do** separar secciones y celdas con filetes de 1px (line, line-strong) en lugar de cambiar de color de fondo.
- **Do** elevar superficies con tintes entre ink y line-strong (ink-2, frame-surface).
- **Do** usar Orbitron en mayúsculas solo para titulares, numerales y etiquetas.
- **Do** animar con ease-out-expo y respetar `prefers-reduced-motion`.
- **Do** dibujar los íconos en trazo de 1.75 sobre retícula de 24px, sin contenedor.
- **Do** ilustrar los equipos con SVG propios de 480 x 360, sin fondo, en la paleta del sitio y con un solo acento morado, sobre el panel de producto.
- **Do** marcar la página o categoría activa con punto morado, peso o filete inferior.
- **Do** cerrar cada página interna con una sola franja de cierre en ink-2.

### Don't:
- **Don't** usar glow, blur, vidrio ni degradados en texto.
- **Don't** poner íconos dentro de cuadritos de color ni badges con brillo.
- **Don't** usar morado fuera de acciones, foco y estados de avance.
- **Don't** usar rojo fuera del 369 y de los errores.
- **Don't** rellenar superficies con line-strong (#2b2c34); es borde, no fondo.
- **Don't** usar sombras de color; las sombras son negras y solo para objetos físicos.
- **Don't** usar fotos de terceros para productos ni equipos.
- **Don't** marcar estados con franjas laterales de color (side-tab).
- **Don't** poner eyebrows ni kickers sobre los titulares, ni numerales decorativos de sección.
- **Don't** mostrar precios, carrito ni botones de compra en las tarjetas de producto mientras el catálogo sea provisorio.
