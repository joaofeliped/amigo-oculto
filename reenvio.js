const fs = require('fs');
const pessoas = require('./pessoas');
const mail = require('./mail');

const pesquisar = () => {
    pessoas.buscarPessoaAmigoSorteado(4, (pessoa) => {
        pessoas.buscarPessoaAmigoSorteado(pessoa.amigoOcultoId, (amigo) => {
            enviarEmail(pessoa, amigo);
        });
    });
}

const enviarEmail = (pessoa, amigoOculto) => {
   console.log('Se quiser enviar o email de verdade, troque o arquivo de leitura.');
    // mail.enviarEmail(pessoa, amigoOculto); 
 }

pesquisar();