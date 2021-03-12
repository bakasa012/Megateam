const { Router } = require("express");
const controllerUser = require("../../controllers/user.controller");
const { verifySingUp } = require("../../middlewares")
const controllerAuth = require("../../controllers/auth.controller");
const router = Router();

router.get("/test/all",controllerUser.getListUser);

router.get("/test/user", controllerUser.getUser);

router.post(
    "/auth/signup",
    [verifySingUp.checkDuplicateUsernameOrEmail, verifySingUp.checkRoleExisted],
    controllerAuth.signUp
);

router.post("/auth/signin", controllerAuth.signIn);

module.exports = router;