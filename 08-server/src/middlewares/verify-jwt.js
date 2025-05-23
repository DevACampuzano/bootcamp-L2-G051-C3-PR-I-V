const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const verifyJWT = async (req = request, res = response, next) => {
  try {
    const token = req.headers["access-token"] || "";

    const validate = await jwt.verify(
      token,
      process.env.JWT_KEY,
      (err, payload) => {
        if (err) {
          return {
            success: false,
            msg: "Sesión invalida",
          };
        }

        return {
          success: true,
          payload,
        };
      }
    );

    if (!validate.success) {
      res.status(401).json(validate);
    }

    req.payload = validate.payload;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      msg: "No se pudo verificar la sesión",
    });
  }
};

module.exports = verifyJWT;
