const initialState = {
  books: [
    { id: 1, title: 'Dune', author: 'Frank Herbert', description: 'Sci-Fi classic.', category: 'Sci-Fi', rating: 4.5 },
    { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', description: 'History of humankind.', category: 'Non-Fiction', rating: 4.8 },
    { id: 3, title: 'Harry Potter', author: 'J.K. Rowling', description: 'Wizard boy!', category: 'Fiction', rating: 4.7 }
  ]
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return { ...state, books: [...state.books, action.payload] };
    default:
      return state;
  }
};