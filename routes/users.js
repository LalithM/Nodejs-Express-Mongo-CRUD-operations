const express = require('express');
const router = express.Router();

let User = require('../models/User');

router.get('/',(req,res,next)=>{
  User.find({},(err,response)=>{
    if(err){
      console.error(err);
    }
    else{
      res.send(response);
    }
  });
});

//End point to save user
router.post('/',(req,res,next)=>{
  if(req.body.id){
    User.findByIdAndUpdate(req.body.id,{
      title:req.body.title,
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      phoneNumber:req.body.phoneNumber
    },(err,result)=>{
      if(err) throw err;

      res.send(result)
    });
  }
  else{
  let user = new User();
  user.title = req.body.title;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.phoneNumber = req.body.phoneNumber;

  user.save((err)=>{
    if(err){
      logger.log(err);
    }
    else{
      res.send(user);
    }
    });
}
  });

  router.get('/users/:firstName',(req,res)=>{
      User.find({firstName:req.params.firstName},(err,result)=>{
        if(err) throw err;

        res.send(result);
        });
  });

  router.get('/user/:id',(req,res)=>{
    User.findById({id:req.params.id},(err,result)=>{
      if(err) throw err;

      res.send(reuslt);
    });
  }); 

  router.delete('/user',(req,res)=>{
    User.findByIdAndRemove(req.body.id,(err)=>{
        if(err) throw err;

        res.send('success');
    });
  });

  module.exports=router;