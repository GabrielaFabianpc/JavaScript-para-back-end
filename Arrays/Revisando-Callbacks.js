const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nota) {
  console.log(nota);
});

//O melhor jeito para fazer um forEach
nomes.forEach((nota) => {
  console.log(nota);
});

function imprimeNota(nota) {
  console.log(nota);
}
nomes.forEach(imprimeNota);
