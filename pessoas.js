const fs = require('fs');

const buscarNomes = (callback) => {
    fs.readFile('./pessoas.json', 'utf8', (err, data) => {
        callback(JSON.parse(data));
    });
}

const gravarAmigos = (pessoas, amigos) => {
    const resultado = [];

    for(var i = 0; i < pessoas.length; i++) {
        pessoas[i].amigoOculto = amigos[i];

        resultado.push(pessoas[i]);
    }

    gravarJson(resultado);
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
    gravarAmigos: gravarAmigos
}