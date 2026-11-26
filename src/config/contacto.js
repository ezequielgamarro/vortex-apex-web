// Datos de contacto en un solo lugar.
export const WHATSAPP_NUMERO = '523348977267';
export const WHATSAPP_VISIBLE = '+52 33 4897 7267';
export const INSTAGRAM_USUARIO = 'vortexapex.mx';
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USUARIO}/`;

export function enlaceWhatsApp(texto) {
  const base = `https://wa.me/${WHATSAPP_NUMERO}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}
