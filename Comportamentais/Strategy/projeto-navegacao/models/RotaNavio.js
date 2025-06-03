const EstrategiaRota = require("./EstrategiaRota");

class RotaNavio extends EstrategiaRota {
  calcular(origem, destino) {
    console.log(`Calculando rota de navio de ${origem} para ${destino}`);
  }
}

module.exports = RotaNavio;
