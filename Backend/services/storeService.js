const  db = require('../config/db');

async function addStore(storeData) {
  const { name, email, address, password, role } = storeData;
  const [result] = await db.query(
    'INSERT INTO Stores (store_name, email, address, password, role) VALUES (?, ?, ?, ?, ?)',
    [name, email, address, password, role || 'STORE_OWNER']
  );
  return result.insertId;
}


async function updateStore(storeId, storeData) {

  const { name, email, address, password, role} = storeData;
  const [result] = await db.query(
    'UPDATE Stores SET name = ?, email = ?, address = ?, password = ?, role = ? WHERE id = ?',
    [name, email, address, password, role || 'STORE_OWNER', storeId]);

  return result.affectedRows;
}

async function deleteStore(storeId) {

  const [result] = await db.query(
    'DELETE FROM Stores WHERE id = ?',
    [storeId]);

  return result.affectedRows;
}

async function AllStores() {

  const [result] = await db.query(
    'SELECT * FROM Stores');
  return result;
}


module.exports = {
  addStore,
  updateStore,
  deleteStore,
  AllStores
};