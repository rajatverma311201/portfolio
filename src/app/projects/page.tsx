import { PROJECTS_LIST } from "@/lib/data";
import { getProjectLinkBySlug } from "@/lib/helpers";
import Link from "next/link";

interface ProjectsPageProps {}

const ProjectsPage: React.FC<ProjectsPageProps> = ({}) => {
    return (
        <>
            <h1>ProjectsPage</h1>

            <ul className="flex flex-col gap-5 p-10">
                {PROJECTS_LIST.map((project) => (
                    <li key={project.slug}>
                        <Link
                            className="underline"
                            href={getProjectLinkBySlug(project.slug)}
                        >
                            {project.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
export default ProjectsPage;
