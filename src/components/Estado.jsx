export default function Estado({ children, activo = false }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${
        activo ? 'border-violet/60 text-paper' : 'border-line-strong text-mist-dim'
      }`}
    >
      {activo && <span className="h-2 w-2 rounded-full bg-violet" aria-hidden="true" />}
      {children}
    </span>
  );
}
