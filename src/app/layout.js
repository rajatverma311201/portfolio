"use client";

import { FaReact, FaSass } from "react-icons/fa";

import "@/sass/main.scss";
import { Header, ScrollToTopBtn, ProgressBar } from "@/components";

import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en" id="html">
            <HeadTag />
            <body id="body">
                <ProgressBar />
                <Header />
                <main id="main">{children}</main>

                <ScrollToTopBtn />

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
            </body>
        </html>
    );
}

const HeadTag = () => (
    <head>
        <meta charSet="UTF-8" />
        <meta
            name="google-site-verification"
            content="5y8wc-GiTMVgLeH3ESsb4mXfJRDjwTzGVPQ7JWrAfTU"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
        />
        <meta property="og:title" content="Rajat Verma" />
        <meta
            property="og:image"
            content="https://rajat-verma.netlify.app/my-photo.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rajat-verma.netlify.app/" />
        <meta
            name="description"
            content="Hi I am Rajat Verma, a Full Stack Javascript Developer and a Mobile Developer. I have experience working with React, React Native, Flutter, NextJS, NodeJS, Express, NestJS, Mongoose, MongoDB, Sass, HTML, CSS, Django, Flask, SQL, Python, Java, Spring Boot, MySQL, PostgreSQL. I am a BTech student at Indian Institute of Technology (IIT) Mandi. This is my Portfolio and my Projects"
        />
        <meta
            name="keywords"
            content="Full Stack, Rajat Verma, IIT Mandi, Indian Institute of Technology Mandi, Javascript Developer, Mobile Development, MERN Stack, MERN Developer, React, React Native, Flutter, NextJS, NodeJS, Express, NestJS, Mongoose, MongoDB, Sass, HTML, CSS, Django, Flask, SQL, Python, Java, Spring Boot, MySQL, PostgreSQL, BTech Rajat Verma, Bachelor of Technology Rajat Verma, Rajat Verma Portfolio, Rajat Verma IIT"
        />
        <meta name="author" content="Rajat Verma" />
        <title>Rajat Verma | Portfolio</title>
    </head>
);
