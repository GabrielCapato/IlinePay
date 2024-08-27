var axios = require("axios").default;
const https = require('https');

async function displayMessage(message){
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

var options = {
  method: 'GET',
  url: 'https://127.0.0.1:4090/v1/pinpad/display',
  params: {message},
  httpsAgent:agent,

  headers: {
    'User-Agent': 'insomnia/9.2.0',
    Authorization: '52614124-db8a-402d-bd05-8c866cb685fc'
  }
};
await axios.request(options)
}

module.exports = displayMessage