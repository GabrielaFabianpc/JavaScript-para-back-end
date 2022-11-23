const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

const listaAlunosEMedias = [alunos, medias];
console.log(
  `A aluna ${listaAlunosEMedias[0][1]} tem a média ${listaAlunosEMedias[1][1]}`
);

const numerosReais = [5, 8, 6, 9];
const numerosFakes = [9, 8, 7, 6];

const osDoisNumeros = [numerosReais, numerosFakes];
console.log(
  `Os numeros reais tem 4 elementos sendo o da terceira posição: ${osDoisNumeros[0][3]}`
);
