const axios = require("axios");
const https = require('https');

async function revertTransaction(nsu) {

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  var axios = require("axios").default;

  var options = {
    method: "GET",
    url: "https://127.0.0.1:4090/v1/charge/reversal",
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

async function cancelTransaction(nsu){
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  let status = ""

  while(status !== "FINISHED"){

  var options = {
    method: "GET",
    url: "https://127.0.0.1:4090/v1/charge/cancelation",
    headers: {
      "Content-Type": "application/json",
      Authorization: "52614124-db8a-402d-bd05-8c866cb685fc",
    },
    httpsAgent:agent,
    params: {nsu},
  };

  const response = await axios.request(options)
  status = response.data?.status
  if(status === 'FINISHED'){
   return response.data
  }
  setTimeout(() => {
 }, "1000");
}

}

module.exports = {revertTransaction,cancelTransaction};
