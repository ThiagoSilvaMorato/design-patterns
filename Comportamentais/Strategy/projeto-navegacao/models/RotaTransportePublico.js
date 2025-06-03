const EstrategiaRota = require("./EstrategiaRota");

class RotaTransportePublico extends EstrategiaRota {
  calcular(origem, destino) {
    console.log(`Calculando rota de transporte público de ${origem} para ${destino}`);
  }
}

module.exports = RotaTransportePublico;
