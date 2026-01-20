import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { useStore } from '../store/useStore'

const Wishlist = () => {
  const { wishlist } = useStore()

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-16">
          <Heart size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">Add products you love to your wishlist!</p>
          <Link to="/products" className="btn-primary">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist
