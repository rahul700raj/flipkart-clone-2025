# Deployment Guide

## Frontend Deployment (Vercel/Netlify)

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to frontend: `cd frontend`
3. Run: `vercel`
4. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

## Backend Deployment

### Railway
1. Create account at railway.app
2. Create new project
3. Connect GitHub repository
4. Set environment variables:
   - `PORT=5000`
   - `JWT_SECRET=your_secret`
   - `EMAIL_USER=rm2778643@gmail.com`
   - `EMAIL_PASS=your_app_password`
5. Deploy

### Render
1. Create account at render.com
2. New Web Service
3. Connect GitHub repository
4. Set build command: `cd backend && npm install`
5. Set start command: `cd backend && npm start`
6. Add environment variables
7. Deploy

### Heroku
```bash
heroku login
heroku create flipkart-clone-api
git subtree push --prefix backend heroku main
heroku config:set JWT_SECRET=your_secret
heroku config:set EMAIL_USER=rm2778643@gmail.com
heroku config:set EMAIL_PASS=your_password
```

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://your-backend-url.com/api
```

### Backend (.env)
```
PORT=5000
JWT_SECRET=your_super_secret_key
EMAIL_USER=rm2778643@gmail.com
EMAIL_PASS=your_email_app_password
NODE_ENV=production
```

## Post-Deployment

1. Update frontend API URL to point to deployed backend
2. Test all features
3. Monitor logs for errors
4. Set up custom domain (optional)

## Database Migration (Future)

When moving to a real database:
1. Set up MongoDB Atlas or PostgreSQL
2. Update connection strings
3. Migrate mock data to database
4. Update API routes to use database queries
