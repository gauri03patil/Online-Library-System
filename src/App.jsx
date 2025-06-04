import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Browse from './Pages/Browse';
import BookDetails from './Pages/BookDetails';
import AddBook from './Pages/AddBook';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/books/:category" element={<Browse />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;