const { db } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (data) => {
  try {
    const hashPassword = await bcrypt.hash(data.password, 15);
    data.password = hashPassword;
    const newUser = await db.userModel.create(data);

    return newUser;
  } catch (error) {
    throw error;
  }
};

const login = async (documento, password) => {
  try {
    /**
     * select * from usuarios where docuemnto= ? and estado =1
     */
    const user = await db.userModel.findOne({
      where: {
        documento,
        estado: 1,
      },
    });

    if (user === null) {
      return {
        success: false,
        msg: "Usuario no registrado",
      };
    }

    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return {
        success: false,
        msg: "Contraseña incorrecta",
      };
    }
    const token = jwt.sign(
      { id: user.id, rol: user.rol },
      process.env.JWT_KEY,
      {
        expiresIn: "30d",
      }
    );

    const userJSON = user.toJSON();

    delete userJSON.id;
    delete userJSON.password;
    delete userJSON.estado;

    return {
      success: true,
      token,
      user: userJSON,
    };
  } catch (error) {
    throw error;
  }
};

const updateUser = async (data, id) => {
  try {
    if (data.password) {
      const hashPassword = await bcrypt.hash(data.password, 15);
      data.password = hashPassword;
    }

    await db.userModel.update(data, {
      where: {
        id,
        estado: 1,
      },
    });

    return {
      success: true,
      msg: "Información actualizada.",
    };
  } catch (error) {
    throw error;
  }
};

const getUser = async (id) => {
  try {
    const user = await db.userModel.findOne({
      where: {
        id,
        estado: 1,
      },
      include: [
        {
          model: db.petModel,
          as: "pets",
          include: [
            {
              model: db.quoteModel,
              as: "quote",
            },
          ],
        },
      ],
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  login,
  updateUser,
  getUser,
};
