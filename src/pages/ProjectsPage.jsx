import React from "react";

import { ProjectCard } from "@/components";
import { PROJECTS_LIST } from "@/assets/data";
import styles from "./ProjectsPage.module.scss";

const ProjectsPage = () => {
    return (
        <div>
            <h1>Projects</h1>
            <section className={styles["projects-list"]}>
                {PROJECTS_LIST.map((project) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        handleOpen={() => {}}
                    />
                ))}
            </section>
        </div>
    );
};

export default ProjectsPage;
