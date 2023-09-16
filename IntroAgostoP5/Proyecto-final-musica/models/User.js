const mongoose = require("mongoose");

const User = new mongoose.Schema({
  nombre: { type: String, min: 2 },
  apellido: { type: String, min: 2 },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return regex.test(v);
      },
      message: " You must enter a valid email!",
    },
  },
  password: { type: Number },
  favoritos: { type: Number },
});

module.exports = mongoose.model("User", User);
