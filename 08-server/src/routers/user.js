const express = require("express");
const userController = require("../controllers/user");

// http://localhost:3000
// http://localhost:3000/api/user/get-user
const userApi = (app) => {
  const router = express.Router();
  app.use("/api/user", router);

  //   router.get("/get-user", (req, res) => {
  //     res.send("get user all");
  //   });

  router.post("/create-user", async (req, res) => {
    const body = req.body;
    const { nombre, apellido, documento, password } = body;
    try {
      if (!nombre || nombre.length === 0) {
        return res.status(400).json({
          success: false,
          msg: "El nombre es requerido",
        });
      }
      if (!apellido || apellido.length === 0) {
        return res.status(400).json({
          success: false,
          msg: "El apellido es requerido",
        });
      }
      if (!documento || documento.length === 0) {
        return res.status(400).json({
          success: false,
          msg: "El documento es requerido",
        });
      }
      if (!password || password.length === 0) {
        return res.status(400).json({
          success: false,
          msg: "El password es requerido",
        });
      }

      const rol = "user";
      const newUser = await userController.createUser({
        nombre,
        apellido,
        documento,
        password,
        rol,
      });

      res.status(201).json({
        success: true,
        newUser,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        msg: "Ocurrio un error en el servidor, no se pudo registrar el usuario.",
      });
    }
  });

  router.post("/login", (req, res) => {});

  router.put("/update-user", (req, res) => {});
};

module.exports = userApi;
