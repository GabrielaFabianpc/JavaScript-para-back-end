const minhasInformacoes = {
  nome: "Gabi",
  idade: 20,
  altura: 1.6,
  profissao: "Desenvolvedora de Software",
  telefone: 31983431155,
};
minhasInformacoes.telefone = [31983431155, 31983311222];
minhasInformacoes.telefone.splice([1]);
minhasInformacoes.signo = "Escorpiao";
console.log(minhasInformacoes);
minhasInformacoes.cidadeEBairro = [
  {
    cidade: "Oi",
    bairro: "Ola",
  },
];
minhasInformacoes.cidadeEBairro.push({
  cidade: "Hi",
  bairro: "Hello",
});

const meuBairro = minhasInformacoes.cidadeEBairro.filter((bairro) => {
  return bairro.bairro === "Hello";
});
console.log(meuBairro);
