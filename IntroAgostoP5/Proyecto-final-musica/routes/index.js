const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Album = require("../models/Album")

// Ruta para crear un usuario
router.post("/createuser", async (req, res) => {
  try {
    let usuario = await User.create(req.body);
    res.status(200).send("usuario creado correctamente");
  } catch (error) {
    res.status(500).send({ "error al crear el usuario": error });
  }
});

// Una ruta que reciba un id por params y retorne la data del usuario nuevamente, excluyendo la contraseña.
router.get("/usuario/:id", async (req, res) => {
  try {
    let respuesta = await User.findById(req.params.id);
    res.status(200).send({ 
      usuario: {
        nombre: respuesta.nombre, 
        apellido: respuesta.apellido, 
        email:  respuesta.email }});
  } catch (error) {
    res.status(500).send({ "error al crear el usuario": error });
  }
});

// Una ruta para editar los datos de un usuario.
router.put("/usuario/edit/:id", async (req, res) => {
  try {
    const usuario = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(usuario);
  } catch (error) {
    res.status(500).send({ "error al editar el usuario": error });
  }
});

// Una ruta para agregar un album.
router.post("/album/agregar", async (req, res) => {
    try {
        let album = await Album.create(req.body)
        res.status(200).send({"Album creado": album})
    } catch (error) {
        res.status(500).send({ "error al agregar un album": error });
    }
})


// Una ruta para editar un album.



// Una ruta para agregar o eliminar una canción del album.



// Una ruta que devuelva todos los albums.
router.get("/album/todos", async (req, res) => {
  try {
    let albums = await Album.find()
    res.status(200).send(albums)
  } catch (error) {
    res.status(500).send({ "error solicitar todos los albums": error });
  }
})


// Una ruta que devuelva la información de un album especifíco.



// Una ruta para eliminar un album.



module.exports = router;
