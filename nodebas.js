// const helpers=require("./nodehelpers");
// // helpers.greet("Muthuganesan")
// helpers.info("Muthu","REC");
// console.log(helpers.sum(20,80));
// //Creating server from the scratch
// const http=require("http");
// const server=http.createServer(function(req,res){
//     res.writeHead(200,{"Content-Type":"text/html"});
//     res.end("Hey I am node server");
// });
// server.listen(8000);

// //event loop theory-asynchronus
// const fs =require("fs");
// const filename="target.txt";
// //callback function
// fs.readFile(filename,(err,data)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log(data.toString());
//     }
// });

// console.log("Watching for file changes");

// Using express framework
const express=require("express")
const app=express();

//Lets see about get() function 

app.get("/",function(req,res){
    res.json({
        user:{
            name:"Muthuganesan",
            age:20,
            University:"Srm",
        },
    })
});

app.listen(8000,console.log("Server is running on port 8000"));