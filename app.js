const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

//Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/");
console.log(__dirname);

// Servir contenido estatico
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render("home", {
//     nombre: "Pablo Rodriguez",
//     titulo: "Probando Node",
//   });
// });

// app.get("/generic", (req, res) => {
//   res.render("generic", {
//     nombre: "Pablo Rodriguez",
//     titulo: "Probando Node",
//   });
// });

// app.get("/elements", (req, res) => {
//   res.render("elements", {
//     nombre: "Pablo Rodriguez",
//     titulo: "Probando Node",
//   });
// });

app.get("*", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
