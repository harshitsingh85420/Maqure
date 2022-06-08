import React from 'react'
import {Carousel,Button} from 'react-bootstrap'
import "./CSS/Banner.css"
function Banner() {
  return (
    <Carousel className="banner">
    <Carousel.Item>
  
      <Carousel.Caption>
        <h1>India's largest marketplace for speciality chemicals and dye intermediates</h1>
        <p className='my-4'>For the first time ever, you can search company samples quote and purchase products from any supplier-<b>all in one place</b></p>

        <div className="text-center my-md-5"> <Button className="primary my-md-5" size="lg">
        <b>Get Best Quotes</b>
    </Button>{' '}</div>
      </Carousel.Caption>
      <img
        className="d-block w-100"
        src="/Images/banner1.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/Images/banner2.jpg"
        alt="Second slide"
      />
       <Carousel.Caption>
        <h1>India's largest marketplace for speciality chemicals and dye intermediates</h1>
        <p className='my-4'>For the first time ever, you can search company samples quote and purchase products from any supplier-<b>all in one place</b></p>
        <div className="text-center my-md-5"> <Button className="primary my-md-5 " size="lg">
        <b>Get Best Quotes</b>
    </Button>{' '}</div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/Images/banner3.jpg"
        alt="Third slide"
      />
  
  <Carousel.Caption>
        <h1>India's largest marketplace for speciality chemicals and dye intermediates</h1>
        <p className='my-4'>For the first time ever, you can search company samples quote and purchase products from any supplier-<b>all in one place</b></p>
       <div className="text-center my-md-5"> <Button className="primary my-md-5 " size="lg">
      <b>Get Best Quotes</b>
    </Button>{' '}</div>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/Images/banner4.jpg"
        alt="Third slide"
      />
  
  <Carousel.Caption>
        <h1>India's largest marketplace for speciality chemicals and dye intermediates</h1>
        <p className='my-4'>For the first time ever, you can search company samples quote and purchase products from any supplier-<b>all in one place</b></p>
       <div className="text-center my-md-5"> <Button className="primary my-md-5 " size="lg">
      <b>Get Best Quotes</b>
    </Button>{' '}</div>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/Images/banner5.jpg"
        alt="Third slide"
      />
  
  <Carousel.Caption>
        <h1>India's largest marketplace for speciality chemicals and dye intermediates</h1>
        <p className='my-4'>For the first time ever, you can search company samples quote and purchase products from any supplier-<b>all in one place</b></p>
       <div className="text-center my-md-5"> <Button className="primary my-md-5 " size="lg">
      <b>Get Best Quotes</b>
    </Button>{' '}</div>

      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  )
}

export default Banner