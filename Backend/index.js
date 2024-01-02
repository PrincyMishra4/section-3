const express = require('express');

const UserRouter = require('./router/userRouter');

//initialize express
const app = express();
const port = 5000;


//middleware
app.use('/user', UserRouter);

//creating a route
app.get('/', (req, res) => {
    res.send( 'Response from express server' );
});

app.get('/add', (req, res) => {
    res.send('Add response from server');
});

    //getall
    //update
    //delete
 app.get('/getall', (req, res) => {
    res.send('Getall response from server');   
 });
 app.get('/update', (req, res) => {
    res.send('Update response from server');   
 });
 app.get('/delete', (req, res) => {
    res.send('Delete response from server');   
 });


//starting the server
app.listen(port, () => { console.log('server started!!') } );