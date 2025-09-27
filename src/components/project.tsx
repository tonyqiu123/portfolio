import Image from "next/image";
import Link from "next/link";
import LiquidGlass from "@/components/ui/liquid-glass";

interface ProjectProps {
  image: string;
  url: string;
  title: string;
  description: string;
  type: string;
  date: string;
}

const Project = ({ image, url, title, description, type, date }: ProjectProps) => {
  const isExternal = url.startsWith('http');
  
  const content = (
    <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px]">
      <Image
        src={image}
        alt={description}
        width={800}
        height={500}
        className="object-cover object-center rounded-3xl w-full h-full"
        priority={true}
      />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-0 rounded-3xl flex flex-col justify-end gap-2 p-4 z-10">
        <div className="flex items-center justify-between">
          <p className="text-lg sm:text-xl text-white">
            {title} — <span className="text-zinc-300 text-sm">{type}</span>
          </p>
          <p className="text-zinc-300 text-sm">{date}</p>
        </div>
        <p className="text-sm sm:text-base text-zinc-200">{description}</p>
      </div>
      <LiquidGlass className="rounded-3xl">
        <div />
      </LiquidGlass>
    </div>
  );

  if (isExternal) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="w-full group">
        {content}
      </a>
    );
  }

  return (
    <Link href={url} className="w-full group">
      {content}
    </Link>
  );
};

export default Project;