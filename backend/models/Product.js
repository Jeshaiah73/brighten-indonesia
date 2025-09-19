const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Detergent', 'Softener', 'Karbol', 'Shampoo', 'Handsoap', 'Dishwash', 
           'Tilewash', 'Glass Cleaner', 'Rush & Crush Remover', 'Multi Purpose Cleaner', 
           'Disinfectan Spray', 'Linen Parfume', 'Furniture Polish', 'Shampoo Carpet', 
           'Hand Sanitizer', 'One Step Marble Polisher']
  },
  description: { type: String },
  image: { type: String },
  applications: [{ type: String, enum: ['Hotel', 'Resto', 'Rumah Sakit', 'Outsourcing'] }],
  price: { type: Number },
  stock: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);