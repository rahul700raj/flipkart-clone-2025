import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react'
import { useStore } from '../store/useStore'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart, addToWishlist, wishlist } = useStore()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Mock product data
  const product = {
    id: Number(id),
    name: 'iPhone 15 Pro Max (256GB)',
    price: 134900,
    originalPrice: 159900,
    rating: 4.6,
    reviews: 12453,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    ],
    description: 'The iPhone 15 Pro Max features a stunning 6.7-inch Super Retina XDR display, powerful A17 Pro chip, and an advanced camera system with 48MP main camera.',
    features: [
      '6.7-inch Super Retina XDR display',
      'A17 Pro chip with 6-core CPU',
      '48MP Main camera',
      'Up to 29 hours video playback',
      'Titanium design',
      'Action button',
    ],
    specifications: {
      'Display': '6.7-inch OLED',
      'Processor': 'A17 Pro',
      'RAM': '8GB',
      'Storage': '256GB',
      'Camera': '48MP + 12MP + 12MP',
      'Battery': '4422 mAh',
    },
    freeDelivery: true,
    inStock: true
  }

  const isInWishlist = wishlist?.some(item => item.id === product.id)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  const handleAddToCart = () => {
    addToCart({ ...product, image: product.images[0] }, quantity)
    navigate('/cart')
  }

  const handleWishlistToggle = () => {
    addToWishlist({ ...product, image: product.images[0] })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images */}
        <div>
          <div className="aspect-square overflow-hidden rounded-lg mb-4 bg-white">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded border-2 ${
                  selectedImage === index ? 'border-flipkart-blue' : 'border-gray-200'
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center bg-green-600 text-white px-3 py-1 rounded">
              <span className="font-semibold">{product.rating}</span>
              <Star size={16} className="ml-1 fill-white" />
            </div>
            <span className="text-gray-600">{product.reviews.toLocaleString()} ratings</span>
          </div>

          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
              <span className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
              <span className="text-lg text-green-600 font-semibold">{discount}% off</span>
            </div>
            <p className="text-sm text-gray-600">Inclusive of all taxes</p>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-bold mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery Info */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <Truck className="text-green-600" />
              <span className="font-semibold">Free Delivery</span>
            </div>
            <div className="flex items-center space-x-3 mb-2">
              <RotateCcw className="text-blue-600" />
              <span>7 Days Replacement Policy</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="text-purple-600" />
              <span>1 Year Warranty</span>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Quantity</label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-100"
              >
                -
              </button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border rounded flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 btn-secondary flex items-center justify-center space-x-2"
            >
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={handleWishlistToggle}
              className={`px-6 py-2 border-2 rounded ${
                isInWishlist
                  ? 'border-red-500 text-red-500'
                  : 'border-gray-300 hover:border-red-500 hover:text-red-500'
              }`}
            >
              <Heart size={20} className={isInWishlist ? 'fill-red-500' : ''} />
            </button>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-bold mb-3">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Specifications */}
          <div>
            <h3 className="font-bold mb-3">Specifications</h3>
            <div className="space-y-2">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex border-b pb-2">
                  <span className="w-1/3 text-gray-600">{key}</span>
                  <span className="w-2/3 font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
