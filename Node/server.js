// //ANTIGO
// const express = require('express');

// NOVO

import express from "express";

const app = express();

app.get("/usuarios", (req, res) => {
  res.send("olá, rota acessada com sucesso!");
});

app.post("/usuarios", (req, res) => {
  res.send("POST -usuario criado com sucesso!");
});

app.listen(3000);
