const http = require("node:http");

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
  console.log("petición recibida: ", req.url);
  res.end("Cerrando, recibido.");
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(
    `escuchando servidor en el puerto http://localhost:${desiredPort}`
  );
});
