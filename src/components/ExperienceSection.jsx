import React from "react";
import styles from "./ExperienceSection.module.scss";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import { EXPERIENCE_LIST } from "@/assets/data";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
const ExperienceSection = () => {
    return (
        <div className={styles["container"]}>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                }}
                className={styles["experience-icon-container"]}
            >
                <MdWork className={styles["experience-icon"]} />
            </motion.div>
            <motion.h2
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.75,
                    duration: 0.5,
                }}
                className={styles["experience-main-heading"]}
            >
                My{" "}
                <span className={styles["heading-highlight"]}>Experience</span>
            </motion.h2>
            <div className={styles["edu-list"]}>
                {EXPERIENCE_LIST.map((exp, idx) => (
                    <ExpCard exp={exp} idx={idx} key={idx} styles={styles} />
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;

const ExpCard = ({ exp, idx }) => (
    <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: 100 * (idx + 1) }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
            delay: 0.5 * idx + 0.5,
            duration: 0.5,
        }}
        className={styles["edu-container"]}
    >
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                delay: 0.5 * idx + 0.75,
                duration: 0.5,
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
                    {exp.expType} - {exp.type}
                </span>
            </motion.h4>
            <h4 className={styles["edu-info"]}>
                <span className={styles["edu-info__icon"]}>
                    <FaMapMarkerAlt />
                </span>
                <span className={styles["edu-info__text"]}>{exp.location}</span>
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
);
