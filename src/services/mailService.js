var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, html) {
    var transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_GMAIL_SERVICE,
        auth: {
            user: process.env.NODEMAILER_GMAIL_EMAIL,
            pass: process.env.NODEMAILER_GMAIL_PASS,
        },
    });

    var mailOptions = {
        from: `Portfolio Contact Form <${process.env.NODEMAILER_GMAIL_EMAIL}>`,
        to: toEmail,
        subject: subject,
        html: html,
    };

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
}
