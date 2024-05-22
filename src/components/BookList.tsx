import React from 'react';
import BookCard from './BookCard';

interface BookListProps {
    books: any[];
    toggleReadStatus: (id: number) => void;
    rateBook: (id: number, rating: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, toggleReadStatus, rateBook }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    book={book}
                    toggleReadStatus={toggleReadStatus}
                    rateBook={rateBook}
                />
            ))}
        </div>
    );
};

export default BookList;