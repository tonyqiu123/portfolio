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
          <h1>Centralized Platform for Discovering Club Events at UW</h1>
          <h2 className="text-zinc-400 font-light max-w-2xl mx-auto text-base sm:text-lg mt-4">
            Building a comprehensive platform for students to discover and join club events across campus
          </h2>
        </div>
        <div className="w-full max-w-4xl mx-auto relative rounded-3xl overflow-hidden hero-image-shadow h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/images/projects/wat2do.png"
            width={1000}
            height={1000}
            alt="Centralized Platform for Discovering Club Events at UW"
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
                    Building a comprehensive platform for students to discover and join club events across campus
                  </p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full  ">
                  <p>Github</p>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/tonyqiu123/uw-events-platform"
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
                    Next.js, TypeScript, Prisma, PostgreSQL, Vercel
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
              I noticed that <b>students at UW were missing out</b> on amazing club events because{" "}
              <Link className="underline" href="https://www.google.com">information was scattered</Link> across
              multiple <code>Facebook groups</code> and club websites. Decided to build a centralized
              platform that aggregates all campus events in one place, making it easier for students
              to discover and join activities that interest them. The platform includes event filtering,
              RSVP management, and personalized recommendations based on user interests.
            </p>
          </div>

          <div className="flex flex-col gap-4 h-72">
            <h3>Features</h3>
            <LiquidGlass height={100}>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
                <div className="flex flex-col gap-2">
                  <h4>Event Discovery & Filtering</h4>
                  <p className="text-zinc-400">
                    Advanced filtering system allowing students to find events by date, category, 
                    location, and club. Real-time search with autocomplete and saved filters.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>RSVP Management</h4>
                  <p className="text-zinc-400">
                    Integrated RSVP system with waitlist management, event capacity tracking, 
                    and automated reminders. Students can manage their event calendar in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Personalized Recommendations</h4>
                  <p className="text-zinc-400">
                    AI-powered recommendation engine that suggests events based on user interests, 
                    past attendance, and similar students&apos; preferences.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Club Dashboard</h4>
                  <p className="text-zinc-400">
                    Comprehensive dashboard for club organizers to create events, manage attendees, 
                    track engagement metrics, and communicate with members.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Building a scalable event aggregation system</h3>
            <p className="text-zinc-400">
              Developed a robust scraping system that automatically aggregates events from various sources 
              including club websites, Facebook groups, and university calendars. Implemented intelligent 
              deduplication algorithms to prevent duplicate events and built a flexible data model that 
              can handle different event formats and metadata structures.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Real-time notification system for event updates</h3>
            <p className="text-zinc-400">
              Built a comprehensive notification system using WebSockets and server-sent events to 
              notify users about new events, event changes, and reminders. Integrated with email and 
              push notification services to ensure students never miss important updates about events 
              they&apos;re interested in.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>
              Implementing machine learning for personalized event recommendations
            </h3>
            <p className="text-zinc-400">
              Developed a collaborative filtering algorithm that analyzes user behavior, event attendance 
              patterns, and club preferences to provide personalized event recommendations. The system 
              continuously learns from user interactions to improve recommendation accuracy and help 
              students discover events they might not have found otherwise.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Optimizing database queries for high-traffic scenarios</h3>
            <p className="text-zinc-400">
              Implemented database indexing strategies and query optimization techniques to handle 
              thousands of concurrent users browsing events. Used Redis for caching frequently accessed 
              data and implemented pagination to ensure fast loading times even with large event datasets.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3>
              Building analytics dashboard for club engagement insights
            </h3>
            <p className="text-zinc-400">
              Created a comprehensive analytics dashboard that provides club organizers with insights 
              into event attendance, user engagement patterns, and popular event categories. The dashboard 
              helps clubs optimize their event planning and understand their audience better.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Code Implementation</h3>
            <p className="text-zinc-400 mb-4">
              Here&apos;s a sample of the EventRecommendationService that handles personalized 
              event suggestions using collaborative filtering:
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}