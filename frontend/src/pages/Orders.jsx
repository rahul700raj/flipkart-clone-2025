import { Package } from 'lucide-react'

const Orders = () => {
  // Mock orders data
  const orders = []

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <div className="text-center py-16">
          <Package size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">No orders yet</h2>
          <p className="text-gray-600">Start shopping to see your orders here!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold">Order #{order.id}</h3>
                  <p className="text-sm text-gray-600">{order.date}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  {order.status}
                </span>
              </div>
              <div className="space-y-2">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.name} x {item.quantity}</span>
                    <span className="font-semibold">₹{item.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="border-t mt-4 pt-4 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold">₹{order.total.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Orders
