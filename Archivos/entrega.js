const fs = require('fs');

const texto = 'hola mundo!'

fs.writeFile('javascript.txt', texto, {encoding: 'utf8'}, function(error) {
  if(error) {
    console.log('error', error)
  } else {
    console.log('success')
  }
});