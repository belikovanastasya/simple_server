const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://<nastasya>:<artur30677>@ds161751.mlab.com:61751/attach', (err, database) => {
  // ... start the server
  app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.post('/quotes', (req, res) => {
})

if (err) return console.log(err)
  db = client.db('attach') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
  app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
      if (err) return console.log(err)
  
      console.log('saved to database')
      res.redirect('/')
    })
  })

})

