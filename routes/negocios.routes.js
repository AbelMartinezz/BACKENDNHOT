const router = require("express").Router();

const negocioController = require("../controllers/negocios.controller"); // Cambia "estudiantes.controller" por "negocios.controller"

router.get(
  "/",
  negocioController.getNegocios 
);
router.get(
  "/:id",
  negocioController.getNegocio
);
router.post(
  "/",
  negocioController.createNegocio 
);
router.put(
  "/:id",
  negocioController.updateNegocio 
);
router.delete(
  "/:id",
  negocioController.deleteNegocio 
);

module.exports = router;
