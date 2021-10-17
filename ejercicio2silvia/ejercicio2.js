const express = require("express");
const servidor = express();

servidor.get("/:didacos", function (req, res) {
  let ruta = req.params.didacos;
  let formula = Math.floor(Math.random() * parseInt(ruta - 0) + 0);
  res.send(`Número aleatorio entre 0 y ${ruta}: ${formula}`);
});

servidor.listen(3001);
