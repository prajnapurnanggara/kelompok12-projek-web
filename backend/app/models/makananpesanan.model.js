const sql = require("./db.js");

// constructor
const Tutorial = function(tutorial) {
  this.idpesanan = tutorial.idpesanan;
  this.makanan = tutorial.makanan;
  this.harga = tutorial.harga;
  this.jumlah = tutorial.jumlah;
  this.totalharga = tutorial.totalharga;
  this.catatan = tutorial.catatan;
};

Tutorial.create = (newTutorial, result) => {
  sql.query("INSERT INTO makananpesanan SET ?", newTutorial, (err, res) => {
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
  let query = "SELECT * FROM makananpesanan";

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

module.exports = Tutorial;