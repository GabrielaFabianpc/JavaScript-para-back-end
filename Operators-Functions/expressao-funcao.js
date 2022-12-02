// declaração de função

function minhaFuncao(param) {
  // bloco de código
}
minhaFuncao("param");

// expressão de função

/*const soma = function (numero1, numero2) {
  return numero1 + numero2;
};
//console.log(soma(1, 1));
*/
// diferença principal: HOISTING
// funções e var são 'listadas' no topo do arquivo.

console.log(apresentacao());

function apresentacao() {
  return "ola";
}

console.log(apresentar(1, 1));
function apresentar(numero1, numero2) {
  return numero1 + numero2;
}
