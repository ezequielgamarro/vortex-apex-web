// Datos de contacto en un solo lugar. Cambiar aquí el número cuando haya uno mexicano.
export const WHATSAPP_NUMERO = '5493812008355';
export const WHATSAPP_VISIBLE = '+54 9 381 200-8355';
export const INSTAGRAM_USUARIO = 'vortexapex.arg';
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_USUARIO}`;

export function enlaceWhatsApp(texto) {
  const base = `https://wa.me/${WHATSAPP_NUMERO}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}
