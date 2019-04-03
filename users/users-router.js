const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/", withDept("customer_service"), (req, res) => {
  Users.getUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
function withDept(dept) {
  return function(req, res, next) {
    if (
      req.decodedJwt &&
      req.decodedJwt.depts &&
      req.decodedJwt.depts.includes(dept)
    ) {
      next();
    } else {
      res
        .status(403)
        .json({ message: "Your dept does not grant you access to enter" });
    }
  };
}

module.exports - router;
