import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ME, ADD_USER, LOGIN_USER, SAVE_BOOK, REMOVE_BOOK } from './graphql';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

// Get logged-in user's info
export const getMe = async (token: string) => {
  return await client.query({
    query: GET_ME,
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });
};

// Create a new user
export const createUser = async (userData: { username: string; email: string; password: string }) => {
  return await client.mutate({
    mutation: ADD_USER,
    variables: userData,
  });
};

// Log in a user
export const loginUser = async (userData: { email: string; password: string }) => {
  return await client.mutate({
    mutation: LOGIN_USER,
    variables: userData,
  });
};

// Save a book for a logged-in user
export const saveBook = async (bookData: any, token: string) => {
  return await client.mutate({
    mutation: SAVE_BOOK,
    variables: { input: bookData },
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });
};

// Remove a saved book for a logged-in user
export const deleteBook = async (bookId: string, token: string) => {
  return await client.mutate({
    mutation: REMOVE_BOOK,
    variables: { bookId },
    context: {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  });
};

// Search Google Books API (remains unchanged)
export const searchGoogleBooks = (query: string) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};