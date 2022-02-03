const express = require('express');
const cors = require("cors");
// instantiate express
const app = express();
require("./db/Connection");
app.set('port', process.env.PORT || 8000);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Redirect
app.get("/", (req,res) => {
    res.redirect("/weapons/");
})

//Controllers
const weaponController = require("./db/controllers/WeaponController");
app.use("/weapons/", weaponController);

const armourController = require("./db/controllers/ArmourController");
app.use("/armours/", armourController);

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500; //500 is internal server error
    const message = err.message || "Internal Server Error";
    res.status(statusCode).send(message);
});

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});