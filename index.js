import express from 'express';
import autenticar from './seguranca/autenticar.js';

const porta = 4000;
const host = '0.0.0.0'; 

const app = express();

app.use(express.urlencoded({extended: true}));

app.get('/', (requisicao, resposta) => {
    resposta.redirect('/login.html');
});

app.get('/login', (requisicao, resposta) => {
    resposta.redirect('/login.html');
});

app.post('/login', autenticar);

app.use(express.static('./publico'));
app.use(express.static('./protegido'));

app.listen(porta, host, () =>{
    console.log(`Servidor rodando em http://${host}:${porta}`);
});