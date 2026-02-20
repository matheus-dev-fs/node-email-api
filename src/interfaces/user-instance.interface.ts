import type { Model } from "sequelize";

export interface UserInstance extends Model {
    id: number;
    email: string;
    password: string;
}