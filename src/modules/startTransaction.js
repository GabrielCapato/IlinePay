var axios = require("axios").default;
const https = require('https');

async function startTransaction(valor,tipo = 'Credit'){
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  let status = ""

  while(status !== "FINISHED"){

var options = {
  method: 'POST',
  url: 'https://127.0.0.1:4090/v1/charge/authorization',
  data: {amount: valor, paymentType: tipo, installmentType: 'None'},
  httpsAgent:agent,

  headers: {
    'User-Agent': 'insomnia/9.2.0',
    Authorization: '52614124-db8a-402d-bd05-8c866cb685fc'
  }
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

module.exports = startTransaction