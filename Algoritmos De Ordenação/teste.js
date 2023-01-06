const picole = [
  {
    cor: "rosa",
    sabor: "pitaya",
  },
  {
    cor: "azul",
    sabor: "uva",
  },
  { cor: "vermelho", sabor: "morango" },
  {
    cor: "laranja",
    sabor: "laranja",
  },
];
function ordenar(lista, propriedade) {
  const ordenando = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
  });
  return ordenando;
}
const ordenado = ordenar(picole, "cor");
//console.log(ordenado);

const alunos = ["gabi", "ana", "trajano"];
const notas = [6, 6, 8]; // media = 7

let inicio = 0;

const soma = (notas.forEach = (nota) => {
  inicio += nota;
});

const media = inicio / notas.length;

function aluno(media) {
  if (media <= 7) {
    console.log("Aluno Reprovado");
  } else {
    console.log("Aluno Aprovado");
  }
}
aluno(media);
//console.log(`A media dos alunos era de ${media}`);

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic" },
  { name: "Zeros", value: 37 },
];
items.sort(function (a, b) {
  a.value - b.value;
});
console.log(items);
let stringArray = ["Blue", "Humpback", "Beluga"];
const arrayOrdenado = stringArray.sort((a, b) => {
  if (a < b) {
    return -1;
  }
});
console.log(arrayOrdenado);

let numberArray = [40, 1, 5, 200];
const numComComparação = numberArray.sort((num1, num2) => {
  if (num1 < num2) {
    return -1;
  }
});
console.log(numComComparação);

let list = ["Delta", "alpha", "CHARLIE", "bravo"];

const arrayNovo = list.map((lista) => {
  return lista.toLowerCase();
});
console.log(arrayNovo);

const listaOrdenada = arrayNovo.sort((a, b) => {
  if (a < b) {
    return -1;
  }
});
console.log(listaOrdenada);
