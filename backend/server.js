const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "Tasker"
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});



// Middleware to fetch user_id based on username and password
const getUserID = async (req, res, next) => {
  try {
      const { username, password } = req.method === 'GET' ? req.query : req.body;

      const sql = "SELECT user_id FROM users WHERE username = ? AND user_password = ?";
      const values = [username, password];

      console.log("SQL Query:", sql);
      console.log("SQL Values:", values);

      db.query(sql, values, (err, data) => {
        if (err) {
          return res.json("Error fetching user ID");
        }
  
        if (data.length === 0) {
          return res.json("Invalid credentials or user not found");
        }
  
        req.user_id = data[0].user_id; // Attach user_id to the request object
        console.log(req.user_id);
        next();
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      return res.json("Error fetching user ID");
    }
  };

let user_id; // global variable for temp storage (best I can think of)

app.get('/', getUserID, (req, res) => {
  console.log('Received a GET request at /');
  user_id = req.user_id;
  return res.json({ user_id: req.user_id });
});

app.post('/main', async (req, res) => {
 try {
  console.log('Received a POST request at /main');

  const sql = "INSERT INTO tasks (task_id, user_id, task_title, task_date, task_desc, priority) VALUES (NULL, ?, ?, ?, ?, ?)";
  const values = [
      user_id, // Use the global variable
      req.body.taskTitle,
      req.body.taskDate,
      req.body.taskDescription,
      req.body.priority
  ];

      db.query(sql, values, (err, data) => {
          if (err) {
              console.error('Error creating task:', err);
              return res.status(500).json({ error: "Error creating task" });
          }
          
          return res.json(data[0]);
      });
  } catch (error) {
      console.error('Error creating task:', error);
      return res.status(500).json({ error: "Error creating task" });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("listening");
});