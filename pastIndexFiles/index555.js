//const http = require('http');

const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
var morgan = require('morgan')
//app.use(express.urlencoded());
const ProductRouter = require('./Routes/ProductRoutes');
//app.use(morgan('dev'));
app.use(express.static('public'));

app.use('/products',ProductRouter.ProductRouter);



//console.log(process.env.OS)
// app.get("/app",(req,res)=>{
//   res.setHeader('Content-Type','application/json');
//   res.json(produts)
// })

app.listen(8080,()=>{
  console.log("Port 8080 Listeniung");
})