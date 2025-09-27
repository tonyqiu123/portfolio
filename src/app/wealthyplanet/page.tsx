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
          <h1>Wealthy Planet</h1>
          <h2 className="text-zinc-400 font-light max-w-2xl mx-auto text-base sm:text-lg mt-4">
            Building a sustainable investment platform for environmental impact
          </h2>
        </div>
        <div className="w-full max-w-4xl mx-auto relative rounded-3xl overflow-hidden hero-image-shadow h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/images/projects/wealthyplanet.png"
            width={1000}
            height={1000}
            alt="Wealthy Planet"
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
                    Building a sustainable investment platform for environmental impact
                  </p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full  ">
                  <p>Website</p>
                  <div className="flex gap-2">
                    <Link
                      href="https://wealthyplanet.com"
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
              I was <b>excited</b> to work on building an AI-powered financial advisor that{" "}
              <Link className="underline" href="https://www.google.com">democratizes financial planning</Link>
              for Canadians. Traditional financial advisors are expensive and inaccessible to many.
              Decided to build an intelligent platform that provides personalized financial advice,
              investment recommendations, and retirement planning using advanced AI algorithms
              and real-time market data to help Canadians make informed financial decisions.
            </p>
          </div>

          <div className="flex flex-col gap-4 h-72">
            <h3>Features</h3>
            <LiquidGlass height={100}>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
                <div className="flex flex-col gap-2">
                  <h4>AI-Powered Financial Analysis</h4>
                  <p className="text-zinc-400">
                    Advanced machine learning algorithms that analyze user financial data,
                    spending patterns, and goals to provide personalized investment
                    recommendations and risk assessments tailored to Canadian markets.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Real-time Portfolio Management</h4>
                  <p className="text-zinc-400">
                    Comprehensive portfolio tracking with real-time market data integration,
                    automated rebalancing suggestions, and performance analytics to help
                    users optimize their investment strategies.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Retirement Planning Tools</h4>
                  <p className="text-zinc-400">
                    Sophisticated retirement planning calculators that consider Canadian
                    tax implications, RRSP/TFSA optimization, and long-term financial
                    projections to help users achieve their retirement goals.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Building secure financial data infrastructure</h3>
            <p className="text-zinc-400">
              Implemented bank-level security measures including end-to-end encryption,
              multi-factor authentication, and secure API integrations with major Canadian
              financial institutions. Built a robust data pipeline that safely processes
              and stores sensitive financial information while maintaining user privacy.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Implementing advanced risk assessment algorithms</h3>
            <p className="text-zinc-400">
              Developed sophisticated risk profiling algorithms that analyze user financial
              behavior, market volatility, and economic indicators to provide accurate
              risk assessments. The system continuously learns from market data to improve
              risk predictions and investment recommendations.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>
              Creating personalized investment strategies
            </h3>
            <p className="text-zinc-400">
              Built an intelligent system that creates customized investment portfolios
              based on user goals, risk tolerance, and time horizons. The platform
              considers Canadian tax implications, market conditions, and individual
              circumstances to optimize returns while minimizing risk.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Optimizing real-time market data processing</h3>
            <p className="text-zinc-400">
              Implemented high-performance data processing pipelines that handle millions
              of market data points in real-time. Used advanced caching strategies and
              distributed computing to ensure fast response times and accurate financial
              calculations for portfolio management and investment recommendations.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3>
              Building comprehensive financial education platform
            </h3>
            <p className="text-zinc-400">
              Created an extensive library of financial education content including
              interactive tutorials, market analysis tools, and personalized learning
              paths. The platform helps users understand complex financial concepts
              and make informed decisions about their investments and financial future.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Code Implementation</h3>
            <p className="text-zinc-400 mb-4">
              Here&apos;s a sample of the FinancialAnalysisEngine that processes
              user data and generates personalized investment recommendations:
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}