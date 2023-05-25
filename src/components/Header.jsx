"use client";

import React, { useState } from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Drawer } from "@mui/material";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Header = () => {
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
                    <div className={styles["header-img"]}>
                        <Image
                            height={125}
                            width={125}
                            src="/my-photo.jpg"
                            alt="My Photo"
                        />
                    </div>
                    <h2 className={styles["header-name"]}>Rajat Verma</h2>
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
                <li>
                    <Link
                        className={
                            pathname === "/" ? styles["active-link"] : ""
                        }
                        href="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            pathname === "/projects"
                                ? styles["active-link"]
                                : ""
                        }
                        href="/projects"
                    >
                        Projects
                    </Link>
                </li>
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
                    <span onClick={handleClose}>
                        <AiOutlineClose />
                    </span>
                </div>
                <ul>
                    <li>
                        <Link
                            onClick={handleClose}
                            className={
                                pathname === "/"
                                    ? styles["active-link-sidebar"]
                                    : ""
                            }
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={handleClose}
                            className={
                                pathname === "/projects"
                                    ? styles["active-link-sidebar"]
                                    : ""
                            }
                            href="/projects"
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </Drawer>
    );
};
