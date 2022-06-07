import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton/BackButton";
import { Loading } from "../components/Loading/Loading";
import { Title } from "../components/Title/Title";
import { useAppDispatch, useAppSelector } from "../store/hooks/hook";
import { getBooks, getBooksStatus } from "../store/selector/booksSelector";
import { fetchBookDetails } from "../store/slices/bookReducer";
import { DetailsBooks } from "../components/DetailsBooks/DetailsBook";
// import { SliderComponent } from "../components/Slider/Slider";

export const DetailsBook = () => {
  const { id = "" } = useParams();
  const { result } = useAppSelector(getBooks);
  console.log(result);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [id, dispatch]);

  const status = useAppSelector(getBooksStatus);
  if (status === "loading") {
    return <Loading />;
  }
  if (status === "error") {
    return <Title>WE have some Problems</Title>;
  }

  return (
    <>
      <BackButton />
      <DetailsBooks book={result} />
      {/* <SliderComponent /> */}
    </>
  );
};
