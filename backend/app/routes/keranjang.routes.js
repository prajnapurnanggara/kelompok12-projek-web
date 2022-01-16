module.exports = app => {
  const tutorials = require("../controllers/keranjang.controller.js");

  var router = require("express").Router();

  // Create
  router.post("/", tutorials.create);

  // Get All
  router.get("/", tutorials.findAll);

  // Get All
  router.get("/jumlah", tutorials.findJumlah);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Retrieve all Tutorials
  router.get("/last", tutorials.findLast);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);


  app.use('/api/keranjang', router);
};