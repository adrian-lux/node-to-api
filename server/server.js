let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} =  require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
    let todo = new Todo({
        text: req.body.text
    });


    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res) => {
   Todo.find().then((todos) => {
       res.send({todos})
   }, (e) => {
     res.status(400).send(e);  
   })
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});




let user = new User ({
    email: 'adrian'
});

user.save().then((doc) => { 
    console.log('User saved',doc);
}, (e) => {
    console.log('Unable to create user', e);

});


/*
let newTodo = new Todo({
    text: 'Cook dinner',
    
});

newTodo.save().then(() => {
    console.log('Saved', doc);
}, (e) => {
    console.log('Unable to save.');
});*/



module.exports = {app};