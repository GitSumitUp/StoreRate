const userService = require('../services/userService');

exports.addUser = async (req, res) => {
  try{
    const id = await userService.addUser(req.body);
    res.json({message: 'User added successfully', id});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.updateUser = async (req, res) => {
  try{
    const affectedRows = await userService.updateUser(req.params.id, req.body);
    if (affectedRows) {
      res.json({message: 'User updated successfully'});
    } else {
      res.status(404).json({message: 'User not found'});
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.deleteUser = async (req, res) => {
  try{
    const affectedRows = await userService.deleteUser(req.params.id);
    if (affectedRows) {
      res.json({message: 'User deleted successfully'});
    } else {
      res.status(404).json({message: 'User not found'});
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

exports.getAllUsers = async (req, res) => {
  try{
    const users = await userService.AllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}