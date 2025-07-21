class Person {
  constructor(name, age, ...address) {
    ;(this.name = name),
      (this.age = age),
      (this.address = new Address(...address))
  }
}
class Address {
  constructor(road, city, town) {
    ;(this.road = road), (this.city = city), (this.town = town)
  }
}

let labib = new Person('labib', 34, 'rail', 'chu', 'khul')
console.log(labib)
