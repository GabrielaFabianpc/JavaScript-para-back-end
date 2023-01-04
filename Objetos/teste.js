/*const minhasInformacoes = {
  nome: "Gabi",
  idade: 20,
  altura: 1.6,
  telefone: 3198888888,
};
minhasInformacoes.telefone = [3198888888, 3199999999];
minhasInformacoes.signo = "Escorpiao";
minhasInformacoes.telefone.splice(0, 1);

minhasInformacoes.endereco = [
  {
    cidade: "Belo Horizonte",
    bairro: "Lourdes",
    apartamento: false,
  },
];

minhasInformacoes.endereco.push({
  cidade: "Rio de Janeiro",
  bairro: "Copacabana",
  apartamento: true,
});
const apartamento = minhasInformacoes.endereco.filter((ap) => {
  return ap.apartamento === true;
});
console.log(minhasInformacoes);
console.log(apartamento);

const chaveDoCliente = Object.keys(minhasInformacoes);
console.log(chaveDoCliente);
if (chaveDoCliente.includes("nome")) {
  console.log(`O nome ${minhasInformacoes.nome} está incluido`);
}
const entrega = {
  destinatario: minhasInformacoes.nome,
  ...minhasInformacoes.endereco[0],
};
console.log(entrega);

const objetos = {
  nome: "Lucas",
  idade: 25,
  cidade: "São Paulo",
};
objetos.nome = ["Lucas", "Gabi"];
//console.log(objetos);

function novoNome(nome) {
  if (nome != "Lucas" && nome != "Gabi") {
    return "Nome não encontrado no banco de dados!";
  } else {
    return `O nome está no banco de dados!`;
  }
}

console.log(novoNome("Lucas"));
*/

const testeNovo = {
  nome: "Fernando",
  idade: 30,
  altura: 1.83,
};
testeNovo.signo = "Escorpião";
testeNovo.nacionalidade = "Canadense";
(testeNovo.endereço = [
  {
    Cidade: "Rio de Janeiro",
  },
]),
  testeNovo.endereço.push({
    Cidade: "São Paulo",
  });
const entrega = {
  destinatario: testeNovo.nome,
  ...testeNovo.endereço[0],
};

const cidade = testeNovo.endereço.filter((cidade) => {
  return cidade.Cidade === "São Paulo";
});

const chave = Object.keys(testeNovo);
console.log(chave);
console.log(testeNovo);
console.log(cidade);
console.log(entrega);
