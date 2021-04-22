const mysql  = require('mysql')
require("dotenv").config();

const dbConn = mysql.createConnection({
  host:process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.DB_DATABASE
})


dbConn.connect((error)=>{
  if(error){
    throw error
  }else{
    console.log("Database Connected")
  }
})

module.exports=dbConn