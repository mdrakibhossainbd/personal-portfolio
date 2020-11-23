import React from 'react';
import { Carousel } from 'react-bootstrap';
import image2 from '../../assets/img/carousal/w7.jpg';
import image3 from '../../assets/img/carousal/w3.jpg';
import image4 from '../../assets/img/carousal/w2.jpg';
import ScrollDownPart from '../ScrollDownPart/ScrollDownPart';
import './CarouselPart.css';



const CarouselPart = () => {
    return (
      <>
        <Carousel controls={false} indicators interval={2500} pause={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={image4}
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={image2}
              alt="Second slide"
            />

            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 custom-img"
              src={image3}
              alt="Third slide"
            />

          </Carousel.Item>
      </Carousel>
      <ScrollDownPart />
    </>
  );
};

export default CarouselPart;