import Link from "next/link";
import Reveal from "@/components/reveal";
import ProductCard from "@/components/product-card";
import BrandStamp from "@/components/brand-stamp";
import { products } from "@/lib/products";

const marqueeItems = [
  "MODULAR",
  "A MEDIDA",
  "POR ENCARGO",
  "ATEMPORAL",
  "DISEÑADO POR UNA ARQUITECTA",
];

const steps = [
  {
    n: "01",
    title: "Elegís la pieza",
    body: "Recorrés el catálogo y partís de un diseño base: silla, mesa, estantería o sofá modular.",
  },
  {
    n: "02",
    title: "Definimos el plano",
    body: "Ajustamos medidas, materiales y terminación a tu espacio real, como en cualquier plano de obra.",
  },
  {
    n: "03",
    title: "Fabricamos por encargo",
    body: "No hay stock acumulado: cada pieza se produce cuando la pedís, sin sobrantes.",
  },
  {
    n: "04",
    title: "Llega a tu casa",
    body: "Coordinamos entrega e instalación, con el mismo cuidado con el que se entrega una obra.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bp-grid relative overflow-hidden border-b border-nolo-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-10 pb-20 pt-20 md:pb-[120px] md:pt-[120px] xl:grid-cols-[640px_520px]">
          <div>
            <p className="mb-5 font-mono text-[11px] uppercase leading-[20px] tracking-[0.14em] text-nolo-blue">
              Estudio de mobiliario a medida
            </p>
            <h1 className="text-balance font-display text-5xl leading-[60px] tracking-tight md:text-7xl md:leading-[80px]">
              Muebles pensados
              <br />
              como un <span className="text-nolo-blue">plano.</span>
            </h1>
            <p className="mt-10 max-w-md text-base leading-[20px] text-nolo-ink/65 md:text-lg md:leading-[20px]">
              nolo. diseña y fabrica mobiliario modular por encargo. Cada
              pieza se traza a la medida de tu espacio antes de fabricarse -
              sin stock de sobra, sin dos casas iguales.
            </p>
            <div className="mt-10 flex flex-wrap gap-10">
              <Link
                href="/tienda"
                className="flex w-60 items-center justify-center bg-nolo-blue py-3 font-mono text-xs uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
              >
                Ver tienda
              </Link>
              <Link
                href="/probar-en-tu-espacio"
                className="flex w-60 items-center justify-center border border-nolo-ink py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:border-nolo-blue hover:text-nolo-blue"
              >
                Probá en tu espacio
              </Link>
            </div>
          </div>

          <BrandStamp className="min-h-[280px] xl:h-[400px]" />
        </div>

        <div className="overflow-hidden border-t border-nolo-line bg-nolo-ink py-3">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="font-mono text-xs uppercase tracking-[0.2em] text-nolo-paper/70"
              >
                {item} <span className="text-nolo-blue">＋</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-b border-nolo-line">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[1fr_1fr] md:px-10 md:py-28">
          <Reveal>
            <p className="font-display text-3xl leading-tight md:text-4xl">
              Diseñado con lógica de arquitectura: proporción, estructura y
              módulo antes que ornamento.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-nolo-ink/65">
              Cada pieza nolo. arranca como un plano: se piensa en ejes,
              medidas y materiales antes que en forma. El resultado son
              muebles con estructura a la vista, pensados para combinarse
              entre sí y crecer con el espacio - nunca al revés.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured products */}
      <section className="border-b border-nolo-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl md:text-4xl">
              Piezas destacadas
            </h2>
            <Link
              href="/tienda"
              className="font-mono text-xs uppercase tracking-[0.14em] text-nolo-blue hover:underline"
            >
              Ver todo el catálogo →
            </Link>
          </Reveal>

          <div className="grid gap-px overflow-hidden bg-nolo-line sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product, i) => (
              <Reveal key={product.slug} delay={i * 100} className="bg-nolo-paper">
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bp-grid-invert border-b border-nolo-line bg-nolo-blue text-white">
        <div className="mx-auto max-w-7xl px-10 py-20 md:py-[120px]">
          <Reveal>
            <h2 className="mb-14 font-display text-3xl md:text-4xl">
              Cómo trabajamos
            </h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <p className="font-mono text-sm text-white/70">{step.n}</p>
                <h3 className="mt-3 font-display text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-white/70">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visualizer teaser */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <Reveal className="bp-corners flex flex-col items-start justify-between gap-8 border border-nolo-blue bg-nolo-blue-soft/30 p-10 md:flex-row md:items-center md:p-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-blue">
                Nuevo
              </p>
              <h2 className="mt-3 max-w-lg font-display text-3xl md:text-4xl">
                Subí una foto de tu espacio y probá cómo queda la pieza antes
                de pedirla.
              </h2>
            </div>
            <Link
              href="/probar-en-tu-espacio"
              className="shrink-0 bg-nolo-ink px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
            >
              Probar ahora
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
