const EstrategiaRota = require("./EstrategiaRota");

class RotaCaminhada extends EstrategiaRota {
  calcular(origem, destino) {
    console.log(`Calculando rota de caminhada de ${origem} para ${destino}`);
  }
}

module.exports = RotaCaminhada;
