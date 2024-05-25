import React from 'react';
import BookCard from './BookCard';
import { Book } from '../types';

interface BookListProps {
    books: Book[];
    onToggleRead: (id: number) => void;
    onDeleteBook: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onToggleRead, onDeleteBook }) => {
    return (
        <div className="flex flex-wrap justify-evenly">
            {books.map((book, index) => (
                <BookCard
                    key={book.id}
                    book={book}
                    onToggleRead={onToggleRead}
                    onDeleteBook={onDeleteBook}
                />
            ))}
        </div>
    );
};


export default BookList;
