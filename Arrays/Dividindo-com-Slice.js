const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);
console.log(sala1);
console.log(sala2);

const notas = [1, 2, 8, 9, 10];
const melhoresNotas = notas.slice(2);
const pioresNotas = notas.slice(0, 2);
console.log(melhoresNotas);
console.log(pioresNotas);
