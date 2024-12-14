require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEVELOPMENT,
    password:
      process.env.DB_PASSWORD_DEVELOPMENT === "null"
        ? null
        : process.env.DB_PASSWORD_DEVELOPMENT,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST_DEVELOPMENT,
    port: process.env.DB_PORT_DEVELOPMENT,
    dialect: process.env.DB_DIALECT_DEVELOPMENT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
