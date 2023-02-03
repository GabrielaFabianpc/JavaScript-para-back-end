function teste(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.greeting = () => {
    console.log({
      nome: this.nome,
      idade: this.idade,
    });
  };
}
let pessoa1 = new teste("Gabi", 20);
let pessoa2 = new teste("Bruce", 27);
pessoa1.greeting();
pessoa2.greeting();

//Usando Object.create
const usuario = {
  init: function (nome, cidade) {
    this.nome = nome;
    this.cidade = cidade;
  },
  informacoes: function (nome, cidade) {
    return `O nome do cliente é ${this.nome} e sua cidade é ${this.cidade}`;
  },
};
const usuarioNovo = Object.create(usuario);
usuarioNovo.init("Gabi", "Belo Horizonte");
//console.log(usuarioNovo);
//console.log(usuarioNovo.informacoes());

//Usando New
function usuarios(nome, cidade) {
  this.nome = nome;
  this.cidade = cidade;

  this.info = function () {
    return `O nome do cliente é ${this.nome} e sua cidade é ${this.cidade}`;
  };
}
const usuaria = new usuarios("Gabi", "São Paulo");
console.log(usuaria.info());

//Usando Class
class Usuario {
  constructor(name, idade, email, cidade) {
    this.name = name;
    this.idade = idade;
    this.email = email;
    this.cidade = cidade;
  }

  exibirInfos() {
    return `O nome do nosso cliente é ${this.name}, tem ${this.idade} anos, possui o email: ${this.email}, e mora na cidade ${this.cidade}`;
  }
}
const userNovo = new Usuario("Gabi", "22", "g@g.com", "São Paulo");
console.log(userNovo);
console.log(userNovo.exibirInfos());
