function status(request, response) {
  response.status(200).json({ chave: "show de bola patrão" });
}

export default status;
