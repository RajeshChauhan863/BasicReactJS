import React from 'react';
const Book = (props) => {
  const {bookName, author} = props;
  return (
    <div>
      <h1>Book name : {bookName}</h1>
      <h2>Author : {author}</h2>
    </div>
  );
};
export default Book;