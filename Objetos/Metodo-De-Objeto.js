const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

const chaveDoCliente = Object.keys(cliente);
console.log(chaveDoCliente);
if (!chaveDoCliente.includes("enderecos")) {
  console.error("Erro. Não temos um endereço cadastrado!");
}
