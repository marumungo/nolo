"use client";

import { useRef, useState } from "react";
import { products } from "@/lib/products";
import { iconMap } from "./icon-map";

type Placement = { x: number; y: number; size: number; rotation: number };

const initialPlacement: Placement = { x: 40, y: 40, size: 160, rotation: 0 };

export default function RoomVisualizer() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [productSlug, setProductSlug] = useState(products[0].slug);
  const [placement, setPlacement] = useState<Placement>(initialPlacement);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{
    mode: "move" | "resize" | "rotate";
    startX: number;
    startY: number;
    start: Placement;
  } | null>(null);

  const product = products.find((p) => p.slug === productSlug) ?? products[0];
  const Icon = iconMap[product.icon];

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhoto(url);
    setPlacement(initialPlacement);
  }

  function startDrag(mode: "move" | "resize" | "rotate", e: React.PointerEvent) {
    e.preventDefault();
    e.stopPropagation();
    dragState.current = {
      mode,
      startX: e.clientX,
      startY: e.clientY,
      start: placement,
    };
    window.addEventListener("pointermove", onDrag);
    window.addEventListener("pointerup", stopDrag);
  }

  function onDrag(e: PointerEvent) {
    const state = dragState.current;
    const container = containerRef.current;
    if (!state || !container) return;
    const dx = e.clientX - state.startX;
    const dy = e.clientY - state.startY;

    if (state.mode === "move") {
      setPlacement((p) => ({ ...p, x: state.start.x + dx, y: state.start.y + dy }));
    } else if (state.mode === "resize") {
      const next = Math.max(60, state.start.size + dx);
      setPlacement((p) => ({ ...p, size: next }));
    } else if (state.mode === "rotate") {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + state.start.x + state.start.size / 2;
      const cy = rect.top + state.start.y + state.start.size / 2;
      const angle = (Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI;
      setPlacement((p) => ({ ...p, rotation: angle + 90 }));
    }
  }

  function stopDrag() {
    dragState.current = null;
    window.removeEventListener("pointermove", onDrag);
    window.removeEventListener("pointerup", stopDrag);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
      <div
        ref={containerRef}
        className="bp-tile relative aspect-[4/3] w-full overflow-hidden border border-nolo-line bg-nolo-blue-soft/30"
      >
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt="Tu espacio"
            className="pointer-events-none h-full w-full select-none object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-8 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-nolo-ink/40">
              Todavía no subiste una foto
            </p>
            <p className="max-w-xs text-sm text-nolo-ink/50">
              Subí una foto de tu living, comedor o el rincón que querés
              equipar, para probar la pieza en escala.
            </p>
          </div>
        )}

        {photo && (
          <div
            role="button"
            tabIndex={0}
            onPointerDown={(e) => startDrag("move", e)}
            className="absolute cursor-move touch-none select-none"
            style={{
              left: placement.x,
              top: placement.y,
              width: placement.size,
              height: placement.size,
              transform: `rotate(${placement.rotation}deg)`,
            }}
          >
            <Icon className="h-full w-full text-nolo-blue drop-shadow-[0_12px_18px_rgba(28,28,255,0.35)]" />

            <div
              onPointerDown={(e) => startDrag("rotate", e)}
              className="absolute -top-6 left-1/2 h-4 w-4 -translate-x-1/2 cursor-grab rounded-full border-2 border-nolo-blue bg-white"
              title="Rotar"
            />
            <div
              onPointerDown={(e) => startDrag("resize", e)}
              className="absolute -bottom-2 -right-2 h-4 w-4 cursor-nwse-resize rounded-full border-2 border-nolo-blue bg-white"
              title="Escalar"
            />
          </div>
        )}
      </div>

      <div className="space-y-6">
        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/50">
            1. Subí tu foto
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="w-full border border-nolo-line px-3 py-2.5 text-sm file:mr-3 file:border-0 file:bg-nolo-blue file:px-3 file:py-1.5 file:font-mono file:text-xs file:uppercase file:tracking-[0.1em] file:text-white"
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/50">
            2. Elegí una pieza
          </span>
          <select
            value={productSlug}
            onChange={(e) => {
              setProductSlug(e.target.value);
              setPlacement(initialPlacement);
            }}
            className="w-full border border-nolo-line bg-transparent px-3 py-2.5 text-sm focus:border-nolo-blue focus:outline-none"
          >
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </label>

        <div className="border border-nolo-line p-4 text-sm text-nolo-ink/60">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/40">
            3. Ajustá
          </p>
          <ul className="space-y-1.5">
            <li>Arrastrá la pieza para moverla.</li>
            <li>Usá el punto inferior para cambiar el tamaño.</li>
            <li>Usá el punto superior para rotarla.</li>
          </ul>
        </div>

        <p className="text-xs text-nolo-ink/45">
          Esta es una previsualización orientativa para pensar proporciones,
          no una medición exacta. Tu foto no se sube a ningún servidor: se
          procesa solo en tu navegador.
        </p>
      </div>
    </div>
  );
}
