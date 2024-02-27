import { Carousel } from '@mantine/carousel';
import { PokemonProperties } from '../interfaces';
import { Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import carouselStyles from './styles/Carousel.module.css';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const ImageCarousel = ({ thumbnail, shinyThumbnail }: PokemonProperties) => {
  const [initialSlide, setInitialSlide] = useState(0);
  const { pathname } = useLocation();
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  useEffect(() => {
    setInitialSlide(0);
  }, [pathname]);
  return (
    <Center>
      <Carousel loop className={carouselStyles.caroussel} initialSlide={initialSlide} plugins={[autoplay.current]}>
        <Carousel.Slide className={carouselStyles.pkmImgBox}>
          <img src={thumbnail} className={carouselStyles.pkmImg} />
          <div>Regular</div>
        </Carousel.Slide>
        {shinyThumbnail ? (
          <Carousel.Slide className={carouselStyles.pkmImgBox}>
            <img src={shinyThumbnail} className={carouselStyles.pkmImg} />
            <div>Shiny</div>
          </Carousel.Slide>
        ) : null}
      </Carousel>
    </Center>
  );
};

export default ImageCarousel;
