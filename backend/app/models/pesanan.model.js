const sql = require("./db.js");

// constructor
const Tutorial = function(tutorial) {
  this.idpesanan = tutorial.idpesanan;
  this.nama = tutorial.nama;
  this.nomeja = tutorial.nomeja;
  this.makanan = tutorial.makanan;
  this.jumlahmakanan = tutorial.jumlahmakanan;
  this.catatan = tutorial.catatan;
};

Tutorial.create = (newTutorial, result) => {
  sql.query("INSERT INTO makanan SET ?", newTutorial, (err, res) => {
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
  let query = "SELECT * FROM pesanan";

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

Tutorial.getDipesan = (title, result) => {
  let query = "SELECT * FROM pesanan WHERE status = 'Dipesan'";

  if (title) {
    query += ` WHERE pesanan LIKE '%${title}%'`;
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

Tutorial.getDibayar = (title, result) => {
  let query = "SELECT * FROM pesanan WHERE status = 'Dibayar'";

  if (title) {
    query += ` WHERE pesanan LIKE '%${title}%'`;
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

Tutorial.getSelesai = (title, result) => {
  let query = "SELECT * FROM pesanan WHERE status = 'Selesai'";

  if (title) {
    query += ` WHERE pesanan LIKE '%${title}%'`;
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

Tutorial.findById = (id, result) => {
  sql.query(`SELECT * FROM pesanan WHERE idpesanan = '${id}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Tutorial.updateById = (id, tutorial, result) => {
  sql.query(
    "UPDATE makanan SET id = ?, deskripsi = ?, hargaasli = ?, hargapalsu = ? WHERE id = ?",
    [tutorial.id, tutorial.deskripsi, tutorial.hargaasli, tutorial.hargapalsu, id],
    (err, res) => {
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

      console.log("updated tutorial: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

Tutorial.remove = (id, result) => {
  sql.query("DELETE FROM makanan WHERE id = ?", id, (err, res) => {
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