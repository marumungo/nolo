"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

const WHATSAPP_NUMBER = "5491100000000";
const CONTACT_EMAIL = "hola@nolo.com.ar";

export default function OrderForm({ product }: { product: Product }) {
  const [width, setWidth] = useState(product.defaultDimensions.width);
  const [depth, setDepth] = useState(product.defaultDimensions.depth);
  const [height, setHeight] = useState(product.defaultDimensions.height);
  const [material, setMaterial] = useState(product.materials[0]);
  const [finish, setFinish] = useState(product.finishes[0]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  function buildMessage() {
    const lines = [
      `Hola nolo! Quiero pedir: ${product.name}`,
      `Medidas: ${width}cm x ${depth}cm x ${height}cm (ancho x profundidad x alto)`,
      `Material: ${material}`,
      `Terminación: ${finish}`,
      name ? `Nombre: ${name}` : null,
      note ? `Notas: ${note}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = buildMessage();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/50">
          Medidas (cm)
        </p>
        <div className="grid grid-cols-3 gap-3">
          <label className="block">
            <span className="mb-1 block text-xs text-nolo-ink/50">Ancho</span>
            <input
              type="number"
              value={width}
              min={10}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-full border border-nolo-line px-3 py-2 text-sm focus:border-nolo-blue focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-nolo-ink/50">Profundidad</span>
            <input
              type="number"
              value={depth}
              min={10}
              onChange={(e) => setDepth(Number(e.target.value))}
              className="w-full border border-nolo-line px-3 py-2 text-sm focus:border-nolo-blue focus:outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs text-nolo-ink/50">Alto</span>
            <input
              type="number"
              value={height}
              min={10}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full border border-nolo-line px-3 py-2 text-sm focus:border-nolo-blue focus:outline-none"
            />
          </label>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/50">
            Material
          </span>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full border border-nolo-line bg-transparent px-3 py-2.5 text-sm focus:border-nolo-blue focus:outline-none"
          >
            {product.materials.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/50">
            Terminación
          </span>
          <select
            value={finish}
            onChange={(e) => setFinish(e.target.value)}
            className="w-full border border-nolo-line bg-transparent px-3 py-2.5 text-sm focus:border-nolo-blue focus:outline-none"
          >
            {product.finishes.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/50">
          Tu nombre
        </span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Opcional"
          className="w-full border border-nolo-line px-3 py-2.5 text-sm focus:border-nolo-blue focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/50">
          Notas para el pedido
        </span>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          placeholder="Contanos algo más sobre tu espacio o el uso que le vas a dar"
          className="w-full border border-nolo-line px-3 py-2.5 text-sm focus:border-nolo-blue focus:outline-none"
        />
      </label>

      <div className="flex flex-col gap-3 border-t border-nolo-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono text-xs uppercase tracking-[0.1em] text-nolo-ink/50">
          Precio de referencia desde{" "}
          <span className="text-nolo-blue">{formatPrice(product.priceFrom)}</span>
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="bg-nolo-blue px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
        >
          Solicitar por WhatsApp
        </button>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            `Pedido personalizado - ${product.name}`,
          )}&body=${encodeURIComponent(buildMessage())}`}
          className="border border-nolo-ink px-7 py-3 text-center font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:border-nolo-blue hover:text-nolo-blue"
        >
          Enviar por mail
        </a>
      </div>
      <p className="text-xs text-nolo-ink/45">
        Esto arma un mensaje con el detalle de tu pedido y lo abre en
        WhatsApp o en tu mail. Ningún dato se guarda en el sitio hasta que lo
        enviás vos.
      </p>
    </form>
  );
}
