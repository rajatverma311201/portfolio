"use client";
import React, { useEffect } from "react";

function Cursor() {
    useEffect(() => {
        const cursor = document.querySelector("#cursor");
        const mouseMoveEventHandler = (e) => {
            cursor.setAttribute(
                "style",
                "top: " +
                    (e.pageY - 60) +
                    "px; left: " +
                    (e.pageX - 60) +
                    "px;",
            );
        };
        let timer = null;
        const clickEventHandler = (e) => {
            console.log("click", e.target);
            cursor.classList.add("click");

            e.target.click();
            timer = setTimeout(() => {
                cursor.classList.remove("click");
            }, 500);
        };

        document.addEventListener("mousemove", mouseMoveEventHandler);
        document.addEventListener("click", clickEventHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveEventHandler);
            document.removeEventListener("click", clickEventHandler);
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, []);

    return <div id="cursor"></div>;
}

export default Cursor;
