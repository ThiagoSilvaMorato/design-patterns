const NotificadorDecorator = require("./NotificadorDecorator");

class WhatsAppDecorator extends NotificadorDecorator {
  enviar(mensagem) {
    super.enviar(mensagem);
    console.log(`Enviando mensagem por WhatsApp: ${mensagem}`);
  }
}

module.exports = WhatsAppDecorator;
