const express = require('express');
const { getAllUser, createUser } = require('../Controllers/UserController');

const router = express.Router();

router.route("/")
    .get(getAllUser)
    .post(createUser)

module.exports = router