import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector(state => state.books);

  const [book, setBook] = useState({ title: '', author: '', description: '', category: '', rating: '' });
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!book.title || !book.author || !book.description || !book.category || !book.rating) {
      setError('All fields are required');
      return;
    }
    dispatch({ type: 'ADD_BOOK', payload: { ...book, id: books.length + 1, rating: Number(book.rating) } });
    navigate('/browse');
  };

  return (
    <div className="add-book-container">
  <h2>Add a New Book</h2>
  {error && <p className="error-message">{error}</p>}
  <form onSubmit={handleSubmit} className="add-book-form">
    <input type="text" placeholder="Title" value={book.title} onChange={e => setBook({ ...book, title: e.target.value })} />
    <input type="text" placeholder="Author" value={book.author} onChange={e => setBook({ ...book, author: e.target.value })} />
    <textarea placeholder="Description" value={book.description} onChange={e => setBook({ ...book, description: e.target.value })} />
    <input type="text" placeholder="Category" value={book.category} onChange={e => setBook({ ...book, category: e.target.value })} />
    <input type="number" placeholder="Rating (1-5)" value={book.rating} onChange={e => setBook({ ...book, rating: e.target.value })} />
    <button type="submit">Add Book</button>
  </form>
</div>
  );
}

export default AddBook;