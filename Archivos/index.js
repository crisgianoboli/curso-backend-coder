// Es posible toparse con la necesidad de que algunos datos persistan mas alla de la ejecucion del programa,
// Para eso contamos con el uso de archivos
// VENTAJAS Y DESVENTAJAS en el uso de archivos como medio de almacenamiento 

// VENTAJAS 
// - facil de usar, compartir, enviar
// - no requiere de uso de programas externos para su creacion, lectura o edicion
// - pueden ser abierto y editados desde programas de edicion de texto (siempre que sean textos)


// DESVENTAJAS
// - consultas de dato puntual entre todos los datos 
// - edicion de dato puntual 


// MODULO NATIVO FILE SYSTEM: fs

// fs es la abreviatura: file system
// en NODEjs es psoible manipular archivos a traves de fs (crear,leer,editar,etc) 
// la mayoria de las funciones de este modulo pueden usarse de manera sync o async
// para usarlo lo importamos al comienzo de nuestro archivo fuente

// const fs = require('fs');