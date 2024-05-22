import { Book } from '../types';

export const getBooks = (): Book[] | null => {
    const booksString = localStorage.getItem('books');
    if (booksString) {
        return JSON.parse(booksString);
    }
    return null;
};

export const saveBooks = (books: Book[]): void => {
    localStorage.setItem('books', JSON.stringify(books));
};
