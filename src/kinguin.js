const axios = require('axios');
const https = require('https');
require('dotenv').config();

const API_URL = {
    production: 'https://gateway.kinguin.net/esa/api/',
    sandbox: 'https://api.api-sandbox.kinguin.info'
}

var kinguin = function(key = process.env.KINGUI_API_KEY, isProd, version = "v1"){

    var axiosInstance = Axios.create({
        baseURL: this.createUrl(isProd, version),
        headers: { 'api-ecommerce-auth': key }
    });

    function createUrl(isProd, version) {
        return (isProd ? API_URL.production : API_URL.sandbox) + version
    };

    async function getProductDetails(kinguinId) {
        await axiosInstance.get('/products/' + kinguinId, { httpsAgent: agent })
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