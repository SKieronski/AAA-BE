const mongoose = require("../Connection.js");

const ArmourSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
});

const Armour = mongoose.model("Armour", ArmourSchema)

module.exports=Armour;