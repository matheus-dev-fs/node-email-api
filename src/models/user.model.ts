import { DataTypes, type ModelCtor } from 'sequelize';
import { sequelize } from '../instances/pg.instance.js';
import type { UserInstance } from '../interfaces/user-instance.interface.js';


export const User: ModelCtor<UserInstance> = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'users',
    timestamps: false
});