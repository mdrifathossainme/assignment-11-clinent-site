import React from 'react';
import { Carousel } from 'react-bootstrap';// requires a loader
import './HomeBanner.css'
const HomeBanner = () => {
    return (
        <div>
 <Carousel fade interval="3000" className='carousle' >
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/X3kKgC5/slidewhow-1-28a076ce-a94b-473a-a252-f8d02d9b4435-2048x.webp"
      alt="First slide"
    />
    <Carousel.Caption className='caption'>
      <h1>Take It Anywhere, <br /> Film In Any Condition</h1>
      <h4>Flying in The Clouds</h4>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      <button>More Details</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/GdbFNf2/slidewhow-2-d323ad67-f993-4f75-83eb-dbd055538402-2048x.webp"
      alt="Second slide"
    />

    <Carousel.Caption className='caption'>
        <h1>Integrated Vinova Camera <br /> High-Capacity Rechargeable</h1>
        <h4>Transmission Technology</h4>
      <p> Display recent reviews </p>
      <button>More Details</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default HomeBanner;