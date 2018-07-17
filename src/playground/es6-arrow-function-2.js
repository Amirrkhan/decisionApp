// arguments no longer used in arrow function

const add = (a, b)=> {
    // console.log(arguments)
    return a + b
}
// this keyword no longer bound

const user = {
    name: 'Amirkhan',
    cities: ['Aksay', 'Prague', 'Paris'],
    printPlacesLived() {
        return this.cities.map((element) => `${this.name} lived in ${element}` )
    }
}

const multiplier = {
    numbers: [1, 2],
    multiplyBy: 4,
    myltiply(){
        return this.numbers.map(number => number * this.multiplyBy)
    }
}

console.log(multiplier.myltiply())

console.log(user.printPlacesLived())

console.log(add(4, 5))