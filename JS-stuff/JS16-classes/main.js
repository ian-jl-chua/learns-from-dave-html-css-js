// JS Classes

class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType
    this.size = pizzaSize
    this.crust = 'thin'
    this.topping = []
  }
  // get pizzaCrust() {
  //   return this.crust
  // }
  // instead of the above ^ the nicer and more readable version would be to do it this way below
  getCrust() {
    return this.crust
  }

  // set pizzaCrust(pizzaC) {
  //   this.crust = pizzaC
  // }
  // instead of the above ^ the nicer and more readable version would be to do it this way below
  setCrust(pizzaC) {
    this.crust = pizzaC
  }

  getTopping() {
    return this.topping
  }

  setTopping(topping) {
    this.topping.push(topping)
  }

  bake() {
    console.log(
      `Baking a ${this.size}, ${this.crust} crust, ${this.type} pizza`
    )
  }
}

const myPizza = new Pizza('pepperoni', 'large')
myPizza.bake()

// myPizza.pizzaCrust = 'thick'
// instead of the above ^ the nicer and more readable version would be to do it this way below
myPizza.setCrust('thick')

// console.log(myPizza.pizzaCrust)
// instead of the above ^ the nicer and more readable version would be to do it this way below
console.log(myPizza.getCrust())

myPizza.setTopping('kale')
myPizza.setTopping('tomato')
myPizza.setTopping('cheese')

console.log(myPizza.getTopping())

// Now lets look at how to use this as a SUPER CLASS

class RealPizza {
  constructor(pizzaSize) {
    this.size = pizzaSize
    this.curst = 'original'
  }

  getCrust() {
    return this.curst
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust
  }
}

class SpecialtyPizza extends RealPizza {
  constructor(pizzaSize) {
    super(pizzaSize)
    // the "super" keyword, calls the constructor of the parent, which in this case, is RealPizza
    this.type = 'The Works'
  }
  slice() {
    console.log(`${this.type} ${this.size} pizza, has 8 slices`)
  }
}

const mySpecialty = new SpecialtyPizza('medium')
mySpecialty.slice()

// INTENTION of Privacy
// using the underscore "_" tells other developers on properties that are intended to be private, this means they should not be modified OUTSIDE of the class. They should be modified only with the "setCrust" method, in this example
class PrivatePizza {
  constructor(pizzaSize) {
    this._size = pizzaSize
    this._curst = 'original'
  }

  getCrust() {
    return this._curst
  }
  setCrust(pizzaCrust) {
    this._crust = pizzaCrust
  }
}

// Now the underscores "_" are intentions, but technically we can still change the values. So although the naming convention is good, the problem isn't solved

// Here's a way to fix this with a Factory Function
function pizzaFactory(pizzaSize) {
  const crust = 'original'
  const size = pizzaSize

  return {
    bake: () => {
      console.log(`Baking a ${size} ${crust} crust pizza`)
    },
  }
}

const myNewPizza = pizzaFactory('small')

myNewPizza.bake()
// Looking at this case "crust" and "size" are truly private because they can't be accessed outside of the function

// but NOW JS classes support private and public fields
class AnotherPrivatePizza {
  // we can declare public and private fields ABOVE the constructor
  crust = 'original' // (public field)
  #sauce = 'traditional' // (private field, indicated by "#")
  // we can also make size a private field by doing this
  #size
  constructor(pizzaSize) {
    this.#size = pizzaSize
    // any property that we would set with a parameter, we leave inside the constructor
  }

  getCrust() {
    return this.curst
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust
  }
  yourPizza() {
    console.log(`Here's your ${this.crust}, ${this.#sauce} sauce, ${this.#size} pizza.`)
  }
}

const myPrivatePizza = new AnotherPrivatePizza("large")
myPrivatePizza.yourPizza()

console.log(myPrivatePizza.crust)
console.log(myPrivatePizza.sauce) //this shows up as undefined because it is private
// console.log(myPrivatePizza.#sauce) //this would throw an error in the console because sauce is meant to be private