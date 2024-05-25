import React from 'react';
import { Book } from '../types';
import { FaCheckCircle } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface BookCardProps {
    book: Book;
    onToggleRead: (id: number) => void;
    onDeleteBook: (id: number) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onToggleRead, onDeleteBook }) => {
    const { id, title, author, isRead, genre } = book;

    const handleToggleRead = () => {
        onToggleRead(id);
    };

    const handleDeleteBook = () => {
        onDeleteBook(id);
    };

    return (
        <div className="border border-cyan-300 rounded-xl p-4 m-2 relative bg-cyan-50 hover:bg-cyan-100 hover:scale-105">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm">Author : {author}</p>
            <p className="text-sm">Genre : {genre}</p>
            <div className="absolute bottom-4 right-4 flex items-center">
                <button onClick={handleToggleRead} className="text-xl">
                    {isRead ? <FaCheckCircle className="text-green-500" /> : <AiOutlineCloseCircle className="text-gray-800" />}
                </button>
            </div>
            <button onClick={handleDeleteBook} className="m-2 text-red-500 hover:text-red-700">Delete</button>
        </div>
    );
};

export default BookCard;
