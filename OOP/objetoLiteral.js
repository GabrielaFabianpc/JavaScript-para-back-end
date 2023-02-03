const userr = {
  nome: "Juliana",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(`usuario: ${this.nome}, email: ${this.email}`);
  },
};
const admin = {
  nome: "Maria",
  email: "m@m.com",
  role: "admin",
  criarCurso() {
    console.log("curso criado");
  },
};

Object.setPrototypeOf(admin, userr);
admin.criarCurso();
admin.exibirInfos();

//usando bind
/*const exibir = function () {
  console.log(this.nome);
};
const exibirNome = exibir.bind(userr);
exibirNome();

//usando call
function exibeMensagem(nome, email) {
  console.log(`usuário: ${nome}, email ${email}`);
}
const user = {
  nome: "Mariana",
  email: "m@m.com",
  executaFuncao: function (fn) {
    fn.call(user, this.nome, this.email);
  },
};

user.executaFuncao(exibeMensagem); //usuário: Mariana, email m@m.com
*/
