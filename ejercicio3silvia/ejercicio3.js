let nombre = ["Carlos", "Sílvia", "Dídac", "Nil", "Olivia"];

const express = require("express");
const servidor = express();

servidor.get("/persona", function (req, res) {
  res.send(`Las personas son ${nombre}`);
});

servidor.get("/persona/:parametro", function (req, res) {
  let personaSolicitada = req.params.parametro;
  for (let i = 0; i < nombre.length; i++) {
    if (personaSolicitada === nombre[i]) {
      res.send(`La persona solicitada es ${nombre[i]}`);
    }
  }
});

servidor.listen(3002);
