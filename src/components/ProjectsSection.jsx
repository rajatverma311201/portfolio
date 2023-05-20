import React from "react";

import styles from "./ProjectsSection.module.scss";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { PROJECTS_LIST } from "@/assets/data";
const ProjectsSection = () => {
    const PROJECTS = PROJECTS_LIST.slice(0, 3);

    return (
        <section className={styles["container"]}>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                    duration: 0.5,
                }}
                className={styles["main-logo-img-container"]}
            >
                <Tilt options={defaultOptions}>
                    <img
                        src="/project-logo.svg"
                        alt=""
                        className={styles["main-logo-img"]}
                    />
                </Tilt>
            </motion.div>
            <motion.h2
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                }}
                className={styles["main-heading"]}
            >
                My <span className={styles["heading-highlight"]}>Projects</span>
            </motion.h2>
            <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
                {" "}
                Development in progress
            </h1>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                }}
                className={styles["projects-list"]}
            >
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </motion.div>
        </section>
    );
};

export default ProjectsSection;

const ProjectCard = ({ project }) => (
    <div className={styles["project"]}>
        <div className={styles["project-img"]}>
            <img
                src={project.mainImage}
                alt={project.name}
                className={styles["project-img__item"]}
            />
        </div>
        <h3 className={styles["project-name"]}>{project.name}</h3>

        <div className={styles["project-tech"]}>
            {project.technologies.map((tech) => (
                <span key={tech} className={styles["project-tech__item"]}>
                    {tech}
                </span>
            ))}
        </div>
        <div className={styles["project-desc"]}>
            <p className={styles["project-desc__item"]}>
                {project.description}
            </p>
            <p className={styles["project-desc__item"]}>
                {project.descriptionSecondary}
            </p>
        </div>
    </div>
);

const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 30, // max tilt rotation (degrees)
    perspective: 500, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1500, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
