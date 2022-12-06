const minhasInformacoes = {
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
