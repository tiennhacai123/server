const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/users/:resource/:id/show": "/:resource/:id",
    "/products/:resource/:id/show": "/:resource/:id",
    "/carts/:resource/:id/show": "/:resource/:id",
    "/orders/:resource/:id/show": "/:resource/:id",
  })
);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;