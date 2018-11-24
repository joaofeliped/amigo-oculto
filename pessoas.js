const fs = require('fs');

const arquivoPessoasSorteadas = './.amigos_sorteados_teste.json';

const buscarNomes = (callback) => {
    fs.readFile('./pessoas.json', 'utf8', (err, data) => {
        callback(JSON.parse(data));
    });
}

const buscarPessoaAmigoSorteado = (id, callback) => {
    fs.readFile(arquivoPessoasSorteadas, 'utf8', (err, data) => {
        const pessoas = JSON.parse(data);
        let pessoa;

        for(var i = 0; i < pessoas.length; i++) {
            if(pessoas[i].id == id) {
                pessoa = pessoas[i];
            }
        }
        
        
        callback(pessoa);
    });
}

const gravarAmigos = (pessoas, amigos) => {
    const resultado = [];

    for(var i = 0; i < pessoas.length; i++) {
        pessoas[i].amigoOcultoId = amigos[i].id;

        resultado.push(pessoas[i]);
    }

    gravarJson(JSON.stringify(resultado));
}

const gravarJson = (amigos) => {
    fs.writeFile('amigos_sorteados.json', amigos, (err) => {
        if(err) {
            console.log('Erro ao gravar o arquivo');
        } else {
            console.log('Arquivo gravado com sucesso');
        }
    });
}

module.exports = {
    buscarNomes: buscarNomes,
    gravarAmigos: gravarAmigos,
    buscarPessoaAmigoSorteado: buscarPessoaAmigoSorteado
}