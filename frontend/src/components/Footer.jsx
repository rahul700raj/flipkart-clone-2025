import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/press" className="hover:text-white">Press</Link></li>
              <li><Link to="/corporate" className="hover:text-white">Corporate Information</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/payments" className="hover:text-white">Payments</Link></li>
              <li><Link to="/shipping" className="hover:text-white">Shipping</Link></li>
              <li><Link to="/cancellation" className="hover:text-white">Cancellation & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Policy</h3>
            <ul className="space-y-2">
              <li><Link to="/return-policy" className="hover:text-white">Return Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms Of Use</Link></li>
              <li><Link to="/security" className="hover:text-white">Security</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>rm2778643@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2025 Flipkart Clone. All rights reserved.</p>
          <p className="text-sm mt-2">Developed by Rahul Mishra</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
