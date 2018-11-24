const fs = require('fs');
const pessoas = require('./pessoas');
const mail = require('./mail');

const sortear = () => {
    pessoas.buscarNomes((data) => {
        let lista = data.slice();

        lista.sort(function() { return 0.5 - Math.random() });

        for(var i = 0; i < data.length; i++) {
            if(data[i].id === lista[i].id) {
                lista.sort(function() { return 0.5 - Math.random() });
                i = 0;
            }
        }

        for(var i = 0; i < data.length; i++) {
            enviarEmail(data[i], lista[i]);
        }

        gravarAmigosOcultos(data, lista);
    });
}

const enviarEmail = (pessoa, amigoOculto) => {
   /* if(pessoa.email.contains('hotmail')) {
        console.log(pessoa.email);
        //mail.enviarEmail(pessoa, amigoOculto);
    }*/
}

const gravarAmigosOcultos = (pessoas, amigos) => {
    gravarAmigos(pessoas, amigos); 
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
    fs.writeFile('.amigos_sorteados_teste.json', amigos, (err) => {
        if(err) {
            console.log('Erro ao gravar o arquivo');
        } else {
            console.log('Arquivo gravado com sucesso');
        }
    });
}

sortear();
