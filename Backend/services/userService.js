const  db = require('../config/db');

async function addUser(userData) {

  // const name = userData.name;
  // const email = userData.email;
  // const address = userData.address;
  // const password = userData.password;
  // const role = userData.role;

  const { name, email, address, password, role } = userData;
  const [result] = await db.query(
    'INSERT INTO Users (name, email, address, password, role) VALUES (?, ?, ?, ?, ?)',
    [name, email, address, password, role || 'USER']
  );
  return result.insertId;
}


async function updateUser(userId, userData) {

  const { name, email, address, password, role} = userData;
  const [result] = await db.query(
    'UPDATE Users SET name = ?, email = ?, address = ?, password = ?, role = ? WHERE id = ?',
    [name, email, address, password, role, userId]);

  return result.affectedRows;
}

async function deleteUser(userId) {

  const [result] = await db.query(
    'DELETE FROM Users WHERE id = ?',
    [userId]);

  return result.affectedRows;
}

async function AllUsers() {

  const [result] = await db.query(
    'SELECT * FROM Users');
  return result;
}


module.exports = {
  addUser,
  updateUser,
  deleteUser,
  AllUsers
};