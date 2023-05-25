import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";

const ProjectCard = ({ project, handleOpen }) => (
    <div className={styles["project"]} onClick={(e) => handleOpen(project)}>
        <div className={styles["project-img"]}>
            <Image
                width={500}
                height={500}
                src={project.mainImage}
                alt={project.name}
                className={styles["project-img__item"]}
            />
        </div>
        <h3 className={styles["project-name"]}>{project.name}</h3>

        <div className={styles["project-tech"]}>
            {project.technologies.map((tech) => (
                <span key={tech} className={styles["project-tech__item"]}>
                    {tech}
                </span>
            ))}
        </div>
        <div className={styles["project-desc"]}>
            <p className={styles["project-desc__item"]}>
                {project.description}
            </p>
            <p className={styles["project-desc__item"]}>
                {project.descriptionSecondary}
            </p>
        </div>
    </div>
);

export default ProjectCard;
