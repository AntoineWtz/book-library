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
    onToggleRead: (id: number) => void;
    onRateBook: (id: number, rating: number) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onToggleRead, onRateBook }) => {
    const { id, title, author, isRead, rating, genre } = book;

    const handleToggleRead = () => {
        onToggleRead(id);
    };

    const handleRateBook = (newRating: number) => {
        onRateBook(id, newRating);
    };

    return (
        <div className="border border-gray-300 rounded-md p-4 m-2">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}</p>
            <button onClick={handleToggleRead}>
                {isRead ? 'Mark as Unread' : 'Mark as Read'}
            </button>
            <input
                type="number"
                value={rating}
                onChange={(e) => handleRateBook(Number(e.target.value))}
            />
        </div>
    );
};

export default BookCard;
