import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { Smartphone, Shirt, Home as HomeIcon, Book, Dumbbell, Sparkles } from 'lucide-react'

const Home = () => {
  const categories = [
    { name: 'Electronics', icon: Smartphone, link: '/products/electronics' },
    { name: 'Fashion', icon: Shirt, link: '/products/fashion' },
    { name: 'Home & Furniture', icon: HomeIcon, link: '/products/home-furniture' },
    { name: 'Books', icon: Book, link: '/products/books' },
    { name: 'Sports', icon: Dumbbell, link: '/products/sports' },
    { name: 'Beauty', icon: Sparkles, link: '/products/beauty' },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max (256GB)',
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
      price: 12995,
      originalPrice: 16995,
      rating: 4.4,
      reviews: 2134,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      freeDelivery: false
    },
    {
      id: 6,
      name: 'Canon EOS R6 Mark II',
      price: 239995,
      originalPrice: 259995,
      rating: 4.9,
      reviews: 876,
      image: 'https://images.unsplash.com/photo-1606980707986-e660c1e1d7c3?w=500',
      freeDelivery: true
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Flipkart Clone</h1>
          <p className="text-xl mb-8">Discover amazing deals on your favorite products</p>
          <Link to="/products" className="bg-flipkart-yellow text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="card text-center hover:shadow-xl transition-shadow"
            >
              <category.icon className="mx-auto mb-3 text-flipkart-blue" size={48} />
              <h3 className="font-semibold">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Deals Banner */}
      <div className="bg-flipkart-yellow py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Deals of the Day</h2>
          <p className="text-lg text-gray-800 mb-6">Up to 80% off on selected items</p>
          <Link to="/products" className="bg-flipkart-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All Deals
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
