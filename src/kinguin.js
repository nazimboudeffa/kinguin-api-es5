const axios = require('axios');
const https = require('https');
require('dotenv').config();

const API_URL = {
    production: 'https://gateway.kinguin.net/esa/api/',
    sandbox: 'https://api.api-sandbox.kinguin.info'
}

var kinguin = function(key = process.env.KINGUI_API_KEY, isProd, version = "v1"){
    var axiosInstance;
    this.axiosInstance = Axios.create({
        baseURL: this.createUrl(isProd, version),
        headers: { 'api-ecommerce-auth': key }
    });

    this.createUrl(isProd, version) {
        return (isProd ? API_URL.production : API_URL.sandbox) + version
    }
}