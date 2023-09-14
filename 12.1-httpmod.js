const http=require('http');

const server=http.createServer((req,res)=>{
  console.log(req)//address client is requesting
  res.write('Welcome to our Home page') 
  res.end()    
})
server.listen(5000);
//req incoming request
//res we sebnding back
//localhost:5000
