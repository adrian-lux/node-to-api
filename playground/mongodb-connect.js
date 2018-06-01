const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if (err) {
    return console.log('Unbable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err,result) => {
        if(err){
            return console.log('Unbale to write to DB', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2),'Write Succesful');
    });
    
     /*db.collection('Users').insertOne({
         name: 'Adrian',
         age: 29,
         location: 'Japan'
     },(err, result) => {
         if(err){
             return console.log('Unable to write to mongoDB', err);
         }
         console.log(JSON.stringify(result.ops, undefined, 2));
         
     });*/
    
    client.close();
});