const PublicacionService = require("../services/publicaciones.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getPublicaciones = asyncHandler(async (req, res) => {
  const params = req.query;
  const publicaciones = await PublicacionService.getPublicaciones(params);
  return http.response200(res, publicaciones);
});

const getPublicacion = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const publicacion = await PublicacionService.getPublicacion(id);
  return http.response200(res, publicacion);
});

const createPublicacion = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const publicacion = await PublicacionService.createPublicacion(payload);
  return http.response201(res, publicacion);
});

const updatePublicacion = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const publicacion = await PublicacionService.updatePublicacion(payload);
  return http.response200(res, publicacion);
});

const deletePublicacion = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await PublicacionService.deletePublicacion(id);
  return http.response200(res);
});

module.exports = {
  getPublicaciones,
  getPublicacion,
  createPublicacion,
  updatePublicacion,
  deletePublicacion,
};
