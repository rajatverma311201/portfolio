"use client";
import React from "react";
import styles from "./EducationSection.module.scss";
import { motion } from "framer-motion";
import { EduCard } from "@/components";
import { MdOutlineSchool } from "react-icons/md";
import { EDUCATION_LIST } from "@/assets/data";

const EducationSection = () => {
    return (
        <section className={styles["container"]}>
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.5,
                }}
                className={styles["education-icon-container"]}
            >
                <MdOutlineSchool className={styles["education-icon"]} />
            </motion.div>
            <motion.h2
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.75,
                    duration: 0.5,
                }}
                className={styles["education-main-heading"]}
            >
                My{" "}
                <span className={styles["heading-highlight"]}>Education</span>
            </motion.h2>

            <div className={styles["edu-list"]}>
                {EDUCATION_LIST.map((edu, idx) => (
                    <EduCard edu={edu} idx={idx} key={idx} styles={styles} />
                ))}
            </div>
        </section>
    );
};

export default EducationSection;
