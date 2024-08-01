const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.url === "/") {
    res.end("Biénvenidos");
  } else if (req.url === "/imagen-de-comida") {
    res.setHeader("Content-Type", "image/jpg");
    fs.readFile("./comida1.jpg", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("<h2>Error 500 Internal Server</h2>");
      } else {
        res.setHeader("Content-Type", "image/jpg");
        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
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
