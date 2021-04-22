const jwt = require("jsonwebtoken");

module.exports=(req,res,next)=>{
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    const decoded = jwt.verify(token,process.env.JWT_KEY)
    req = decoded
    next();
  } catch (error) {
    return res.status(401).json({
      message:'Auth Failed'
    })
  }
}