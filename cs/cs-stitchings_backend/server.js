 const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// DATABASE CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cs_stitchings"
});

db.connect(err => {
  if (err) {
    console.log("DB Error:", err);
  } else {
    console.log("✅ Database connected");
  }
});

// SAVE ORDER API
app.post("/save-order", (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    pincode,
    notes,
    amount,
    paymentId
  } = req.body;

  if (!name || !email || !phone || !address || !pincode) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const sql = `
    INSERT INTO orders
    (name, email, phone, address, pincode, notes, amount, payment_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, phone, address, pincode, notes, amount, paymentId],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "DB error" });
      }
      res.json({ message: "Order saved successfully" });
    }
  );
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
