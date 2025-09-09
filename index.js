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

function criptografar(texto, chave){
    chave = chave % 26;
    let resultado= "";
    for (let char of texto){
          if (char.match(/[a-z]/)) {
      resultado += String.fromCharCode((char.charCodeAt(0) - 97 + chave + 26) % 26 + 97);
    } else if (char.match(/[A-Z]/)) {
      resultado += String.fromCharCode((char.charCodeAt(0) - 65 + chave + 26) % 26 + 65);
    } else {
      resultado += char;
    }
  }
  return resultado;
}
function descriptografar(texto, chave) {
  return criptografar(texto, -chave);
}


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

