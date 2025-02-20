import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center max-w-screen-md w-full">
      <Link
        href="/"
        className="w-fit flex mr-auto gap-2 opacity-60 hover:opacity-100 transition-opacity"
      >
        <Image src="/icons/arrow-left.svg" alt="" width={16} height={16} />
        Back
      </Link>
      <div className="w-full h-[450px] relative">
        <Image
          src="/images/projects/project2.png"
          alt="Machine Learning Dashboard"
          fill
          className="object-cover object-center"
        />
      </div>
      <section className="flex flex-col gap-20 w-full">
        <div className="grid grid-cols-2 gap-6">
          <h1>Sobaii</h1>
          <div className="flex flex-col gap-2">
            <p>Timeframe</p>
            <p className="text-zinc-400">11 months | 2024.4.01 — present</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Links</p>
            <div className="flex gap-2">
              <Link
                href="https://sobaii.ca"
                target="_blank"
                rel="noreferrer"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <Image src="/icons/url.svg" alt="url" width={24} height={24} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Tools</p>
            <p className="text-zinc-400">
              React.js, TypeScript, Express.js, PostgreSQL, AWS, Terraform
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3>Excerpt</h3>
          <p className="text-zinc-400">
            I was personally managing and transcribing hundreds of physical
            receipts in a jar each taxing season. Decided to build a web app
            that lets users upload hundreds of receipts at once for processing.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3>Features</h3>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-10">
            <div className="flex flex-col gap-2">
              <h4>Sortable and editable table</h4>
              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vitae omnis blanditiis ipsa pariatur, consectetur a deserunt id
                illum qui est? Itaque quibusdam necessitatibus, quaerat eum
                dignissimos minima similique. Nihil.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Inbox Deepscanning</h4>
              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vitae omnis blanditiis ipsa pariatur, consectetur a deserunt id
                illum qui est? Itaque quibusdam necessitatibus, quaerat eum
                dignissimos minima similique. Nihil.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Text-to-chart with QueryGPT</h4>
              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vitae omnis blanditiis ipsa pariatur, consectetur a deserunt id
                illum qui est? Itaque quibusdam necessitatibus, quaerat eum
                dignissimos minima similique. Nihil.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Custom Authentication</h4>
              <p className="text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                vitae omnis blanditiis ipsa pariatur, consectetur a deserunt id
                illum qui est? Itaque quibusdam necessitatibus, quaerat eum
                dignissimos minima similique. Nihil.
              </p>
            </div>

          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3>Saving money by deploying React and Express on AWS</h3>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
            omnis blanditiis ipsa pariatur, consectetur a deserunt id illum qui
            est? Itaque quibusdam necessitatibus, quaerat eum dignissimos minima
            similique. Nihil.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3>Showing newest UI changes to users</h3>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
            omnis blanditiis ipsa pariatur, consectetur a deserunt id illum qui
            est? Itaque quibusdam necessitatibus, quaerat eum dignissimos minima
            similique. Nihil.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3>Implementing, expanding, and integrating Uber`s text-to-SQL infrastructure</h3>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
            omnis blanditiis ipsa pariatur, consectetur a deserunt id illum qui
            est? Itaque quibusdam necessitatibus, quaerat eum dignissimos minima
            similique. Nihil.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3>React Performance Optimizations</h3>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
            omnis blanditiis ipsa pariatur, consectetur a deserunt id illum qui
            est? Itaque quibusdam necessitatibus, quaerat eum dignissimos minima
            similique. Nihil.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Buildling a pipeline to use user data to finetune an OCR model</h3>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
            omnis blanditiis ipsa pariatur, consectetur a deserunt id illum qui
            est? Itaque quibusdam necessitatibus, quaerat eum dignissimos minima
            similique. Nihil.
          </p>
        </div>
      </section>
    </div>
  );
}
