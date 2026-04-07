// //ANTIGO
// const express = require('express');
// NOVO
import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();
app.use(express.json());

const users = [];

const prisma = new PrismaClient();

app.get("/usuarios", async (req, res) => {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
});

app.post("/usuarios", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  sole.log(user);

  res.status(201).json(user);
});

app.put("/usuarios/:id", async (req, res) => {
  const user = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(201).json(user);
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(204).json({ message: "Usuário excluído com sucesso!" });
});

app.listen(3000);
