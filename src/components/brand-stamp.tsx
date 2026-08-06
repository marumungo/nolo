import LogoMark from "./logo-mark";

export default function BrandStamp({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bp-grid-invert-panel relative flex h-full flex-col justify-between bg-nolo-blue p-8 text-white md:p-10 ${className}`}
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
        <span>Plano N.° 001</span>
        <span>Esc 1:1</span>
      </div>

      <LogoMark
        className="h-auto w-full max-w-md"
        strokeColor="#edede9"
        gapColor="#1c1cff"
      />

      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
        <span>Mobiliario modular</span>
        <span>Buenos Aires</span>
      </div>
    </div>
  );
}
