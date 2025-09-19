const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware.js');
const { 
  getQuotes, 
  getQuote, 
  createQuote, 
  updateQuote, 
  deleteQuote 
} = require('../controllers/quoteController');

router.route('/').get(protect, authorize('admin'), getQuotes);
router.route('/').post(protect, createQuote);
router.route('/:id').get(protect, getQuote);
router.route('/:id').put(protect, authorize('admin'), updateQuote);
router.route('/:id').delete(protect, authorize('admin'), deleteQuote);

module.exports = router;