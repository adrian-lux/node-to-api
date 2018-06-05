const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
/*MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {*/
     const db = client.db('TodoApp');
  if (err) {
      return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB');
    
    // deleteMany
    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
       console.log(result); 
    });
    //deleteOne
     /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
       console.log(result); 
    });*/
    
    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result) => {
       console.log(result); 
    });
    
    //db.close();
});