import type { Metadata } from "next";
import RoomVisualizer from "@/components/room-visualizer";

export const metadata: Metadata = {
  title: "Probá en tu espacio - nolo.",
  description:
    "Subí una foto de tu espacio y probá cómo queda una pieza nolo. en escala, antes de pedirla.",
};

export default function VisualizerPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <div className="mb-12 max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-blue">
          Herramienta
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">
          Probá nolo. en tu espacio
        </h1>
        <p className="mt-4 text-nolo-ink/65">
          Subí una foto de tu living, comedor o el rincón que estás pensando
          equipar, y ubicá la pieza para tener una primera idea de escala y
          proporción antes de hacer el pedido.
        </p>
      </div>

      <RoomVisualizer />
    </div>
  );
}
