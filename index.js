const http = require('http');
const server = http.createServer((req,res)=>{
   if(req.url==='/'){
       res.end('Welcometo the  server');
   }
   if(req.url==='/about'){
       res.end('heres is our short story');
   }
   else{res.end(`
   <h1>Oops!</h1>
   <p>We cant seem to fiund the page ypunare looking for</p>
   <a href='/'>Go back </a>
   `)}
   
})

server.listen(5000)