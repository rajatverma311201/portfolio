"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavigationItemProps {
    children: React.ReactNode;
    href: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
    children,
    href,
}) => {
    const pathname = usePathname();

    return (
        <li className={cn(pathname === href && "text-primary")}>{children}</li>
    );
};
