require("dotenv").config()
const {Pool} = require("pg");

const config = {
    user: process.env.USER ,
    host:"localhost",
    database:process.env.DBNAME ,
    password:process.env.PASSWORD,
    port: process.env.PORTDB ,
}

const pool = new Pool(config)

module.exports = pool