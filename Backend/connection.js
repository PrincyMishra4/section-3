const mongoose = require('mongoose');

const url = "mongodb+srv://princymshr002:princy8090@cluster0.ivvch1t.mongodb.net/mydatabase?retryWrites=true&w=majority";

// asynchronous
mongoose.connect(url)
.then((result) => {
    console.log('connected to mongodb');
    
}).catch((err) => {
    console.error(err);
    
});

// synchronous
console.log('some task 1');

// asynchronous
setTimeout( () => {console.log('deleyed task') }, 2000 );

// synchronous
console.log('some task 2');

module.exports = mongoose;