require('dotenv').config();
const kinguin = require('../index.js');

var kg = new kinguin(process.env.KINGUIN_API_KEY, true, 'v1');

//Trying with CyberPunk2077

//kg.getProductByKinguinId('64435');

//kg.getProductBySteamId('1091500')

console.log(kg.getProductByName('Cyberpunk 2077'));