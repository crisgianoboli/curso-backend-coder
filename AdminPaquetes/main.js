//////// Ejercicios
// generar 10000 numeros aleatorios en rango de 1 a 20
// crear un objeto cuyas claves sean los numeros salidos y el valor asociado a cada clave sera,
// la cantidad de veces que salio dicho numero

/* console.log("Empezamos");

const numeros = {};

function numeroAleatorio() {
    return parseInt(Math.random()*20) + 1

}

for (let index = 0; index < 10000; index++) {
    const num = numeroAleatorio();
    if (!numeros[num]) {
        numeros[num] = 0
    }
    numeros[num]++ 
   
}

console.log(numeros); */



//////  Ejercicio array de objetos 

const productos = [
  { id: 1, nombre: 'Escuadra', precio: 323.45 },
  { id: 2, nombre: 'Calculadora', precio: 234.56 },
  { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
  { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
  { id: 5, nombre: 'Reloj', precio: 67.89 },
  { id: 6, nombre: 'Agenda', precio: 78.90 }
]

function nombres(productos) {
  const name = []
  productos.map(p => name.push(p.nombre))
  
  return name.join(", ")
}

function getTotalPrice(productos) {
  let totalPrice = 0;
  productos.map(t =>  totalPrice += t.precio)
  
  return totalPrice
}

function decimal(value) {
  return Number(value.toFixed(2))
}

function promedio(productos) {
  return  getTotalPrice(productos)/productos.length
}

const data = {nombre: nombres(productos), precio: decimal(getTotalPrice(productos)), promedio: decimal(promedio(productos))}

console.log(data);