export default function autenticar(requisicao, resposta, next) {
    const email = 'thalles@felipe';
    const senha = 'abcde';

    const emailInformado = requisicao.body.email;
    const senhaInformada = requisicao.body.senha;

    if (emailInformado === email && senhaInformada === senha) {
        resposta.redirect('/cadastro.html');
    } else {
        resposta.redirect('/login.html');
    }


}