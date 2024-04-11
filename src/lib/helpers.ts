import { PROJECTS_LIST } from "@/lib/data";

export const getProjectLinkBySlug = (slug: string) => `/projects/${slug}`;

export const getProjectBySlug = (slug: string) => {
    return PROJECTS_LIST.find((project) => project.slug === slug);
};
