import { Router, type Request, type Response } from 'express';
import * as EmailController from '../controllers/email.controller.js';

const router: Router = Router();

router.get('/ping', (req: Request, res: Response): void => {
    res.status(200).send('pong');
});

router.post('/contact', EmailController.contact);

export default router;