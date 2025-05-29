class SingletonLogger {
  constructor() {
    if (SingletonLogger.instance) {
      return SingletonLogger.instance;
    }

    this.logs = [];
    SingletonLogger.instance = this;
  }

  log(message) {
    this.logs.push(message);
    console.log(`Mensagem: ${message}`);
  }

  print() {
    console.log(this.logs.length);
  }
}

module.exports = SingletonLogger;

//// Código original sem Singleton
// class Logger {
//   constructor() {
//     this.logs = [];
//   }

//   log(message) {
//     this.logs.push(message);
//     console.log(`Mensagem: ${message}`);
//   }

//   print() {
//     console.log(this.logs.length);
//   }
// }

// module.exports = Logger;
