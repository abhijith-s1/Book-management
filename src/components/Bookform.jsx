import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../features/books/BookSlice';

const BookForm = ({ currentBook, setEditing }) => {
  const [book, setBook] = useState({ title: '', author: '', id: Date.now() });
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentBook) {
      setBook(currentBook);
    }
  }, [currentBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      dispatch(updateBook(book));
      setEditing(false);
    } else {
      dispatch(addBook(book));
    }
    setBook({ title: '', author: '', id: Date.now() });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
          placeholder="Book Title"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
          placeholder="Author Name"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">{currentBook ? 'Update' : 'Add'} Book</button>
    </form>
  );
};

export default BookForm;