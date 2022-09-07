const express = require("express");
const router = express.Router();
// Import our modular routers for /notes
const notes = require("./notes");
router.use("/notes", notes);

module.exports = router;
