const axios = require('axios');
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false
});

const API_URL = {
    production: 'https://gateway.kinguin.net/esa/api/',
    sandbox: 'https://gateway.sandbox.kinguin.net/esa/api/'
}

var Kinguin;

Kinguin = function(key, isProd, version){

  this.key = key;
  this.version = version;
  this.createUrl = function (isProd, version = this.version) {
    console.log('Prod : '+isProd);
    return (isProd ? API_URL.production : API_URL.sandbox) + version 
  };

  this.axiosInstance = axios.create({
      baseURL: this.createUrl(isProd, version),
      headers: { 'api-ecommerce-auth': key }
  });

  this.getProductByKinguinId = async function (kinguinId) {
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

  this.getProductBySteamId = async function (steamId) {
    await this.axiosInstance.get('/products?steam=' + steamId, { httpsAgent: agent })
    .then(function (response) {
      console.log(response.data);
    })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  this.getProductByName = function (name) {
    return this.axiosInstance.get('/products?name=' + name, { httpsAgent: agent })
    .then(function (response) {
      //console.log(response.data);
    })
    .then(function (response) {
      //return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
  };
  
}

module.exports = Kinguin;