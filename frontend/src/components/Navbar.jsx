import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, User, Heart, Menu, X } from 'lucide-react'
import { useStore } from '../store/useStore'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const { user, cart, logout } = useStore()

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Furniture',
    'Books',
    'Sports',
    'Beauty'
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`)
    }
  }

  const cartItemsCount = cart?.items?.length || 0

  return (
    <nav className="bg-flipkart-blue text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              Flipkart
              <span className="text-flipkart-yellow text-xs italic ml-1">Clone</span>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full px-4 py-2 rounded-sm text-gray-800 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-2.5">
                <Search className="text-flipkart-blue" size={20} />
              </button>
            </div>
          </form>

          {/* Right Menu */}
          <div className="flex items-center space-x-6">
            {user ? (
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/orders" className="hover:underline">Orders</Link>
                <button onClick={logout} className="hover:underline">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="hidden md:flex items-center space-x-1 hover:underline">
                <User size={20} />
                <span>Login</span>
              </Link>
            )}

            <Link to="/wishlist" className="hidden md:flex items-center space-x-1 hover:underline">
              <Heart size={20} />
              <span>Wishlist</span>
            </Link>

            <Link to="/cart" className="flex items-center space-x-1 hover:underline relative">
              <ShoppingCart size={20} />
              <span className="hidden md:inline">Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="hidden md:flex items-center space-x-6 py-2 border-t border-blue-600">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm hover:underline"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-4">
          <form onSubmit={handleSearch} className="mb-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded text-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div className="space-y-3">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="block hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {category}
              </Link>
            ))}
            {!user && (
              <Link to="/login" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            )}
            {user && (
              <>
                <Link to="/orders" className="block hover:underline" onClick={() => setIsMenuOpen(false)}>
                  Orders
                </Link>
                <button onClick={() => { logout(); setIsMenuOpen(false); }} className="block hover:underline">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
