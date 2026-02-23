import React,{createContext,useReducer} from 'react'
import { bookReducer } from './BooKReducer'

const initialState = {
  books: []
};

export const BookContext = createContext(initialState);

export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContext.Provider value={{ books: state.books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};