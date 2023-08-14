"use client";
import React from "react";
import { FiArrowUp } from "react-icons/fi";
import {
    motion,
    useScroll,
    AnimatePresence,
    useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

const ScrollToTopBtn = () => {
    const { scrollY } = useScroll();
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
        <AnimatePresence>
            {showButton && (
                <motion.span
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    id="scroll-to-top"
                >
                    <FiArrowUp />
                </motion.span>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopBtn;
