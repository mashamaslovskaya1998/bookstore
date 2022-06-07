import { useEffect } from "react";
import Slider from "react-slick";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hook";
import { getBooks } from "../../store/selector/booksSelector";
import { fetchBooks } from "../../store/slices/bookReducer";
import { IBook } from "../../types";
import {
  CustomSlide,
  SliderMainTitle,
  SliderPrice,
  SliderSubtitle,
  SliderTitle,
  StyledImageBlock,
  StyledLink,
} from "./style";

export const SliderComponent = () => {
  const { books } = useAppSelector(getBooks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 1020,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 760,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div>
      <SliderMainTitle>New books</SliderMainTitle>
      <Slider {...settings}>
        {books.map((book) => {
          return (
            <CustomSlide key={book.isbn13}>
              <StyledLink to={`/books/${book.isbn13}`}>
                <StyledImageBlock src={book.image} alt={book.title} />

                <SliderTitle>
                  {book.title ? book.title : "No title"}
                </SliderTitle>
                <SliderSubtitle>
                  {book.subtitle ? book.subtitle : "No subtitle"}
                </SliderSubtitle>
                <SliderPrice>
                  {book.price === "$0.00" ? "Free" : book.price}
                </SliderPrice>
              </StyledLink>
            </CustomSlide>
          );
        })}
      </Slider>
    </div>
  );
};
