const axios = require('axios');
const https = require('https');
require('dotenv').config();

const agent = new https.Agent({
  rejectUnauthorized: false
});

const API_URL = {
    production: 'https://gateway.kinguin.net/esa/api/',
    sandbox: 'https://api.api-sandbox.kinguin.info'
}

var Kinguin;

Kinguin = function(key = process.env.KINGUIN_API_KEY, isProd, version = "v1"){

  this.key = key;

  this.version = version;

  this.createUrl = function (isProd, version = "v1") {
    return (isProd ? API_URL.production : API_URL.sandbox) + version
  };

  this.axiosInstance = axios.create({
      baseURL: this.createUrl(isProd, version),
      headers: { 'api-ecommerce-auth': key }
  });

  this.getProductDetails = async function (kinguinId) {
      await this.axiosInstance.get('/products/' + kinguinId, { httpsAgent: agent })
      .then(function (response) {
        console.log(response.data);
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      })
  };

}

module.exports = Kinguin;