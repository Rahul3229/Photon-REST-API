const express = require('express');
const router = express.Router();
const mongose=require('mongoose');

 const Product=require('../models/products');


router.get('/', (req,res,next)=>{
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/',(req, res, next)=>{
    //  const product={
    //      name:req.body.name,
    //      price:req.body.price
    //  };

     const product=new Product({

         _id: new mongose.Types.ObjectId(),
         name:req.body.name,
         price:req.body.price
    });
    product.save().then(result=>{
        console.log(result);
    })
    .catch(err=>console.log(err));
    res.status(200).json({
        message: 'Handlng POST requests to /products',
        createdProduct: product
    });
});

router.get('/:duKe',(req,res,next)=>{
const ID=req.params.duKe;
if(ID==='123')
{
    res.status(200).json({
        message:"dukie is awesome!"
    });

}
else
{
    res.status(200).json({
        message:"dukie is a bad boii!!!"
    });
}
});

router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message:"all those moments will be lost in time, like tears in rain"
    });
});

module.exports = router;