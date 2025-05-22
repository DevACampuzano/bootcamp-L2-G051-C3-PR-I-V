const { db } = require("../models/index");

const createUser = async (data) => {
  try {
    const newUser = await db.userModel.create(data);

    return newUser;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
};
