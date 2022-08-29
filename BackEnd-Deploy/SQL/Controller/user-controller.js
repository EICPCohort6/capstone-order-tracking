//test for auth through access

exports.allAccess = (req, res) => {
  res.status(200).send("Auth successful");
};
exports.userLoggedAccess = (req, res) => {
  res.status(200).send("User verified and logged in.");
};
