# iTheeWed - Wedding Website

A modern, responsive wedding website built with React, TypeScript, and Express.js.

## 🎉 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Interactive Components**: Carousels, calendars, subscription forms, and more
- **Mobile-First**: Optimized for all device sizes
- **Real-time Updates**: Live data synchronization
- **SEO Optimized**: Built for search engine visibility
- **Fast Performance**: Optimized loading and rendering

## 🏗️ Project Structure

```
itheewed-ts/
├── src/                    # Frontend (React + Vite + TypeScript)
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   └── types/            # TypeScript type definitions
├── Backend/              # Backend (Express + TypeScript)
│   ├── src/
│   │   ├── controller/   # Route controllers
│   │   ├── model/        # Database models
│   │   ├── route/        # API routes
│   │   └── server.ts     # Main server file
│   ├── package.json
│   └── tsconfig.json
├── public/               # Static assets
├── package.json          # Frontend dependencies
└── vite.config.ts        # Vite configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB database

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd itheewed-ts
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd Backend
   npm install
   cd ..
   ```

4. **Set up environment variables:**

   Create `.env` in the Backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=3001
   NODE_ENV=development
   ```

   Create `.env` in the root directory:
   ```env
   VITE_API_URL=http://localhost:3001
   ```

5. **Start development servers:**

   **Backend:**
   ```bash
   cd Backend
   npm run dev
   ```

   **Frontend (in a new terminal):**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

## 🛠️ Development

### Available Scripts

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Backend:**
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server

### Tech Stack

**Frontend:**
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Material-UI
- React Router
- Axios

**Backend:**
- Express.js
- TypeScript
- MongoDB with Mongoose
- CORS
- dotenv

## 📱 Components

### UI Components
- **Carousels**: Image carousels with text overlays
- **Calendar**: Interactive calendar with time slot management
- **FAQ**: Accordion-style frequently asked questions
- **Footer**: Modern footer with multiple layout options
- **Mobile Banners**: Responsive mobile banner layouts
- **Subscription Forms**: Email subscription with validation

### Features
- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: Theme switching capability
- **Animations**: Smooth transitions and micro-interactions
- **Form Validation**: Client and server-side validation
- **Local Storage**: Persistent data storage
- **API Integration**: RESTful API communication

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options

**Frontend:**
- Vercel (Recommended)
- Netlify
- GitHub Pages

**Backend:**
- Railway (Recommended)
- Render
- Heroku

## 🔧 Configuration

### Environment Variables

**Backend (.env):**
```env
MONGODB_URI=mongodb://your-connection-string
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

**Frontend (.env):**
```env
VITE_API_URL=https://your-backend-domain.com
```

### Build Configuration

The project uses Vite for frontend bundling and TypeScript for both frontend and backend type safety.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment issues
- Review the troubleshooting section in the deployment guide
- Open an issue on GitHub

## 🎯 Roadmap

- [ ] Add authentication system
- [ ] Implement real-time chat
- [ ] Add photo gallery management
- [ ] Create admin dashboard
- [ ] Add RSVP functionality
- [ ] Implement email notifications
- [ ] Add analytics tracking
