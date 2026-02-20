import type { InvalidEmailDataResult } from "../interfaces/emailDataResult/invalid-email-data-result.interface.js";
import type { ValidEmailDataResult } from "../interfaces/emailDataResult/valid-email-data-result.interface.js";

export type EmailDataResult = ValidEmailDataResult | InvalidEmailDataResult;