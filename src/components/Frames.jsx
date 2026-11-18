// Marcos de dispositivo para las capturas del programa.

export function BrowserFrame({ src, alt, label = 'Taller de Pipas', className = '', imgClassName = '', eager = false, children }) {
  return (
    <figure className={`frame-browser ${className}`}>
      <div className="frame-browser__bar" aria-hidden="true">
        <span className="frame-browser__dots">
          <i /><i /><i />
        </span>
        <span className="frame-browser__label">{label}</span>
      </div>
      <div className="frame-browser__screen">
        {children ?? (
          <img
            src={src}
            alt={alt}
            className={`block w-full h-auto ${imgClassName}`}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            width="1440"
            height="900"
          />
        )}
      </div>
    </figure>
  );
}

export function PhoneFrame({ src, alt, className = '', eager = false }) {
  return (
    <figure className={`frame-phone ${className}`}>
      <div className="frame-phone__screen">
        <img
          src={src}
          alt={alt}
          className="block w-full h-auto"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          width="390"
          height="844"
        />
      </div>
    </figure>
  );
}
