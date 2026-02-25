const  db = require('../config/db');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');

async function register(data) {
  const { name, email, address, password} = data;
  const role = 'USER';
  const hashedPassword = await bcrypt.hash(password, 10); 

  const [result] = await db.query(
    'INSERT INTO Users (name, email, address, password, role, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
    [name, email, address, hashedPassword, role]
  );
  return result.insertId;
}

async function login(data){
    const { email, password } = data; 

    const [rows] = await db.query('SELECT * FROM Users WHERE email = ?', [email]); 

    if (!rows.length){
       throw new Error("User not found");
    }

    const user = rows[0]; 

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch){
      throw new Error("Invalid credentials");
    }

   const token = jwt.sign(
      { id: user.id, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

      return { token, role: user.role, id: user.id };
}

module.exports = { register, login };