class PizzaDirector {
  constructor(builder) {
    this.builder = builder;
  }

  makeMargherita() {
    return this.builder
      .setSize("grande")
      .setCrust("fina")
      .addCheese()
      .setToppings("tomate")
      .setToppings("manjericão")
      .build();
  }

  makePepperoni() {
    return this.builder.setToppings("pepperoni").build();
  }
}

module.exports = PizzaDirector;
