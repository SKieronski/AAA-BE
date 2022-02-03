const mongoose = require("../Connection.js");

const WeaponSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
});

const Weapon = mongoose.model("Weapon", WeaponSchema)

module.exports= Weapon;

