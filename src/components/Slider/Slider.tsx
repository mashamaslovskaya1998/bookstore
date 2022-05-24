import React, { Component } from "react";
import Slider from "react-slick";
import { INewBooksApi } from "../../types";

interface ISliderProps {
    books: INewBooksApi[];
  }

export const SliderComponent = ({books}: ISliderProps) => {
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
           
          )
          })}
      </Slider>
    </div>
  );
};
