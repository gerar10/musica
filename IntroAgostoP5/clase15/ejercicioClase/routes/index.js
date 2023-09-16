const express = require("express");
const router = express.Router();

let muebles = [
  {
    id: 1,
    tipo: "mesa ratona",
    precio: 20000,
    disponible: true,
    stock: 4,
  },
  {
    id: 2,
    tipo: "mesa comedor",
    precio: 70000,
    disponible: true,
    stock: 2,
  },
  {
    id: 3,
    tipo: "silla",
    precio: 8000,
    disponible: false,
    stock: 0,
  },
];
// a. Armá una ruta que traiga todos los muebles.
router.get("/muebles", function (req, res) {
  res.status(200).send(muebles);
});

// b. Armá una ruta que traiga los datos de un mueble específico. Respondé con un 404 si el producto no existe.
router.get("/muebles/:id", (req, res) => {
  let id = Number(req.params.id);
  let respuesta = muebles.filter((mueble) => mueble.id === id);
  if (respuesta.length) {
    res.status(200).send(respuesta);
  } else {
    res.status(404).send("Producto inexistente");
  }
});

// c. Armá una ruta para agregar un nuevo producto al array.
router.post("/muebles/agregar", (req, res) => {
  let mueble = req.body;
  muebles.push(mueble);
  res.status(200).send(muebles);
});

router.delete("/muebles/borrar/:id", (req, res) => {
  let id = Number(req.params.id);
  if (muebles.some((mueble) => mueble.id === id)) {
    let respuesta = muebles.filter((mueble) => mueble.id !== id);
    res.status(200).send(respuesta);
  } else {
    res.status(404).send("Producto inexistente");
  }
});

// e. Armá una ruta que muestre todos los productos disponibles.
router.get("/muebles/disponibles/info", (req, res) => {
  let mueblesDisponibles = muebles.filter(
    (mueble) => mueble.disponible === true
  );
  res.status(200).send(mueblesDisponibles);
});

// f. Armá una ruta que responda si un producto específico está o no disponible, cuál es su stock y, en caso de no estarlo, responda con el siguiente mensaje :
router.get("/muebles/disponible/:id", (req, res) => {
  let id = Number(req.params.id);
  let infoMueble = muebles.filter((mueble) => mueble.id === id);
  let infoMuebleObject = infoMueble[0];
  if (infoMuebleObject.disponible === true) {
    res.status(200).send({
      disponible: infoMuebleObject.disponible,
      stock: infoMuebleObject.stock,
    });
  } else {
    res
      .status(200)
      .send({ message: "No contamos con ese producto en este momento" });
  }
});

// g. Armá una ruta que permita editar los datos de un producto.
router.put("/muebles/editar/:id", (req, res) => {
  let modificarId = Number(req.params.id);
  let { tipo, precio, disponible, stock } = req.body;
  let muebleEditar = muebles.find((mueble) => mueble.id === modificarId);
  if (!muebleEditar) {
    res.status(404).send({ message: "Producto no encontrado" });
  }
  if (tipo) {
    muebleEditar.tipo = tipo;
  }
  if (precio) {
    muebleEditar.precio = precio;
  }
  if (disponible) {
    muebleEditar.disponible = disponible;
  }
  if (stock) {
    muebleEditar.stock = stock;
  }
  res
    .status(200)
    .send({ message: "Producto actualizado correctamente", muebleEditar });
});

// h. Armá una ruta para disminuir el stock del producto cada vez que se compra una unidad. El stock no debe ser menor a cero, es decir no debemos permitir que haya compras si no hay stock.

router.put("/muebles/modificar/stock/:id", (req, res) => {
  let modificarId = Number(req.params.id);
  let muebleModificarStock = muebles.find(
    (mueble) => mueble.id === modificarId
  );
  if (muebleModificarStock.stock > 0) {
    muebleModificarStock.stock--;
    res.status(200).send({
      message: "stock actualizado correctamente",
      stockActual: muebleModificarStock.stock,
    });
  } else {
    res.status(200).send({ message: "No hay stock de este producto" });
  }
});

module.exports = router;
