import React from 'react';

interface BookCardProps {
    book: {
        id: number;
        title: string;
        author: string;
        isRead: boolean;
        rating: number;
        genre?: string;
    };
    toggleReadStatus: (id: number) => void;
    rateBook: (id: number, rating: number) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, toggleReadStatus, rateBook }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 p-4">
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">{book.title}</div>
                <p className="text-gray-700 text-base">Author: {book.author}</p>
                <p className="text-gray-700 text-base">Genre: {book.genre}</p>
                <p className="text-gray-700 text-base">
                    Status: <button onClick={() => toggleReadStatus(book.id)} className="text-blue-500 underline">{book.isRead ? 'Read' : 'Unread'}</button>
                </p>
                <p className="text-gray-700 text-base">
                    Rating: {book.rating}
                    <button onClick={() => rateBook(book.id, book.rating + 1)} className="ml-2 text-blue-500 underline">+1</button>
                </p>
            </div>
        </div>
    );
};

export default BookCard;
