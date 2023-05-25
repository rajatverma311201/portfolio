"use client";
import React, { useState } from "react";

import styles from "./ProjectsSection.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { PROJECTS_LIST } from "@/assets/data";
import { Modal, Box } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { ProjectCard } from "@/components";
import Image from "next/image";
const ProjectsSection = () => {
    const PROJECTS = PROJECTS_LIST.slice(0, 3);
    const [open, setOpen] = useState(false);
    const [modalProject, setModalProject] = useState(null);
    const handleOpen = (project) => {
        console.log(project);
        setModalProject(project);
        setOpen(true);
    };
    const handleClose = () => {
        setModalProject(null);
        setOpen(false);
    };

    return (
        <>
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
                        <Image
                            width={400}
                            height={400}
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
                    My{" "}
                    <span className={styles["heading-highlight"]}>
                        Projects
                    </span>
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
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            handleOpen={handleOpen}
                        />
                    ))}
                </motion.div>
            </section>

            <ProjectDetailModal
                modalProject={modalProject}
                open={open}
                handleClose={handleClose}
            />
        </>
    );
};

export default ProjectsSection;

const styleModalBox = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // maxWidth: "90vw",
    // maxHeight: "90vh",
    // overflow: "auto",
    // boxShadow: 24,
    outline: "none",
};

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

const ProjectDetailModal = ({ open, handleClose, modalProject }) => (
    <Modal
        sx={{ backdropFilter: "blur(7.5px)" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <AnimatePresence>
            <Box sx={styleModalBox}>
                <motion.div
                    // style={styleModalBox}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className={styles["modal-project"]}
                >
                    <h2 className={styles["modal-project-name"]}>
                        {modalProject?.name}
                    </h2>
                    <ul className={styles["modal-project-topic-list"]}>
                        {modalProject?.topics?.map((topic) => (
                            <li
                                key={topic}
                                className={styles["modal-project-topic-list"]}
                            >
                                {topic}
                            </li>
                        ))}
                    </ul>
                    <div className={styles["modal-link"]}>
                        <a href="" className={styles["modal-link__item"]}>
                            <FaGithub />
                        </a>
                        <a href="" className={styles["modal-link__item"]}>
                            <TbExternalLink />
                        </a>
                    </div>
                </motion.div>
            </Box>
        </AnimatePresence>
    </Modal>
);
