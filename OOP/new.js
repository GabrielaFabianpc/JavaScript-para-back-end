/*function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`;
  };
}
//let user1 = new User("Gabi", "g@f.com");
//console.log(user1.exibirInfos());

function Admin(role) {
  User.call(this, "Gabi", "g@f.com");
  this.role = role || "estudante";
}

//Admin.prototype = Object.create(User.prototype);
//const novoUser = new Admin("admin");

console.log(novoUser.exibirInfos());
console.log(novoUser.role);
*/

const user = {
  init: function (nome, email) {
    this.nome = nome;
    this.email = email;
  },
  exibirInfos: function (nome) {
    return this.nome;
  },
};
const novoUser = Object.create(user);
novoUser.init("Gabi", "g@f.com");
console.log(novoUser);
console.log(novoUser.exibirInfos());
//console.log(user.isPrototypeOf(novoUser));
