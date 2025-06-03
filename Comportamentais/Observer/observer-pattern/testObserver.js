const Cliente = require("./models/ConcreteObject");
const Loja = require("./models/ConcreteSubject");

const loja = new Loja();
const clienteA = new Cliente("Thiago");
const clienteB = new Cliente("Thales");
const clienteC = new Cliente("Garro");

loja.adicionarObserver(clienteA);
loja.adicionarObserver(clienteB);
loja.adicionarObserver(clienteC);

loja.removerObserver(clienteA);
loja.receberNovoProduto();
