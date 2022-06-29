/* function Home(name, adress) {
  this.name = name
  this.adress = adress
}

const myHome = new Home('cordoba','argentina')
const myOtherHome = new Home('coso','cosito')

console.log(Home.prototype)
console.log('myHome', myHome)
console.log('myOtherHome', myOtherHome) */

function Person(name, age) {
  this.name = name
  this. age = age
}
Person.prototype.interest = ['tv shows', 'basketball']
Person.prototype.getAge = function() {
  return this.age
}

const persona = new Person('cristian', 31)

console.log('Person', persona)
console.log('Person interest', persona.interest)
console.log('getAge Person', persona.getAge())