"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import ProductCard from "./product-card";

export default function Catalog({ products }: { products: Product[] }) {
  const categories = useMemo(
    () => ["Todas", ...Array.from(new Set(products.map((p) => p.category)))],
    [products],
  );
  const [active, setActive] = useState("Todas");

  const filtered =
    active === "Todas" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
              active === cat
                ? "border-nolo-blue bg-nolo-blue text-white"
                : "border-nolo-line text-nolo-ink/60 hover:border-nolo-blue hover:text-nolo-blue"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-px overflow-hidden bg-nolo-line sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <div key={product.slug} className="bg-nolo-paper">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-nolo-ink/50">
          Todavía no hay piezas en esta categoría.
        </p>
      )}
    </div>
  );
}
