"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hola@nolo.com.ar";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Consulta de ${name || "un/a visitante del sitio"}`,
  )}&body=${encodeURIComponent(
    `${message}\n\n- ${name}${email ? ` (${email})` : ""}`,
  )}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/50">
            Nombre
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-nolo-line px-3 py-2.5 text-sm focus:border-nolo-blue focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/50">
            Email
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-nolo-line px-3 py-2.5 text-sm focus:border-nolo-blue focus:outline-none"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-ink/50">
          Mensaje
        </span>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Contanos tu idea, tu espacio o qué pieza tenés en mente"
          className="w-full border border-nolo-line px-3 py-2.5 text-sm focus:border-nolo-blue focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="bg-nolo-blue px-7 py-3 font-mono text-xs uppercase tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
      >
        Enviar
      </button>
    </form>
  );
}
