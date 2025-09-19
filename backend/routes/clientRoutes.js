const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const { 
  getClients, 
  getClient, 
  createClient, 
  updateClient, 
  deleteClient 
} = require('../controllers/clientController');

// Public routes
router.route('/').get(getClients);
router.route('/:id').get(getClient);

// Protected routes (admin only)
router.route('/').post(protect, authorize('admin'), createClient);
router.route('/:id').put(protect, authorize('admin'), updateClient);
router.route('/:id').delete(protect, authorize('admin'), deleteClient);

module.exports = router;