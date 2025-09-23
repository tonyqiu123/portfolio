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
          alt="bug-free-octo-spork"
          fill
          className="object-cover object-center"
        />
      </div>
      <section className="flex flex-col gap-20 w-full">
        <div className="grid grid-cols-2 gap-6">
          <h1>bug-free-octo-spork</h1>
          <div className="flex flex-col gap-2">
            <p>Timeframe</p>
            <p className="text-zinc-400">TBD</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Links</p>
            <div className="flex gap-2">
              {/* Intentionally left blank for now */}
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
            Placeholder description for bug-free-octo-spork. Update this section with a
            concise overview of the project goals and impact.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3>Features</h3>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-10">
            <div className="flex flex-col gap-2">
              <h4>Feature One</h4>
              <p className="text-zinc-400">
                Briefly describe a core feature. Replace with real details.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Feature Two</h4>
              <p className="text-zinc-400">
                Briefly describe another core feature. Replace with real details.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Feature Three</h4>
              <p className="text-zinc-400">
                Briefly describe another core feature. Replace with real details.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Feature Four</h4>
              <p className="text-zinc-400">
                Briefly describe another core feature. Replace with real details.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3>Section A</h3>
          <p className="text-zinc-400">
            Expand on a notable piece of work, decision, or learning.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3>Section B</h3>
          <p className="text-zinc-400">
            Expand on another notable piece of work, decision, or learning.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3>Section C</h3>
          <p className="text-zinc-400">
            Add any technical deep-dive, performance optimizations, or outcomes.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3>Section D</h3>
          <p className="text-zinc-400">
            Summarize additional details, future work, or reflections.
          </p>
        </div>
      </section>
    </div>
  );
}


