function validateFruta(req, res, next) {
  const dataRequest = req.body;

  if (!dataRequest.fruta) {
    return res
      .status(400)
      .json({ success: false, msg: "Campo fruta é obrigatório." });
  }

  if (dataRequest.fruta.length < 3) {
    return res.status(400).json({
      success: false,
      msg: "Campo fruta deve conter no mínimo 3 caracteres.",
    });
  }

  next();
}

export default validateFruta;
