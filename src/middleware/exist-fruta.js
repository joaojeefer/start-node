import data from "../data";

function existFruta(req, res, next) {
  const { item } = req.params;

  const index = data.findIndex((i) => i === item);

  if (index === -1) {
    return res
      .status(404)
      .json({ success: false, msg: "Fruta não encontrada." });
  }

  next();
}

export default existFruta;
