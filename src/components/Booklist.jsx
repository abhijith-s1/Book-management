import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../features/books/BookSlice';

const BookList = ({ setCurrentBook, setEditing }) => {
  const books = useSelector(state => state.books.books);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      <h2>Book List</h2>
      <ul className="list-group">
        {books.map(book => (
          <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
            {book.title} by {book.author}
            <div>
              <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteBook(book.id))}>Delete</button>
              <button className="btn btn-warning btn-sm ms-2" onClick={() => { setCurrentBook(book); setEditing(true); }}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;