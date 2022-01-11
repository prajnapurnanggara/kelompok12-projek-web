module.exports = app => {
  const tutorials = require("../controllers/makanan.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all Tutorials
  router.get("/bestseller", tutorials.findBestseller);

  // Retrieve all Tutorials
  router.get("/tersedia", tutorials.findTersedia);

  // Retrieve all Tutorials
  router.get("/menu", tutorials.findMenu);

  // Retrieve all Tutorials
  router.get("/last", tutorials.findLast);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Retrieve a single Tutorial with Makanan
  router.get("/nama/:nama", tutorials.findOneNama);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);


  app.use('/api/makanan', router);
};