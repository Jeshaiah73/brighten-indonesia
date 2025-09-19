const Quote = require('../models/Quote.js');
const Product = require('../models/Product.js');

// Get all quotes
exports.getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find()
      .populate('client')
      .populate('products.product');
    res.status(200).json({ success: true, count: quotes.length, data: quotes });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get quote by ID
exports.getQuote = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id)
      .populate('client')
      .populate('products.product');
    if (!quote) {
      return res.status(404).json({ success: false, error: 'Quote not found' });
    }
    res.status(200).json({ success: true, data: quote });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Create new quote
exports.createQuote = async (req, res) => {
  try {
    const { client, products, notes } = req.body;
    
    // Calculate total price
    let totalPrice = 0;
    for (const item of products) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ success: false, error: `Product ${item.product} not found` });
      }
      totalPrice += product.price * item.quantity;
    }

    const quote = await Quote.create({
      client,
      products,
      totalPrice,
      notes
    });

    res.status(201).json({ success: true, data: quote });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Update quote
exports.updateQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('client products.product');
    
    if (!quote) {
      return res.status(404).json({ success: false, error: 'Quote not found' });
    }
    res.status(200).json({ success: true, data: quote });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete quote
exports.deleteQuote = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndDelete(req.params.id);
    if (!quote) {
      return res.status(404).json({ success: false, error: 'Quote not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};