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
      <div className="relative z-10 flex flex-col gap-6 lg:gap-10 items-center max-w-screen-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <Link
          href="/"
          className="w-fit flex mr-auto gap-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          <Image src="/icons/arrow-left.svg" alt="" width={16} height={16} />
          Back
        </Link>
        <div className="text-center">
          <h1>Affi-NN-ity</h1>
          <h2 className="text-zinc-400 font-light max-w-2xl mx-auto text-base sm:text-lg mt-4">
            Building a neural network to predict affiliate sales
          </h2>
        </div>
        <div className="w-full max-w-4xl mx-auto relative rounded-3xl overflow-hidden hero-image-shadow h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/images/projects/affi-nn-ity.png"
            width={1000}
            height={1000}
            alt="Affi-NN-ity"
            className="object-cover w-full h-full"
          />
        </div>

        <section className="flex flex-col gap-12 lg:gap-20 w-full">
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
              I was <b>fascinated</b> by the challenge of predicting molecular binding affinity using{" "}
              <Link className="underline" href="https://www.google.com">deep learning</Link> techniques.
              Traditional methods for measuring <code>protein-ligand interactions</code> are expensive 
              and time-consuming. Decided to build a neural network that can predict binding affinity 
              from molecular structures, potentially accelerating drug discovery and reducing experimental 
              costs. The model uses graph neural networks to encode molecular features and predict 
              binding strength with high accuracy.
            </p>
          </div>

          <div className="flex flex-col gap-4 h-72">
            <h3>Features</h3>
            <LiquidGlass height={100}>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
                <div className="flex flex-col gap-2">
                  <h4>Graph Neural Network Architecture</h4>
                  <p className="text-zinc-400">
                    Implemented a sophisticated GNN that processes molecular graphs, capturing 
                    both local and global structural features. The model uses attention mechanisms 
                    to focus on critical binding sites and molecular interactions.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Multi-scale Feature Extraction</h4>
                  <p className="text-zinc-400">
                    Developed a hierarchical feature extraction system that processes molecular 
                    data at multiple scales - from atomic-level interactions to protein domain 
                    structures, ensuring comprehensive representation of binding mechanisms.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Transfer Learning Pipeline</h4>
                  <p className="text-zinc-400">
                    Built a transfer learning framework that pre-trains on large-scale molecular 
                    datasets and fine-tunes on specific protein families, significantly improving 
                    prediction accuracy for novel targets.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Training on large-scale molecular datasets</h3>
            <div className="w-full h-[160px]">
              <LiquidGlass height={100}>
                <MDXRemote {...source} />
              </LiquidGlass>
            </div>
            <p className="text-zinc-400">
              Trained the model on over 100,000 protein-ligand complexes from the PDB database, 
              implementing data augmentation techniques to increase dataset diversity. Used cross-validation 
              to ensure robust performance across different protein families and achieved 85% accuracy 
              on binding affinity prediction.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Implementing attention mechanisms for binding site identification</h3>
            <p className="text-zinc-400">
              Developed attention-based mechanisms that identify critical binding sites and molecular 
              interactions. The model can visualize which parts of the protein and ligand contribute 
              most to binding affinity, providing interpretable insights for drug design.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>
              Optimizing model architecture for computational efficiency
            </h3>
            <p className="text-zinc-400">
              Implemented model compression techniques including knowledge distillation and pruning 
              to reduce inference time by 60% while maintaining prediction accuracy. The optimized 
              model can process thousands of molecular structures in real-time, making it suitable 
              for high-throughput virtual screening applications.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Validating predictions against experimental data</h3>
            <p className="text-zinc-400">
              Conducted extensive validation studies comparing model predictions with experimental 
              binding affinity measurements. Achieved correlation coefficients of 0.8+ with experimental 
              data across multiple protein families, demonstrating the model&apos;s reliability for 
              drug discovery applications.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3>
              Building a web interface for molecular visualization and prediction
            </h3>
            <p className="text-zinc-400">
              Developed an interactive web application that allows researchers to upload molecular 
              structures, visualize binding predictions, and explore the model&apos;s attention maps. 
              The interface includes 3D molecular visualization and real-time prediction capabilities, 
              making the tool accessible to non-computational researchers.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Code Implementation</h3>
            <p className="text-zinc-400 mb-4">
              Here&apos;s a sample of the GraphNeuralNetwork class that processes molecular
              structures and predicts binding affinity:
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
