//const http = require('http');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
var morgan = require('morgan')

const cors = require('cors');

//app.use(express.urlencoded());
const ProductRouter = require('./Routes/ProductRoutes');
//app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname,'build')));
// app.use('*',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'build','index.html'));
// })
const { Schema } = mongoose;
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Parmanand:vkSdriSnuqKJhpX7@cluster0.lu3dgeg.mongodb.net/Ecommerce?retryWrites=true&w=majority');
}



app.use('/products',ProductRouter.ProductRouter);




//console.log(process.env.OS)
// app.get("/app",(req,res)=>{
//   res.setHeader('Content-Type','application/json');
//   res.json(produts)
// })

app.listen(8080,()=>{
  console.log("Port 8080 Listeniung");
})