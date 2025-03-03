import express from "express";
import cors from 'cors'

import data from "./data";
import validateFruta from "./middleware/validate-fruta";
import existFruta from "./middleware/exist-fruta";

const app = express();
const port = 3333;
let counter = 0;

app.use(cors)
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is runing on port ${port}...`);
});

function counterMiddle(req, res, next) {
  counter++;
  next();
}

app.get("/", counterMiddle, (req, res) => {
  console.log("Counter ROOT", counter);
  res.status(200).json({ success: true, msg: "Hello, i'm START NODE!" });
});

app.get("/frutas", counterMiddle, (req, res) => {
  console.log("Counter GET FRUTAS", counter);
  setTimeout(() => {
    res.status(200).json({ success: true, data: data });
  }, 5000);
});

app.post("/frutas", validateFruta, (req, res) => {
  const dataRequest = req.body;

  data.push(dataRequest.fruta);

  res.status(200).json({ success: true, msg: "Fruta cadastrada com sucesso." });
});

app.delete("/frutas/:item", existFruta, (req, res) => {
  const { item } = req.params;

  const index = data.findIndex((i) => i === item);

  data.splice(index, 1);

  res.status(200).json({ success: true, msg: "Fruta excluida com sucesso." });
});

app.put("/frutas/:item", [validateFruta, existFruta], (req, res) => {
  const { item } = req.params;
  const { fruta } = req.body;

  const index = data.findIndex((i) => i === item);

  data[index] = fruta;

  res.status(200).json({ success: true, msg: "Fruta atualizada com sucesso." });
});

app.get("/frutas/:item", existFruta, (req, res) => {
  const { item } = req.params;

  const index = data.findIndex((i) => i === item);

  setTimeout(() => {
    res.status(200).json({ success: true, data: data[index] });
  }, 10000);
});
