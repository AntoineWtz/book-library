import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import { Book } from './types';
import { getBooks, saveBooks } from './utils/storage';

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const savedBooks = getBooks();
    if (savedBooks) {
      setBooks(savedBooks);
      setFilteredBooks(savedBooks);
    }
  }, []);

  useEffect(() => {
    const savedBooks = getBooks();
    if (savedBooks) {
      setBooks(savedBooks);
      setFilteredBooks(savedBooks);
    }
  }, []);

  const filterBooks = () => {
    let filtered: Book[] = [];
    if (filter === 'all') {
      filtered = books;
    } else if (filter === 'read') {
      filtered = books.filter(book => book.isRead);
    } else if (filter === 'unread') {
      filtered = books.filter(book => !book.isRead);
    }

    if (searchTerm) {
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddBook = (newBook: Book) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    saveBooks(updatedBooks);
  };

  const handleDeleteBook = (id: number) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
    saveBooks(updatedBooks);
  };

  const handleToggleRead = (id: number) => {
    const updatedBooks = books.map(book =>
      book.id === id ? { ...book, isRead: !book.isRead } : book
    );
    setBooks(updatedBooks);
    saveBooks(updatedBooks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold m-4 text-center">My Book Library</h1>
      <div className="flex justify-around items-center mb-4">
        <div>
          <label htmlFor="filter" className="mr-2">Filter:</label>
          <select id="filter" className="p-2 border border-gray-300 rounded-md" value={filter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by title or author"
            className="p-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <BookForm onAddBook={handleAddBook} />
      <BookList books={filteredBooks} onToggleRead={handleToggleRead} onDeleteBook={handleDeleteBook} />
    </div>
  );
};

export default App;
