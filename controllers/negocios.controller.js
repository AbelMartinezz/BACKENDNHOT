const NegocioService = require("../services/negocios.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getNegocios = asyncHandler(async (req, res) => {
  const params = req.query;
  const negocios = await NegocioService.getNegocios(params);
  return http.response200(res, negocios);
});

const getNegocio = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const negocio = await NegocioService.getNegocio(id);
  return http.response200(res, negocio);
});

const createNegocio = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const negocio = await NegocioService.createNegocio(payload);
  return http.response201(res, negocio);
});

const updateNegocio = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const negocio = await NegocioService.updateNegocio(payload);
  return http.response200(res, negocio);
});

const deleteNegocio = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await NegocioService.deleteNegocio(id);
  return http.response200(res);
});

module.exports = {
  getNegocios,
  getNegocio,
  createNegocio,
  updateNegocio,
  deleteNegocio,
};
