import { PROJECTS_LIST } from "@/lib/data";

export const getProjectLinkBySlug = (slug: string) => `/projects/${slug}`;

export const getProjectBySlug = (slug: string) => {
    return PROJECTS_LIST.find((project) => project.slug === slug);
};

export const getProjectImage = (slug: string, idx: number) => {
    // const images = Array.from({ length: count }).map((_, index) => {
    const img = `/images/projects/${slug}/img-${idx + 1}.webp`;
    // return img;
    // });

    return img;
};
