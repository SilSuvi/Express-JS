const express = require("express");
const servidor = express();

servidor.get("/", function (req, res) {
  res.send("<h1>Hola Mundo</h1><h3>desde express</h3>");
});

servidor.listen(3000);
