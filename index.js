import express from 'express';

const porta = 4000;
const host = '0.0.0.0'; 

const app = express();

app.listen(porta, host, () =>{
    console.log(`Servidor rodando em http://${host}:${porta}`);
});