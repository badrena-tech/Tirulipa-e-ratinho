// Importa o framework Express
const express = require("express");

// Importa o módulo path para lidar com caminhos de arquivos
const path = require("path");

// Cria a aplicação Express
const app = express();

// Define a porta do servidor
const PORT = 3000;

// Permite servir arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname)));

// Rota principal (quando acessar http://localhost:3000)
app.get("/", (req, res) => {
  // Envia o arquivo index.html para o navegador
  res.sendFile(path.join(__dirname, "index.html"));
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  // Mostra mensagem no terminal quando o servidor estiver rodando
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});
