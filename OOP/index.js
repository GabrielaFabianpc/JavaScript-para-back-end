import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Mariana", "m@m.com", "2021-01-02");
console.log(novoUser.exbirInfos());

const novoAdmin = new Admin("Rodrigo", "r@r.com", "01-01-2022");
console.log(novoAdmin.nome);
novoAdmin.nome = "Cleo";
console.log(novoAdmin.nome);
console.log(novoAdmin.exbirInfos());
console.log(novoAdmin.criarCurso("JS", 20));
