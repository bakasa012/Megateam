const { Router } = require("express");
const controllerUser = require("../../controllers/user.controller");

const router = Router();
router.get("/test/mod", controllerUser.moderatorBoard);
module.exports = router;