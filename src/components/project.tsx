import Image from "next/image";
import Link from "next/link";
import LiquidGlass from "@/components/ui/liquid-glass";

interface ProjectProps {
  image: string;
  url: string;
  title: string;
  description: string;
  type: string;
}

const Project = ({ image, url, title, description, type }: ProjectProps) => {
  return (
    <Link href={url} className="w-full group">
      <div className="relative w-full" style={{ aspectRatio: `${16 / 9}` }}>
        <Image
          src={image}
          alt={description}
          fill
          className="object-cover object-center rounded-3xl"
          priority={false}
        />
        <div className="absolute inset-0 rounded-3xl bg-black/60" />
        <LiquidGlass className="rounded-3xl">
          <div className="flex flex-col h-full justify-end gap-1">
            <div className="flex items-center">
              <p className="text-lg">
                {title} — <span className="text-zinc-400 text-sm">{type}</span>
              </p>
            </div>
            <p className="text-sm text-zinc-400">{description}</p>
          </div>
        </LiquidGlass>
      </div>
    </Link>
  );
};

export default Project;