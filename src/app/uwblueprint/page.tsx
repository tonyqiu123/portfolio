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
          <h1>UW Blueprint</h1>
          <h2 className="text-zinc-400 font-light max-w-2xl mx-auto text-base sm:text-lg mt-4">
            Building technology solutions for social impact
          </h2>
        </div>
        <div className="w-full max-w-4xl mx-auto relative rounded-3xl overflow-hidden hero-image-shadow h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/images/projects/humane-society.png"
            width={1000}
            height={1000}
            alt="UW Blueprint"
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
                    Building technology solutions for social impact
                  </p>
                </div>
                <div className="w-px h-10 my-auto bg-zinc-700" />
                <div className="flex flex-col gap-2 h-full  ">
                  <p>Website</p>
                  <div className="flex gap-2">
                    <Link
                      href="https://uwblueprint.org"
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
              I was <b>passionate</b> about using technology to help{" "}
              <Link className="underline" href="https://www.google.com">animal shelters</Link> improve
              their operations and <code>animal welfare</code>. Traditional shelter management
              systems are outdated and don&apos;t provide the tools needed for effective
              volunteer coordination and animal care. Decided to build a modern, tablet-first
              platform that streamlines shelter operations and improves animal outcomes.
            </p>
          </div>

          <div className="flex flex-col gap-4 h-72">
            <h3>Features</h3>
            <LiquidGlass height={100}>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-8">
                <div className="flex flex-col gap-2">
                  <h4>Animal Profile Management</h4>
                  <p className="text-zinc-400">
                    Comprehensive animal profiles with medical history, behavioral notes,
                    and adoption status tracking. Features photo galleries, health records,
                    and personality assessments to help match animals with suitable adopters.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Volunteer Coordination System</h4>
                  <p className="text-zinc-400">
                    Advanced scheduling system that matches volunteers with available shifts
                    based on skills, availability, and preferences. Includes training tracking,
                    performance metrics, and automated communication for volunteer management.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Adoption Matching Algorithm</h4>
                  <p className="text-zinc-400">
                    Intelligent matching system that connects potential adopters with
                    compatible animals based on lifestyle, experience, and preferences.
                    Uses machine learning to improve match success rates over time.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4>Medical Records Integration</h4>
                  <p className="text-zinc-400">
                    Integrated medical records system that tracks vaccinations, treatments,
                    and health checkups. Features automated reminders for medical appointments
                    and medication schedules to ensure optimal animal care.
                  </p>
                </div>
              </div>
            </LiquidGlass>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Building tablet-first user experience</h3>
            <p className="text-zinc-400">
              Designed and developed a responsive, touch-optimized interface specifically
              for tablet use in shelter environments. Implemented intuitive navigation,
              large touch targets, and offline capabilities to ensure reliable operation
              even in areas with poor internet connectivity.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Implementing real-time communication features</h3>
            <p className="text-zinc-400">
              Built comprehensive communication tools including instant messaging,
              notification systems, and emergency alerts. Features include volunteer
              check-in/check-out tracking, shift handoff notes, and automated
              reminders for critical tasks and appointments.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>
              Creating comprehensive analytics and reporting system
            </h3>
            <p className="text-zinc-400">
              Developed detailed analytics dashboard that tracks animal outcomes,
              volunteer engagement, and operational efficiency. Features include
              adoption success rates, volunteer retention metrics, and resource
              utilization reports to help shelters optimize their operations.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Optimizing for accessibility and usability</h3>
            <p className="text-zinc-400">
              Implemented comprehensive accessibility features including screen reader
              support, high contrast modes, and voice navigation. Designed intuitive
              workflows that minimize training time for volunteers and staff,
              ensuring the platform can be used effectively by people of all
              technical skill levels.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3>
              Building secure data management and privacy protection
            </h3>
            <p className="text-zinc-400">
              Implemented robust security measures to protect sensitive animal and
              adopter information. Features include role-based access controls,
              data encryption, and compliance with privacy regulations. Built
              comprehensive audit trails to track all system activities and
              ensure data integrity.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3>Code Implementation</h3>
            <p className="text-zinc-400 mb-4">
              Here&apos;s a sample of the AnimalProfileService that manages
              animal data and adoption matching algorithms:
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}