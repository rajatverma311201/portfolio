"use client";

import React, { useState } from "react";

import { ProjectCard, ProjectModal } from "@/components";
import { PROJECTS_LIST, COLOR_THEMES_LIST } from "@/assets/data";
import styles from "./ProjectsPage.module.scss";
import { motion } from "framer-motion";

function getRandomInteger(n) {
    return Math.floor(Math.random() * n);
}

const ProjectsPage = () => {
    const [sectionColor, setSectionColor] = useState(
        COLOR_THEMES_LIST[getRandomInteger(COLOR_THEMES_LIST.length)]
    );

    const [open, setOpen] = useState(false);
    const [modalProject, setModalProject] = useState(null);
    const handleOpen = (project) => {
        console.log(project);
        setSectionColor(
            COLOR_THEMES_LIST[getRandomInteger(COLOR_THEMES_LIST.length)]
        );
        setModalProject(project);
        setOpen(true);
    };
    const handleClose = () => {
        setModalProject(null);
        setOpen(false);
    };

    return (
        <>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.55,
                    duration: 0.5,
                }}
                className={styles["container"]}
            >
                <motion.h2
                    // viewport={{ once: true }}
                    // initial={{ opacity: 0 }}
                    // whileInView={{ opacity: 1 }}
                    // transition={{
                    //     delay: 0.75,
                    //     duration: 0.5,
                    // }}
                    className={styles["projects-main-heading"]}
                >
                    My{" "}
                    <span className={styles["heading-highlight"]}>
                        Projects
                    </span>
                </motion.h2>
                <section className={styles["projects-list"]}>
                    {PROJECTS_LIST.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            handleOpen={handleOpen}
                        />
                    ))}
                </section>
            </motion.div>

            <ProjectModal
                sectionColor={sectionColor}
                modalProject={modalProject}
                open={open}
                handleClose={handleClose}
            />
        </>
    );
};

export default ProjectsPage;
