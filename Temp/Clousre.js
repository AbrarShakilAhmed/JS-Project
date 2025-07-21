function getcounter() {
  let count = 0
  return function () {
    count++
    console.log(count)
  }
}

let counter = getcounter()

counter()
counter()
counter()
counter()
counter()
counter()
