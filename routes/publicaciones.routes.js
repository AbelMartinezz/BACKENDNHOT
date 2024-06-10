const router = require("express").Router();

const publicacionController = require("../controllers/publicaciones.controller");

router.get(
  "/",
  publicacionController.getPublicaciones
);
router.get(
  "/:id",
  publicacionController.getPublicacion
);
router.post(
  "/",
  publicacionController.createPublicacion
);
router.put(
  "/:id",
  publicacionController.updatePublicacion
);
router.delete(
  "/:id",
  publicacionController.deletePublicacion
);

module.exports = router;

