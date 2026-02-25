const express = require('express'); 
const router = express.Router(); 
const {addUser, updateUser, deleteUser, getAllUsers } = require('../controllers/userController');

router.post('/add', addUser); 
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/all', getAllUsers);

module.exports = router;