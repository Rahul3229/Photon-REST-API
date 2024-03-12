const express= require('express');
const app= express();
const bodyParser=require('body-parser');
const morgan=require('morgan');
const mongoose=require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const dukeRoutes =require('./api/routes/dukes');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




    mongoose.connect('mongodb+srv://rahul032290:rahulpassword3229@prometheus.mt4xvth.mongodb.net/?retryWrites=true&w=majority&appName=prometheus')


//git comment

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Origin","Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method==='OPTIONS')
    {
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE');
        return res.status(200).json({});
    }
    next();
});


 app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
app.use('/dukes',dukeRoutes);

app.use((req,res,next)=>{
    const error= new Error('just error checkin!');
    error.status(404);
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error || 500).json({
        message:error.message
    });
});



module.exports = app;