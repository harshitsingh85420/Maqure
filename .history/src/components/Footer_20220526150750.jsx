import React from 'react'
import './CSS/Footer.css';
import imageSrc from './Images/banner-1.'

function Footer() {
  return (
    <>
<div className="footer">
<div className="footer-category">

<div className="container">

  <h2 className="footer-category-title">Directory</h2>

  <div className="footer-category-box">

    <h3 className="category-box-title">Texttle:</h3>

    <a href="#" className="footer-category-link">Yarn</a>
    <a href="#" className="footer-category-link">Silk</a>
    <a href="#" className="footer-category-link">Cotton</a>
    <a href="#" className="footer-category-link">Wool</a>
    <a href="#" className="footer-category-link">Nylon</a>
  </div>

  <div className="footer-category-box">
    <h3 className="category-box-title">Dyes :</h3>
  
    <a href="#" className="footer-category-link">Acid Dyes</a>
    <a href="#" className="footer-category-link">Nylon Dyes</a>
    <a href="#" className="footer-category-link">Indigo</a>
    <a href="#" className="footer-category-link">Natural Dyes</a>
    <a href="#" className="footer-category-link">Disperse Dyes</a>
    <a href="#" className="footer-category-link"></a> 
  </div>

  
</div>

</div>

<div className="footer-nav">

<div className="container">

  
  <ul className="footer-nav-list">
  
    <li className="footer-nav-item">
      <h2 className="nav-title">Products</h2>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Prices drop</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">New products</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Best sales</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Contact us</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Sitemap</a>
    </li>
  
  </ul>

  <ul className="footer-nav-list">
  
    <li className="footer-nav-item">
      <h2 className="nav-title">Our Company</h2>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Delivery</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Legal Notice</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Terms and conditions</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">About us</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Secure payment</a>
    </li>
  
  </ul>

  <ul className="footer-nav-list">
  
    <li className="footer-nav-item">
      <h2 className="nav-title">Services</h2>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Prices drop</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">New products</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Best sales</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Contact us</a>
    </li>
  
    <li className="footer-nav-item">
      <a href="#" className="footer-nav-link">Sitemap</a>
    </li>
  
  </ul>

  <ul className="footer-nav-list">

    <li className="footer-nav-item">
      <h2 className="nav-title">Contact</h2>
    </li>

    <li className="footer-nav-item flex">
      <div className="icon-box">
        <ion-icon name="location-outline"></ion-icon>
      </div>

      <address className="content">
        270, Cauvery, IIT-Madras,
        Chennai, Tamil-Nadu,
        600036

      </address>
    </li>

    <li className="footer-nav-item flex">
      <div className="icon-box">
        <ion-icon name="call-outline"></ion-icon>
      </div>

      <a href="tel:+607936-8058" className="footer-nav-link">+91 9772195021</a>
    </li>

    <li className="footer-nav-item flex">
      <div className="icon-box">
        <ion-icon name="mail-outline"></ion-icon>
      </div>

      <a href="mailto:example@gmail.com" className="footer-nav-link">maqure@gmail.com</a>
    </li>

  </ul>

  <ul className="footer-nav-list">

    <li className="footer-nav-item">
      <h2 className="nav-title">Follow Us</h2>
    </li>

    <li>
      <ul className="social-link">

        <li className="footer-nav-item">
          <a href="#" className="footer-nav-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li className="footer-nav-item">
          <a href="#" className="footer-nav-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li className="footer-nav-item">
          <a href="#" className="footer-nav-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>

        <li className="footer-nav-item">
          <a href="#" className="footer-nav-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>

      </ul>
    </li>

  </ul>

</div>

</div>

<div className="footer-bottom">

<div className="container">

  <img src="./Images/payment.png" alt="payment method" className="payment-img"/>

  <p className="copyright">
    Copyright &copy; <a href="#">Maqure</a> all rights reserved.
  </p>

</div>

</div>
</div>
    </>
  )
}

export default Footer