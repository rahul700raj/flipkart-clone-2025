import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'

const Checkout = () => {
  const navigate = useNavigate()
  const { cart, getCartTotal, clearCart, user } = useStore()
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  })

  const total = getCartTotal()
  const deliveryCharge = total > 50000 ? 0 : 500
  const finalTotal = total + deliveryCharge

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock order placement
    alert('Order placed successfully! You will receive a confirmation email at ' + (user?.email || 'rm2778643@gmail.com'))
    clearCart()
    navigate('/orders')
  }

  if (!cart.items || cart.items.length === 0) {
    navigate('/cart')
    return null
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Delivery Address */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">Full Address</label>
              <textarea
                required
                rows="3"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-flipkart-blue"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">City</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-flipkart-blue"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">State</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-flipkart-blue"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Pincode</label>
              <input
                type="text"
                required
                pattern="[0-9]{6}"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-flipkart-blue"
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-flipkart-blue"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-3">
            {cart.items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t pt-3 flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">₹{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="font-semibold">
                {deliveryCharge === 0 ? (
                  <span className="text-green-600">FREE</span>
                ) : (
                  `₹${deliveryCharge}`
                )}
              </span>
            </div>
            <div className="border-t pt-3 flex justify-between text-lg">
              <span className="font-bold">Total</span>
              <span className="font-bold">₹{finalTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="card">
          <h2 className="text-xl font-bold mb-4">Payment Method</h2>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="payment" value="cod" defaultChecked className="w-4 h-4" />
              <span>Cash on Delivery</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="payment" value="card" className="w-4 h-4" />
              <span>Credit/Debit Card</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="payment" value="upi" className="w-4 h-4" />
              <span>UPI</span>
            </label>
          </div>
        </div>

        <button type="submit" className="w-full btn-secondary text-lg py-3">
          Place Order
        </button>
      </form>
    </div>
  )
}

export default Checkout
