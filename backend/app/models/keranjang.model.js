const sql = require("./db.js");

// constructor
const Tutorial = function(tutorial) {
  this.id = tutorial.id;
  this.makanan = tutorial.makanan;
  this.harga = tutorial.harga;
  this.jumlah = tutorial.jumlah;
  this.totalharga = tutorial.totalharga;
  this.catatan = tutorial.catatan;
};

Tutorial.create = (newTutorial, result) => {
  sql.query("INSERT INTO keranjang SET ?", newTutorial, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};


Tutorial.getAll = (title, result) => {
  let query = "SELECT * FROM keranjang";

  if (title) {
    query += ` WHERE makanan LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res);
    result(null, res);
  });
};

Tutorial.getJumlah = (title, result) => {
  let query = "SELECT COUNT(id) AS jumlah FROM keranjang";

  if (title) {
    query += ` WHERE makanan LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res);
    result(null, res);
  });
};

Tutorial.remove = (id, result) => {
  sql.query("DELETE FROM keranjang WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tutorial with id: ", id);
    result(null, res);
  });
};

module.exports = Tutorial;