export const loadBooks = (): any[] => {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
};

export const saveBooks = (books: any[]) => {
    localStorage.setItem('books', JSON.stringify(books));
};