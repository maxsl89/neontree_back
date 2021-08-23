const express = require("express");
const neontreeController = require("./../controllers/neontreeController");

const router = express.Router();

router
  .route("/")
  .get(neontreeController.getInfo);  

module.exports = router;