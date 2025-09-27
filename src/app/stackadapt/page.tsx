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
          <h1>StackAdapt</h1>
          <h2 className="text-zinc-400 font-light max-w-2xl mx-auto text-base sm:text-lg mt-4">
            Building programmatic advertising solutions with machine learning optimization
          </h2>
        </div>
        <div className="w-full max-w-4xl mx-auto relative rounded-3xl overflow-hidden hero-image-shadow h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/images/projects/stackadapt.png"
            width={1000}
            height={1000}
            alt="StackAdapt"
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
                    Building programmatic advertising solutions with machine learning optimization
                  </p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full  ">
                  <p>Website</p>
                  <div className="flex gap-2">
                    <Link
                      href="https://stackadapt.com"
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
                    Python, TensorFlow, Apache Kafka, Redis, PostgreSQL, AWS, Kubernetes
                  </p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full">
                  <p>Timeframe</p>
                  <p className="text-zinc-400">2024.10 — present</p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full">
                  <p>Team</p>
                  <p className="text-zinc-400">Engineering Team</p>
                </div>
              </div>
            </LiquidGlass>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Excerpt</h3>
            <p className="text-zinc-400">
              I was <b>excited</b> to work on cutting-edge programmatic advertising technology that{" "}
              <Link className="underline" href="https://www.google.com">optimizes ad placements</Link> using
              advanced <code>machine learning algorithms</code>. Traditional advertising platforms rely on
              basic targeting and manual optimization. Decided to build intelligent systems that
              automatically optimize ad performance, predict user behavior, and maximize ROI for
              advertisers through real-time bidding and predictive analytics.
            </p>
          </div>

          <div className="flex flex-col gap-4 h-72">
            <h3>Features</h3>
            <LiquidGlass height={100}>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
                <div className="flex flex-col gap-2">
                  <h4>Real-time Bidding Engine</h4>
                  <p className="text-zinc-400">
                    High-performance bidding system that processes millions of ad requests per second
                    with sub-millisecond response times. Uses machine learning to predict bid success
                    and optimize for campaign objectives.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Predictive Analytics Platform</h4>
                  <p className="text-zinc-400">
                    Advanced ML models that predict user behavior, ad performance, and market trends.
                    Features include audience segmentation, conversion prediction, and automated
                    budget optimization for maximum campaign efficiency.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Dynamic Creative Optimization</h4>
                  <p className="text-zinc-400">
                    AI-powered system that automatically generates and tests ad creatives based on
                    audience preferences and performance data. Continuously optimizes creative
                    elements to maximize engagement and conversion rates.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Cross-Device Attribution</h4>
                  <p className="text-zinc-400">
                    Sophisticated attribution modeling that tracks user journeys across devices and
                    touchpoints. Provides accurate ROI measurement and helps advertisers understand
                    the complete customer journey.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Building scalable real-time data processing infrastructure</h3>
            <p className="text-zinc-400">
              Developed a robust data pipeline using Apache Kafka and Redis to handle millions of
              ad requests per second. Implemented distributed processing with Kubernetes orchestration
              to ensure high availability and fault tolerance. Built comprehensive monitoring and
              alerting systems to maintain system health and performance.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Implementing advanced machine learning models for ad optimization</h3>
            <p className="text-zinc-400">
              Created sophisticated ML models using TensorFlow that predict ad performance and
              optimize bidding strategies. Implemented deep learning algorithms for audience
              targeting, fraud detection, and creative optimization. The models continuously
              learn from campaign data to improve prediction accuracy and ROI.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>
              Creating comprehensive analytics and reporting dashboard
            </h3>
            <p className="text-zinc-400">
              Built an intuitive analytics platform that provides real-time insights into campaign
              performance, audience behavior, and market trends. Features include interactive
              visualizations, automated reporting, and predictive analytics to help advertisers
              make data-driven decisions and optimize their advertising strategies.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Optimizing for privacy and compliance</h3>
            <p className="text-zinc-400">
              Implemented privacy-first advertising solutions that comply with GDPR, CCPA, and
              other privacy regulations. Built consent management systems, data anonymization
              pipelines, and privacy-preserving analytics to ensure user privacy while maintaining
              advertising effectiveness.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3>
              Building automated campaign management and optimization
            </h3>
            <p className="text-zinc-400">
              Created intelligent automation systems that manage campaigns end-to-end, from
              setup to optimization. Features include automated bid adjustments, budget
              reallocation, and performance monitoring. The system continuously optimizes
              campaigns to achieve advertiser goals with minimal manual intervention.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Code Implementation</h3>
            <p className="text-zinc-400 mb-4">
              Here&apos;s a sample of the BiddingEngine class that handles
              real-time ad bidding and optimization:
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
