module.exports = app => {
  const tutorials = require("../controllers/makananpesanan.controller.js");

  var router = require("express").Router();

  // Create
  router.post("/", tutorials.create);

  // Get All
  router.get("/", tutorials.findAll);


  app.use('/api/makananpesanan', router);
};