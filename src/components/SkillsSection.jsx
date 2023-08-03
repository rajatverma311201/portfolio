import React from "react";
import styles from "./SkillsSection.module.scss";
import { motion } from "framer-motion";
import {
    LANGUAGES_LIST,
    WEB_SKILLS_LIST,
    MOBILE_SKILLS_LIST,
    TOOLS_LIST,
    DATABASE_SKILLS_LIST,
} from "@/assets/data";
import Image from "next/image";
const SkillsSection = () => {
    return (
        <div className={styles["skills-main-container"]}>
            <motion.h2
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.25,
                    duration: 0.5,
                }}
                className={styles["skills-main-heading"]}
            >
                <span className={styles["heading-highlight"]}>Languages</span> I
                know
            </motion.h2>
            <Languages />
            <motion.h2
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.25,
                    duration: 0.5,
                }}
                className={styles["skills-main-heading"]}
            >
                <span className={styles["heading-highlight"]}>
                    Libraries & Frameworks
                </span>{" "}
                I use
            </motion.h2>
            <WebSkills />
            <MobileSkills />
            <DBSkills />
            <motion.h2
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.25,
                    duration: 0.5,
                }}
                className={styles["skills-main-heading"]}
            >
                <span className={styles["heading-highlight"]}>Tools</span> I use
            </motion.h2>
            <Tools />
        </div>
    );
};

export default SkillsSection;

const Languages = () => (
    <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.25,
            duration: 0.5,
        }}
        className={styles["skills"]}
    >
        <h3 className={styles["skills-heading"]}></h3>
        <div className={styles["skills-list"]}>
            {LANGUAGES_LIST.map((skill) => (
                <div className={`${styles["skill"]} tooltip`} key={skill.name}>
                    <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        className={`${styles["skill__logo"]} ${
                            ["Java"].includes(skill.name)
                                ? styles["skill__logo--mod"]
                                : null
                        }`}
                        src={`/skill-icons/${skill.icon}`}
                        alt={skill.name}
                    />
                    <span class="tooltiptext">{skill.name}</span>
                </div>
            ))}
        </div>
    </motion.div>
);
const WebSkills = () => (
    <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.25,
            duration: 0.5,
        }}
        className={styles["skills"]}
    >
        <h3 className={styles["skills-heading"]}>WEB</h3>
        <div className={styles["skills-list"]}>
            {WEB_SKILLS_LIST.map((skill) => (
                <div className={`${styles["skill"]} tooltip`} key={skill.name}>
                    <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        className={`${styles["skill__logo"]} ${
                            ["Express", "MongoDB", "NodeJS"].includes(
                                skill.name
                            )
                                ? styles["skill__logo--mod"]
                                : null
                        } ${
                            ["Express", "Flask", "NextJS"].includes(skill.name)
                                ? styles["skill__logo--mod2"]
                                : ""
                        } ${
                            ["MySQL"].includes(skill.name)
                                ? styles["skill__logo--mod3"]
                                : ""
                        }`}
                        src={`/skill-icons/${skill.icon}`}
                        alt={skill.name}
                    />
                    <span class="tooltiptext">{skill.name}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

const MobileSkills = () => (
    <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.25,
            duration: 0.5,
        }}
        className={styles["skills"]}
    >
        <h3 className={styles["skills-heading"]}>MOBILE</h3>
        <div className={styles["skills-list"]}>
            {MOBILE_SKILLS_LIST.map((skill) => (
                <div className={`${styles["skill"]} tooltip`} key={skill.name}>
                    <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        className={`${styles["skill__logo"]} ${
                            ["React Native"].includes(skill.name)
                                ? styles["skill__logo--mod3"]
                                : null
                        }`}
                        src={`/skill-icons/${skill.icon}`}
                        alt={skill.name}
                    />
                    <span class="tooltiptext">{skill.name}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

const DBSkills = () => (
    <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.25,
            duration: 0.5,
        }}
        className={styles["skills"]}
    >
        <h3 className={styles["skills-heading"]}>Databases</h3>
        <div className={styles["skills-list"]}>
            {DATABASE_SKILLS_LIST.map((skill) => (
                <div className={`${styles["skill"]} tooltip`} key={skill.name}>
                    <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        className={`${styles["skill__logo"]} ${
                            ["MongoDB"].includes(skill.name)
                                ? styles["skill__logo--mod"]
                                : null
                        } ${
                            ["MySQL"].includes(skill.name)
                                ? styles["skill__logo--mod3"]
                                : ""
                        }`}
                        src={`/skill-icons/${skill.icon}`}
                        alt={skill.name}
                    />
                    <span class="tooltiptext">{skill.name}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

const Tools = () => (
    <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.25,
            duration: 0.5,
        }}
        className={styles["skills"]}
    >
        <h3 className={styles["skills-heading"]}></h3>
        <div className={styles["skills-list"]}>
            {TOOLS_LIST.map((skill) => (
                <div className={`${styles["skill"]} tooltip`} key={skill.name}>
                    <Image
                        loading="lazy"
                        width={100}
                        height={100}
                        className={`${styles["skill__logo"]} ${
                            ["Postman"].includes(skill.name)
                                ? styles["skill__logo--mod4"]
                                : null
                        }`}
                        src={`/skill-icons/${skill.icon}`}
                        alt={skill.name}
                    />
                    <span class="tooltiptext">{skill.name}</span>
                </div>
            ))}
        </div>
    </motion.div>
);
