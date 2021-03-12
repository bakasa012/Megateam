const userRouter = require("./users/users.router");
const adminRouter = require("./admin/admin.router");
const moderatorRouter = require("./moderator/moderators.router");
const { authJwt } = require("../middlewares");

module.exports = function(app){
    app.use("/api/admin",[authJwt.verifyToken,authJwt.isAdmin],adminRouter);
    app.use("/api/moderator",[authJwt.verifyToken,authJwt.isModerator],moderatorRouter);
    app.use("/api",userRouter);
}
     