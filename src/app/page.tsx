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
    <div className="p-10 flex flex-col gap-10">
      <Navbar />
      <motion.div
        className="max-w-screen-xl w-full grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-10"
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
            />
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </div>
  );
}

const projects = [
  {
    image: "/images/projects/project6.png",
    url: "/affi-nn-ity",
    title: "Affi-NN-ity",
    description:
      "Building a molecule binding affinity predictor using SOTA deep learning models",
    type: "Design team",
  },
  {
    image: "/images/projects/project3.png",
    url: "/uwblueprint",
    title: "UW Blueprint",
    description:
      "Building a tablet-first web app for a non-profit animal shelter to vet and connect volunteers to animals",
    type: "Design team",
  },
  {
    image: "/images/projects/project1.png",
    url: "/sobaii",
    title: "sobaii",
    description:
      "Finetuning SOTA OCR inside a unique birdseye view bookkeeping experience",
    type: "Project",
  },
  {
    image: "/images/projects/project2.png",
    url: "/wealthyplanet",
    title: "WealthyPlanet",
    description:
      "Winter 2024 and Fall 2024 internship building an AI-financial advisor for Canadians",
    type: "Internship",
  },
  {
    image: "/images/projects/project4.png",
    url: "/50-days-of-components",
    title: "50 Days of Components",
    description:
      "Designing and building 50 Next.js + vanilla CSS components in 50 days",
    type: "Project",
  },
  {
    image: "/images/projects/project5.png",
    url: "/brightbearsinfo",
    title: "BrightBearsInfo",
    description:
      "Landing site for non-profit helping secondary education students network with industry professionals",
    type: "Volunteer",
  },
];
