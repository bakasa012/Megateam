const { Router } = require("express");
const controllerUser = require("../../controllers/user.controller");

const router = Router();
router.get("/test/admin", controllerUser.adminBoard);
//get list user
router.get("/user",controllerUser.getListUser);
module.exports = router;