const { Router } = require("express");
const controllerUser = require("../../controllers/user.controller");

const router = Router();
router.get("/test/admin", controllerUser.adminBoard);
router.get("/user",controllerUser.getListUser);
module.exports = router;