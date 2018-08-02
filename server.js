const express = require('express');
const bodyParser= require('body-parser')
const app = express();


var MongoClient = require('mongodb').MongoClient;
var db;

// Initialize connection once
MongoClient.connect("mongodb://ds161751.mlab.com:61751/attach", function(err, database) {
  if(err) throw err;

  db = database.db('attach') ;
    app.use(bodyParser.urlencoded({extended: true}))
    app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

  // Start the application after the database connection is ready
  app.listen(3000);
  console.log("Listening on port 3000");
  app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
      if (err) return console.log(err)
      
      console.log('saved to database')
      res.redirect('/')
    })
  })
});

