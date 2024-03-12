const express=require('express');
const { off } = require('../../app');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"dukie is here, sleeping, dreaming away the life he never had!"
    });
});

router.get('/:dukes',(req,res,next)=>{
const king=req.params.dukes;
if(king==='edinburg')
{
    res.status(200).json({
        message:"duke of edinburg is here!",
        king_of:king
    });
}
else
{
    res.status(404).json({
        message:"i dont feel anything"
    });
}
});

module.exports=router;