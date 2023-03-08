const fs = require('fs');
const dataJson = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const produts= dataJson.products;

exports.getAllProducts=(req,res)=>{

    res.setHeader('Content-Type','application/json');
     res.json(produts)
}
exports.getProduct = (req,res)=>{

    res.setHeader('Content-Type','application/json');
    const id = +req.params.id;
    const prdts=produts.find(p=>p.id===id);
     res.json(prdts);
}

exports.createProduct = (req,res)=>{
    // console.log(req.body);
     produts.push(req.body);
   res.json(req.body);
 }

 exports.replaceProduct = (req,res)=>{
        res.setHeader('Content-Type','application/json');
        const id = +req.params.id;
        const prdts=produts.find(p=>p.id===id);
        produts.splice(prdts,2,{...req.body, id: id});
         res.sendStatus(201).json(prdts);
    }

 exports.updateProduct =(req,res)=>{
    
    const id = +req.params.id;
    const prdts=produts.findIndex(p=>p.id===id);
    const prod = produts[prdts];
    produts.splice(prdts,2,{...prod, ...req.body});
     res.json(prdts);
}
exports.deleteProduct = (req,res)=>{
    
    const id = +req.params.id;
    const prdts=produts.findIndex(p=>p.id===id);
    const prod = produts[prdts];
    produts.splice(prdts,1);
     res.json(prdts);
}