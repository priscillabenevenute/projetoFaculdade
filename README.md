# Conversor de Datas US para Brasil

Este é um projeto simples que utiliza expressões regulares (REGEX) e JavaScript para converter e exibir datas do padrão estadunidense (MM/DD/YYYY) para o padrão brasileiro (DD/MM/YYYY).

## Como funciona

O projeto consiste em uma função JavaScript que recebe uma data no formato MM/DD/YYYY e a converte para o formato DD/MM/YYYY. A conversão é feita utilizando expressões regulares para identificar e reorganizar os elementos da data.

## Uso

Para utilizar o conversor de datas, siga estas etapas:

1. Clone o repositório para o seu ambiente local:

2. Abra o arquivo `script.js` no seu editor de código preferido.

3. Copie a função `transformarData` para o seu projeto ou utilize diretamente a função no seu código, conforme necessário.

4. Chame a função `transformarData` passando a data no formato MM/DD/YYYY como argumento. Por exemplo:

```javascript
const dataUS = '12/25/2023';
const dataBR = transformarData(dataUS);
console.log(dataBR); // Saída: 25/12/2023
```

## Contribuindo

Contribuições são bem-vindas! Se você tiver alguma sugestão, melhoria ou correção de bug, sinta-se à vontade para abrir uma issue ou enviar um pull request.