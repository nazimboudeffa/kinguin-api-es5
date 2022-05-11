require('dotenv').config();
const kinguin = require('../index.js');

var king = new kinguin(process.env.KINGUIN_API_KEY, true, 'v1');

//Trying with CyberPunk2077

//king.getProductByKinguinId('64435');

//king.getProductBySteamId('1091500')

console.log(king.getProductByName('Cyberpunk 2077'));