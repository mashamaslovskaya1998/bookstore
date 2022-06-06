import Slider from "react-slick";
import { IBook } from "../../types";
import {
  CustomSlide,
  SlideContainer,
  SliderBlock,
  SliderMainTitle,
  SliderPrice,
  SliderSubtitle,
  SliderTitle,
  StyledImageBlock,
  StyledLink,
} from "./style";

interface IProps {
  books: IBook[];
}

export const SliderComponent = ({ books }: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div>
      <SliderMainTitle>New books</SliderMainTitle>
      <Slider {...settings}>
        {books.map((book) => {
          return (
            <CustomSlide key={book.isbn13}>
              <StyledLink to={`/books/${book.isbn13}`}>
                <SlideContainer>
                  <StyledImageBlock src={book.image} alt={book.title} />
                  <SliderBlock>
                    <SliderTitle>{book.title}</SliderTitle>
                    <SliderSubtitle>{book.subtitle}</SliderSubtitle>
                    <SliderPrice>
                      {book.price === "$0.00" ? "Free" : book.price}
                    </SliderPrice>
                  </SliderBlock>
                </SlideContainer>
              </StyledLink>
            </CustomSlide>
          );
        })}
      </Slider>
    </div>
  );
};
