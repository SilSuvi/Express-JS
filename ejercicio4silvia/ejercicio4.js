const express = require("express");
const servidor = express();

const saludar = require("./saludar");

servidor.get("/", function (req, res) {
  let saludo = saludar();
  res.send(saludo);
});

servidor.listen(3003);
