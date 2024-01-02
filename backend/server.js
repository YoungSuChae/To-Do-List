const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"Tasker"
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

app.get('/', (req, res) => {

    console.log('Received a GET request at /');
    const sql = "SELECT * FROM users WHERE username = ? AND user_password = ?";
    const values = [
        req.query.username,
        req.query.password
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error");
        }

        if (data.length === 0) {
            return res.json("Invalid credentials or user not found");
        }

        console.log("User data retrieved:", data[0]);

        // User found, return user data
        return res.json(data[0]); // Assuming only one user should match these credentials
    });
});

app.post('/main', (req, res) => {
    console.log('Received a POST request at /main');
    const sql = "INSERT INTO tasks VALUES (NULL, 1, ?, ?, ?, ?)"; // primary key will auto increment
  
    const values = [
      req.body.taskTitle,
      req.body.taskDate,
      req.body.taskDescription,
      req.body.priority
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        return res.json("Error");
      }
  
      if (data.length === 0) {
        return res.json("Unable to create task per request");
      }
  
      console.log("Task created:", data[0]);
  
      return res.json(data[0]);
    });
  });

const PORT = 8080;
app.listen(PORT, () => {
    console.log("listening");
})