module.exports = app => {
  const tutorials = require("../controllers/pesanan.controller.js");

  var router = require("express").Router();

  // Create
  router.post("/", tutorials.create);

  // Get All
  router.get("/", tutorials.findAll);

  // Get All
  router.get("/keranjang", tutorials.findKeranjang);

  // Get Status Dipesan
  router.get("/dipesan", tutorials.findDipesan);

  // Get Status Dibayar
  router.get("/dibayar", tutorials.findDibayar);

  // Get Status Selesai
  router.get("/selesai", tutorials.findSelesai);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  app.use('/api/pesanan', router);
};