const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5b177be0d4cc3f20fc0b0bd1';

/*Todo.find({
   _id: id 
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos',todo);
});*/

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by Id',todo);
}).catch((e) => console.log(e));


User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('Todo by Id',todo);
}).catch((e) => console.log(e));