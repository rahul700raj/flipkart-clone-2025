const express = require('express');
const router = express.Router();
const { sendEmail } = require('../utils/email');

// Mock orders database
const orders = [];

// Create order
router.post('/', async (req, res) => {
  try {
    const { userId, items, total, address, email } = req.body;

    const order = {
      id: orders.length + 1,
      userId,
      items,
      total,
      address,
      status: 'Processing',
      createdAt: new Date()
    };

    orders.push(order);

    // Send order confirmation email
    const itemsList = items.map(item => 
      `${item.name} x ${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');

    await sendEmail(
      email || process.env.EMAIL_USER,
      'Order Confirmation - Flipkart Clone',
      `Hi,\n\nYour order #${order.id} has been placed successfully!\n\nOrder Details:\n${itemsList}\n\nTotal: ₹${total}\n\nDelivery Address:\n${address.address}, ${address.city}, ${address.state} - ${address.pincode}\n\nThank you for shopping with us!\n\nBest regards,\nFlipkart Clone Team`
    );

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      order
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ success: false, message: 'Failed to create order' });
  }
});

// Get user orders
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const userOrders = orders.filter(order => order.userId === Number(userId));

  res.json({
    success: true,
    count: userOrders.length,
    orders: userOrders
  });
});

// Get order by ID
router.get('/order/:orderId', (req, res) => {
  const order = orders.find(o => o.id === Number(req.params.orderId));

  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }

  res.json({
    success: true,
    order
  });
});

// Update order status
router.put('/:orderId', (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  const order = orders.find(o => o.id === Number(orderId));

  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }

  order.status = status;

  res.json({
    success: true,
    message: 'Order status updated',
    order
  });
});

module.exports = router;
