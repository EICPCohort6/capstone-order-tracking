const authJwt = require("../Controller/authJwt");
const controller = require("../Controller/user-controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // console.log("-----------", authJwt);
  app.get("/api/test/user", authJwt.verifyToken, controller.userLoggedAccess);
  app.get("/api/test/access", controller.allAccess);
};
