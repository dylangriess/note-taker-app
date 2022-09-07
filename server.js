const express = require("express");
const path = require("path");
const { clog } = require("./middleware/clog");
const api = require("./routes/api/");

const app = express();

const PORT = process.env.PORT || 3001;

//import custom middleware, "clog"
app.use(clog);

//middleware for parsing JSON and urlEncoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

// GET route for homepage --> index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
// GET route to redirect to homepage if undefined route
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
