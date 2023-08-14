"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { motion, animate } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Drawer } from "@mui/material";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname, useRouter } from "next/navigation";
import { COLOR_THEMES_LIST } from "@/assets/data";

let finalColor = COLOR_THEMES_LIST[2];

const LINKS_LIST = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Me", href: "/contact-me" },
];

const Header = () => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className={styles["size-box"]}></div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.5, type: "spring" }}
                className={styles["header-outer-container"]}
            >
                <header className={styles["header"]}>
                    <div
                        className={styles["header-img"]}
                        onClick={() => router.replace("/")}
                    >
                        <Image
                            loading="lazy"
                            height={125}
                            width={125}
                            src="/my-photo.jpg"
                            alt="My Photo"
                        />
                    </div>
                    <h2
                        onClick={() => router.replace("/")}
                        className={styles["header-name"]}
                    >
                        Rajat Verma
                    </h2>
                    <div className={styles["color-theme-selector-desktop"]}>
                        <ColorThemeSelector />
                    </div>
                    <NavigationBar />
                    <div className={styles["sidebar-icon"]}>
                        <HiMenuAlt2 onClick={handleOpen} />
                    </div>
                </header>
            </motion.div>
            <SideNavbar open={open} handleClose={handleClose} />
        </>
    );
};

export default Header;

const NavigationBar = () => {
    const pathname = usePathname();
    return (
        <nav className={styles["main-nav"]}>
            <ul>
                {LINKS_LIST.map((link) => (
                    <li key={link.href}>
                        <Link
                            className={
                                pathname === link.href
                                    ? styles["active-link"]
                                    : ""
                            }
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const SideNavbar = ({ open, handleClose }) => {
    const pathname = usePathname();

    return (
        <Drawer
            sx={{ backdropFilter: "blur(5px)" }}
            anchor={"top"}
            open={open}
            onClose={handleClose}
        >
            <div className={styles["sidebar-container"]}>
                <div className={styles["sidebar-close-btn"]}>
                    <div className={styles["color-theme-selector-mobile"]}>
                        <ColorThemeSelector />
                    </div>
                    <span onClick={handleClose}>
                        <AiOutlineClose />
                    </span>
                </div>
                <ul>
                    {LINKS_LIST.map((link) => (
                        <li key={link.href}>
                            <Link
                                onClick={handleClose}
                                className={
                                    pathname === link.href
                                        ? styles["active-link"]
                                        : ""
                                }
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Drawer>
    );
};

const ColorThemeSelector = () => {
    const [colorTheme, setColorTheme] = useState(finalColor);
    function colorToHex(color) {
        // Check if the color is in the RGB or RGBA format
        const isRgb = color.startsWith("rgb(");
        const isRgba = color.startsWith("rgba(");

        // Extract the color components from the string
        let components = [];
        if (isRgb || isRgba) {
            components = color
                .substring(color.indexOf("(") + 1, color.lastIndexOf(")"))
                .split(",")
                .map((c) => parseInt(c.trim(), 10));
        }

        // Convert RGB/RGBA to hex
        if (isRgb && components.length === 3) {
            const [r, g, b] = components;
            return rgbToHex(r, g, b);
        } else if (isRgba && components.length === 4) {
            const [r, g, b, a] = components;
            return rgbaToHex(r, g, b, a);
        }

        // Return the original color if it doesn't match the expected formats
        return color;
    }

    function rgbToHex(r, g, b) {
        const hexR = r.toString(16).padStart(2, "0");
        const hexG = g.toString(16).padStart(2, "0");
        const hexB = b.toString(16).padStart(2, "0");

        return `#${hexR}${hexG}${hexB}`;
    }

    function rgbaToHex(r, g, b, a) {
        const hexR = r.toString(16).padStart(2, "0");
        const hexG = g.toString(16).padStart(2, "0");
        const hexB = b.toString(16).padStart(2, "0");
        const hexA = Math.round(a * 255)
            .toString(16)
            .padStart(2, "0");

        return `#${hexR}${hexG}${hexB}${hexA}`;
    }

    useEffect(() => {
        const root = document.documentElement;

        console.log("heelo", root?.style.getPropertyValue("--primary-color"));
        animate(root?.style.getPropertyValue("--primary-color"), colorTheme, {
            duration: 0.25,
            onUpdate: (latest) => {
                console.log("change");
                root.style.setProperty(
                    "--primary-color",

                    latest.startsWith("#") ? latest : colorToHex(latest)
                );
            },
        });
        finalColor = colorTheme;
    }, [colorTheme]);

    return (
        <div className={styles["color-themes-choice"]}>
            {COLOR_THEMES_LIST.map((color) => (
                <span
                    key={color}
                    style={{
                        background: color,
                        outlineWidth: "1.75px",
                        outlineOffset: "3px",
                        outlineColor:
                            colorTheme == color ? color : "transparent",
                        outlineStyle: "solid",
                    }}
                    onClick={() => setColorTheme(color)}
                />
            ))}
        </div>
    );
};
