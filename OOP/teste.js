function person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function () {
    console.log(
      this.name.first +
        " " +
        this.name.last +
        " is " +
        this.age +
        " years old. Likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  };
  this.greeting = function () {
    console.log("Hi! I'm " + this.name.first + ".");
  };
}
var person1 = new person("Bob", "Willer", 20, "Male", ["music", "skiing"]);
var person2 = new person("Sarah", "Muller", 25, "Woman", [
  "Dancing",
  "To Sing",
]);
person1.greeting();
person1.bio();
person2.bio();
person2.greeting();

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
console.log(usuarioNovo);
console.log(usuarioNovo.informacoes());

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
