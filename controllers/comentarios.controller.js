const ComentarioService = require("../services/comentarios.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getComentarios = asyncHandler(async (req, res) => {
  const params = req.query;
  const comentarios = await ComentarioService.getComentarios(params);
  return http.response200(res, comentarios);
});

const getComentario = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const comentario = await ComentarioService.getComentario(id);
  return http.response200(res, comentario);
});

const createComentario = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const comentario = await ComentarioService.createComentario(payload);
  return http.response201(res, comentario);
});

const updateComentario = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const comentario = await ComentarioService.updateComentario(payload);
  return http.response200(res, comentario);
});

const deleteComentario = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await ComentarioService.deleteComentario(id);
  return http.response200(res);
});

module.exports = {
  getComentarios,
  getComentario,
  createComentario,
  updateComentario,
  deleteComentario,
};
