const express = require('express'); 
const router = express.Router(); 
const {addStore, updateStore, deleteStore, getAllStores } = require('../controllers/storeController');

router.post('/add', addStore); 
router.put('/update/:id', updateStore);
router.delete('/delete/:id', deleteStore);
router.get('/all', getAllStores);

module.exports = router;