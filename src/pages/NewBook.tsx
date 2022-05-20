import React, { useEffect, useState } from "react";
import BookList from "../components/BookList/BookList";
import { Title } from "../components/Title/Title";
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
      <Title>New Releases Books</Title>
      <BookList books={newBooks.books}></BookList>
    </div>
  );
};
