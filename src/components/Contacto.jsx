import { useState } from 'react';
import { enlaceWhatsApp, INSTAGRAM_URL, INSTAGRAM_USUARIO, WHATSAPP_VISIBLE } from '../config/contacto';
import { IconArrowRight, IconCheck, IconInstagram, IconWhatsApp } from './Icons';

const vacio = { nombre: '', gasera: '', celular: '', ciudad: '', unidades: '', mensaje: '' };

function validar(d) {
  const e = {};
  if (!d.nombre.trim()) e.nombre = 'Escriba su nombre.';
  if (!d.gasera.trim()) e.gasera = 'Escriba el nombre de su gasera o empresa.';
  const digitos = d.celular.replace(/\D/g, '');
  if (!digitos) e.celular = 'Escriba un número de celular para devolverle el mensaje.';
  else if (digitos.length < 10) e.celular = 'El número debe tener al menos 10 dígitos.';
  return e;
}

function armarMensaje(d) {
  const lineas = [
    'Hola, quiero agendar una reunión para conocer Vortex Apex 369.',
    '',
    `Nombre: ${d.nombre.trim()}`,
    `Gasera: ${d.gasera.trim()}`,
    `Celular: ${d.celular.trim()}`,
  ];
  if (d.ciudad.trim()) lineas.push(`Ciudad: ${d.ciudad.trim()}`);
  if (d.unidades) lineas.push(`Pipas en la flota: ${d.unidades}`);
  if (d.mensaje.trim()) lineas.push('', d.mensaje.trim());
  return lineas.join('\n');
}

function Campo({ id, label, error, hint, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="error">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="hint">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export default function Contacto({ esPagina = false }) {
  const Titulo = esPagina ? 'h1' : 'h2';
  const [datos, setDatos] = useState(vacio);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(null);

  const cambiar = (campo) => (ev) => {
    setDatos((d) => ({ ...d, [campo]: ev.target.value }));
    if (errores[campo]) setErrores((e) => ({ ...e, [campo]: undefined }));
  };

  const enviar = (ev) => {
    ev.preventDefault();
    const e = validar(datos);
    setErrores(e);
    if (Object.keys(e).length) {
      document.getElementById(Object.keys(e)[0])?.focus();
      return;
    }
    const url = enlaceWhatsApp(armarMensaje(datos));
    setEnviado(url);
    window.open(url, '_blank', 'noopener');
  };

  const aria = (campo) => ({
    'aria-invalid': errores[campo] ? 'true' : undefined,
    'aria-describedby': errores[campo] ? `${campo}-error` : undefined,
  });

  return (
    <section id="contacto" className="relative">
      <div className="mx-auto grid max-w-[90rem] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-x-12 lg:px-12 lg:py-32">
        <div className="lg:col-span-5">
          <Titulo className={esPagina ? 'display-xl' : 'display-lg'}>Agende una reunión</Titulo>
          <p className="lead mt-6">
            En una reunión le mostramos cómo funciona Vortex Apex 369 con las unidades y la forma de trabajar de su
            gasera. Deje sus datos y le escribimos por WhatsApp para agendarla.
          </p>

          <dl className="mt-12 grid gap-px border-y border-line bg-line">
            <div className="flex items-center gap-4 bg-ink py-5">
              <IconWhatsApp className="shrink-0 text-mist" />
              <div>
                <dt className="text-sm text-mist-dim">WhatsApp</dt>
                <dd>
                  <a href={enlaceWhatsApp()} target="_blank" rel="noreferrer" className="tabular font-semibold text-paper hover:text-violet-hover">
                    {WHATSAPP_VISIBLE}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-ink py-5">
              <IconInstagram className="shrink-0 text-mist" />
              <div>
                <dt className="text-sm text-mist-dim">Instagram</dt>
                <dd>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="font-semibold text-paper hover:text-violet-hover">
                    @{INSTAGRAM_USUARIO}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
          {enviado ? (
            <div className="rounded-xl border border-line-strong bg-ink-2 p-8 sm:p-10" role="status">
              <IconCheck width={28} height={28} className="text-violet" />
              <h3 className="display-md mt-5">Su mensaje está listo en WhatsApp</h3>
              <p className="mt-3 max-w-[32rem]">
                Se abrió WhatsApp con sus datos. Solo falta tocar «Enviar». Si no se abrió, use el botón de abajo.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={enviado} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Abrir WhatsApp <IconArrowRight />
                </a>
                <button type="button" className="btn btn-ghost" onClick={() => setEnviado(null)}>
                  Corregir mis datos
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={enviar} noValidate className="grid gap-6 rounded-xl border border-line-strong bg-ink-2 p-6 sm:grid-cols-2 sm:p-10">
              <Campo id="nombre" label="Nombre" error={errores.nombre}>
                <input id="nombre" className="input" autoComplete="name" value={datos.nombre} onChange={cambiar('nombre')} {...aria('nombre')} />
              </Campo>
              <Campo id="gasera" label="Gasera o empresa" error={errores.gasera}>
                <input id="gasera" className="input" autoComplete="organization" value={datos.gasera} onChange={cambiar('gasera')} {...aria('gasera')} />
              </Campo>
              <Campo id="celular" label="Celular" error={errores.celular} hint="Con lada, 10 dígitos.">
                <input
                  id="celular"
                  type="tel"
                  inputMode="tel"
                  className="input tabular"
                  autoComplete="tel"
                  placeholder="33 1234 5678"
                  value={datos.celular}
                  onChange={cambiar('celular')}
                  {...aria('celular')}
                  aria-describedby={errores.celular ? 'celular-error' : 'celular-hint'}
                />
              </Campo>
              <Campo id="ciudad" label="Ciudad y estado (opcional)">
                <input id="ciudad" className="input" autoComplete="address-level2" placeholder="León, Guanajuato" value={datos.ciudad} onChange={cambiar('ciudad')} />
              </Campo>
              <div className="sm:col-span-2">
                <Campo id="unidades" label="Pipas en su flota (opcional)">
                  <select id="unidades" className="input" value={datos.unidades} onChange={cambiar('unidades')}>
                    <option value="">Seleccione una opción</option>
                    <option>1 a 10</option>
                    <option>11 a 30</option>
                    <option>31 a 60</option>
                    <option>Más de 60</option>
                  </select>
                </Campo>
              </div>
              <div className="sm:col-span-2">
                <Campo id="mensaje" label="¿Algo que quiera contarnos? (opcional)">
                  <textarea
                    id="mensaje"
                    className="input"
                    placeholder="Por ejemplo: cuántos técnicos tienen o cómo registran hoy las órdenes."
                    value={datos.mensaje}
                    onChange={cambiar('mensaje')}
                  />
                </Campo>
              </div>
              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-mist-dim">Al enviar se abre WhatsApp con su mensaje ya escrito.</p>
                <button type="submit" className="btn btn-primary">
                  Agendar reunión <IconArrowRight />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
