import React from 'react';
import './Carousel.css';
import { Carousel } from 'react-bootstrap';

const CarouselSlide = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img width={1300} height={500} alt="900x500" src="http://forum.azyrusthemes.com/images/slide.jpg"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1300} height={500} alt="900x500" src="http://forum.azyrusthemes.com/images/slide.jpg"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1300} height={500} alt="900x500" src="http://forum.azyrusthemes.com/images/slide.jpg"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default CarouselSlide;