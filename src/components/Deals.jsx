import React from 'react'
import './CSS/Footer.css'
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
      center;
  background-size: cover;
  display: flex;
  padding-top: 85px;
  padding-left: 60px;
  padding-bottom: 100px;
`;
const Wrapper = styled.div`
  padding-top: 30px;
  background-color: white;
  padding-left: 60px;
  padding-right: 60px;
  border: 1px solid var(--cultured);
  border-radius: 10px;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  
`;

const Input = styled.input`
  flex: 1;
  margin: 10px 0;
  padding: 5px;
  font-size: 15px;
`;

const Label = styled.label`
    font-size: 15px;
`;
const Button = styled.button`
  border: none;
  width: 100%;
  padding: 5px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
 
  align-items: center;
`;

const Deals = () => {
  return (
    <div class="deals-demands">
    <Container>
      <Wrapper>
        <Title>Tell us what you need</Title>
        <Form>
          <Label>Enter the product you need</Label>
          <Input placeholder="Enter your product"/>
          <Label>Mobile number</Label>
          <Input placeholder="Mobile number"/>
          <Label>Name</Label>
          <Input placeholder="Name"/>
          <Label>Quantity</Label>
          <Input placeholder="Quantity"/>
          <Label>Briefly describe your requirement</Label>
          <Input placeholder="Additional details"/>
          <Button>Submit Requirement</Button>
        </Form>
      </Wrapper>
    </Container>
  
  
  <div class="product-featured aos-init aos-animate" data-aos="fade-up">

            <h2 class="title">Deal of the day</h2>

            <div class="showcase-wrapper has-scrollbar">

              <div class="showcase-container">

                <div class="showcase">
                  
                  <div class="showcase-banner">
                    <img src="Images/shampoo.jpg" alt="shampoo, conditioner &amp; facewash packs" class="showcase-img"/>
                  </div>

                  <div class="showcase-content">
                    
                    <div class="showcase-rating">
                      <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                      <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                      <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                      <ion-icon name="star-outline" role="img" class="md hydrated" aria-label="star outline"></ion-icon>
                      <ion-icon name="star-outline" role="img" class="md hydrated" aria-label="star outline"></ion-icon>
                    </div>

                    <a href="#">
                      <h3 class="showcase-title">BEST QUALITY PASHMINA YARN</h3>
                    </a>

                    <p class="showcase-desc">
                      We are amongst the reputed organization, Highly engaged in offering an optimum quality range of Pashmina yarn
                    </p>

                    <div class="price-box">
                      <p class="price">₹ 200/Kg</p>

                      <del>₹ 250/Kg</del>
                    </div>

                    <button class="add-cart-btn">add to cart</button>

                    <div class="showcase-status">
                      


                    </div>

                    <div class="countdown-box">

                      <p class="countdown-desc">
                        Hurry Up! Offer ends in:
                      </p>

                      <div class="countdown">

                        <div class="countdown-content">

                          <p class="display-number">4</p>

                          <p class="display-text">Days</p>

                        </div>

                        <div class="countdown-content">
                          <p class="display-number">21</p>
                          <p class="display-text">Hours</p>
                        </div>

                        <div class="countdown-content">
                          <p class="display-number">59</p>
                          <p class="display-text">Min</p>
                        </div>

                        <div class="countdown-content">
                          <p class="display-number">00</p>
                          <p class="display-text">Sec</p>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div class="showcase-container">
              
                <div class="showcase">
              
                  <div class="showcase-banner">
                    <img src="Images/jewellery-1.jpg" alt="Rose Gold diamonds Earring" class="showcase-img" />
                  </div>
              
                  <div class="showcase-content">
              
                    <div class="showcase-rating">
                      <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                      <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                      <ion-icon name="star" role="img" class="md hydrated" aria-label="star"></ion-icon>
                      <ion-icon name="star-outline" role="img" class="md hydrated" aria-label="star outline"></ion-icon>
                      <ion-icon name="star-outline" role="img" class="md hydrated" aria-label="star outline"></ion-icon>
                    </div>
              
                    <h3 class="showcase-title">
                      <a href="#" class="showcase-title">Jacquaed Acide Dyes - 1/2oz / 14.17gm Bottle</a>
                    </h3>
              
                    <p class="showcase-desc">
                      Best fabric dyes: commonly known as Jacquard acid dyes
                    </p>
              
                    <div class="price-box">
                      <p class="price">₹ 450Rs/20gm</p>
                      <del>₹ 500Rs/20gm</del>
                    </div>
              
                    <button class="add-cart-btn">add to cart</button>
              
                    <div class="showcase-status">
                    </div>
              
                    <div class="countdown-box">
              
                      <p class="countdown-desc">Hurry Up! Offer ends in:</p>
              
                      <div class="countdown">
                        <div class="countdown-content">
                          <p class="display-number">2</p>
                          <p class="display-text">Days</p>
                        </div>
              
                        <div class="countdown-content">
                          <p class="display-number">13</p>
                          <p class="display-text">Hours</p>
                        </div>
              
                        <div class="countdown-content">
                          <p class="display-number">39</p>
                          <p class="display-text">Min</p>
                        </div>
              
                        <div class="countdown-content">
                          <p class="display-number">24</p>
                          <p class="display-text">Sec</p>
                        </div>
                      </div>
              
                    </div>
              
                  </div>
              
                </div>
              
              </div>

            </div>

          </div>
          </div>
  )
}

export default Deals;
