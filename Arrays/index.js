/*const arrayVazia = [];
console.log(arrayVazia);
console.log(arrayVazia.length);

const arrayVazia = [];
console.log(arrayVazia[0]);

const arrayVazia = [, , ,];
console.log(arrayVazia.length);
console.log(arrayVazia[0]);
console.log(arrayVazia[1]);
console.log(arrayVazia[2]);

const arrayVazia = [, , ,];
console.log(arrayVazia.length);
arrayVazia.push(50);
console.log(arrayVazia);
console.log(arrayVazia.length);
*/

/*const numeros = [2, 5, 2, 5];
numeros.push(5);
const multiplica =
  numeros[0] * numeros[1] * numeros[2] * numeros[3] * numeros[4];
console.log(multiplica);
console.log(numeros.length);
*/

/*const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat = arrayOriginal.concat("André", "Fernanda");

console.log(arrayConcat);
console.log(arrayOriginal);
*/

/*const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"];
const arrayConcat = arrayOriginal.concat(
  ["André", "Fernanda"],
  ["Ricardo", "Ana"],
  ["Marcelo", "Bia"]
);

console.log(arrayConcat);
console.log(arrayOriginal);
*/
/*const arrayOriginal = [50, 60, 70];
const arrayConcat = arrayOriginal.concat([80, [90, 100]]);

console.log(arrayConcat);
console.log(arrayOriginal);
*/

//Com base nessa matriz, qual dos códigos abaixo eu posso utilizar para imprimir a frase “Leonardo tem idade 28”?
/*const funcionarios = [
  ["Ana", "Juliana", "Leonardo"],
  [30, 35, 28],
];

console.log(`${funcionarios[0][2]} tem idade ${funcionarios[1][2]}`);

const notas = [5, 8, 7];
const alunos = ["Gabi", "Eli", "Dani"];
const notasEAlunos = [notas, alunos];
console.log(`A aluna ${notasEAlunos[1][0]} tirou a nota ${notasEAlunos[0][0]}`);

const valor = [
  ["Ana", "Pedro", "Case"],
  [8, 5, 3],
];
console.log(`A ${valor[0][0]} tirou nota ${valor[1][0]} na prova`);
*/

/*const arrayNums = [1, 2, 3, 4];

const multiplica = arrayNums.map((nums) => {
  return nums * 10;
});
console.log(multiplica);
*/

const numeros = [43, 50, 65, 12];

function somandoTudo(soma) {
  const resultado = soma.reduce((acc, numero) => acc + numero, 0);
  const media = resultado / soma.length;
  return media;
}
console.log(`O valor de numeros com sua média é ${somandoTudo(numeros)}`);
