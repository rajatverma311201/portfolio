import React from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Header = () => {
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
                </header>
            </motion.div>
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
                    // end
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
