const express = require('express')
const app = express()
const session = require('express-session')

const PORT = 3000

app.get('/', (req, res) => {
  res.send( '<h1 style=" color:blue "> Bienvenidos al servidor express </h1>')
})

app.use (
  session ({
      // It holds the secret key for session
      secret: "I am girl",

      // Forces the session to be saved
      // back to the session store
      resave: true,
        
      // Forces a session that is "uninitialized"
      // to be saved to the store
      saveUninitialized: false,
  })
);


app.get('/visitas', (req, res) => {
  if (req.session.views) {
          
    // Increment the number of views.
    req.session.views++

    // Print the views.
    res.write('<p> No. of views: ' 
        + req.session.views + '</p>') 
    res.end()
  } else {
    req.session.views = 1
    res.end(' New session is started')
  }
})

app.get('/fyh', (req, res) => {
  let date = new Date();
  let hourDay = date.getHours() + " hrs";
  res.send(hourDay)
})

app.listen(PORT, () => {
  console.log('hola comision')
})

app.on('error', error => console.log('el error es:', error))