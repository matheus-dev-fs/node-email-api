import { Router, type Request, type Response } from 'express';

const router: Router = Router();

router.get('/ping', (req: Request, res: Response): void => {
    res.status(200).send('pong');
});

export default router;