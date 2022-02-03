const express = require("express");
const router = express.Router();
const Armour = require("../models/Armour");

//Get all the weapons
router.get("/", async (req, res, next) => {
    try{
        const myArmour = await Armour.find({});
        res.json(myArmour); 
    } catch (err) {
        next(err);
    }
});

//Get one weapon by id
router.get("/:id", async (req, res, next) => {
    try {
        const oneArmour = await Armour.findById(req.params.id);
        res.json(oneArmour);
    } catch (err){
        next(err);
    }
});

//Add a new weapon based on the body of the request
router.post("/", async (req, res, next) => {
    try {
        const newArmour = await Armour.create(req.body);
        res.status(201).json(newArmour);
    } catch (err) {
        next(err);
    }
});

//Update a weapon, specify which one by ID
router.put("/:id", async (req, res, next) => {
    try {
        const armourToUpdate = await Armour.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.status(200).json(armourToUpdate);
    } catch (err) {
        next(err);
    }
});

//Delete a weapon, specify which one by ID
router.delete("/:id", async (req, res, next) => {
    try {
        const armourToDelete = await Armour.findByIdAndDelete(
            req.params.id
        );
        if(armourToDelete) {
            res.sendStatus(204); 
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;