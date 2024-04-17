"use client";
import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { getProjectBySlug, getProjectImage } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { fontSecondary } from "@/constants/fonts";
import { get } from "http";

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
    const code = JSON.stringify(project, null, 2);

    return (
        <>
            <div className="flex h-full items-center justify-between gap-10">
                <div className=" px-14 ">
                    <ProjectImagesCarousel
                        name={project.name}
                        slug={project.slug}
                        imagesCount={project.imagesCount || 0}
                    />
                </div>
                <div className="flex-1">
                    <h1
                        className={cn(
                            fontSecondary.className,
                            "text-center text-7xl font-bold text-primary",
                        )}
                    >
                        {project.name}
                    </h1>
                    <div className="h-10" />
                    {project.description.split("\n").map((item, key) => (
                        <p
                            key={key}
                            className="text-lg font-light text-muted-foreground"
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
};
export default ProjectDetailsPage;

const ProjectImagesCarousel: React.FC<{
    name: string;
    slug: string;
    imagesCount: number;
}> = ({ name, slug, imagesCount }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div>
            <Carousel
                className="sm:w-96 md:w-[400px] lg:w-[500px] "
                setApi={setApi}
                // plugins={}
            >
                <CarouselContent>
                    {Array.from({ length: imagesCount }).map((_, idx) => (
                        <CarouselItem key={idx}>
                            {/* <div className=""> */}
                            <Card className="overflow-hidden border-4 ">
                                <Image
                                    src={getProjectImage(slug, idx)}
                                    alt={name}
                                    width={750}
                                    height={600}
                                    className="aspect-auto w-full rounded"
                                />
                            </Card>
                            {/* </div> */}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="flex items-center justify-center gap-2 py-2 transition-all">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className={cn(
                            "inline-block h-2 w-2 cursor-pointer rounded-full bg-muted-foreground/40",
                            current === index + 1
                                ? "h-3 w-3 bg-muted-foreground/75"
                                : "",
                        )}
                        onClick={() => api?.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
};
