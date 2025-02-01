import React from 'react';
import {Carousel} from "react-bootstrap"; //destrucring yaptık.
import isa from "../img/isa.jpeg";
import devops from "../img/devops.jpeg";
import about from "../img/about.jpeg"; //!src içindeki img ler için import yapmak zorundayız. Publicte olursa bunu yapmana gerek yok.
import "./app.css"; 
// ! React bootstrap de göremediğim bir class'dı. inceleden ismini buldum ve stillendirdim.  Bootstrap ayarlamalarının react-bootstrap e gömülmesi söz konusu.


  //! fade=soluklaşarak diğer resme geçmesi için. Eğer durdurmak istersen pause={false} eklemelisin.React Bootstrap'te autoPlay diye bir prop yoktur.Otomatik geçiş varsayılan olarak zaten açıktır.interval={5000} 5 saniyede bir değiş. Eğer manuel geçiş yapmak istiyorsan, controls={true} bırakıp interval={null} eklemelisin.
  
const Slider = () => {
  return (
    <Carousel fade pause={false} interval={5000}>
      <Carousel.Item>
        <img className="w-100" src={isa} alt="Isa's" />
        <Carousel.Caption>
          <h3>Isa's Journey</h3>
          <p>Discover the world of technology with Isa.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={devops} alt="DevOps" />
        <Carousel.Caption>
          <h3>DevOps World</h3>
          <p>Automation and efficiency at its best.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={about} alt="About" />
        <Carousel.Caption>
          <h3>About Us</h3>
          <p>Learn more about our mission and vision.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
