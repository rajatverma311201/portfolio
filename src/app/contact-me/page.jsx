"use client";

import { useState } from "react";
import styles from "./ContactPage.module.scss";
import { toast } from "react-hot-toast";
function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        setIsSubmitting(true);

        try {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            console.log(data);

            for (const key of Object.keys(data)) {
                const val = data[key];
                if (!val.trim()) {
                    toast.error(`Please fill ${key} field`);
                    return;
                }
            }

            const mailRes = await sendMail(data);
            console.log(mailRes);

            toast.success("Mail Sent Successfully");
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
        e.target.reset();
    };

    const sendMail = async (data) => {
        const resp = await fetch("/api/send-mail", {
            method: "POST",
            body: JSON.stringify(data),
        });

        return resp.json();
    };

    return (
        <div className={styles["container"]}>
            <h1 className={styles["contact-main-heading"]}>
                Contact{" "}
                <span className={styles["contact-heading-highlight"]}>Me</span>
            </h1>
            <form
                onSubmit={handleSubmit}
                className={styles["contact-form"]}
                autoComplete="off"
            >
                <div className={styles["form-row"]}>
                    <NameInput />
                </div>
                <div className={styles["form-row"]}>
                    <EmailInput />
                </div>
                <div className={styles["form-row"]}>
                    <MessageInput />
                </div>
                <div className={styles["form-row"]}>
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={styles["submit-btn"]}
                        >
                            {isSubmitting ? "Please Wait" : "Submit"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactPage;

const NameInput = () => (
    <>
        <label htmlFor="name">Name</label>
        <input
            autoComplete={"off"}
            type="text"
            name="name"
            id="name"
            required
        />
    </>
);

const EmailInput = () => (
    <>
        <label htmlFor="email">Email</label>
        <input
            autoComplete={"off"}
            type="email"
            name="email"
            id="email"
            required
        />
    </>
);

const MessageInput = () => (
    <>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" autoComplete={"off"} required />
    </>
);
