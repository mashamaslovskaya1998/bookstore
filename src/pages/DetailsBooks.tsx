import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookAPI } from "../services/bookService";
import { IBookDetailsApi } from "../types/books";

export const DetailsBooks = () => {
  const { id = "" } = useParams();
  const [detailsBook, setDetailsBook] = useState<IBookDetailsApi>();

  useEffect(() => {
    bookAPI.getBookDetails(id).then((book) => {
      setDetailsBook(book);
    });
  }, [id]);

  return (
    <div>
      <h1> {detailsBook?.title ? detailsBook.title : "No Title"}</h1>
      <h2> {detailsBook?.subtitle}</h2>
      <p>{detailsBook?.price}</p>
      <i>{detailsBook?.isbn10}</i>
      <p>{detailsBook?.desc}</p>
    </div>
  );
};
