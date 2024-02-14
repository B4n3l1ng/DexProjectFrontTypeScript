import { Carousel } from '@mantine/carousel';
import PokemonProperties from '../interfaces';
import { Center } from '@mantine/core';

const ImageCarousel = ({ thumbnail, shinyThumbnail }: PokemonProperties) => {
  return (
    <Center>
      <Carousel loop className="caroussel">
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
