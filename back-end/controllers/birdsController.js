// DEPENDENCIES
const express = require("express");
const birds = express.Router();

// VALIDATION DEPENDENCIES

// QUERY DEPENDENCIES
const {
  getAllBrids,
  updateBird,
  deleteBird,
  getBird,
  createBird,
} = require("../queries/birds");

// INDEX
birds.get("/", async (req, res) => {
  try {
    const allBirds = await getAllBrids();
    if (allBirds) {
      res.status(200).json(allBirds);
    } else {
      res.status(500).json({ error: "Server Error" });
    }
  } catch (error) {
    return error;
  }
});

// SHOW ONE
birds.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const bird = await getBird(id);
    if (bird) {
      res.status(200).json(bird);
    } else {
      res.status(404).json({ error: "Not Found" });
    }
  } catch (error) {
    return error;
  }
});

// CREATE
birds.post("/", async (req, res) => {
  try {
    const bird = await createBird(req.body);
    res.json(bird);
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
});

// DELETE
birds.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBird = await deleteBird(id);
  console.log(deletedBird);
  if (deletedBird.id) {
    res.status(200).json(deletedBird);
  } else {
    res.status(404).json("Bird not found");
  }
});

// UPDATE
birds.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBirds = await updateBird(id, req.body);
  res.status(200).json(updatedBirds);
});

// EXPORTS
module.exports = birds;
