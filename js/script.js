function transformarData(date) {
    // Expressão regular para capturar o mês, o dia e o ano
    var regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    var match = date.match(regex);

    if (!match) {
        return "Data inválida";
    }

    var day = parseInt(match[2], 10);
    var month = parseInt(match[1], 10);
    var year = parseInt(match[3], 10);

    // Verificar se o mês está entre 1 e 12
    if (month < 1 || month > 12) {
        return "Mês inválido. Por favor digite novamente!";
    }

    // Verificar se o dia está entre 1 e 31 (ou menos, dependendo do mês)
    var maxDay = new Date(year, month, 0).getDate();
    if (day < 1 || day > maxDay) {
        return "Dia inválido para o mês. Por favor digite novamente!";
    }

    // Substituir a data pelo formato brasileiro (\2 é o dia, \1 é o mês e \3 é o ano)
    return date.replace(regex, '$2/$1/$3');
}

// Função para ser chamada no clique do botão
document.getElementById("converterButton").addEventListener("click", function () {
    var dataEUA = document.getElementById("dataEUA").value;
    var resultado = document.getElementById("resultado");
    var dataBR = transformarData(dataEUA);
    resultado.textContent = "Data convertida: " + dataBR;
});