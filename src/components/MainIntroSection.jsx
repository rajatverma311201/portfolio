import React from "react";
import styles from "./MainIntroSection.module.scss";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
const MainIntroSection = () => {
    return (
        <motion.section
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 1,
                duration: 0.5,
                type: "spring",
                stiffness: 250,
            }}
            className={styles["container"]}
        >
            <h3 className={styles["container-welcome"]}>
                Welcome to my portfolio
            </h3>
            <h1 className={styles["intro-text"]}>
                Hi, I'm
                <br />{" "}
                <motion.div className={styles["name"]}>Rajat Verma</motion.div>
            </h1>
            <h4 className={styles["intro-text-secondary"]}>a Developer.</h4>
            <button className={styles["resume-btn"]}>
                <span className={styles["btn-text"]}>Resume</span>
                <FiDownload className={styles["btn-icon"]} />
            </button>
        </motion.section>
    );
};

export default MainIntroSection;
