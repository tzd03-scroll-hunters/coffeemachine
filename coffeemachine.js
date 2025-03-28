class Coffeemachine {
  // private => außen nicht zugreifbar!
  #coffees = [{ name: "Espresso", price: 0.99 }]; // default wert
  #money = 0; // schütze dieses feld, damit es NUR zahlen haben kann!

  // public properties => von außen zugreifbar!
  coffeeChoice = "";

  // constructor function wird immer aufgerufen WENN ????
  constructor(coffees) {
    console.log("Constructor wurde aufgerufen");
    console.log(coffees);
    this.#coffees = coffees;
  }

  // vorteil SETTER => validiere den f**** input!
  // nenne niemals eine SETTER function genauso wie ein Property => endless loop!
  set geld(geldNeu) {
    if (typeof geldNeu !== "number") {
      throw new Error("Was soll das? Geld oder hau ab!");
      // console.log("Was soll das? Geld oder hau ab!")
    }
    this.#money = geldNeu;
  }

  // methods werden häufig in der UI bei einem BUTTON klick oder eim TIPPEN ausgeführt
  kaufen() {
    // Step 1: Hole den Kaffee den der User will
    const coffeeFound = this.#coffees.find((coffee) => {
      return coffee.name === this.coffeeChoice;
    });

    // checke alle ERROR cases => error first approach

    if (!coffeeFound) {
      throw new Error(
        "Den Kaffee " +
          this.coffeeChoice +
          " gibt es nicht. Schau auf die Button man!"
      );
    }

    // Step 2: Schaue ob Geld reicht, sonst auf die Fresse!
    if (this.#money < coffeeFound.price) {
      throw new Error(
        "Geht's noch? Sind wir hier Charity oder was? Gib ausreichend Geld oder fuck off!"
      );
    }

    console.log("Bitteschön. Hier ist dein " + this.coffeeChoice)
    console.log(`
      ( (
     ) )
  ........
  |      |
  \\      /
   \\----/`);
  }
}

// das hier erstellt eine neue Kaffeemaschine
// mit dem Bauplan der Klasse Coffeemachine
const coffees = [
  { name: "Espresso", price: 0.99 },
  { name: "Crema", price: 1.49 },
  { name: "Macchiato", price: 2.99 },
  { name: "Cappuccino", price: 3.49 },
];
const coffeemachine = new Coffeemachine(coffees);

// INPUT (UI => INPUT Felder aus Formular)
coffeemachine.coffeeChoice = "Espresso";
coffeemachine.geld = 0.5;

// KAUFE DEN SHIT!
coffeemachine.kaufen();
