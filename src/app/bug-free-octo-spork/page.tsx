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
          <h1>Bug Free Octo Spork</h1>
          <h2 className="text-zinc-400 font-light max-w-2xl mx-auto text-base sm:text-lg mt-4">
            Building a comprehensive development toolkit
          </h2>
        </div>
        <div className="w-full max-w-4xl mx-auto relative rounded-3xl overflow-hidden hero-image-shadow h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/images/projects/stackadapt.png"
            width={1000}
            height={1000}
            alt="Bug Free Octo Spork"
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
                    Building a comprehensive development toolkit
                  </p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full  ">
                  <p>Github</p>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/tonyqiu123/bug-free-octo-spork"
                      target="_blank"
                      rel="noreferrer"
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    >
                      <Image
                        src="/icons/logos/github.svg"
                        alt="github"
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
                  <p className="text-zinc-400">TBD</p>
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
              I was <b>inspired</b> to create a comprehensive development toolkit that{" "}
              <Link className="underline" href="https://www.google.com">streamlines the development process</Link>
              for modern web applications. Traditional development workflows are fragmented
              and require multiple tools. Decided to build an integrated platform that
              combines code generation, testing automation, deployment pipelines, and
              project management into a single, cohesive development environment.
            </p>
          </div>

          <div className="flex flex-col gap-4 h-72">
            <h3>Features</h3>
            <LiquidGlass height={100}>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
                <div className="flex flex-col gap-2">
                  <h4>Intelligent Code Generation</h4>
                  <p className="text-zinc-400">
                    AI-powered code generation that creates boilerplate code, API endpoints,
                    and database schemas based on natural language descriptions. Supports
                    multiple frameworks and automatically follows best practices and patterns.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Automated Testing Pipeline</h4>
                  <p className="text-zinc-400">
                    Comprehensive testing automation that generates unit tests, integration
                    tests, and end-to-end tests. Features intelligent test case generation
                    and continuous testing with real-time feedback on code quality.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Deployment Orchestration</h4>
                  <p className="text-zinc-400">
                    Streamlined deployment pipeline with support for multiple cloud providers,
                    container orchestration, and infrastructure as code. Features automated
                    rollbacks, blue-green deployments, and comprehensive monitoring.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Project Management Integration</h4>
                  <p className="text-zinc-400">
                    Integrated project management tools that track development progress,
                    manage tasks, and coordinate team workflows. Features include
                    automated sprint planning, progress tracking, and team collaboration tools.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Building intelligent development workflows</h3>
            <p className="text-zinc-400">
              Created sophisticated workflow automation that intelligently orchestrates
              development tasks from code generation to deployment. The system learns
              from team patterns and automatically optimizes processes, reducing
              development time by 40% while maintaining code quality standards.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Implementing advanced code analysis and optimization</h3>
            <p className="text-zinc-400">
              Developed comprehensive code analysis tools that identify performance
              bottlenecks, security vulnerabilities, and code quality issues. Features
              include automated refactoring suggestions, dependency analysis, and
              real-time code quality metrics to help teams maintain high standards.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Creating comprehensive monitoring and observability</h3>
            <p className="text-zinc-400">
              Built advanced monitoring and observability tools that provide real-time
              insights into application performance, user behavior, and system health.
              Features include distributed tracing, log aggregation, and intelligent
              alerting to help teams quickly identify and resolve issues.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Building collaborative development environment</h3>
            <p className="text-zinc-400">
              Created an integrated collaborative environment that enables seamless
              team communication, code sharing, and knowledge management. Features
              include real-time collaboration tools, shared development environments,
              and intelligent documentation generation to improve team productivity.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Code Implementation</h3>
            <p className="text-zinc-400 mb-4">
              Here&apos;s a sample of the DevelopmentWorkflowEngine that orchestrates
              automated development processes and code generation:
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}