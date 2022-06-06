import { useEffect } from "react";
import BookList from "../components/BookList/BookList";
import { Title } from "../components/Title/Title";
import { useAppDispatch, useAppSelector } from "../store/hooks/hook";
import { getBooks } from "../store/selector/booksSelector";
import { fetchBooks } from "../store/slices/bookReducer";

export const NewBook = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <Title>New Releases Books</Title>
      <BookList books={books}></BookList>
    </div>
  );
};
