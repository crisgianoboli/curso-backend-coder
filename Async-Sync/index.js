// EJEMPLO EJECUCION SINCRONICA

/* function funA() {
  console.log('1 ejecucion')
  funB()
  console.log('2 ejecucion')
}

function funB() {
  console.log('3 ejecucion')
  funC()
  console.log('4 ejecucion')
}

function funC() {
  console.log('5 ejecucion')
}

funA() */

// FUNCION BLOQUEANTE VS NO-BLOQUEANTE
// Funcion bloqueante
// - operaciones que obligan al programa a esperar a que finalicen, 
// antes de ejecutar la siguiente instruccion
// - Programa se comporta de manera mas intuitiva 
// - Permite la ejecucion de una sola operacion en simultaneo ( ejecucion sincronica )

// Funcion NO-bloqueante
// operaciones que se ejecutan en paralelo, o al mismo tiempo
// No necesitan esperar que finalice una operacion para comenzar la siguiente o anterior 
// Ejecucion asincronica


//const escribirArchivo = require('./index')

/* console.log('Inicio de programa')

escribirArchivo('hola mundo', () => {
  console.log('termine de escribir el archivo')
})
console.log('fin de programa') */