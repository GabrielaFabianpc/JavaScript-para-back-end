import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  exbirInfos() {
    return `O Administrador cadastrado tem o nome ${this.nome} e nasceu em ${this.nascimento}`;
  }
  criarCurso(curso, vagas) {
    return `O curso ${curso} foi criado e tem ${vagas} vagas!`;
  }
}
