import { NextResponse } from "next/server";
import { sendMail } from "@/services/mailService";
export async function POST(req) {
    const reqBody = await req.json();
    console.log("req.body", reqBody);

    const dataHtml = createHtmlForEmail(reqBody);

    const res = await sendMail(
        "Portfolio Contact Form",
        "rajat311201@gmail.com",
        dataHtml
    );

    return NextResponse.json({
        message: "Email Sent",
        success: true,
        res,
    });
}

const createHtmlForEmail = (data) => {
    const { name, email, message } = data;

    return `
    <div>

        <h1>Portfolio Contact Form</h1>

        <p>Name : ${name}</p>
        <p>Email : ${email}</p>
        <p>Message : ${message}</p>

    </div>
`;
};
