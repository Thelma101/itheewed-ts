# iTheeWed Deployment Guide

This guide covers deploying both the frontend and backend of the iTheeWed wedding website.

## Project Structure

```
itheewed-ts/
├── src/                    # Frontend (React + Vite)
├── Backend/               # Backend (Express + TypeScript)
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
├── package.json           # Frontend package.json
└── vite.config.ts
```

## Backend Deployment

### Option 1: Railway (Recommended)

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway:**
   ```bash
   railway login
   ```

3. **Navigate to backend directory:**
   ```bash
   cd Backend
   ```

4. **Initialize Railway project:**
   ```bash
   railway init
   ```

5. **Set environment variables:**
   ```bash
   railway variables set MONGODB_URI=your_mongodb_connection_string
   railway variables set PORT=3001
   ```

6. **Deploy:**
   ```bash
   railway up
   ```

### Option 2: Render

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`
5. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: 3001

### Option 3: Heroku

1. **Install Heroku CLI:**
   ```bash
   npm install -g heroku
   ```

2. **Login to Heroku:**
   ```bash
   heroku login
   ```

3. **Navigate to backend directory:**
   ```bash
   cd Backend
   ```

4. **Create Heroku app:**
   ```bash
   heroku create your-app-name
   ```

5. **Set environment variables:**
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_connection_string
   ```

6. **Deploy:**
   ```bash
   git add .
   git commit -m "Deploy backend"
   git push heroku main
   ```

## Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Option 2: Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Option 3: GitHub Pages

1. **Add GitHub Pages dependency:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## Environment Variables

### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
PORT=3001
NODE_ENV=production
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.com
```

## CORS Configuration

Make sure your backend CORS is configured to allow requests from your frontend domain:

```typescript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
```

## Build Commands

### Backend
```bash
cd Backend
npm install
npm run build
npm start
```

### Frontend
```bash
npm install
npm run build
npm run preview
```

## Troubleshooting

### Common Issues

1. **Build fails on backend:**
   - Ensure TypeScript is properly configured
   - Check that all dependencies are installed
   - Verify tsconfig.json settings

2. **Frontend can't connect to backend:**
   - Check CORS configuration
   - Verify API URL in frontend environment variables
   - Ensure backend is running and accessible

3. **Environment variables not loading:**
   - Check .env file location
   - Verify variable names match exactly
   - Restart the application after changes

### Health Checks

- Backend: `GET /` should return "Hello World!"
- Frontend: Should load without console errors

## Monitoring

- Set up logging for both frontend and backend
- Monitor API response times
- Set up error tracking (Sentry, LogRocket, etc.)
- Monitor database connections and performance

## Security Considerations

1. **Environment Variables:** Never commit .env files
2. **CORS:** Configure properly for production domains
3. **HTTPS:** Ensure all production deployments use HTTPS
4. **Rate Limiting:** Consider adding rate limiting to API endpoints
5. **Input Validation:** Validate all user inputs on both frontend and backend 