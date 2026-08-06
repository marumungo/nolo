import Link from "next/link";
import LogoMark from "./logo-mark";

export default function Footer() {
  return (
    <footer className="border-t border-nolo-line bg-nolo-ink text-nolo-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <LogoMark
              className="h-9 w-auto"
              strokeColor="#edede9"
              gapColor="#0a0a0f"
            />
            <p className="mt-4 max-w-xs text-sm text-nolo-paper/60">
              Mobiliario de diseño modular, planificado como un plano y
              fabricado a medida, por encargo.
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-paper/40">
              Navegación
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/tienda" className="hover:text-nolo-blue">
                  Tienda
                </Link>
              </li>
              <li>
                <Link
                  href="/probar-en-tu-espacio"
                  className="hover:text-nolo-blue"
                >
                  Probá en tu espacio
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="hover:text-nolo-blue">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-nolo-blue">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-paper/40">
              Contacto
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://instagram.com/nolo.mobiliario"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-nolo-blue"
                >
                  @nolo.mobiliario
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@nolo.com.ar"
                  className="hover:text-nolo-blue"
                >
                  hola@nolo.com.ar
                </a>
              </li>
              <li className="text-nolo-paper/60">Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-nolo-paper/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} nolo. - Todo por encargo.</span>
          <span>Diseño y fabricación a medida</span>
        </div>
      </div>
    </footer>
  );
}
