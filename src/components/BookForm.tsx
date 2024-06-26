import React, { useState } from 'react';

interface BookFormProps {
    onAddBook: (book: any) => void;
}

const BookForm: React.FC<BookFormProps> = ({ onAddBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newBook = {
            id: Date.now(),
            title,
            author,
            genre,
            isRead: false,
            rating: 0
        };
        onAddBook(newBook);
        setTitle('');
        setAuthor('');
        setGenre('');
    };

    return (
        <form onSubmit={handleSubmit} className="m-4 flex flex-col items-center space-y-2">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="p-2 border border-gray-300 rounded-md w-64"
                required
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                className="p-2 border border-gray-300 rounded-md w-64"
                required
            />
            <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Genre"
                className="p-2 border border-gray-300 rounded-md w-64"
            />
            <button type="submit" className="p-2 bg-sky-500 text-white rounded-md hover:bg-sky-800">
                Add Book
            </button>
        </form>
    );
};

export default BookForm;
