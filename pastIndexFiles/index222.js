const http = require('http');
const fs = require('fs');
const data = {
    name:'Param',
    village:'Borkhedi',
    age: 24
}

const index = fs.readFileSync('./index.html','utf-8');
const dataJson = JSON.parse(fs.readFileSync('./data.json','utf-8'));
const produts= dataJson.products;

const server = http.createServer((req,res)=>{
  //  res.setHeader("name","Param Surywanshi");

   //res.setHeader("Content-Type","text/json");
  //  res.write("<h1>Hiiiii I am Param</h1>");
 //  res.setHeader("Content-Type",'application/json');
   // res.end(index);
   
//    switch(req.url){
//     case '/':
//         res.setHeader('Content-Type','text/html');
//         res.end(index);
//         break;

//     case '/app':
//         res.end(dataJson);
//      break;
      
//     case '/Product':
//         res.setHeader('Content-Type','text/html');
//         const ModIndx = index.replace("Hello", dataJson.products.title);
//         res.end(ModIndx);
//         break;

//      default:
//         res.writeHead(404);
//         res.end();
//    }
  // console.log(dataJson.products); 

if(req.url.startsWith("/Product")){
    const id = req.url.split('/')[2];
   // console.log(produts)
    const prdct = produts.find(prd=>prd.id===(+id));
    res.setHeader('Content-Type','text/html');
    const ModIndx = index.replace("**imageSource**", prdct.thumbnail).replace("**imageTitle**",prdct.title).replace("**price**",prdct.price) .replace("**description**",prdct.description);
    res.end(ModIndx);
    return;
}
})

server.listen(8080,()=>{
console.log("Port 8080 is Listening");
})