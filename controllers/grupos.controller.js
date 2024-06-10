const GrupoService = require("../services/grupos.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getGrupos = asyncHandler(async (req, res) => {
  const params = req.query;
  const grupos = await GrupoService.getGrupos(params);
  return http.response200(res, grupos);
});

const getGrupo = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const grupo = await GrupoService.getGrupo(id);
  return http.response200(res, grupo);
});

const createGrupo = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const grupo = await GrupoService.createGrupo(payload);
  return http.response201(res, grupo);
});

const updateGrupo = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const grupo = await GrupoService.updateGrupo(payload);
  return http.response200(res, grupo);
});

const deleteGrupo = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await GrupoService.deleteGrupo(id);
  return http.response200(res);
});

module.exports = {
  getGrupos,
  getGrupo,
  createGrupo,
  updateGrupo,
  deleteGrupo,
};

