"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Gym Management Application",
    description: "Management application for a Gym allowing trainers and members to book training sessions and manage supplies",
    image: "/images/projects/1.png",
    tag: ["All", "Personal Projects"],
    gitUrl: "https://github.com/MrFibonacc1/Healthcare-System",
    previewUrl: "https://www.youtube.com/watch?v=etZ74wvCNTQ&t=9s",
  },
  {
    id: 2,
    title: "AI Route Guardian",
    description: "Detects car crashes along your route and uses AI to give advice to prevent similar accidents",
    image: "/images/projects/2.png",
    tag: ["All", "Hackathons"],
    gitUrl: "https://github.com/MrFibonacc1/Route-Guardian",
    previewUrl: "https://github.com/MrFibonacc1/Route-Guardian",
  },
  {
    id: 3,
    title: "Online Multiplayer Game",
    description: "Fun online game to play with other friends",
    image: "/images/projects/3.png",
    tag: ["All", "Personal Projects"],
    gitUrl: "https://github.com/MrFibonacc1/shoot.io",
    previewUrl: "https://github.com/MrFibonacc1/shoot.io",
  },
  {
    id: 4,
    title: "VR Memory Lane",
    description: "Upload your phone photos to the app, which will extract metadata and display your pictures in a 3D world for you to re-experience in VR",
    image: "/images/projects/4.png",
    tag: ["All", "Hackathons"],
    gitUrl: "https://github.com/MrFibonacc1/vr-memory-maps",
    previewUrl: "https://www.youtube.com/watch?v=qSI_GPKFuNE",
  },
  {
    id: 5,
    title: "School Class Scheduler",
    description: "Efficient Class Management and Booking for Schools",
    image: "/images/projects/5.png",
    tag: ["All", "Personal Projects"],
    gitUrl: "https://github.com/MrFibonacc1/Booking-Website",
    previewUrl: "https://github.com/MrFibonacc1/Booking-Website",
  },
  {
    id: 6,
    title: "Facial Recognition Attendance",
    description: "Used machine learning to detect student faces and mark present for class",
    image: "/images/projects/6.png",
    tag: ["All", "Personal Projects"],
    gitUrl: "https://github.com/MrFibonacc1/Facial-Recognition-Attendance",
    previewUrl: "https://github.com/MrFibonacc1/Facial-Recognition-Attendance",
  },
  {
    id: 7,
    title: "Web Crawler",
    description: "Crawls a given URL to extract all accessed URLs, then organizes and ranks them based on a specified phrase",
    image: "/images/projects/7.png",
    tag: ["All", "Personal Projects"],
    gitUrl: "https://github.com/MrFibonacc1/web-crawler",
    previewUrl: "https://github.com/MrFibonacc1/web-crawler",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal Projects"
          isSelected={tag === "Personal Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hackathons"
          isSelected={tag === "Hackathons"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
