const router = require("express").Router();

const v1 = "v1";

router.use(`/${v1}/comentarios`, require("./comentarios.routes"));
router.use(`/${v1}/eventos`, require("./eventos.routes"));
router.use(`/${v1}/grupos`, require("./grupos.routes"));
router.use(`/${v1}/negocios`, require("./negocios.routes"));
router.use(`/${v1}/publicaciones`, require("./publicaciones.routes"));
router.use(`/${v1}/usuarios`, require("./usuarios.routes"));

module.exports = router;
