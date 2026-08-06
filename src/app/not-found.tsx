import Link from "next/link";
import { ModuleBlueprint } from "@/components/blueprint-icons";

export default function NotFound() {
  return (
    <div className="bp-grid mx-auto flex max-w-3xl flex-col items-center px-10 py-20 text-center md:py-[120px]">
      <ModuleBlueprint className="h-32 w-32 text-nolo-blue opacity-70" />
      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-blue">
        Error 404
      </p>
      <h1 className="mt-3 font-display text-4xl">
        Esta pieza no está en el plano.
      </h1>
      <p className="mt-4 max-w-md text-nolo-ink/60">
        La página que buscás no existe o cambió de lugar.
      </p>
      <Link
        href="/"
        className="mt-8 bg-nolo-blue px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
