const jsonServer = require('json-server');
 // tao may chu
 const server = jsonServer.create();

 const router = jsonServer.router();
 const middlewares = jsonServer.defaults();

 server.use(middlewares);
 server.use(router);

 // lang nghe cong cua ung dung 
 server.listen(3000,()=>{
    console.log('http://localhost3000');
 });
 module.exports = server;