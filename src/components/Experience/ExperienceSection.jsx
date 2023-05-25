import React from "react";
import styles from "./ExperienceSection.module.scss";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import { EXPERIENCE_LIST } from "@/assets/data";
import { ExperienceCard } from "@/components";
const ExperienceSection = () => {
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
                    <ExperienceCard
                        exp={exp}
                        idx={idx}
                        key={idx}
                        styles={styles}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
