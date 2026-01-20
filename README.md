# Flipkart Clone - Modern E-commerce Platform

A full-stack e-commerce application inspired by Flipkart, built with React, Node.js, and modern web technologies.

## 🚀 Features

### Frontend
- **Modern UI/UX** - Responsive design matching Flipkart's interface
- **Product Catalog** - Browse products by categories with filters
- **Search Functionality** - Real-time product search
- **Shopping Cart** - Add, update, and remove items
- **User Authentication** - Secure login and registration
- **Product Details** - Detailed product pages with reviews
- **Wishlist** - Save products for later
- **Order Management** - Track your orders

### Backend
- **RESTful API** - Clean and organized API endpoints
- **JWT Authentication** - Secure user authentication
- **Product Management** - CRUD operations for products
- **Cart Management** - Handle shopping cart operations
- **Order Processing** - Complete order workflow
- **Email Notifications** - Order confirmations via email

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React (Icons)
- Zustand (State Management)

### Backend
- Node.js
- Express.js
- JWT (JSON Web Tokens)
- Bcrypt (Password Hashing)
- Nodemailer (Email Service)
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Clone the repository
```bash
git clone https://github.com/rahul700raj/flipkart-clone-2025.git
cd flipkart-clone-2025
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

### Backend Setup
```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Update .env with your configuration
# Then start the server
npm start
```

The backend will run on `http://localhost:5000`

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=rm2778643@gmail.com
EMAIL_PASS=your_email_password
NODE_ENV=development
```

## 📁 Project Structure

```
flipkart-clone-2025/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── utils/
│   ├── server.js
│   └── package.json
└── README.md
```

## 🌟 Key Features Explained

### Product Categories
- Electronics
- Fashion
- Home & Furniture
- Books & Media
- Sports & Fitness
- Beauty & Personal Care

### User Features
- Secure authentication with JWT
- Profile management
- Order history
- Wishlist management

### Shopping Experience
- Advanced product filters
- Sort by price, rating, popularity
- Product reviews and ratings
- Multiple product images
- Related products suggestions

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist folder
```

### Backend (Railway/Render/Heroku)
```bash
cd backend
# Set environment variables on your platform
# Deploy using platform-specific commands
```

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:category` - Get products by category

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove from cart

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**Rahul Mishra**
- Email: rm2778643@gmail.com
- GitHub: [@rahul700raj](https://github.com/rahul700raj)

## 🙏 Acknowledgments

- Inspired by Flipkart's design and functionality
- Built for educational purposes

---

⭐ Star this repo if you find it helpful!
