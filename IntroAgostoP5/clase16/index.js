const express = require("express");
const app = express();
const mongoose = require("mongoose");
const url = "mongodb+srv://gerarburgos1987:valinhos2023@cluster0.kttc6we.mongodb.net/"
const Propiedad = require("./models/index")
const routes = require("./routes/index");

app.use(express.json());

app.use("/", routes);

const connectToMongo = async () => {
    try {
        await mongoose.connect(url)
        app.listen(3000, () => {
            console.log("Servidor escuchando en el puerto 3000 y base datos ya esta conectada");
          });
    } catch (error) {
        console.log(error);
    }
}

connectToMongo()






