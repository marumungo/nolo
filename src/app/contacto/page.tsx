import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contacto - nolo.",
  description: "Escribinos para empezar tu pedido a medida.",
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
      <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-blue">
            Contacto
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            Hablemos de tu pedido
          </h1>
          <p className="mt-4 text-nolo-ink/65">
            Contanos qué pieza tenés en mente o mandanos las medidas de tu
            espacio. Respondemos por mail o Instagram en 1 a 2 días hábiles.
          </p>

          <dl className="mt-10 space-y-6 border-t border-nolo-line pt-8 text-sm">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-nolo-ink/40">
                Instagram
              </dt>
              <dd className="mt-1">
                <a
                  href="https://instagram.com/nolo.mobiliario"
                  target="_blank"
                  rel="noreferrer"
                  className="text-nolo-blue hover:underline"
                >
                  @nolo.mobiliario
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-nolo-ink/40">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href="mailto:hola@nolo.com.ar"
                  className="text-nolo-blue hover:underline"
                >
                  hola@nolo.com.ar
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-nolo-ink/40">
                Zona de trabajo
              </dt>
              <dd className="mt-1">Buenos Aires, Argentina</dd>
            </div>
          </dl>
        </div>

        <div className="border border-nolo-line p-8 md:p-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
