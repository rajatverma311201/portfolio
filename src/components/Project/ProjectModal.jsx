"use client";
import React, { useState } from "react";

import { Modal, Box } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ProjectModal.module.scss";
const ProjectModal = ({ open, handleClose, modalProject, sectionColor }) => (
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
                    style={{ "--section-color": sectionColor }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className={styles["modal-project"]}
                >
                    <h2 className={styles["modal-project-name"]}>
                        {modalProject?.name}
                    </h2>
                    <div className={styles["modal-project-content"]}>
                        <div className={styles["modal-link"]}>
                            <a
                                href={modalProject?.githubLink}
                                target="_blank"
                                className={styles["modal-link__item"]}
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={modalProject?.liveLink}
                                target="_blank"
                                className={styles["modal-link__item"]}
                            >
                                <TbExternalLink />
                            </a>
                        </div>
                        <p className={styles["modal-project-description"]}>
                            {modalProject?.description}
                        </p>
                        {/* <p className={styles["modal-project-description"]}>
                            {modalProject?.descriptionSecondary}
                        </p> */}
                        <h3 className={styles["modal-project-tech-heading"]}>
                            Tech - Stack
                        </h3>
                        <ul className={styles["modal-project-tech-list"]}>
                            {modalProject?.technologies?.map((tech) => (
                                <li
                                    key={tech}
                                    className={
                                        styles["modal-project-tech-list__item"]
                                    }
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <h3 className={styles["modal-project-topic-heading"]}>
                            Learnings
                        </h3>

                        <ul className={styles["modal-project-topic-list"]}>
                            {modalProject?.topics?.map((topic) => (
                                <li
                                    key={topic}
                                    className={
                                        styles["modal-project-topic-list__item"]
                                    }
                                >
                                    {topic}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </Box>
        </AnimatePresence>
    </Modal>
);

export default ProjectModal;

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
