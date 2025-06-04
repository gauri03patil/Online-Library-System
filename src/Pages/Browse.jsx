import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function Browse() {
  const { category } = useParams();
  const [search, setSearch] = useState('');
  const books = useSelector(state => state.books);

  const filtered = books.filter(book => {
    const matchCategory = category ? book.category === category : true;
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                        book.author.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="container">
      <h1>{category ? `${category} Books` : 'All Books'}</h1>
      <input type="text" placeholder="Search by title or author..." value={search} onChange={e => setSearch(e.target.value)} />
      <ul>
        {filtered.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}<Link to={`/book/${book.id}`}> View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Browse;
