const userModel = require('../Models/auth.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

exports.registerUser=(req,res)=>{
  const hashedPassword=bcrypt.hashSync(req.body.password,salt)

  const data={
    username:req.body.username,
    email:req.body.email,
    password:hashedPassword
  }
  userModel.registerCheck(data).then((result)=>{
    if(result.length===0){
      return userModel.registerUser(data).then((result)=>{
        res.status(201).json({
          status: 201,
          result: result,
          message: 'The user is successfully registered!',
          user: {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
          }
        })
      }).catch((err)=>{
        return err 
      })
    }else{
      return res.status(400).json({
        status:400,
        message:'Username or Email already registered'
      })
    }
  }).catch((err)=>{
    return err
  })
}


exports.loginUser=(req,res)=>{
  const data = {
    username: req.body.username,
    password: req.body.password
  }
  userModel.loginUser(data)
    .then(result => {
      const validPassword = bcrypt.compareSync(req.body.password, result[0].password)
      if (!validPassword) {
        return res.status(400).json({
          status: 400,
          message: 'Wrong Password!'
        })
      }
      const token = jwt.sign({
        id: result[0].id,
        username: result[0].username
      }, 'secret', {
        expiresIn: '10h'
      })
      res.status(200).json({
        status: 200,
        message: 'Login successfully!',
        username: result.username,
        password: result.password,
        token
      })
    })
    .catch(error =>
      res.status(400).json({
        status: 400,
        message: 'Username does not exist',
      })
    )
}
