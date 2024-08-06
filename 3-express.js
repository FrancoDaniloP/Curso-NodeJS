const ditto = require("./pokemon/ditto.json");
const express = require("express");
const app = express();

//middleware que nos perrmite hacer varias peticiones a la vez
app.use(express.json());
// app.use((req, res, next) => {
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();
//   let body = "";

//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();
//     req.body = data;
//     next();
//   });
// });

app.disable("x-powered-by");

const port = process.env.port ?? 1234;

app.get("/pokemon/ditto", (req, res) => {
  res.json(ditto);
});
app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

//ultima a la que le llega la url
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`server escuchado en: http://localhost:${port}`);
});
