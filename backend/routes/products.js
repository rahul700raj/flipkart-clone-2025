const express = require('express');
const router = express.Router();

// Mock products database
const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max (256GB)',
    category: 'electronics',
    price: 134900,
    originalPrice: 159900,
    rating: 4.6,
    reviews: 12453,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
    description: 'Latest iPhone with A17 Pro chip',
    inStock: true,
    freeDelivery: true
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    category: 'electronics',
    price: 124999,
    originalPrice: 139999,
    rating: 4.5,
    reviews: 8932,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500',
    description: 'Flagship Samsung phone',
    inStock: true,
    freeDelivery: true
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5 Headphones',
    category: 'electronics',
    price: 29990,
    originalPrice: 34990,
    rating: 4.7,
    reviews: 5621,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500',
    description: 'Premium noise-cancelling headphones',
    inStock: true,
    freeDelivery: true
  },
  {
    id: 4,
    name: 'MacBook Air M2 (13-inch)',
    category: 'electronics',
    price: 114900,
    originalPrice: 119900,
    rating: 4.8,
    reviews: 3421,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
    description: 'Powerful and portable laptop',
    inStock: true,
    freeDelivery: true
  },
  {
    id: 5,
    name: 'Nike Air Max 270',
    category: 'fashion',
    price: 12995,
    originalPrice: 16995,
    rating: 4.4,
    reviews: 2134,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    description: 'Comfortable running shoes',
    inStock: true,
    freeDelivery: false
  }
];

// Get all products
router.get('/', (req, res) => {
  const { category, search, minPrice, maxPrice, minRating } = req.query;
  
  let filteredProducts = [...products];

  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  if (search) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter(p => p.price >= Number(minPrice));
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(p => p.price <= Number(maxPrice));
  }

  if (minRating) {
    filteredProducts = filteredProducts.filter(p => p.rating >= Number(minRating));
  }

  res.json({
    success: true,
    count: filteredProducts.length,
    products: filteredProducts
  });
});

// Get product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  res.json({
    success: true,
    product
  });
});

// Get products by category
router.get('/category/:category', (req, res) => {
  const categoryProducts = products.filter(p => p.category === req.params.category);
  
  res.json({
    success: true,
    count: categoryProducts.length,
    products: categoryProducts
  });
});

module.exports = router;
