require('dotenv').config();
const kinguin = require('../index.js');

var kg = new kinguin(process.env.KINGUIN_API_KEY, true, 'v1');

//Trying with CyberPunk2077

//kg.getProductByKinguinId('64435');

//kg.getProductBySteamId('1091500')

async function getResponse () {
    await kg.getProductByName('Cyberpunk 2077')
    .then(response => console.log(response));
}



console.log(getResponse());