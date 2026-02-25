require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  // allowedHeaders: ['Content-Type', 'Authorization']
  credentials: true
  })
);

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/stores', require('./routes/storeRoutes'));

db.getConnection((err, connection) => { 
  if (err) { 
    console.error("Database connection failed:", err); 
  } else { 
    console.log("Database connected successfully!"); connection.release(); 
  } 
});

app.use((err, req, res, next) => { 
  console.error(err.stack); 
  res.status(500).json({ 
    message: "Something went wrong!" 
  }); 
}); 

app.use((req, res) => { 
  res.status(404).json({ 
    message: "Route not found" 
  }); 
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
