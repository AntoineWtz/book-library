import React from 'react';

interface BookCardProps {
    book: any;
    toggleReadStatus: (id: number) => void;
    rateBook: (id: number, rating: number) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, toggleReadStatus, rateBook }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white m-4 p-2">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.title}</div>
                <p className="text-gray-700 text-base">Author: {book.author}</p>
                <p className="text-gray-700 text-base">Genre: {book.genre}</p>
                <p className="text-gray-700 text-base">Status: {book.isRead ? 'Read' : 'Unread'}</p>
                <div className="flex items-center mt-4">
                    <button
                        onClick={() => toggleReadStatus(book.id)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    >
                        Mark as {book.isRead ? 'Unread' : 'Read'}
                    </button>
                    <select
                        value={book.rating}
                        onChange={(e) => rateBook(book.id, Number(e.target.value))}
                        className="ml-2 p-1 border border-gray-300 rounded-md"
                    >
                        <option value="0">Rating</option>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <option key={rating} value={rating}>
                                {rating}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
