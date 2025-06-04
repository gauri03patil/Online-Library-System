import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state => state.books.find(b => b.id === Number(id)));

  if (!book) return <h2>Book Not Found</h2>;

  return (
    <div className="container">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <Link to="/browse">Back to Browse</Link>
    </div>
  );
}

export default BookDetails;