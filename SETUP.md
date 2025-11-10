# Backend Setup Guide

## Environment Variables Setup

The backend requires the following environment variables to run properly.

### Local Development

1. Create a `.env` file in the `Backend` directory with the following content:

```env
# MongoDB Connection URL
# Get this from MongoDB Atlas or your MongoDB provider
MONGODB_CONNECT_URL=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority

# JWT Secret Password
# Use a strong random string for production (at least 32 characters)
JWT_PASSWORD=your-secret-jwt-key-here-change-this-in-production

# Frontend URL (optional, for CORS)
FRONTEND_URL=https://frontend-cortexmark.vercel.app

# Node Environment
NODE_ENV=development

# Port (optional, defaults to 3009)
PORT=3009
```

### Getting MongoDB Connection URL

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (or your MongoDB provider)
2. Create a cluster (if you don't have one)
3. Click "Connect" on your cluster
4. Choose "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your database password
7. Replace `<database>` with your database name (e.g., `cortexmark`)

Example:
```
mongodb+srv://myusername:mypassword@cluster0.xxxxx.mongodb.net/cortexmark?retryWrites=true&w=majority
```

### Production (Render)

When deploying to Render, set these environment variables in the Render dashboard:

1. Go to your Render service
2. Navigate to "Environment" tab
3. Add the following environment variables:

- `MONGODB_CONNECT_URL` - Your MongoDB connection string
- `JWT_PASSWORD` - Your JWT secret (use a strong random string)
- `FRONTEND_URL` - `https://frontend-cortexmark.vercel.app`
- `NODE_ENV` - `production`

### Verifying Setup

After setting up environment variables:

1. **Local Development:**
   ```bash
   cd Backend
   npm install
   npm run build
   npm start
   ```

2. You should see:
   ```
   ✅ MongoDB connection successful
   🚀 Server running on port 3009
   ✅ Server is ready to accept requests
   ```

3. Test the health endpoint:
   ```bash
   curl http://localhost:3009/api/v1/user/health
   ```
   Should return: `{"status":"ok","message":"Server is running"}`

### Troubleshooting

**Error: "MONGODB_CONNECT_URL environment variable is not set"**
- Make sure you have a `.env` file in the `Backend` directory
- Verify the `.env` file contains `MONGODB_CONNECT_URL=...`
- Check that the file is not in `.gitignore` (it should be!)

**Error: "MongoDB connection error"**
- Check your MongoDB connection string is correct
- Verify your MongoDB cluster allows connections from your IP (or 0.0.0.0/0 for all IPs in MongoDB Atlas)
- Make sure your MongoDB username and password are correct
- Check if your MongoDB cluster is running

**Error: "JWT_PASSWORD environment variable is not set"**
- Make sure `JWT_PASSWORD` is set in your `.env` file
- Use a strong random string (at least 32 characters)

### Security Notes

- **Never commit `.env` file to Git** - It should be in `.gitignore`
- Use different `JWT_PASSWORD` for development and production
- Use strong, random strings for `JWT_PASSWORD` in production
- Restrict MongoDB IP access in production (use specific IPs, not 0.0.0.0/0)

