const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const { 
  getContacts, 
  getContact, 
  createContact, 
  updateContact, 
  deleteContact 
} = require('../controllers/contactController');

// Public routes
router.route('/').post(createContact);

// Protected routes (admin only)
router.route('/').get(protect, authorize('admin'), getContacts);
router.route('/:id').get(protect, getContact);
router.route('/:id').put(protect, authorize('admin'), updateContact);
router.route('/:id').delete(protect, authorize('admin'), deleteContact);

module.exports = router;