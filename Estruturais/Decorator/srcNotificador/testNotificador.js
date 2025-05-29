const Notificador = require("./Notificador");
const NotificadorDecorator = require("./NotificadorDecorator");
const WhatsApp = require("./WhatsAppDecorator");
const SMS = require("./SMSDecorator");
const Slack = require("./SlackDecorator");

const notificadorBase = new Notificador();

const notificadorSMS = new SMS(notificadorBase);
const notificadorWhatsApp = new WhatsApp(notificadorSMS);
const notificadorSlack = new Slack(notificadorWhatsApp);

notificadorWhatsApp.enviar("Sistema em manutenção!");
