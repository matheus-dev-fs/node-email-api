import dotenv from 'dotenv';
import express, { type Express } from 'express';
import router from './router/main.router.js';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(process.env.PORT, (): void => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.use(router);