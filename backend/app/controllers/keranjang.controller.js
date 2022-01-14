const Tutorial = require("../models/keranjang.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    id: req.body.id,
    makanan: req.body.makanan,
    harga: req.body.harga,
    jumlah: req.body.jumlah,
    totalharga: req.body.totalharga,
    catatan: req.body.catatan
  });

  // Save Tutorial in the database
  Tutorial.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;

    Tutorial.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
};

exports.findJumlah = (req, res) => {
    const title = req.query.title;

    Tutorial.getJumlah(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });
};

exports.delete = (req, res) => {
    Tutorial.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Makanan Dengan ID ${req.params.id} Tidak Ditemukan.`
            });
          } else {
            res.status(500).send({
              message: "Gagal Dihapus " + req.params.id
            });
          }
        } else res.send({ message: `Makanan Dengan ID ${req.params.id} Berhasil Dihapus` });
    });
};

exports.findLast = (req, res) => {
  const title = req.query.title;

  Tutorial.getLast(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};