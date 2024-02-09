const express = require("express");

//controllers
const {
  createNewLike
} = require("../controllers/likes");

//middleware
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

const likesRouter = express.Router();

likesRouter.post("/:id",authentication,createNewLike);

module.exports = likesRouter;
