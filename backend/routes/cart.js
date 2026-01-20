const express = require('express');
const router = express.Router();

// Mock cart database (in production, use MongoDB/PostgreSQL)
const carts = {};

// Get cart
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const cart = carts[userId] || { items: [] };
  
  res.json({
    success: true,
    cart
  });
});

// Add to cart
router.post('/:userId', (req, res) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;

  if (!carts[userId]) {
    carts[userId] = { items: [] };
  }

  const existingItem = carts[userId].items.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    carts[userId].items.push({ productId, quantity });
  }

  res.json({
    success: true,
    message: 'Item added to cart',
    cart: carts[userId]
  });
});

// Update cart item
router.put('/:userId/:productId', (req, res) => {
  const { userId, productId } = req.params;
  const { quantity } = req.body;

  if (!carts[userId]) {
    return res.status(404).json({ success: false, message: 'Cart not found' });
  }

  const item = carts[userId].items.find(item => item.productId === Number(productId));

  if (!item) {
    return res.status(404).json({ success: false, message: 'Item not found in cart' });
  }

  if (quantity <= 0) {
    carts[userId].items = carts[userId].items.filter(item => item.productId !== Number(productId));
  } else {
    item.quantity = quantity;
  }

  res.json({
    success: true,
    message: 'Cart updated',
    cart: carts[userId]
  });
});

// Remove from cart
router.delete('/:userId/:productId', (req, res) => {
  const { userId, productId } = req.params;

  if (!carts[userId]) {
    return res.status(404).json({ success: false, message: 'Cart not found' });
  }

  carts[userId].items = carts[userId].items.filter(item => item.productId !== Number(productId));

  res.json({
    success: true,
    message: 'Item removed from cart',
    cart: carts[userId]
  });
});

// Clear cart
router.delete('/:userId', (req, res) => {
  const { userId } = req.params;
  carts[userId] = { items: [] };

  res.json({
    success: true,
    message: 'Cart cleared'
  });
});

module.exports = router;
