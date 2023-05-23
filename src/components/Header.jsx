import React, { useState } from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Drawer } from "@mui/material";
import { HiMenuAlt2 } from "react-icons/hi";
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
                transition={{ delay: 0.5, duration: 1, type: "spring" }}
                className={styles["header-outer-container"]}
            >
                <header className={styles["header"]}>
                    <div className={styles["header-img"]}>
                        <img src="/my-photo.jpg" alt="My Photo" />
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

const NavigationBar = () => (
    <nav className={styles["main-nav"]}>
        <ul>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles["active-link"] : ""
                    }
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles["active-link"] : ""
                    }
                    to="/projects"
                >
                    Projects
                </NavLink>
            </li>
            {/* <li>
                <a href="#">About</a>
            </li> */}
            {/* <li>
                <a href="#">Contact Me</a>
            </li> */}
        </ul>
    </nav>
);

const SideNavbar = ({ open, handleClose }) => {
    return (
        <Drawer anchor={"left"} open={open} onClose={handleClose}>
            <h1>HELLO WORLD</h1>
        </Drawer>
    );
};
