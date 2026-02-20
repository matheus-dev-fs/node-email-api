import type { SendMailOptions } from "nodemailer";

export interface ValidEmailDataResult {
    isValid: true;
    data: SendMailOptions;
}