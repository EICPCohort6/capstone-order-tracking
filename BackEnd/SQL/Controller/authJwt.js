const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const database = require("../connection");
// const User = database.user;
let verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    console.log(req);
    // console.log(req.userId, decoded);
    req.userId = decoded.id;
    next();
  });
};

// -----------------COMMENTED CODE FOR USER ROLES--------------

// // isAdmin = (req, res, next) => {
// //   User.findatabaseyPk(req.userId).then(user => {
// //     user.getRoles().then(roles => {
// //       for (let i = 0; i < roles.length; i++) {
// //         if (roles[i].name === "admin") {
// //           next();
// //           return;
// //         }
// //       }
// //       res.status(403).send({
// //         message: "Require Admin Role!"
// //       });
// //       return;
// //     });
// //   });
// // };
// isModerator = (req, res, next) => {
//   User.findatabaseyPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "moderator") {
//           next();
//           return;
//         }
//       }
//       res.status(403).send({
//         message: "Require Moderator Role!"
//       });
//     });
//   });
// };
// isModeratorOrAdmin = (req, res, next) => {
//   User.findatabaseyPk(req.userId).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name === "moderator") {
//           next();
//           return;
//         }
//         if (roles[i].name === "admin") {
//           next();
//           return;
//         }
//       }
//       res.status(403).send({
//         message: "Require Moderator or Admin Role!"
//       });
//     });
//   });
// };
const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;
