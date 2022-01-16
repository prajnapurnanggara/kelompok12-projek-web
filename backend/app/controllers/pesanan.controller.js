const Tutorial = require("../models/pesanan.model.js");

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
    idpesanan: req.body.idpesanan,
    nama: req.body.nama,
    nomeja: req.body.nomeja,
    status: req.body.status,
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

exports.findKeranjang = (req, res) => {
  const title = req.query.title;

  Tutorial.getKeranjang(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.findDipesan = (req, res) => {
  const title = req.query.title;

  Tutorial.getDipesan(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.findDibayar = (req, res) => {
  const title = req.query.title;

  Tutorial.getDibayar(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.findSelesai = (req, res) => {
  const title = req.query.title;

  Tutorial.getSelesai(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.findCancel = (req, res) => {
  const title = req.query.title;

  Tutorial.getCancel(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Tutorial.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Pesanan Dengan ID ${req.params.id} Tidak Ditemukan.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Tutorial.updateById(
    req.params.id,
    new Tutorial(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Makanan Dengan ID ${req.params.id} Tidak Ditemukan.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Tutorial with the specified id in the request
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
