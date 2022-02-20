// DEPENDENCIES
const { any } = require("../db/dbConfig");
const db = require("../db/dbConfig");

// GET ALL SONGS
const getAllBrids = async () => {
  try {
    const allBirds = await db.any("SELECT * FROM birds");
    return allBirds;
  } catch (error) {
    return error;
  }
};

// GET ONE SONG
const getBird = async (id) => {
  try {
    const oneBird = await db.one("SELECT * FROM birds WHERE id=$1", id);
    return oneBird;
  } catch (error) {
    return error;
  }
};

// CREATE
const createBird = async (bird) => {
  try {
    const newBird = await db.one(
      "INSERT INTO birds (common_name, scientific_name, description, rating, price, featured, image, audio) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        bird.common_name,
        bird.scientific_name,
        bird.description,
        bird.rating,
        bird.price,
        bird.featured,
        bird.image,
        bird.audio,
      ]
    );
    return newBird;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteBird = async (id) => {
  try {
    const deletedBird = await db.one(
      "DELETE FROM birds WHERE id=$1 RETURNING *",
      id
    );
    return deletedBird;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateBird = async (id, bird) => {
  try {
    const updateBird = await db.one(
      "UPDATE birds SET common_name=$1, scientific_name=$2, description=$3, rating=$4, price=$5, featured=$6, image=$7, audio=$8 WHERE id=$9 RETURNING *",
      [
        bird.common_name,
        bird.scientific_name,
        bird.description,
        bird.rating,
        bird.price,
        bird.featured,
        bird.image,
        bird.audio,
        id,
      ]
    );
    return updateBird;
  } catch (error) {
    return error;
  }
};

// EXPORTS
module.exports = {
  getAllBrids,
  updateBird,
  deleteBird,
  getBird,
  createBird,
};
