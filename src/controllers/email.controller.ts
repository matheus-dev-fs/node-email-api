import type { RequestHandler } from "express";
import nodemailer, { type SentMessageInfo, type Transporter } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport/index.js";

export const contact: RequestHandler = (req, res) => {
    const transport: Transporter<SentMessageInfo, SMTPTransport.Options> = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
            user: process.env.SMTP_USER as string,
            pass: process.env.SMTP_PASSWORD as string,
        }
    });
};