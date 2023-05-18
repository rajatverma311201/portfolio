import React from "react";
import styles from "./EducationSection.module.scss";
import { motion } from "framer-motion";

import { MdOutlineSchool } from "react-icons/md";

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
        </section>
    );
};

export default EducationSection;

const BTech = () => (
    <div className={styles["education-container"]}>
        <h3 className={styles["education-heading"]}>Indian Ins</h3>
    </div>
);
