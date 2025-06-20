const Iterator = require("./Iterador");

class ColecaoUsuarios {
  constructor() {
    this.usuarios = [];
  }

  adicionar(usuario) {
    this.usuarios.push(usuario);
  }

  criarIterador() {
    return new Iterator(this.usuarios);
  }
}

module.exports = ColecaoUsuarios;
