import React from "react";
import styles from "./MainIntroSection.module.scss";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/assets/desktop-animation.json";

const MainIntroSection = () => {
    return (
        <div className={styles["main-outer-container"]}>
            <motion.section
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.75,
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
                    Hi, I&apos;m
                    <br />{" "}
                    <motion.div className={styles["name"]}>
                        Rajat Verma
                    </motion.div>
                </h1>
                <h4 className={styles["intro-text-secondary"]}>
                    a &nbsp;passionate &nbsp;Developer.
                </h4>
                <a href="/Resume_Rajat_Verma.pdf" target="_blank">
                    <button className={styles["resume-btn"]}>
                        <span className={styles["btn-text"]}>Resume</span>
                        <FiDownload className={styles["btn-icon"]} />
                    </button>
                </a>
            </motion.section>

            <div className={styles["animation-container"]}>
                <Lottie animationData={animationData} loop={false} />
            </div>
        </div>
    );
};

export default MainIntroSection;
