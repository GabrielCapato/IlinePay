const express = require('express')
const app = express();
const cors = require('cors');
const initPinpad = require('./src/modules/init');
const port = 5502

const bodyParser = require('body-parser');
const displayMessage = require('./src/modules/displayMessage');
const startTransaction = require('./src/modules/startTransaction');
const {revertTransaction,cancelTransaction} = require('./src/modules/cancelTransaction');
const confirmTransaction = require('./src/modules/confirmTransaction');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


app.post('/initPinpad',async (req,res)=>{
 
    
    res.json(await initPinpad())
})

app.post('/displayMessage',async (req,res)=>{

  const {message} = req.body
    
    res.json(await displayMessage(message))
})

app.post('/startTransaction',async (req,res)=>{

  const {valor,tipoOperacao} = req.body
    
    res.json(await startTransaction(valor,tipoOperacao))
})

app.post('/revertTransaction',async (req,res)=>{

  const {nsu} = req.body
    
    res.json(await revertTransaction(nsu))
})

app.post('/cancelTransaction',async (req,res)=>{

  const {nsu} = req.body
    
    res.json(await cancelTransaction(nsu))
})

app.post('/confirmTransaction',async (req,res)=>{

  const {nsu} = req.body
    
    res.json(await confirmTransaction(nsu))
})

app.post('/abortTransaction',async (req,res)=>{

  const {valor,tipoOperacao} = req.body
    
    res.json(await startTransaction(valor,tipoOperacao))
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${port}`);
});