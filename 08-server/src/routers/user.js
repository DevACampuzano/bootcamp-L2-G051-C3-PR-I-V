const express = require("express");
const userController = require("../controllers/user");
const verifyJWT = require("../middlewares/verify-jwt");

// http://localhost:3000
// http://localhost:3000/api/user/get-user
const userApi = (app) => {
  const router = express.Router();
  app.use("/api/user", router);

  router.get("/get-user", [verifyJWT], async (req, res) => {
    const payload = req.payload;
    const user = await userController.getUser(payload.id);
    res.json(user);
  });

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

      const rol = "owner";
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

  router.post("/login", async (req, res) => {
    try {
      const { documento, password } = req.body;

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

      const session = await userController.login(documento, password);
      if (!session.success) {
        return res.status(401).json(session);
      }

      res.status(200).json(session);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        msg: "Ocurrio un error en el servidor, no se pudo iniciar.",
      });
    }
  });

  router.put("/update-user", [verifyJWT], async (req, res) => {
    try {
      const { nombre, apellido, password } = req.body;
      const payload = req.payload;
      const result = await userController.updateUser(
        {
          nombre,
          apellido,
          password,
        },
        payload.id
      );

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        msg: "Ocurrio un error en el servidor, no se pudo actualizar la información.",
      });
    }
  });
};

module.exports = userApi;
