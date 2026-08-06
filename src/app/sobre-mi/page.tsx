import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import { ModuleBlueprint } from "@/components/blueprint-icons";

export const metadata: Metadata = {
  title: "Sobre mí - nolo.",
  description: "La historia y la lógica de diseño detrás de nolo.",
};

const values = [
  {
    title: "Estructura antes que ornamento",
    body: "Cada pieza se resuelve primero como problema de proporción y carga, igual que un plano de obra. La forma final es consecuencia de esa estructura, no al revés.",
  },
  {
    title: "Modularidad real",
    body: "Las piezas están pensadas para combinarse, ampliarse o repetirse. Un módulo de estantería o un sofá por bloques tienen que poder crecer con el espacio.",
  },
  {
    title: "Por encargo, sin sobrantes",
    body: "No se fabrica nada que no esté pedido. Cada mueble se produce a la medida exacta de quien lo encarga, lo que también evita stock ocioso y descarte.",
  },
];

export default function SobreMiPage() {
  return (
    <div>
      <section className="border-b border-nolo-line">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1fr_1fr] md:px-10 md:py-24">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-blue">
              Sobre mí
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
              De diseñar espacios a diseñar lo que va adentro.
            </h1>
            <p className="mt-6 text-nolo-ink/65">
              Soy arquitecta y nolo. nació de una pregunta simple que se
              repetía en cada proyecto: ¿por qué el mueble a medida seguía
              siendo un lujo reservado a la obra grande? Empecé a diseñar
              piezas con la misma lógica con la que diseño un espacio - en
              planos, ejes y módulos - y a fabricarlas una por una,
              por encargo, en vez de producir en serie.
            </p>
            <p className="mt-4 text-nolo-ink/65">
              nolo. es ese cruce: el rigor de la arquitectura aplicado a la
              escala del mueble, con la flexibilidad de producir solo lo que
              alguien realmente va a usar.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="bp-tile-invert bp-corners bp-corners-invert flex items-center justify-center bg-nolo-blue p-10"
          >
            <ModuleBlueprint className="h-full max-h-80 w-full text-white" />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-nolo-line">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2 className="mb-12 font-display text-3xl md:text-4xl">
              Cómo pensamos el diseño
            </h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <span className="font-mono text-xs text-nolo-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl">{value.title}</h3>
                <p className="mt-2 text-sm text-nolo-ink/60">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <Reveal className="bg-nolo-blue p-10 text-white md:p-14">
            <p className="font-display text-2xl leading-snug md:text-3xl">
              &ldquo;Diseño cada pieza como si fuera un plano de obra a
              escala 1:1 - con la misma exigencia, pero con la
              cercanía de saber para qué casa y para qué rincón está
              pensada.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
