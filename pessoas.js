const fs = require('fs');

let buscarNomes = (callback) => {
    fs.readFile('./pessoas.json', 'utf8', (err, data) => {
        callback(JSON.parse(data));
    });
}

module.exports = {
    buscarNomes: buscarNomes
}