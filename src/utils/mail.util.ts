import type { SendMailOptions } from "nodemailer";
import type { EmailDataResult } from "../types/email-data-result.type.js";

const isAllFieldsPresent = (body: SendMailOptions): string | true => {
    const requiredFields: string[] = ['from', 'to', 'subject', 'html', 'text'];

    for (const field of requiredFields) {
        if (!body.hasOwnProperty(field)) {
            return field;
        }
    }

    return true;
}

export const extractMessageFromBody = (body: SendMailOptions | undefined): EmailDataResult => {
    if (!body) {
        const result: EmailDataResult = {
            isValid: false,
            error: 'O corpo da requisição está vazio.',
            status: 400,
        };
        return result;
    }

    const isAllFieldsPresentResult: string | true = isAllFieldsPresent(body);
    if (isAllFieldsPresentResult !== true) {
        const result: EmailDataResult = {
            isValid: false,
            error: `O campo '${isAllFieldsPresentResult}' está faltando no corpo da requisição.`,
            status: 400,
        };
        return result;
    }

    const emailData: EmailDataResult = {
        isValid: true,
        data: body
    };
    
    return emailData;
};