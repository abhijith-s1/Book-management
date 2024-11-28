import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './features/Store';
import BookList from './components/Booklist';
import BookForm from './components/Bookform';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  const [editing, setEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <Provider store={store}>
      <div className="container mt-5">
        <h1 className="text-center">Book Management System</h1>
        <BookForm currentBook={currentBook} setEditing={setEditing} />
        <BookList setCurrentBook={setCurrentBook} setEditing={setEditing} />
      </div>
    </Provider>
  );
};

export default App;