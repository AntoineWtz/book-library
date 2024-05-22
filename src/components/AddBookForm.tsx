import React, { useState } from 'react';

interface AddBookFormProps {
    addBook: (book: any) => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ addBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newBook = { id: Date.now(), title, author, isRead: false, rating: 0, genre };
        addBook(newBook);
        setTitle('');
        setAuthor('');
        setGenre('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col md:flex-row mb-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 flex-1"
                    required
                />
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                    className="p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2 flex-1"
                    required
                />
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    placeholder="Genre"
                    className="p-2 border border-gray-300 rounded-md flex-1"
                    required
                />
            </div>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Add Book
            </button>
        </form>
    );
};

export default AddBookForm;
