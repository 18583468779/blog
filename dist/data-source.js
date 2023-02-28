"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppDataSource = void 0;
require("reflect-metadata");
var _typeorm = require("typeorm");
var AppDataSource = new _typeorm.DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "sonar",
  password: "aiaiai123456",
  database: "blog_development",
  synchronize: false,
  logging: false,
  entities: ["dist/entity/**/*.js"],
  migrations: [],
  subscribers: []
});
exports.AppDataSource = AppDataSource;