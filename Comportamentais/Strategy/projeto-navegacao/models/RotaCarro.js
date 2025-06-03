const EstrategiaRota = require("./EstrategiaRota");

class RotaCarro extends EstrategiaRota {
  calcular(origem, destino) {
    console.log(`Calculando rota de carro de ${origem} para ${destino}`);
  }
}

module.exports = RotaCarro;
