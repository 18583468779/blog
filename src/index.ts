import { AppDataSource } from "./data-source";
// import { User } from "./entity/User";
import "reflect-metadata";
AppDataSource.initialize()
  .then(async () => {
    console.log("数据库链接成功");
  })
  .catch((error) => console.log(error));
