const axios = require("axios");
const https = require('https');

async function confirmTransaction(nsu) {

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  var axios = require("axios").default;

  var options = {
    method: "GET",
    url: "https://127.0.0.1:4090/v1/charge/confirmation",
    headers: {
      "Content-Type": "application/json",
      Authorization: "52614124-db8a-402d-bd05-8c866cb685fc",
    },
    httpsAgent:agent,
    params: {nsu},
  };

  const response = await axios.request(options);

  return response.data;
}

module.exports = confirmTransaction