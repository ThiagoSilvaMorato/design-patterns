class Subject {
  constructor() {
    this.observers = [];
  }

  adicionarObserver(observer) {
    throw new Error("Método adicionarObserver() precisa ser implementado.");
  }

  removerObserver(observer) {
    throw new Error("Método removerObserver() precisa ser implementado.");
  }

  notificarObserver() {
    throw new Error("Método notificarObserver() precisa ser implementado.");
  }
}

module.exports = Subject;
