import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  criarCurso(curso, vagas) {
    return `O curso ${curso} foi criado e tem ${vagas} vagas!`;
  }
}
const novoAdmin = new Admin("Fernanda", "f@f.com", "01-01-2023");
console.log(novoAdmin);
console.log(novoAdmin.criarCurso("JS", 20));
