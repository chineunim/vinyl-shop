const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'ilya',
  password: 'ilyankshncoffee14',
  database: 'shop',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/api/sales', async (req, res) => {
  try {
    const query = 'SELECT * FROM sales';
    const salesData = await new Promise((resolve, reject) => {
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    res.json(salesData);
  } catch (error) {
    console.error('Error retrieving sales data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(express.static(path.join(__dirname, '../vinyl-shop/build')));

app.get('/api/sales', async (req, res) => {
  try {
    res.json({ message: 'API endpoint for sales data' });
  } catch (error) {
    console.error('Error handling API request:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../vinyl-shop/build', 'index.html'));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
