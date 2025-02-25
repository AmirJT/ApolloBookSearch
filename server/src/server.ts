import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import db from './config/connection.js';
import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';
import { getUserFromToken } from './services/auth.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

console.log("🔧 Initializing Apollo Server...");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, 
});

async function startServer() {
  await server.start();
  console.log("🚀 Apollo Server Started!");

  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req }) => {
        console.log("🔍 Checking Authorization Header:", req.headers.authorization);
        const token = req.headers.authorization?.split(' ')[1];
        const user = getUserFromToken(token);
        console.log("👤 Decoded User:", user);
        return { user };
      },
    })
  );

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  app.get('/', (_, res) => {
    res.send('Server is running!');
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}/graphql`);
  });

  db.once('open', () => {
    console.log("✅ Database Connected!");
  });

  db.on('error', (err) => {
    console.error("❌ Database Connection Error:", err);
  });
}

startServer();