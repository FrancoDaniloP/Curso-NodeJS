const http = require("node:http");

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Biénvenidos");
  } else if (req.url === "/contacto") {
    res.statusCode = 200;
    res.end("Hola soy tal y tal");
  } else {
    res.statusCode = 404;
    res.end("Página no encontrada");
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(
    `escuchando servidor en el puerto http://localhost:${desiredPort}`
  );
});
