const express = require("express");
const app = express();
app.use(express.json());
// rota teste
app.get("/", (request, response) => {
response.send({ message: "servidor rodando ..."});
})
app.listen(3000, () => {
console.log("servidor rodando na porta: 3000");
})

const { criptografar, descriptografar } = require("./cesar");

app.post("/api/criptografar", (req, res) => {//Endpoint Criptografia
  const { texto, chave } = req.body;
  if (!texto || chave === undefined) {
    return res.status(400).json({ error: "Texto e chave são obrigatórios" });
  }
  const resultado = criptografar(texto, parseInt(chave));
  res.json({ resultado });
});

app.post("/api/descriptografar", (req, res) => {//Endpoint Descriptografia
  const { texto, chave } = req.body;
  if (!texto || chave === undefined) {
    return res.status(400).json({ error: "Texto e chave são obrigatórios" });
  }
  const resultado = descriptografar(texto, parseInt(chave));
  res.json({ resultado });
});

