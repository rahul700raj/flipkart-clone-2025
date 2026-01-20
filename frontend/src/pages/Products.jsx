import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { SlidersHorizontal } from 'lucide-react'

const Products = () => {
  const { category } = useParams()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search')
  
  const [filters, setFilters] = useState({
    priceRange: 'all',
    rating: 'all',
    sortBy: 'popularity'
  })
  const [showFilters, setShowFilters] = useState(false)

  // Mock products data
  const allProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max (256GB)',
      category: 'electronics',
      price: 134900,
      originalPrice: 159900,
      rating: 4.6,
      reviews: 12453,
      image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
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
      freeDelivery: false
    },
    {
      id: 6,
      name: 'Adidas Ultraboost 22',
      category: 'fashion',
      price: 16999,
      originalPrice: 18999,
      rating: 4.6,
      reviews: 1876,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500',
      freeDelivery: true
    },
    {
      id: 7,
      name: 'Levi\'s 501 Original Jeans',
      category: 'fashion',
      price: 3999,
      originalPrice: 4999,
      rating: 4.3,
      reviews: 3421,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      freeDelivery: false
    },
    {
      id: 8,
      name: 'The Alchemist by Paulo Coelho',
      category: 'books',
      price: 299,
      originalPrice: 399,
      rating: 4.7,
      reviews: 15234,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
      freeDelivery: true
    },
  ]

  const filteredProducts = allProducts.filter(product => {
    if (category && product.category !== category) return false
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number)
      if (product.price < min || product.price > max) return false
    }
    if (filters.rating !== 'all' && product.rating < Number(filters.rating)) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return b.reviews - a.reviews
    }
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          {category ? category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'All Products'}
          {searchQuery && ` - Search: "${searchQuery}"`}
        </h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center space-x-2 btn-primary"
        >
          <SlidersHorizontal size={20} />
          <span>Filters</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 space-y-6`}>
          <div className="card">
            <h3 className="font-bold mb-4">Filters</h3>
            
            {/* Price Range */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Price Range</h4>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="all">All Prices</option>
                <option value="0-10000">Under ₹10,000</option>
                <option value="10000-50000">₹10,000 - ₹50,000</option>
                <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                <option value="100000-999999">Above ₹1,00,000</option>
              </select>
            </div>

            {/* Rating */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Minimum Rating</h4>
              <select
                value={filters.rating}
                onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="all">All Ratings</option>
                <option value="4">4★ & above</option>
                <option value="4.5">4.5★ & above</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <h4 className="font-semibold mb-2">Sort By</h4>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No products found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Products
