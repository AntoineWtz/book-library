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
    onDeleteBook: (id: number) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onToggleRead, onDeleteBook }) => {
    const { id, title, author, isRead, rating, genre } = book;

    const handleToggleRead = () => {
        onToggleRead(id);
    };

    const handleDeleteBook = () => {
        onDeleteBook(id);
    };

    return (
        <div className="border border-gray-300 rounded-md p-4 m-2">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
            <p>{isRead ? 'Read' : 'Unread'}</p>
            <div>
                <button onClick={handleToggleRead}>
                    {isRead ? 'Mark as Unread' : 'Mark as Read'}
                </button>
            </div>
            <button onClick={handleDeleteBook}>Delete</button>
        </div >
    );
};

export default BookCard;
