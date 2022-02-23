// DEPENDENCIES
const db = require("../db/dbConfig");

// GET USER
const getUser = async (email) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE email=$1", email);
    return oneUser;
  } catch (error) {
    return error;
  }
};

const getUserId = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
    return oneUser;
  } catch (error) {
    return error;
  }
};

// CREATE
const createUser = async (user) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [user.name, user.email, user.password]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      id
    );
    return deletedUser;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateUser = async (id, user) => {
  try {
    const updateUser = await db.one(
      "UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4 RETURNING *",
      [user.name, user.email, user.password, id]
    );
    return updateUser;
  } catch (error) {
    return error;
  }
};

// EXPORTS
module.exports = {
  updateUser,
  deleteUser,
  getUser,
  createUser,
  getUserId,
};
