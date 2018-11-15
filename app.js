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
   // mail.enviarEmail(pessoa, amigoOculto);
}

const gravarAmigosOcultos = (pessoas, amigos) => {
    pessoas.gravarAmigos(pessoas, amigos); 
}    

sortear();
