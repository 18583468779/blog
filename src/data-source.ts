import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
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
  subscribers: [],
});
