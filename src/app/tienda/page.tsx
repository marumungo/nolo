import type { Metadata } from "next";
import Catalog from "@/components/catalog";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Tienda - nolo.",
  description: "Catálogo de mobiliario modular a medida, fabricado por encargo.",
};

export default function TiendaPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
      <div className="mb-12 max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-blue">
          Catálogo
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">Tienda</h1>
        <p className="mt-4 text-nolo-ink/65">
          Todo se fabrica por encargo: elegí una pieza como punto de partida
          y personalizá medidas, materiales y terminación en su ficha.
        </p>
      </div>

      <Catalog products={products} />
    </div>
  );
}
