const Iterator = require("./Iterador");

class ColecaoProdutos {
  constructor() {
    this.produtos = [];
  }

  adicionar(usuario) {
    this.produtos.push(usuario);
  }

  criarIterador() {
    return new Iterator(this.produtos);
  }
}

module.exports = ColecaoProdutos;
