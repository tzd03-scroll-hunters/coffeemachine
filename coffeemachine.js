class Coffeemachine {
  // private => außen nicht zugreifbar!
  #coffees = [{ name: "Espresso", price: 0.99 }]; // default wert
  #money = 0; // schütze dieses feld, damit es nur per Setter gesetzt werden kann (=> wo wir nur Number als Wert erlauben)!

  // public properties => von außen zugreifbar!
  coffeeChoice = "";

  // constructor function wird immer aufgerufen wenn "new" Keyword benutzt wird => new Coffeemachine()
  constructor(coffees) {
    console.log("Constructor wurde aufgerufen");
    console.log(coffees);
    this.#coffees = coffees;
  }

  // vorteil SETTER => validiere den f**** input!
  // nenne niemals eine SETTER function genauso wie ein public Property => endless loop!
  set geld(geldNeu) {
    if (typeof geldNeu !== "number") {
      throw new Error("Was soll das? Geld oder hau ab!");
      // console.log("Was soll das? Geld oder hau ab!")
    }
    this.#money = geldNeu;
  }

  // class methods werden häufig in der UI bei einem BUTTON Klick ausgeführt. oder beim TIPPEN in einem INPUT feld (Beispiel Suche)
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
        "Geht's noch? Sind wir hier Charity oder was? Gib ausreichend Geld oder f*** off!"
      );
    }

    // SUCCESS case: User gewünschten OUTPUT geben
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

// kaffeemaschine schon ein paar Start-Coffees geben
const coffees = [
  { name: "Espresso", price: 0.99 },
  { name: "Crema", price: 1.49 },
  { name: "Macchiato", price: 2.99 },
  { name: "Cappuccino", price: 3.49 },
];
const coffeemachine = new Coffeemachine(coffees);

// INPUT (kommt normalerweise aus einer UI => z.B. INPUT Feldern aus HTML Formular)
coffeemachine.coffeeChoice = "Espresso";
coffeemachine.geld = 0.5; // hier wird in Klasse die setter function aufgerufen (set geld) => Vorteil: Input kann validiert werden, bevor Klasse ihn accepted!

// KAUFE DEN SH*T! 
// Klassen Method wird normalerweise in UI durch einen BUTTON Klick getriggert oder einen FORM SUBMIT
coffeemachine.kaufen();
