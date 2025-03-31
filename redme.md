# Assignment Project

## Project Structure
The project consists of two main folders:
- **Backend**: Contains the server-side code using Node.js, Express, Prisma (with TypeScript), and NeonDB as the database.
- **Frontend**: Contains the client-side code built using Vite, React, and TypeScript.

## Tech Stack

### Backend
- Node.js
- Express.js
- Prisma (ORM)
- TypeScript
- NeonDB (PostgreSQL)
- Zod (Validation)

### Frontend
- Vite
- React
- TypeScript
- React Hook Form (Form Handling)
- React Query (Data Fetching)

## Backend Setup

1. **Clone the Repository**
```sh
git clone <repository-url>
cd Backend
```

2. **Check TypeScript Installation**
Before proceeding, ensure TypeScript is installed globally on your system:
```sh
npx tsc --version
```
If TypeScript is not installed, install it globally:
```sh
npm install -g typescript
```

3. **Install Dependencies**
```sh
npm install
```

3. **Set Up Environment Variables**
Create a `.env` file in the `Backend` folder and add the following:
```env
PORT=5000
JWT_SECRET="your-jwt-secret-key"
FRONTEND_URL="http://localhost:5173"
```

4. **Prisma Setup**
Since all backend code resides in the `src` folder, Prisma will automatically create an `.env` file in `src` for the database connection.

Ensure your Prisma configuration is correct and that the `src/.env` file contains:
```env
DATABASE_URL="your-neon-db-connection-url"
```

Run Prisma migrations:
```sh
npx prisma migrate dev
```

5. **Start the Server**
```sh
npm run dev
```

## Backend Routes
### Authentication Routes (`localhost:PORT/api/v1/auth/`)
- `POST /register` - Register a new user
- `POST /signin` - Sign in user
- `POST /signout` - Sign out user

### User Routes (`localhost:PORT/api/v1/user/`)
- `GET /userdata` - Fetch user data
- `GET /authstatus` - Fetch user authentication status

---

## Frontend Setup

1. **Navigate to the Frontend Directory**
```sh
cd ../Frontend
```

2. **Install Dependencies**
```sh
npm install
```

3. **Set Up Environment Variables**
Create a `.env` file in the `Frontend` folder and add:
```env
VITE_BACKEND_URL="http://localhost:5000"
```

4. **Start the Frontend**
```sh
npm run dev
```

## Running the Full Stack Application
Ensure the backend server is running first, then start the frontend. The frontend will communicate with the backend via the specified API endpoints.

