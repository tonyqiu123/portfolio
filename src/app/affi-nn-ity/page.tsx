"use client";
import LiquidGlass from "@/components/ui/liquid-glass";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { MDXRemote } from "next-mdx-remote";

const mdx = `
\`\`\`ts
type User = { id: number; name: string };

function greet(u: User) {
  return "hi " + u.name;
}
\`\`\`
`;

export default function Home() {
  const [source, setSource] = useState<Awaited<ReturnType<typeof serialize>> | null>(null);

  useEffect(() => {
    (async () => {
      const mdxSource = await serialize(mdx, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
        },
      });
      setSource(mdxSource);
    })();
  }, []);

  if (!source) return <p>loading…</p>;
  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage:
          'url("https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG1wZWU5azNrYmV3NXJ1enplbDFoMXR2ZXV5MWE2bm5yMnU1MHhrdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EzUMaltmsbK3G1Y5Ow/giphy.gif")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="relative z-10 flex flex-col gap-10 items-center max-w-screen-lg w-full mx-auto px-4 py-10">
        <Link
          href="/"
          className="w-fit flex mr-auto gap-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          <Image src="/icons/arrow-left.svg" alt="" width={16} height={16} />
          Back
        </Link>
        <h1>Affi-NN-ity</h1>
        <h2 className="text-zinc-400 font-extralight">
          Building a neural network to predict affiliate sales
        </h2>
        <div className="w-full relative rounded-3xl overflow-hidden hero-image-shadow h-[450px]">
          <Image
            src="/images/projects/project1.png"
            width={1000}
            height={1000}
            alt="Affi-NN-ity"
          />
        </div>

        <section className="flex flex-col gap-20 w-full">
          <div className="w-full h-32">
            <LiquidGlass height={100}>
              <div className="flex gap-10 w-full mx-auto py-2 px-4">
                <div className="flex flex-col gap-2 h-full">
                  <p>Overview</p>
                  <p className="text-zinc-400">
                    Building a neural network to predict affiliate sales
                  </p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full  ">
                  <p>Github</p>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/tonyqiu123/affi-nn-ity"
                      target="_blank"
                      rel="noreferrer"
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <Image
                        src="/icons/logos/github.svg"
                        alt="url"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full">
                  <p>Tools</p>
                  <p className="text-zinc-400">
                    Python, PyTorch, FastAPI, PostgreSQL, AWS, Terraform
                  </p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full">
                  <p>Timeframe</p>
                  <p className="text-zinc-400">2024.4.01 — present</p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full">
                  <p>Team</p>
                  <p className="text-zinc-400">Solo</p>
                </div>
              </div>
            </LiquidGlass>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Excerpt</h3>
            <p className="text-zinc-400">
              I was <b>personally</b> managing and{" "}
              <Link className="underline" href="https://www.google.com">transcribing</Link> hundreds
              of <code>physical receipts</code> in a jar each taxing season.
              Decided to build a web app that lets users upload hundreds of
              receipts at once for processing. physical receipts in a jar each
              taxing season. Decided to build a web app that lets users upload
              hundreds of receipts at once for processing.
            </p>
          </div>

          <div className="flex flex-col gap-4 h-72">
            <h3>Features</h3>
            <LiquidGlass height={100}>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
                <div className="flex flex-col gap-2">
                  <h4>Sortable and editable table</h4>
                  <p className="text-zinc-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    vitae omnis blanditiis ipsa pariatur, consectetur a deserunt
                    id illum qui est? Itaque quibusdam necessitatibus, quaerat
                    eum dignissimos minima similique. Nihil.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Inbox Deepscanning</h4>
                  <p className="text-zinc-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    vitae omnis blanditiis ipsa pariatur, consectetur a deserunt
                    id illum qui est? Itaque quibusdam necessitatibus, quaerat
                    eum dignissimos minima similique. Nihil.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Text-to-chart with QueryGPT</h4>
                  <p className="text-zinc-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    vitae omnis blanditiis ipsa pariatur, consectetur a deserunt
                    id illum qui est? Itaque quibusdam necessitatibus, quaerat
                    eum dignissimos minima similique. Nihil.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Saving money by deploying React and Express on AWS</h3>
            <div className="w-full h-[160px]">
              <LiquidGlass height={100}>
                <MDXRemote {...source} />
              </LiquidGlass>
            </div>
            <p className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
              omnis blanditiis ipsa pariatur, consectetur a deserunt id illum
              qui est? Itaque quibusdam necessitatibus, quaerat eum dignissimos
              minima similique. Nihil.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Showing newest UI changes to users</h3>
            <p className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
              omnis blanditiis ipsa pariatur, consectetur a deserunt id illum
              qui est? Itaque quibusdam necessitatibus, quaerat eum dignissimos
              minima similique. Nihil.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>
              Implementing, expanding, and integrating Uber`s text-to-SQL
              infrastructure
            </h3>
            <p className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
              omnis blanditiis ipsa pariatur, consectetur a deserunt id illum
              qui est? Itaque quibusdam necessitatibus, quaerat eum dignissimos
              minima similique. Nihil.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>React Performance Optimizations</h3>
            <p className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
              omnis blanditiis ipsa pariatur, consectetur a deserunt id illum
              qui est? Itaque quibusdam necessitatibus, quaerat eum dignissimos
              minima similique. Nihil.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3>
              Buildling a pipeline to use user data to finetune an OCR model
            </h3>
            <p className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
              omnis blanditiis ipsa pariatur, consectetur a deserunt id illum
              qui est? Itaque quibusdam necessitatibus, quaerat eum dignissimos
              minima similique. Nihil.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Code Implementation</h3>
            <p className="text-zinc-400 mb-4">
              Here&apos;s a sample of the StreamProcessor class that handles
              real-time message streaming with tool integration:
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
