"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-10 py-6 lg:py-10">
      <Navbar />
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full grid grid-cols-[repeat(auto-fit,_minmax(500px,_1fr))] gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        {projects.map((project) => (
          <motion.div key={project.title} variants={itemVariants}>
            <Project
              image={project.image}
              url={project.url}
              title={project.title}
              description={project.description}
              type={project.type}
              date={project.date}
            />
          </motion.div>
        ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

const projects = [
  {
    image: "/images/projects/sobaii.png",
    url: "/sobaii",
    title: "Agentic Excel in Browser",
    description:
      "Building an AI-powered spreadsheet application with intelligent automation and natural language processing",
    type: "Project",
    date: "2024.12",
  },
  {
    image: "/images/projects/wat2do.png",
    url: "https://wat2do.vercel.app",
    title: "Centralized Platform for Discovering Club Events at UW",
    description:
      "Building a comprehensive platform for students to discover and join club events across campus",
    type: "Project",
    date: "2024.11",
  },
  {
    image: "/images/projects/stackadapt.png",
    url: "https://www.stackadapt.com",
    title: "StackAdapt",
    description:
      "Building programmatic advertising solutions with machine learning optimization",
    type: "Internship",
    date: "2024.10",
  },
  {
    image: "/images/projects/humane-society.png",
    url: "/uwblueprint",
    title: "UW Blueprint",
    description:
      "Building a tablet-first web app for a non-profit animal shelter to vet and connect volunteers to animals",
    type: "Design team",
    date: "2024.09",
  },
  {
    image: "/images/projects/affi-nn-ity.png",
    url: "/affi-nn-ity",
    title: "Affi-NN-ity",
    description:
      "Building a molecule binding affinity predictor using SOTA deep learning models",
    type: "Design team",
    date: "2024.08",
  },
  {
    image: "/images/projects/wealthyplanet.png",
    url: "https://www.wealthyplanet.com",
    title: "WealthyPlanet",
    description:
      "Winter 2024 and Fall 2024 internship building an AI-financial advisor for Canadians",
    type: "Internship",
    date: "2024.07",
  },
  {
    image: "/images/projects/brightbearsinfo.png",
    url: "https://www.brightbearsinfo.com",
    title: "BrightBearsInfo",
    description:
      "Landing site for non-profit helping secondary education students network with industry professionals",
    type: "Volunteer",
    date: "2024.06",
  },
];
