const weapons = require('./weaponSeed.json')
const armour = require('./armourSeed.json')

const Weapon = require('./models/Weapons')
const Armour = require('./models/Armour')
const weaponSeeds = require('./weaponSeed.json')
const armourSeeds = require('./armourSeed.json')
Weapon.deleteMany({})//delete them all 
Weapon.insertMany(weaponSeeds)
    .then(console.log)
    .catch(console.error)
    // .finally(() => { process.exit() }) 

Armour.deleteMany({})//delete them all 
Armour.insertMany(armourSeeds)
    .then(console.log)
    .catch(console.error)
    .finally(() => { process.exit() }) 