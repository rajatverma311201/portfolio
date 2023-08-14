"use client";
import { Toaster } from "react-hot-toast";

function ToastComponent() {
    return (
        <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
                success: {
                    duration: 5000,
                },
                error: {
                    duration: 5000,
                },
                style: {
                    fontSize: "1.75rem",
                    maxWidth: "500px",
                    padding: "16px 24px",
                    backgroundColor: "#222",
                    color: "var(--primary-color)",
                    zIndex: 10000000,
                    border: "1px solid var(--primary-color)",
                },
            }}
        />
    );
}

export default ToastComponent;
