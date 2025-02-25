import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import db from './config/connection.js';
import typeDefs from './schemas/typeDefs.js';
import resolvers from './schemas/resolvers.js';
import { getUserFromToken } from './services/auth.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // Enable GraphQL Playground in dev mode
});

async function startServer() {
  await server.start();

  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Apply Apollo Middleware with authentication context
  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req }) => {
        const token = req.headers.authorization?.split(' ')[1];
        const user = getUserFromToken(token);
        return { user };
      },
    })
  );

  // Serve static assets in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  // Start the database and server
  db.once('open', () => {
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}/graphql`));
  });
}

// Start Apollo Server
startServer();