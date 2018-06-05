const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
/*MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {*/
     const db = client.db('TodoApp');
  if (err) {
      return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB');
    
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b10f3753a637c2c60829caf")
  }, { $set: { name: 'Daniel'}, $inc: { 'age': 1 }} ,{
    returnOriginal: false
  }).then((result) =>{
        console.log(result);  
  });
    
    //db.close();
});

/*{ "name" : "R. Stiles" },
   { $inc: { "points" : 5 } }*/