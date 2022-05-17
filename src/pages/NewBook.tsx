import React, { useEffect, useState } from "react";
import BookList from "../components/BookList/BookList";
import { bookAPI } from "../services/bookService";
import { INewBooksApi } from "../types/books";

export const NewBook = () => {
  const [newBooks, setNewBooks] = useState<INewBooksApi>({
    books: [],
    error: "",
    total: "",
  });

  useEffect(() => {
    bookAPI.getNewBooks().then((books) => {
      setNewBooks(books);
    });
  }, []);
  return (
    <div>
      <h1>New Releases Books</h1>
      <BookList books={newBooks.books}></BookList>
    </div>
  );
};
