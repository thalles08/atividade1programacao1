import express from 'express';
import session from 'express-session';
import autenticar, {verificaAutenticacao} from './seguranca/autenticar.js';

const porta = 4000;
const host = '0.0.0.0'; 

const app = express();

app.use(session({
    secret: '4c3ss0',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60}
}));

app.use(express.urlencoded({extended: true}));

app.get('/', (requisicao, resposta) => {
    resposta.redirect('/login.html');
});

app.get('/login', (requisicao, resposta) => {
    resposta.redirect('/login.html');
});

app.post('/login', autenticar);

app.use(express.static('./publico'));
app.use(verificaAutenticacao, express.static('./protegido'));

app.listen(porta, host, () =>{
    console.log(`Servidor rodando em http://${host}:${porta}`);
});