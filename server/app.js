// const express = require("express");
// const app = express();
// require("dotenv").config();

// const { Sequelize, DataTypes } = require("sequelize");
// // const pg = require("pg");

// // Option 1: Passing a connection URI
// // const sequelize = new Sequelize(
// //   "postgres://postgres:ubuntu14@tutoring-scheduler-db.c3cqws8sy7dm.us-east-1.rds.amazonaws.com:5432/tutoring-scheduler-db"
// // );

// // // Option 3: Passing parameters separately (other dialects)
// // const sequelize = new Sequelize('database', 'username', 'password', {
// //   host: 'localhost',
// //   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// // });

// const sequelize = new Sequelize(
//   "tutoring_scheduler_project",
//   "nyi",
//   "diamond",
//   {
//     host: "localhost",
//     port: 5432,
//     dialect: "postgres",
//   }
// );

// async function testDB() {
//   try {
//     console.log("connecting...");
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// }
// testDB();

// //define User model
// const User = sequelize.define(
//   "Cafe",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       unique: true,
//       allowNull: false,
//     },
//   }
//   // {
//   //   tableName: "employees",
//   // }
// );
// console.log("check if User is in models: ", User === sequelize.models.User);

// // Create the table if it doesn't exist
// function createUserTable() {
//   User.sync()
//     .then(() => {
//       console.log("User table created successfully");
//     })
//     .catch((err) => {
//       console.error("Error creating User table:", err);
//     });
// }
// createUserTable();

// //create a user instance, and save to database
// // const jane5 = await UserFive.create({ name: "Jane4", email: "jane4@gmail.com" });

// // app.get("/", (req, res) => {
// //     res.status(200).send("Tutoring Scheduler");
// // });

// // app.listen(process.env.PORT, () => {
// //   console.log("Server is now running on PORT: " + process.env.PORT);
// // });
