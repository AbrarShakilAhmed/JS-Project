class product {
  static product = 0
  constructor(price, name) {
    ;(this.name = name), (this.price = price), product.product++
  }
  print() {
    console.log(`your product is ${this.name} and price ${this.price}`)
  }
}

let product1 = new product(12, 'df')
let product2 = new product(12, 'df')
let product3 = new product(12, 'df')
let product4 = new product(12, 'df')

console.log(product.product)
