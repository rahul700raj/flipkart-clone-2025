import { Link, useNavigate } from 'react-router-dom'
import { Trash2, Plus, Minus } from 'lucide-react'
import { useStore } from '../store/useStore'

const Cart = () => {
  const navigate = useNavigate()
  const { cart, updateCartItemQuantity, removeFromCart, getCartTotal } = useStore()

  const handleCheckout = () => {
    navigate('/checkout')
  }

  if (!cart.items || cart.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some products to get started!</p>
        <Link to="/products" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    )
  }

  const total = getCartTotal()
  const deliveryCharge = total > 50000 ? 0 : 500
  const finalTotal = total + deliveryCharge

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.items.map((item) => (
            <div key={item.id} className="card flex flex-col sm:flex-row gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full sm:w-32 h-32 object-cover rounded"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-xl font-bold">₹{item.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 line-through">
                    ₹{item.originalPrice.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 flex items-center space-x-1"
                  >
                    <Trash2 size={18} />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Charges</span>
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

            {deliveryCharge > 0 && (
              <p className="text-sm text-gray-600 mb-4">
                Add ₹{(50000 - total).toLocaleString()} more to get FREE delivery
              </p>
            )}

            <button onClick={handleCheckout} className="w-full btn-secondary">
              Proceed to Checkout
            </button>

            <Link to="/products" className="block text-center mt-4 text-flipkart-blue hover:underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
