const { edFolha, edGalho } = require("./arrays");

const livrariaComDuasEditoras = edFolha.concat(edGalho);

const livrariaOrdenadaAlfabetica = livrariaComDuasEditoras.sort((a, b) => {
  if (a.titulo < b.titulo) {
    return -1;
  }
});
console.log(livrariaOrdenadaAlfabetica);

const livariaOrdenadaPreco = livrariaComDuasEditoras.sort((a, b) => {
  if (a.preco < b.preco) {
    return -1;
  }
});
console.log(livariaOrdenadaPreco);
