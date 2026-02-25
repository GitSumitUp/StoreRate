// const db = require('../config/db'); 
const { register, login } = require("../services/authService");


exports.signup = async (req, res) => { 
  const {name, email, address, password} = req.body; 
  try { 
    const userId = await register({name, email, address, password});
    res.status(201).json({ message: 'User registered successfully', id: userId });
  } catch (err) { 
    console.error("Signup error:", err);
    res.status(500).json({ error: err.message });
   } 
};

exports.login = async (req, res) => { 
  try { 
      const result = await login(req.body);
      res.json(result);
     } catch (err) { 
      res.status(500).json({ error: err.message }); 
    } 
  };

exports.logout = (req, res) => {
    try{
      res.clearCookie("token", { httpOnly: true, secure: true }); return res.json({ message: "Logged out successfully" });
    } catch (err) {
       console.error("Logout error:", err); return res.status(500).json({ message: "Something went wrong!" });
    }
};

