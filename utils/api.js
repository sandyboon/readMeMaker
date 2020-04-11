const axios = require('axios');

const api = {
  getUser(username) {
    console.log(`https://api.github.com/users/${username}`);
    return axios.get(`https://api.github.com/users/${username}`);
  },
};

module.exports = api;
