import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectProps {
  image: string;
  url: string;
  title: string;
  description: string;
  type: string;
}

const Project = ({ image, url, title, description, type }: ProjectProps) => {
  return (
    <Link href={url} className="w-full flex flex-col gap-2 group">
      <AspectRatio ratio={16 / 9} className="w-full overflow-hidden relative">
        <Image
          src={image}
          alt={description}
          fill
          className="object-cover object-center transition-opacity duration-500 group-hover:delay-500 group-hover:opacity-0"
        />
        <Image
          src="/videos/projects/test.gif"
          alt={description}
          fill
          className="object-cover object-center absolute inset-0 transition-opacity duration-500 group-hover:delay-500 opacity-0 group-hover:opacity-100"
        />
      </AspectRatio>
      <div className="flex flex-col gap-0">
        <div className="flex items-center">
          <p className="text-lg">{title} — <span className="text-zinc-400 text-sm">{type}</span></p>
        </div>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </Link>
  );
};

export default Project;