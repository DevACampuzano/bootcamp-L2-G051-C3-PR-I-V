//importa en typescript
//import express from "express";
const express = require("express");
const cors = require("cors");
const userApi = require("../routers/user");
const { sequelize } = require("./index");

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;

    this.middlewares();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());
  }

  async dbConnection() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      throw error;
    }
  }

  routes() {
    // this.app.get("/", (req, res) => {
    //   res.send("<h1>Hola Mundo</h1>");
    // });
    userApi(this.app);
    this.app.use((req, res) => {
      res.send("<h1>404 Not Found</h1>");
    });
  }

  async listen() {
    try {
      await this.dbConnection();
      this.routes();
      this.app.listen(this.port, () => {
        console.log("Servidor corriendo en http://localhost:" + this.port);
      });
    } catch (error) {
      console.log("Error al iniciar el servidor");
      console.log(error);
    }
  }
}

module.exports = Server;

//exportar en typescript
//export default Server;
