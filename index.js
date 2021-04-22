const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./Routes/employee.routes')
const departementRoutes = require('./Routes/departement.routes')
const authRoutes = require('./Routes/auth.routes')
require("dotenv").config();


const app = express();

const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}));

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use('/api/v1/employees', employeeRoutes)
app.use('/api/v1/departement', departementRoutes)
app.use('/api/v1/users',authRoutes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})