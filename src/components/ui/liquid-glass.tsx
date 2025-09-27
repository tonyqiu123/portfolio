import { Vaso } from "vaso";

export default function LiquidGlass({
  children,
  height = 0,
  className,
}: {
  children: React.ReactNode;
  height?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ${
        className || ""
      }`}
      style={height ? { height: `${height}px` } : undefined}
    >
      <Vaso
        radius={20}
        depth={1}
        blur={0}
        dispersion={1}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 m-4">{children}</div>
    </div>
  );
}
