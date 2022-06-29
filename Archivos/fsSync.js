// OPERACIONES SINCRONICAS

// - las funciones sincronicas terminan con Sync 
// - son operaciones bloqueantes devuelven un resultado 

// Algunas de ellas son: 
// readFileSync > lectura de un archivo en forma sync 
// writeFileSync > escritura de un archivo en forma sync 
// appendFileSync > actualizacion de un archivo en forma sync 
// unlinkSync > borrado de un archivo en forma sync 
// mkdirSync > creacion de una carpeta 


const fs = require('fs');

// Leer un archivo 

// fs.readFileSync(path, encoding)
/* const data = fs.readFileSync('./test-input-sync.txt', 'utf-8')
console.log(data) */

// Sobreescribir un archivo 

// fs.writeFileSync('./test-input-sync.txt', 'esto es una prueba')
// el primer parametro es un string, con la ruta del archivo a modificar 
// segundo parametro: indica lo que queremos escribir 
// admite un tercer parametro, indica el formato de codificacion (utf-8)
// Si la ruta fuera valida, pero el nombre del archivo no existe, la funcion creara un nuevo archivo 
/* fs.writeFileSync('./test-input-sync.txt', 'esto es una prueba')*/


// Agregar contenido un archivo 

// el primer parametro es un string, con la ruta del archivo con el contenido a agregar 
// segundo parametro: indica lo que queremos agregar 
// admite un tercer parametro, indica el formato de codificacion (utf-8)
// Si la ruta fuera valida, pero el nombre del archivo no existe, la funcion creara un nuevo archivo 
//fs.appendFileSync('./test-input-sync.txt', 'esto es una agregado')


// borrar un archivo 

// fs.unlinkSync('./test-input-sync.txt')

// MANEJO DE ERRORES

/* try {
  const data = fs.readFileSync('ruta que no existe')
} catch (error) {
  console.log(error)
} */
