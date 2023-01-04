const clientes = require("./clientes.json");

function temApartamentoSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}
const achado = temApartamentoSemComplemento(clientes);
console.log(achado);
