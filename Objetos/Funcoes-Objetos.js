const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
  saldo: 200,
  efetuaPagamento: (valor) => {
    if (valor > this.saldo) {
      console.log("Saldo Insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Compra Realizada. Seu salto atual é de ${valor}`);
    }
  },
};
cliente.efetuaPagamento(250);

const eu = {
  nomee: "Gabi",
  idadee: 20,
  idadeIdeal: (idade) => {
    if (idade != this.idadee) {
      console.log(`A sua idade não corresponde com ${eu.nomee}`);
    }
  },
};

eu.idadeIdeal(18);
