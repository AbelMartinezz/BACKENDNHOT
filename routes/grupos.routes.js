const router = require("express").Router();

const grupoController = require("../controllers/grupos.controller");

router.get(
  "/",
  grupoController.getGrupos
);
router.get(
  "/:id",
  grupoController.getGrupo
);
router.post(
  "/",
  grupoController.createGrupo
);
router.put(
  "/:id",
  grupoController.updateGrupo
);
router.delete(
  "/:id",
  grupoController.deleteGrupo
);

module.exports = router;
