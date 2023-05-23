import { useState } from "react";
import "@/sass/main.scss";
import { Header } from "@/components";
import { HomePage, ProjectsPage } from "./pages";

import "./App.css";
import {
    motion,
    useScroll,
    AnimatePresence,
    useMotionValueEvent,
} from "framer-motion";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { FiArrowUp } from "react-icons/fi";
import { FaReact, FaSass } from "react-icons/fa";

const AppLayout = ({ children }) => {
    const { scrollYProgress, scrollY } = useScroll();
    const [showButton, setShowButton] = useState(false);

    useMotionValueEvent(scrollY, "change", (y) => {
        console.log(y);
        if (y > 500) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Header />
            <main>
                <Outlet />
            </main>

            <AnimatePresence>
                {showButton && (
                    <motion.span
                        onClick={scrollToTop}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        id="scroll-to-top"
                        // transition={{
                        //     duration: 0.5,
                        // }}
                    >
                        <FiArrowUp />
                    </motion.span>
                )}
            </AnimatePresence>

            <footer id="footer">
                <h2>
                    Built in{" "}
                    <span>
                        <FaReact />
                    </span>{" "}
                    and{" "}
                    <span>
                        <FaSass />
                    </span>
                </h2>
            </footer>
        </>
    );
};

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/projects",
                element: <ProjectsPage />,
            },
        ],
    },
]);

function App() {
    // return <AppLayout />;
    return <RouterProvider router={router} />;
}

export default App;
