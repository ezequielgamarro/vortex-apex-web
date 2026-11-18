import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Cada .html del sitio monta su propia página con esta función.
export default function montar(Pagina) {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Pagina />
    </StrictMode>,
  );
}
