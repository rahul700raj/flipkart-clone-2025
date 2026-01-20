import { Link } from 'react-router-dom'
import { Heart, Star } from 'lucide-react'
import { useStore } from '../store/useStore'

const ProductCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, wishlist } = useStore()
  const isInWishlist = wishlist?.some(item => item.id === product.id)

  const handleWishlistToggle = (e) => {
    e.preventDefault()
    if (isInWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <Link to={`/product/${product.id}`} className="card group relative">
      <button
        onClick={handleWishlistToggle}
        className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <Heart
          size={20}
          className={isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}
        />
      </button>

      <div className="aspect-square overflow-hidden rounded-lg mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
      
      <div className="flex items-center space-x-1 mb-2">
        <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-xs">
          <span>{product.rating}</span>
          <Star size={12} className="ml-1 fill-white" />
        </div>
        <span className="text-gray-500 text-sm">({product.reviews})</span>
      </div>

      <div className="flex items-center space-x-2 mb-2">
        <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
        <span className="text-sm text-green-600 font-semibold">{discount}% off</span>
      </div>

      {product.freeDelivery && (
        <p className="text-xs text-green-600 font-semibold">Free Delivery</p>
      )}
    </Link>
  )
}

export default ProductCard
