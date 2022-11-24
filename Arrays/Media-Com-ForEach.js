const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
notas.forEach(function (nota) {
  somaDasNotas += nota;
});
const media = somaDasNotas / notas.length;
console.log(media);

//Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
//Sempre vamos ter um callback (função) no forEach
// O método forEach é usado para percorrer arrays, mas usa uma função de modo diferente do "laço for" tradicional.
// Dentro dor forEach podemos passar uma função anônima
