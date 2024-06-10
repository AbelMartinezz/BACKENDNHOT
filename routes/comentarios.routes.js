const router = require("express").Router();

const comentarioController = require("../controllers/comentarios.controller");

router.get(
  "/",
  comentarioController.getComentarios
);
router.get(
  "/:id",
  comentarioController.getComentario
);
router.post(
  "/",
  comentarioController.createComentario
);
router.put(
  "/:id",
  comentarioController.updateComentario
);
router.delete(
  "/:id",
  comentarioController.deleteComentario
);

module.exports = router;
