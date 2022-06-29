const http = require('http');

/* 6 y 12 buenos dias
13 y 19 buenas tardes
20 a 5 buenas noches */

let date = new Date();
let hourDay = date.getHours() + " hrs";

const mañana = 06
const tarde = 13
const noche = 20
console.log(hourDay)

function getCoso() {
  if(mañana <= hourDay && hourDay < tarde) {
    console.log('buenos dias')
  } else if (tarde <= hourDay && hourDay < noche ) {
    console.log('buenas tardes')
  } else {
    console.log('buenas noches')
  }
}

//creamos un servidor
const server = http.createServer((req, res) => {
  let saludo = getCoso()
  res.end(saludo)
})

const connectedServed = server.listen(8090, () => {
  console.log('servidor escuchando en puerto ' + connectedServed.address().port)
})