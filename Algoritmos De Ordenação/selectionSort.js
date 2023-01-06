const livraria = require("./listaLivros");
const menorValor = require("./menorValor");

for (let atual = 0; atual < livraria.length; atual++) {
  let menor = menorValor(livraria, atual);
  let livroAtual = livraria[atual];
  let livroMenorPreco = livraria[menor];

  livraria[atual] = livroMenorPreco;
  livraria[menor] = livroAtual;
}
console.log(livraria);
