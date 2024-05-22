import React, { useState, useEffect } from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

interface Book {
  id: number;
  title: string;
  author: string;
  isRead: boolean;
  rating: number;
  genre?: string;
}

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  // Charger les livres depuis le local storage au démarrage
  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // Sauvegarder les livres dans le local storage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book: Book) => {
    setBooks([...books, book]);
  };

  const toggleReadStatus = (id: number) => {
    setBooks(books.map(book => book.id === id ? { ...book, isRead: !book.isRead } : book));
  };

  const rateBook = (id: number, rating: number) => {
    setBooks(books.map(book => book.id === id ? { ...book, rating } : book));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Book Library</h1>
      <AddBookForm addBook={addBook} />
      <BookList books={books} toggleReadStatus={toggleReadStatus} rateBook={rateBook} />
    </div>
  );
};

export default App;
