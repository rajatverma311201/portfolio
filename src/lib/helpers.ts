import { PROJECTS_LIST } from "@/lib/data";

export const getProjectLinkBySlug = (slug: string) => `/projects/${slug}`;

export const getProjectBySlug = (slug: string) => {
    return PROJECTS_LIST.find((project) => project.slug === slug);
};

// export const getProjectMainImgLink = (slug: string, img: string) => {
//     const link = `/images/projects/${slug}/${img}`;
//     return link;
// };

export const getProjectImages = (slug: string, count: number) => {
    const images = Array.from({ length: count }).map((_, index) => {
        const img = `/images/projects/${slug}/img-${index + 1}.png`;
        return img;
    });

    return images;
};
