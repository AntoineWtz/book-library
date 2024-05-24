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
        <div className="border border-cyan-300 rounded-md p-4 m-2 bg-cyan-100">
            <h3 className='font-bold text-center'>{title}</h3>
            <p>Author : {author}</p>
            <p>Genre : {genre}</p>
            <p className='text-center'>{isRead ? 'Read' : 'Unread'}</p>
            <div className='flex flex-col'>
                <button onClick={handleToggleRead}>
                    {isRead ? 'Mark as Unread' : 'Mark as Read'}
                </button>
                <button className='text-rose-400 hover:text-rose-600' onClick={handleDeleteBook}>Delete</button>
            </div>
        </div >
    );
};

export default BookCard;
