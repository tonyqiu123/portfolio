"use client";
import LiquidGlass from "@/components/ui/liquid-glass";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
          <h1>Agentic Excel in Browser</h1>
          <h2 className="text-zinc-400 font-light max-w-2xl mx-auto text-base sm:text-lg mt-4">
            Building an AI-powered spreadsheet application with intelligent automation and natural language processing
          </h2>
        </div>
        <div className="w-full max-w-4xl mx-auto relative rounded-3xl overflow-hidden hero-image-shadow h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/images/projects/sobaii.png"
            width={1000}
            height={1000}
            alt="Agentic Excel in Browser"
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
                    Building an AI-powered spreadsheet application with intelligent automation and natural language processing
                  </p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full  ">
                  <p>Website</p>
                  <div className="flex gap-2">
                    <Link
                      href="https://sobaii.ca"
                      target="_blank"
                      rel="noreferrer"
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <Image
                        src="/icons/url.svg"
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
                    React.js, TypeScript, Express.js, PostgreSQL, AWS, Terraform
                  </p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full">
                  <p>Timeframe</p>
                  <p className="text-zinc-400">11 months | 2024.4.01 — present</p>
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
              I was <b>inspired</b> to revolutionize spreadsheet functionality by integrating{" "}
              <Link className="underline" href="https://www.google.com">AI capabilities</Link> directly into the browser.
              Traditional spreadsheets require complex formulas and manual data manipulation.
              Decided to build an intelligent spreadsheet application that understands natural language,
              automates complex calculations, and provides AI-powered insights to make data analysis
              accessible to everyone, regardless of technical expertise.
            </p>
          </div>

          <div className="flex flex-col gap-4 h-72">
            <h3>Features</h3>
            <LiquidGlass height={100}>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
                <div className="flex flex-col gap-2">
                  <h4>Natural Language Formula Generation</h4>
                  <p className="text-zinc-400">
                    AI-powered system that converts natural language descriptions into
                    complex spreadsheet formulas. Users can describe what they want to
                    calculate in plain English, and the system generates the appropriate
                    formulas automatically.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Intelligent Data Analysis</h4>
                  <p className="text-zinc-400">
                    Advanced analytics engine that automatically identifies patterns,
                    trends, and insights in spreadsheet data. Provides intelligent
                    recommendations for data visualization and statistical analysis
                    without requiring advanced Excel knowledge.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Automated Data Processing</h4>
                  <p className="text-zinc-400">
                    Smart automation features that can clean, transform, and organize
                    data based on user instructions. Handles data validation, duplicate
                    removal, and format standardization with minimal user intervention.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Real-time Collaboration</h4>
                  <p className="text-zinc-400">
                    Multi-user editing capabilities with AI-powered conflict resolution
                    and intelligent merge suggestions. Features include real-time cursors,
                    change tracking, and automated backup systems for seamless teamwork.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Building intelligent formula parsing and execution engine</h3>
            <p className="text-zinc-400">
              Developed a sophisticated natural language processing system that understands
              user intent and converts it into executable spreadsheet formulas. Implemented
              context-aware parsing that considers data types, relationships, and user
              preferences to generate accurate and efficient calculations.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Implementing real-time collaborative editing infrastructure</h3>
            <p className="text-zinc-400">
              Built a robust real-time collaboration system using WebSockets and operational
              transformation algorithms. Features include conflict resolution, change tracking,
              and intelligent merge capabilities that allow multiple users to edit
              spreadsheets simultaneously without data loss or conflicts.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>
              Creating advanced data visualization and charting capabilities
            </h3>
            <p className="text-zinc-400">
              Developed intelligent charting system that automatically suggests appropriate
              visualizations based on data patterns and user intent. Features include
              interactive charts, real-time updates, and AI-powered insights that help
              users understand their data through visual storytelling.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Optimizing performance for large datasets</h3>
            <p className="text-zinc-400">
              Implemented advanced optimization techniques including virtual scrolling,
              lazy loading, and intelligent caching to handle spreadsheets with millions
              of cells. Built efficient calculation engine that processes complex formulas
              in real-time while maintaining smooth user experience.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3>
              Building AI-powered data insights and recommendations
            </h3>
            <p className="text-zinc-400">
              Created intelligent analytics engine that automatically identifies data
              patterns, anomalies, and opportunities. Features include predictive
              modeling, trend analysis, and personalized recommendations that help users
              make data-driven decisions without requiring advanced statistical knowledge.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Code Implementation</h3>
            <p className="text-zinc-400 mb-4">
              Here&apos;s a sample of the FormulaEngine class that handles
              natural language processing and formula generation:
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}