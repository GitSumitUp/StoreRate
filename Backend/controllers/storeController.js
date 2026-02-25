const storeService = require('../services/storeService');

exports.addStore = async (req, res) => {
  try{
    const id = await storeService.addStore(req.body);
    res.json({message: 'Store added successfully', id});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.updateStore = async (req, res) => {
  try{
    const affectedRows = await storeService.updateStore(req.params.id, req.body);
    if (affectedRows) {
      res.json({message: 'Store updated successfully'});
    } else {
      res.status(404).json({message: 'Store not found'});
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.deleteStore = async (req, res) => {
  try{
    const affectedRows = await storeService.deleteStore(req.params.id);
    if (affectedRows) {
      res.json({message: 'Store deleted successfully'});
    } else {
      res.status(404).json({message: 'Store not found'});
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.getAllStores = async (req, res) => {
  try{
    const stores = await storeService.AllStores();
    res.json(stores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}