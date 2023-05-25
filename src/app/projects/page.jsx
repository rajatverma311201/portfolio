"use client";

import React from "react";

import { ProjectCard } from "@/components";
import { PROJECTS_LIST } from "@/assets/data";
import styles from "./ProjectsPage.module.scss";
import { motion } from "framer-motion";
const ProjectsPage = () => {
    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                delay: 0.55,
                duration: 0.5,
            }}
        >
            <h1>Projects</h1>
            <section className={styles["projects-list"]}>
                {PROJECTS_LIST.map((project) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        handleOpen={() => {}}
                    />
                ))}
            </section>
        </motion.div>
    );
};

export default ProjectsPage;
