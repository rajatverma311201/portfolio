"use client";
import React from "react";
import { motion } from "framer-motion";

import { Tilt } from "react-tilt";
import styles from "./ExperienceSection.module.scss";

import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
const ExperienceCard = ({ exp, idx }) => (
    <Tilt options={defaultOptions}>
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.25 * idx + 0.25,
                duration: 0.25,
            }}
            className={styles["edu-container"]}
        >
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.25 * idx + 0.5,
                    duration: 0.25,
                }}
            >
                <motion.h3 className={styles["edu-heading"]}>
                    {exp.company}
                </motion.h3>
                <motion.h4 className={styles["exp-degree"]}>
                    <span className={styles["exp-degree__short"]}>
                        {exp.position}
                    </span>
                    <span className={styles["exp-degree__long"]}>
                        {exp.expType} {exp.type && "-"} {exp.type}
                    </span>
                </motion.h4>
                <h4 className={styles["edu-info"]}>
                    <span className={styles["edu-info__icon"]}>
                        <FaMapMarkerAlt />
                    </span>
                    <span className={styles["edu-info__text"]}>
                        {exp.location}
                    </span>
                </h4>
                <h4 className={styles["edu-info"]}>
                    <span className={styles["edu-info__icon"]}>
                        <FaCalendarAlt />
                    </span>
                    <span className={styles["edu-info__text"]}>
                        {exp.startMonth} {exp.startYear} - {exp.endMonth}{" "}
                        {exp.endYear}
                    </span>
                </h4>
                <div className={styles["tech-list"]}>
                    {exp.technologies.map((tech, idx_) => (
                        <span className={styles["tech-list__item"]} key={idx_}>
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </Tilt>
);

const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 30, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1500, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export default ExperienceCard;
