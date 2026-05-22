const express = require("express");
const db = require("./database");

const app = express();
const PORT = 3000;


app.use(express.static("public"));


app.use(express.json());





const prizes = [
  {
    id: 1,
    name: "2026 Brently Punisher SR Fastback Coupe",
    msrp: 51540,
    drivetrain: "10spd Auto RWD",
    specs: '480 HP, 308 Cui (5.0 L) "Equestrian" V8'
  },
  {
    id: 2,
    name: "2026 Brently Statesman Mark IX Sedan",
    msrp: 99450,
    drivetrain: "10spd Auto RWD",
    specs: '480 HP, 308 Cui (5.0 L) "Equestrian" V8'
  },
  {
    id: 3,
    name: "2026 Brently Eco-444 Sedan",
    msrp: 56760,
    drivetrain: "7spd DCT AWD",
    specs: '390 HP, 2.5 L "Ecoforce" Twin-Turbo I4'
  }
];





app.get("/api/prizes", (req, res) => 
{
  res.json(prizes);
});




app.post("/api/entries", (req, res) => 
{
  const { name, email, phone, prize, contactMethod, agree } = req.body;

  if (!name || !email || !phone || !prize || !contactMethod || !agree) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  const createdAt = new Date().toISOString();

  db.run(
    `INSERT INTO entries (name, email, phone, prize, contactMethod, agree, createdAt)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, email, phone, prize, contactMethod, 1, createdAt],
    function (err) 
    {
      if (err) return res.status(500).json({ error: "Database insert failed." });
      res.status(201).json({ id: this.lastID });
    }
  );
});





app.get("/api/entries/count", (req, res) => 
{
  db.all("SELECT COUNT(*) AS count FROM entries", (err, rows) => 
  {
    if (err) return res.status(500).json({ error: "Database error." });
    res.json({ count: rows[0].count });
  });
});

app.listen(PORT, () => 
{
  console.log(`Server running at http://localhost:${PORT}`);
});
