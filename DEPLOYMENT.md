# Backend Deployment Guide

This guide will help you deploy the Cortex Mark backend server.

## Prerequisites

- MongoDB database (MongoDB Atlas recommended)
- Node.js 18+ installed locally (for building)
- Account on one of these platforms:
  - [Vercel](https://vercel.com)
  - [Render](https://render.com)
  - [Railway](https://railway.app)

## Environment Variables

You need to set these environment variables in your deployment platform:

1. `MONGODB_CONNECT_URL` - Your MongoDB connection string
2. `JWT_PASSWORD` - Secret key for JWT token signing
3. `PORT` - Server port (optional, defaults to 3009)

## Deployment Options

### Option 1: Deploy to Vercel

**Note:** Vercel uses serverless functions. The backend is configured to work with Vercel.

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to the Backend folder: `cd Backend`
3. Run: `vercel`
4. Follow the prompts to deploy
5. Set environment variables in Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add `MONGODB_CONNECT_URL` and `JWT_PASSWORD`
   - The `VERCEL=1` environment variable is automatically set by Vercel

**Important:** After deployment, your backend URL will be something like `https://your-project.vercel.app`

### Option 2: Deploy to Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: cortex-mark-backend
   - **Root Directory**: Backend
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Add environment variables:
   - `MONGODB_CONNECT_URL`
   - `JWT_PASSWORD`
   - `NODE_ENV=production`
6. Click "Create Web Service"

### Option 3: Deploy to Railway

1. Go to [Railway Dashboard](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Set the root directory to `Backend`
5. Add environment variables:
   - `MONGODB_CONNECT_URL`
   - `JWT_PASSWORD`
6. Railway will automatically detect the build and start commands

## After Deployment

1. **Get your backend URL** from your deployment platform (e.g., `https://your-backend.railway.app`)

2. **Update Chrome Extension Config**:
   - Open `Chrome_Extension_CortexMark/src/Config.ts`
   - Replace `YOUR_DEPLOYED_BACKEND_URL_HERE` with your actual backend URL
   - Rebuild the extension

3. **Update Frontend Config** (if needed):
   - The frontend uses `VITE_BACKEND_URL` environment variable
   - Set this in your Vercel frontend deployment environment variables

4. **Update Backend CORS** (if needed):
   - The backend already allows `https://deploy-cortex-mark.vercel.app`
   - If you have additional frontend URLs, add them to `Backend/src/index.ts`

## Testing

After deployment, test your backend:
- Health check: `https://your-backend-url/api/v1/user/health`
- Should return: `{"status":"ok","message":"Server is running"}`

## Notes

- The backend CORS is configured to allow:
  - Localhost (any port)
  - Chrome extensions
  - `https://deploy-cortex-mark.vercel.app` (your frontend)
- Make sure your MongoDB database allows connections from your deployment platform's IP addresses

