const axios = require("axios");
const https = require('https');

async function initPinpad() {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  var axios = require("axios").default;

  var options = {
    method: "POST",
    url: "https://127.0.0.1:4090/v1/pinpad/init",
    headers: {
      "Content-Type": "application/json",
      Authorization: "52614124-db8a-402d-bd05-8c866cb685fc",
    },
    httpsAgent:agent,
    data: {
      applicationName: "iLine Pay",
      applicationVersion: "1.0.0",
      cnpj: "05825422000110",
      activationCode: "755426408",
      contactless: true,
      pinpadMessages: {
        approvedMessage: "Compra aprovada",
        declinedMessage: "Compra Negada",
        initializationMessage: "Iniciando...",
        processingMessage: "Enviando...",
      },
    },
  };

  const response = await axios.request(options);

  return response.data;
}

module.exports = initPinpad;
