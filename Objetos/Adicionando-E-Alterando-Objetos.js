const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
};
//  Podemos adicionar e alterar propriedades mesmo depois do objeto estar criado.
pessoa.telefone = "31 111222333";
pessoa.nome = "Gabi";
pessoa.idade = "20";
pessoa.altura = "1.63";
pessoa.profissao = "Desenvolvedora de Software";
console.log(
  `Meu nome é ${pessoa.nome} tenho ${pessoa.idade} anos, sou ${pessoa.profissao} e tenho ${pessoa.altura} de altura!`
);

const info = ["nome", "idade", "profissao", "telefone", "altura"];

info.forEach((info) => {
  console.log(`As informações sobre ${info} são ${pessoa[info]}`);
});
