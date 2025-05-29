class EmailService {
  sendEmail(to, message) {
    console.log(`Enviando o email para ${to}: ${message}`);
  }
}

class SMSService {
  sendSMS(to, message) {
    console.log(`Enviando o SMS para ${to}: ${message}`);
  }
}

class PushNotificationService {
  sendPushNotification(to, message) {
    console.log(`Enviando a notificação para ${to}: ${message}`);
  }
}

class NotificationFacade {
  constructor() {
    this.emailService = new EmailService();
    this.smsService = new SMSService();
    this.pushNotificationService = new PushNotificationService();
  }

  sendNotification(type, to, message) {
    switch (type) {
      case "email":
        this.emailService.sendEmail(to, message);
        break;
      case "sms":
        this.smsService.sendSMS(to, message);
        break;
      case "push":
        this.pushNotificationService.sendPushNotification(to, message);
        break;
      default:
        console.log("Tipo de notificação inválido");
    }
  }
}

const notifier = new NotificationFacade();

notifier.sendNotification("email", "user@example.com", "Seu pedido foi enviado!");
notifier.sendNotification("sms", "+0123456789", "Seu pedido foi enviado!");
notifier.sendNotification("push", "user123", "Seu pedido foi enviado!");
notifier.sendNotification("invalid_type", "invalid_user", "Invalid message!");
