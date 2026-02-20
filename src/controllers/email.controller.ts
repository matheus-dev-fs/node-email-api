import type { RequestHandler } from "express";
import nodemailer, { type SendMailOptions, type SentMessageInfo, type Transporter } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport/index.js";
import { extractMessageFromBody } from "../utils/mail.util.js";
import type { EmailDataResult } from "../types/email-data-result.type.js";

export const contact: RequestHandler = async (req, res): Promise<void> => {
    try {
        const transport: Transporter<SentMessageInfo, SMTPTransport.Options> = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER as string,
                pass: process.env.SMTP_PASSWORD as string,
            }
        });

        const emailData: EmailDataResult = extractMessageFromBody(req.body);

        if (!emailData.isValid) {
            res.status(emailData.status).json({ error: emailData.error });
            return;
        }

        const message: SendMailOptions = emailData.data;
        await transport.sendMail(message);

        res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).json({ error: 'Ocorreu um erro ao enviar o email.' });
    }
};