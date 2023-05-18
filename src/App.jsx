import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "@/sass/main.scss";
import Header from "@/components/Header";
import HomePage from "./pages/HomePage";
import "./App.css";
import { motion, useScroll } from "framer-motion";
function App() {
    const [count, setCount] = useState(0);
    const { scrollYProgress } = useScroll();
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
        </>
    );
}

export default App;
