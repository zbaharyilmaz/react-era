import React from 'react';
import {Carousel} from "react-bootstrap"; //destrucring yaptık.
import isa from "../img/isa.jpeg";
import devops from "../img/isa.jpeg";
import about from "../img/isa.jpeg"; //!src içindeki img ler için import yapmak zorundayız. Publicte olursa bunu yapmana gerek yok.
import "./app.css"; 
// ! React bootstrap de göremediğim bir class'dı. inceleden ismini buldum ve stillendirdim.  Bootstrap ayarlamalarının react-bootstrap e gömülmesi söz konusu.

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
       <img src={isa} alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={devops} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={about} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;