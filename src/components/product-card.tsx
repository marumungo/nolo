import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { iconMap } from "./icon-map";

export default function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon];

  return (
    <Link
      href={`/tienda/${product.slug}`}
      className="group block overflow-hidden border border-nolo-line transition-colors hover:border-nolo-blue"
    >
      <div className="bp-tile-blue relative flex aspect-square items-center justify-center overflow-hidden bg-nolo-blue-soft/40">
        <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.14em] text-nolo-ink/40">
          {product.category}
        </span>
        <Icon className="h-2/3 w-2/3 text-nolo-blue transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105" />
      </div>
      <div className="flex items-start justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-lg">{product.name}</h3>
          <p className="mt-1 text-sm text-nolo-ink/60">
            {product.shortDescription}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-nolo-line px-5 py-3 font-mono text-xs uppercase tracking-[0.1em]">
        <span className="text-nolo-ink/50">Desde</span>
        <span className="text-nolo-blue">{formatPrice(product.priceFrom)}</span>
      </div>
    </Link>
  );
}
