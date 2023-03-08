const http = require('http');
const fs = require('fs');


const index = fs.readFileSync('./index.html','utf-8');
const dataJson = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const produts= dataJson.products;

const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
var morgan = require('morgan')
//app.use(express.urlencoded());

//app.use(morgan('dev'));
app.use(express.static('public'));

// app.use("/",(req, res, next)=>{
//     console.log(req.method+" "+req.ip+" "+req.hostname);
//     console.log(req.get('User-Agent'))
//     next();
// })

// const auth = (req, res, next)=>{
//    if(req.body.password==123){
//     next();
//    }else{
//     res.sendStatus(401);
//    }
// }
//app.use(auth);


app.get("/products",(req,res)=>{

    res.setHeader('Content-Type','application/json');
     res.json(produts)
})
app.get("/products/:id",(req,res)=>{

    res.setHeader('Content-Type','application/json');
    const id = +req.params.id;
    const prdts=produts.find(p=>p.id===id);
     res.json(prdts);
})
// app.post("/products",(req,res)=>{
//    // console.log(req.body);
//     produts.push(req.body);
//   res.json(req.body);
// })

// app.put("/products/:id",(req,res)=>{
//     res.setHeader('Content-Type','application/json');
//     const id = +req.params.id;
//     const prdts=produts.find(p=>p.id===id);
//     produts.splice(prdts,2,{...req.body, id: id});
//      res.sendStatus(201).json(prdts);
// })

app.patch("/products/:id",(req,res)=>{
    
        const id = +req.params.id;
        const prdts=produts.findIndex(p=>p.id===id);
        const prod = produts[prdts];
        produts.splice(prdts,2,{...prod, ...req.body});
         res.json(prdts);
    })
    app.delete("/products/:id",(req,res)=>{
    
        const id = +req.params.id;
        const prdts=produts.findIndex(p=>p.id===id);
        const prod = produts[prdts];
        produts.splice(prdts,1);
         res.json(prdts);
    })

// app.patch("/",(req,res)=>{
//     res.json({type: "Patch"})
//   })

// app.put("/",(req,res)=>{
//   res.json({type: "PUT"})
// })
app.delete("/",(req,res)=>{
  res.json({type: "Delete"})
})
app.patch("/",(req,res)=>{
  res.json({type: "Patch"})
})

app.get("/app",(req,res)=>{
  res.setHeader('Content-Type','application/json');
  res.json(produts)
})

app.listen(8080,()=>{
  console.log("Port 8080 Listeniung");
})