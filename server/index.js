const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Galaxy Identity API Running', status: 'OK' });
});

// Database connection
const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootpassword',
  database: process.env.DB_NAME || 'galaxy_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Check connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to MySQL database');

    // Create table if not exists (simple migration)
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS visitors (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        document_id VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    connection.query(createTableQuery, (err) => {
      if (err) console.error('Error creating table:', err);
      else console.log('Visitors table check/creation successful');
      connection.release();
    });
  }
});

// API Routes
app.post('/api/register', (req, res) => {
  const { name, document_id } = req.body;

  if (!name || !document_id) {
    return res.status(400).json({ error: 'Name and Document ID are required' });
  }

  const query = 'INSERT INTO visitors (name, document_id) VALUES (?, ?)';
  db.query(query, [name, document_id], (err, result) => {
    if (err) {
      console.error('Error inserting record:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Visitor registered successfully', id: result.insertId });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
