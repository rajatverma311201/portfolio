import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/sass/main.scss";
import Header from "@/components/Header";
import HomePage from "./pages/HomePage";
import "./App.css";
import {
    motion,
    useScroll,
    AnimatePresence,
    useMotionValueEvent,
} from "framer-motion";

import { FiArrowUp } from "react-icons/fi";

function App() {
    const [count, setCount] = useState(0);
    const { scrollYProgress, scrollY } = useScroll();
    const [showButton, setShowButton] = useState(false);

    useMotionValueEvent(scrollY, "change", (y) => {
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
                <HomePage />
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
        </>
    );
}

export default App;
