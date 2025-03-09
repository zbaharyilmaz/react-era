import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, CardMedia } from '@mui/material';
import Slider1 from "../assets/img/Slider1.jpeg";
import Slider2 from "../assets/img/Slider2.jpeg";
import Slider3 from "../assets/img/Slider3.jpeg";

const sliderData = [
  {
    imgSrc: Slider1,
    title: 'Own Tomorrow',
    subtitle: 'Coding is the Future, Join the Future!',
  },
  {
    imgSrc: Slider2,
    title: 'Dream Big',
    subtitle: 'Dream, Code, Achieve!',
  },
  {
    imgSrc: Slider3,
    title: 'Code Passion',
    subtitle: 'Every Line is a New Beginning!',
  },
];

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box sx={{ width: '90%', margin: 'auto'}}>
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <Box key={index} sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              src={slide.imgSrc}
              alt={slide.title}
              sx={{
                height: 'calc(100vh - var(--navbar-height))',
                objectFit: 'cover',
                width: '100%',
                borderRadius: '10px',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
              }}
            >
              <Typography variant="h3"  sx={{ fontWeight: 'bold'}}>
                {slide.title}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {slide.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderComp;
