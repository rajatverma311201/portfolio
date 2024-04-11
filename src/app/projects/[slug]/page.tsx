import { getProjectBySlug } from "@/lib/helpers";
import { notFound } from "next/navigation";

interface ProjectDetailsPageProps {
    params: {
        slug: string;
    };
}

const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ params }) => {
    const { slug } = params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return notFound();
    }

    return (
        <>
            <h1>ProjectDetailsPage</h1>

            {JSON.stringify(project)}
        </>
    );
};
export default ProjectDetailsPage;
