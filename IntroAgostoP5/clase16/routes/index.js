const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hola como estas?");
});

router.get("/chau", (req, res) => {
  res.status(200).send("el mensaje lo ponemos nosotros");
});

router.get("/mate", (req, res) => {
  res.status(200).send({ name: "julian", apellido: "Alvarez" });
});

router.post("/album", (req, res) => {
  console.log("REQ", req);
  console.log("REQ:BODY", req.body);
  res.status(200).send(`tu libro es ${req.body.titulo} de ${req.body.autor}`);
});

module.exports = router;
