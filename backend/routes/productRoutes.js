const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const { 
  getProducts, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} = require('../controllers/productController');

// Public routes
router.route('/').get(getProducts);

// Protected routes (admin only)
router.route('/').post(protect, authorize('admin'), createProduct);
router.route('/:id').put(protect, authorize('admin'), updateProduct);
router.route('/:id').delete(protect, authorize('admin'), deleteProduct);

module.exports = router;