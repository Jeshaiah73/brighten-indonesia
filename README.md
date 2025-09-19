# brighten-indonesia
Website Perusahaan CV. Brighten Indonesia Chemical

backend/
├── config/
│   ├── db.js              # Koneksi MongoDB
│   └── passport.js         # JWT Authentication
├── controllers/
│   ├── authController.js  # Auth (login/register)
│   ├── productController.js # CRUD Produk
│   ├── clientController.js # CRUD Klien
│   ├── quoteController.js  # CRUD Quote
│   └── contactController.js # Form Kontak
├── models/
│   ├── User.js            # User Schema
│   ├── Product.js         # Product Schema
│   ├── Client.js          # Client Schema
│   ├── Quote.js           # Quote Schema
│   └── Contact.js         # Contact Schema
├── routes/
│   ├── authRoutes.js      # Auth Routes
│   ├── productRoutes.js   # Product Routes
│   ├── clientRoutes.js    # Client Routes
│   ├── quoteRoutes.js     # Quote Routes
│   └── contactRoutes.js   # Contact Routes
├── middleware/
│   └── authMiddleware.js  # JWT Protection
├── uploads/               # Gambar Produk
└── server.js              # Entry Point