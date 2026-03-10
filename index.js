import express from "express";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.json({ mensaje: "Bienvenidos a la API de repaso" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
