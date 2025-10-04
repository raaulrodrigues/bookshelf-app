import fs from 'fs';
import path from 'path';
import { Book } from './types';

const booksFilePath = path.join(process.cwd(), 'data/books.json');
const genresFilePath = path.join(process.cwd(), 'data/genres.json');

export function getBooks(): Book[] {
  const jsonData = fs.readFileSync(booksFilePath);
  return JSON.parse(jsonData.toString());
}

export function getGenres(): string[] {
  const jsonData = fs.readFileSync(genresFilePath);
  return JSON.parse(jsonData.toString());
}