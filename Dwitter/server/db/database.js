import { config } from '../config.js';
import mysql from 'mysql2';
import SQ from 'sequelize';

const { host, user, database, password } = config.db;
export const sequelize = new SQ.Sequelize(database, user, password, {
        host,
        dialect: 'mysql',
});


// 데이터 베이스 연결 부분 
const pool = mysql.createPool({
    host, 
    user, 
    database, 
    password,
});

export const db = pool.promise();
