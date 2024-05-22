import React from 'react';
import BookCard from './BookCard';
import { Book } from '../types';


interface BookListProps {
    books: Book[];
    onToggleRead: (id: number) => void;
    onRateBook: (id: number, rating: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onToggleRead, onRateBook }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {books.map((book, index) => (
                <BookCard
                    key={book.id}
                    book={book}
                    onToggleRead={onToggleRead}
                    onRateBook={onRateBook}
                />
            ))}
        </div>
    );
};


export default BookList;
