// class product {
//   static product = 0
//   constructor(price, name) {
//     ;(this.name = name), (this.price = price), product.product++
//   }
//   print() {
//     console.log(`your product is ${this.name} and price ${this.price}`)
//   }
// }

// let product1 = new product(12, 'df')
// let product2 = new product(12, 'df')
// let product3 = new product(12, 'df')
// let product4 = new product(12, 'df')

// console.log(product.product)

// class Animal {
//   run() {
//     console.log(`${this.name} is amnimal is running`)
//   }
// }

// class Rabbit extends Animal {
//   name = 'rabbit'
// }

// let bunny = new Rabbit()

// bunny.run()

// super keyword used here

class Animal {
  constructor(name, age) {
    ;(this.name = name), (this.age = age)
  }
}

class cat extends Animal {
  constructor(name, age, run) {
    super(name, age)
    this.run = run
  }

  runn() {
    console.log(`${this.name} is running fast`)
  }
}

let puissy = new cat('push', 1, 'fast')
console.log(puissy)

puissy.runn()
