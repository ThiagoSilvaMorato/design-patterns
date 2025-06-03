const Subject = require("./Subject");

class Loja extends Subject {
  constructor() {
    super();
  }

  adicionarObserver(observer) {
    this.observers.push(observer);
  }

  removerObserver(observer) {
    this.observers = this.observers.filter((sub) => sub !== observer);
  }

  notificarObserver() {
    console.log("Notificando assinantes...");
    this.observers.forEach((observer) => {
      observer.atualizar();
    });
  }

  receberNovoProduto() {
    console.log("Novo produto chegou à loja!");
    this.notificarObserver();
  }
}

module.exports = Loja;
