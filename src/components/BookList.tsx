import React from 'react';
import BookCard from './BookCard';

interface BookListProps {
    books: {
        id: number;
        title: string;
        author: string;
        isRead: boolean;
        rating: number;
        genre?: string;
    }[];
    toggleReadStatus: (id: number) => void;
    rateBook: (id: number, rating: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, toggleReadStatus, rateBook }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {books.map((book, index) => (
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
