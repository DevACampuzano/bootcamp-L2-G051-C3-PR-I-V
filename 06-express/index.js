const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    // origin: ["http://localhost:5173"],
    // methods: ["GET"],
  })
);

app.get("/", (req, res) => {
  res.json({ msg: "Hello get" });
});

// app.post("/", (req, res) => {
//   res.json({ msg: "Hello the post" });
// });

// app.put("/", (req, res) => {
//   res.json({ msg: "Hello the put" });
// });

// app.delete("/", (req, res) => {
//   res.json({ msg: "Hello the delete" });
// });

// app.get("/:name", (req, res) => {
//   const name = req.params.name;
//   res.send("Hello " + name);
// });

app.use((req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

app.listen(3000, () => {
  console.log("El servidor está corriendo en el http://localhost:3000");
});
