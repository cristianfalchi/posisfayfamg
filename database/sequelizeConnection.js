const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = {
    host: process.env.HOST_NAME_MG || "localhost",
    user: process.env.USER_NAME_MG || "root",
    password: process.env.PASSWORD_MG || "root",
    database: process.env.DATABASE_MG || "posis_mg",
}


export const sequelizeConnection = async() => {
    return new Sequelize(db.database, db.user, db.password, {
        host: db.host,
        dialect: 'mysql'
    });
}
