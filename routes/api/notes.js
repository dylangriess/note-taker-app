const express = require("express");
const notes = express.Router();
const { v4: uuidv4 } = require("uuid");
const { readFromFile, readAndAppend } = require("../../helpers/fsUtils");

notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
}); //include else error statement

notes.post("/", (req, res) => {
  console.log(req.body);

  const { noteTitle, noteInput } = req.body;

  if (noteTitle && noteInput) {
    const newNote = {
      noteTitle,
      noteInput,
      id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`New note added! 📝`);
  } else {
    res.error(`Unable to write note! ❌`);
  }
});

module.exports = notes;
