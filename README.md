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
   ```

   Create `.env` in the root directory:
   ```env
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

