import React from 'react'
import './CSS/Footer.css'

const Testimonials = () => {
  return (
    <div>

      <div class="container">

        <div class="testimonials-box aos-init aos-animate" data-aos="fade-right">

          <div class="testimonial">

            <h2 class="title">testimonial</h2>

            <div class="testimonial-card">

              <img src="Images/testimonial-1.jpg" alt="alan doe" class="testimonial-banner" width="80" height="80" />

              <p class="testimonial-name">Harshali Jain</p>

              <p class="testimonial-title">CEO &amp; Founder Invision</p>

              <img src="Images/icons/quotes.svg" alt="quotation" class="quotation-img" width="26" />

              <p class="testimonial-desc">
              MAQURE is especially helping us with newer, smaller but up-and-coming suppliers that are useful to have on our radar especially in the field of Sustainability.
              </p>

            </div>

          </div>

          <div class="cta-container">

            <img src="Images/cta-banner.jpg" alt="summer collection" class="cta-banner" />

            <a href="#" class="cta-content">

              <p class="discount">100% Discount</p>

              <h2 class="cta-title">ZERO fees for product listing</h2>


              <button class="cta-btn">JOIN NOW</button>

            </a>

          </div>



          <div class="service aos-init" data-aos="fade-left">

            <h2 class="title">Our Services</h2>

            <div class="service-container">

              <a href="#" class="service-item">

                <div class="service-icon">
                  <ion-icon name="boat-outline" role="img" class="md hydrated" aria-label="boat outline"></ion-icon>
                </div>

                <div class="service-content">

                  <h3 class="service-title">On-Door Delivery</h3>
                  <p class="service-desc">We Deliver anywhere across the country</p>

                </div>

              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="rocket-outline" role="img" class="md hydrated" aria-label="rocket outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">10x suppliers</h3>
                  <p class="service-desc">Get access to 10x suppliers throught the world</p>
              
                </div>
              
              </a>

              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="call-outline" role="img" class="md hydrated" aria-label="call outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Best Online Support</h3>
                  <p class="service-desc">Hours: 24x7</p>
              
                </div>
              
              </a>


              <a href="#" class="service-item">
              
                <div class="service-icon">
                  <ion-icon name="ticket-outline" role="img" class="md hydrated" aria-label="ticket outline"></ion-icon>
                </div>
              
                <div class="service-content">
              
                  <h3 class="service-title">Get Financial Help</h3>
                  <p class="service-desc">Get financial help based on your profile</p>
              
                </div>
              
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Testimonials

