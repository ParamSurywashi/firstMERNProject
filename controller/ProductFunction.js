const fs = require('fs');
const path = require('path');
const dataJson = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data.json'),'utf-8'));

const produts= dataJson.products;
const model = require("../model/product");
const Product = model.Product;


exports.createProduct = (req,res)=>{
     const product = new Product(req.body);
     // product.title="MPT GUI";
     // product.price=10000;
     // product.description="IT IS MPT GUI";
     // product.rating=9;
     // product.stock=7;
      product.save();
     res.status(201).json(req.body);
  }

exports.getAllProducts= async (req,res)=>{
     res.setHeader('Content-Type','application/json');
   const products =  await Product.find();
     res.json(products)
}
exports.getProduct = async (req,res)=>{

   res.setHeader('Content-Type','application/json');
  // const products =  await Product.findOne({"title":"DSA UNMS"});
  const id = req.params.id;
  const products =  await Product.findById(id);
     res.json(products)
//     const id = +req.params.id;
//     const prdts=produts.find(p=>p.id===id);
  //   res.json(prdts);
}



 exports.replaceProduct = async (req,res)=>{
        res.setHeader('Content-Type','application/json');
        const id = req.params.id;
        try{
        const products =  await Product.findOneAndReplace({_id : id}, req.body,{new: true});
        res.json(products);
        }catch(e){
          console.log(e)
        }
      
     //    const prdts=produts.find(p=>p.id===id);
     //    produts.splice(prdts,2,{...req.body, id: id});
     //     res.sendStatus(201).json(prdts);
    }

 exports.updateProduct = async (req,res)=>{
     res.setHeader('Content-Type','application/json');
     const id = req.params.id;
     try{
     const products =  await Product.findOneAndUpdate({_id : id}, req.body,{new: true});
     res.json(products);
     }catch(e){
       console.log(e)
     }
//     const id = +req.params.id;
//     const prdts=produts.findIndex(p=>p.id===id);
//     const prod = produts[prdts];
//     produts.splice(prdts,2,{...prod, ...req.body});
//      res.json(prdts);
}
exports.deleteProduct = async (req,res)=>{
     res.setHeader('Content-Type','application/json');
     const id = req.params.id;
     try{
     const products =  await Product.deleteOne({_id : id});
     res.json(products);
     }catch(e){
       console.log(e)
     }
//     const id = +req.params.id;
//     const prdts=produts.findIndex(p=>p.id===id);
//     const prod = produts[prdts];
//     produts.splice(prdts,1);
//      res.json(prdts);
}