import React from 'react';
import Book from '../components/Books'
const BookList = () => {
  return (
    <div>
      <Book bookName = "Cracking The Coding Interview"
      author = "Gayle Laakmann McDowell"/>
      <Book bookName = "The Road to Learn React"
      author = "Robert Wieruch"/>
    </div>
  );
}
export default BookList;