import Contenedor from "../Archivos/entrega";

const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send(
    '<h1 style=" color:red "> Bienvenidos al entregable del servidor con Express </h1>'
  );
});

app.get("/products", (req, res) => {
  const items = new Contenedor("product.txt");
  res.send(items);
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto 8080... ");
});
