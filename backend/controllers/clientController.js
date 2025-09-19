const Client = require('../models/Client.js');

// Get all clients
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json({ success: true, count: clients.length, data: clients });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get client by ID
exports.getClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ success: false, error: 'Client not found' });
    }
    res.status(200).json({ success: true, data: client });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Create new client
exports.createClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json({ success: true, data: client });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Update client
exports.updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!client) {
      return res.status(404).json({ success: false, error: 'Client not found' });
    }
    res.status(200).json({ success: true, data: client });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete client
exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) {
      return res.status(404).json({ success: false, error: 'Client not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};