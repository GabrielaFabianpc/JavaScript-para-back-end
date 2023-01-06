const livrariaFisica = require("./listaLivros");

const livrariaFisicaOrdemAlfabetica = livrariaFisica.sort((a, b) => {
  while (a.titulo < b.titulo) {
    return -1;
  }
});
console.log(livrariaFisicaOrdemAlfabetica);

const livrariaFisicaPrecoMenor = livrariaFisica.sort((a, b) => {
  while (a.preco < b.preco) {
    return -1;
  }
});
console.log(livrariaFisicaPrecoMenor);
