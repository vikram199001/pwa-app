const express = require("express");
const router = express.Router();

const userService = require('../service/user.service');

router.post("/authenticate", authenticate);

function authenticate(req, res, next) {
    userService
      .authenticate(req.body)
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((err) => res.send({error: 'username or password incorrect!'}));
  }

module.exports = router;