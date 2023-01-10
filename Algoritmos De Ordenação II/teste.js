const listaLivros = require("./arrays");

const livrosJuntos = listaLivros.edFolha.concat(listaLivros.edGalho);

const livrosOrdenadosPreco = livrosJuntos.sort((livro1, livro2) => {
  if (livro1.preco < livro2.preco) {
    return -1;
  }
});
console.log(livrosOrdenadosPreco);
const livrosSomenteAte30Reais = livrosJuntos.filter((livro1) => {
  return livro1.preco < 30;
});
console.log(livrosSomenteAte30Reais);
