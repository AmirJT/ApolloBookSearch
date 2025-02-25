# 📚 ApolloBookSearch - MERN GraphQL Book Search Engine

## 🚀 About the Project
ApolloBookSearch is a full-stack **MERN** application that allows users to **search for books**, **save books to their profile**, and **manage saved books** using **GraphQL & Apollo Client**. Built with **MongoDB, Express, React, and Node.js**, this project replaces traditional RESTful API calls with **GraphQL for optimized data fetching**.

## 🛠️ Features
- 🔍 **Search for Books** using the Google Books API
- 🔐 **User Authentication** (Signup & Login)
- 💾 **Save Books to User Profile**
- 🗑️ **Remove Saved Books**
- 🎭 **GraphQL API with Apollo Server**
- ⚡ **Fast & Scalable Data Fetching**
- 🎨 **Bootstrap for Responsive UI**

## ⚙️ Technologies Used
- **Frontend:** React, Apollo Client, React Bootstrap
- **Backend:** Node.js, Express.js, Apollo Server (GraphQL)
- **Database:** MongoDB (via MongoDB Atlas)
- **Authentication:** JSON Web Token (JWT)
- **API:** Google Books API

## 📸 Screenshots
🚀 *Coming soon...*

## 🏗️ Installation & Setup
### **1️⃣ Clone the Repository**
```bash
git clone git@github.com:AmirJT/ApolloBookSearch.git
cd ApolloBookSearch
```

### **2️⃣ Install Dependencies**
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the `server/` directory and add:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
```

### **4️⃣ Start the Application**
```bash
# Start Backend (Server)
cd server
npm run dev

# Start Frontend (Client)
cd ../client
npm run dev
```

## 🚀 Deployment
### **Backend Deployment** (Render + MongoDB Atlas)
1. **Push code to GitHub**
2. **Deploy the backend to Render** (connect to `server/`)
3. **Use MongoDB Atlas for database**

### **Frontend Deployment** (Vercel / Netlify)
1. **Push code to GitHub**
2. **Deploy the frontend to Vercel or Netlify**
3. **Set API URL in `client/src/utils/graphql.ts`**

## 📝 License
This project is licensed under the **MIT License**.

## 💡 Contributing
Pull requests are welcome! If you'd like to contribute, please fork the repository and submit a PR.

## 📬 Contact
- **GitHub:** [AmirJT](https://github.com/AmirJT)



