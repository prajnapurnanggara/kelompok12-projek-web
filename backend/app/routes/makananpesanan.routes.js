module.exports = app => {
  const tutorials = require("../controllers/makananpesanan.controller.js");

  var router = require("express").Router();

  // Create
  router.post("/", tutorials.create);

  // Get All
  router.get("/", tutorials.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Retrieve a single Tutorial with id
  router.get("/total/:id", tutorials.findTotal);

  app.use('/api/makananpesanan', router);
};