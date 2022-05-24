import Slider from "react-slick";
import { IBookDetailsApi } from "../../types";

interface ISliderProps {
  books: IBookDetailsApi[];
}

export const SliderComponent = ({ books }: ISliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {books.map((book) => {
          return (
            <div>
              <div>
                <img src={book.image} alt={book.title} />
              </div>
              <div>
                <p>{book.title}</p>
                <p>{book.subtitle}</p>
                <p>{book.price}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
