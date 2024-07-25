const http = require("node:http");
const { findAvailablePort } = require("./free-port");

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("petición recibida.");
  res.end("Cerrando, recibido.");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`escuchando servidor en el puerto http://localhost:${port}`);
  });
});
