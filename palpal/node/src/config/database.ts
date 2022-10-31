require("dotenv").config();
const dbHost = process.env.DB_HOST === undefined ? "" : process.env.DB_HOST;
const dbUser = process.env.DB_USER === undefined ? "" : process.env.DB_USER;
const dbPasswrod =
  process.env.DB_PASSWORD === undefined ? "" : process.env.DB_PASSWORD;
const dbDatabase =
  process.env.DB_DATABASES === undefined ? "" : process.env.DB_DATABASES;
const dbPort = process.env.DB_PORT === undefined ? "" : process.env.DB_PORT;

const databaseConfig = {
  host: dbHost,
  user: dbUser,
  password: dbPasswrod,
  database: dbDatabase,
  port: dbPort,
  dateStrings: "date",
};

module.exports = databaseConfig;
