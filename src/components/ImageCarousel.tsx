import { Carousel } from '@mantine/carousel';
import { PokemonProperties } from '../interfaces';
import { Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ImageCarousel = ({ thumbnail, shinyThumbnail }: PokemonProperties) => {
  const [initialSlide, setInitialSlide] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    setInitialSlide(0);
  }, [pathname]);
  console.log(initialSlide);
  return (
    <Center>
      <Carousel loop className="caroussel" initialSlide={initialSlide}>
        <Carousel.Slide className="pkmImgBox">
          <img src={thumbnail} className="pkmImg" />
          <div>Regular</div>
        </Carousel.Slide>
        {shinyThumbnail ? (
          <Carousel.Slide className="pkmImgBox">
            <img src={shinyThumbnail} className="pkmImg" />
            <div>Shiny</div>
          </Carousel.Slide>
        ) : null}
      </Carousel>
    </Center>
  );
};

export default ImageCarousel;
