import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";
import { iconMap } from "@/components/icon-map";
import OrderForm from "@/components/order-form";
import ProductCard from "@/components/product-card";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} - nolo.`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const Icon = iconMap[product.icon];
  const related = products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
      <Link
        href="/tienda"
        className="mb-10 inline-block font-mono text-xs uppercase tracking-[0.14em] text-nolo-ink/50 hover:text-nolo-blue"
      >
        ← Volver a la tienda
      </Link>

      <div className="grid gap-14 lg:grid-cols-2">
        <div className="bp-tile-blue flex aspect-square items-center justify-center border border-nolo-line-blue bg-nolo-blue-soft/40">
          <Icon className="h-2/3 w-2/3 text-nolo-blue" />
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-blue">
            {product.category}
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-nolo-ink/65">{product.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-nolo-line py-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-nolo-ink/40">
                Medidas base
              </dt>
              <dd className="mt-1">
                {product.defaultDimensions.width}×{product.defaultDimensions.depth}×
                {product.defaultDimensions.height} cm
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-nolo-ink/40">
                Producción
              </dt>
              <dd className="mt-1">
                {product.leadTimeWeeks[0]}–{product.leadTimeWeeks[1]} semanas
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-nolo-ink/40">
                Materiales
              </dt>
              <dd className="mt-1">{product.materials.join(", ")}</dd>
            </div>
          </dl>

          <div className="mt-10">
            <h2 className="mb-6 font-display text-2xl">
              Personalizá tu pedido
            </h2>
            <OrderForm product={product} />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="mb-8 font-display text-2xl">
            También en {product.category}
          </h2>
          <div className="grid gap-px overflow-hidden bg-nolo-line sm:grid-cols-3">
            {related.map((p) => (
              <div key={p.slug} className="bg-nolo-paper">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
