function formatarSugestoes(sugestoes) {
    let sugestoesFormatadas = '';

    for(var i = 0; i < sugestoes.length; i++) {
        sugestoesFormatadas += sugestoes[i] + '<br>';
    }

    return sugestoesFormatadas;
}

module.exports = {
    formatarSugestoes: formatarSugestoes
}