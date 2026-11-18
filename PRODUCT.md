# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Dueños, gerentes de operación y jefes de taller de **gaseras de México** (empresas que venden gas LP y operan camionetas con tanque, «pipas»). Evalúan software para ordenar el mantenimiento de su flota; deciden con el dueño o gerente y lo usan recepción, técnicos y almacén.

## Product Purpose
Sitio comercial de **Vortex Apex 369**: software de gestión integral para gaseras, vendido como paquete con todas sus áreas (taller de pipas, personal, plantas y contabilidad). Taller de Pipas es el módulo ya en operación; Personal, Plantas y Contabilidad se muestran como próximamente. La portada presenta la plataforma completa, no un solo módulo. Éxito: que una gasera pida una demo por WhatsApp.

## Positioning
Taller de Pipas reemplaza la «Orden de Taller» en papel: la orden se crea en la app con datos de la unidad, nivel de gas, conductor, motivo y firmas; el técnico la toma como ticket en un tablero en tiempo real, pide refacciones contra inventario, cierra con su firma y todo queda en el historial de la pipa. Una sola base de código en web, escritorio (Windows) y Android.

## Operating Context
Taller de una gasera: recepción registra el ingreso de la pipa, técnicos trabajan desde PC o celular, almacén controla refacciones con stock mínimo, la gerencia consulta historial y auditoría.

## Capabilities and Constraints
- Disponible: login y roles, catálogo de pipas, ingreso con formulario y firmas, tablero kanban en tiempo real, asignación «el primero que toma», solicitud de cambio, refacciones con inventario y stock mínimo, cierre con firma, factura de refacciones, historial por pipa, auditoría, notificaciones push.
- Fuera de alcance hoy (no prometer): factura fiscal CFDI, cálculo de litros, GPS.
- Sitio estático de varias páginas (React + Vite + Tailwind; un .html por pestaña: inicio, plataforma, taller-de-pipas, productos, contacto), sin backend: el formulario de contacto arma un mensaje de WhatsApp.
- Productos físicos: el **Secuenciador para pipas** es producto propio y disponible (ficha en secuenciador.html, contenido del documento técnico del dueño; se consulta por WhatsApp, sin precio). El resto del catálogo (terminales, impresoras, displays, sensores) es provisorio: ilustraciones propias y aviso de referencia en `src/data/productos.js`; no presentarlos como disponibles. Sin precios ni carrito.

## Brand Commitments
- Nombre: **Vortex Apex 369**. Logo: «VORTEX» blanco de trazo hueco, «APEX» morado lleno, «369» rojo con la misma geometría.
- Paleta fija: `#090a0f`, `#2b2c34`, `#6246ea`, `#e45858`, `#d1d1e9`, `#fffffe`. Tipografía fija: Orbitron (display) + Space Grotesk (texto).
- Idioma: español de México (usted/ustedes, «refacciones», «celular», «agendar»). Nada de voseo argentino.
- Referencias de estructura indicadas por el dueño: pegasus.com.mx y gastek.mx (de Gastek: tarjetas con foto por escena, producto destacado, «¿Cómo podemos ayudarle?»; sin copiar sus cifras).
- Las capturas nunca muestran el logo ni datos de clientes reales (Gas Minerva).

## Evidence on Hand
- Capturas del programa con datos ficticios en `public/img/pipas/`.
- Fotos reales entregadas por el dueño en `public/img/fotos/` (planta, pipa, taller), con marcas de terceros, teléfonos y placas desenfocados; fotos del Secuenciador en `public/img/productos/`.
- No existen: logos de clientes, testimonios, cifras de mercado, precios ni casos de éxito. No inventarlos.
- Contacto: WhatsApp `+54 9 3812 00-8355` (provisorio, en `src/config/contacto.js`); Instagram `vortexapex.arg`.

## Product Principles
1. Mostrar el producto funcionando antes que describirlo.
2. Lenguaje del taller, no de la informática.
3. Solo afirmaciones verificables.
4. Una sola acción principal: agendar una demo.
