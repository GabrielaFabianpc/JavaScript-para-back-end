const clientes = require("./clientes.json");

//for (chave in clientes) {
//console.log(`em cada chave ${chave} temos o valor ${clientes[chave]}`);
//}

function encontrar(lista, chave, valor) {
  return lista.find((item) => item[chave] === valor);
}
const encontrado = encontrar(clientes, "nome", "Amye");
console.log(encontrado);
