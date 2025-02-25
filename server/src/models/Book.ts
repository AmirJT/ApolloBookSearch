import { Schema, type Document } from 'mongoose';

export interface BookDocument extends Document {
  bookId: string;
  title: string;
  authors: string[];
  description: string;
  image: string;
  link: string;
}

// This is a subdocument schema, it won't become its own model but will be used in the User's `savedBooks` array
const bookSchema = new Schema<BookDocument>({
  bookId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

export default bookSchema;