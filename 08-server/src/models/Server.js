//importa en typescript
//import express from "express";
const express = require("express");
const cors = require("cors");

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

  routes() {
    this.app.get("/", (req, res) => {
      res.send("<h1>Hola Mundo</h1>");
    });
    this.app.use((req, res) => {
      res.send("<h1>404 Not Found</h1>");
    });
  }

  listen() {
    this.routes();
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en http://localhost:" + this.port);
    });
  }
}

module.exports = Server;

//exportar en typescript
//export default Server;
